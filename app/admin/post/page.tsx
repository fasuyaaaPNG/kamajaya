"use client";
import { useState } from "react";
import "./style.css";
import supabase from "../../server/supabaseClient";

export default function Post() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [newsContent, setNewsContent] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    function decryptEmail(encryptedEmail: string): string {
        const reversedEncryptedEmail = encryptedEmail.split('').reverse().join('');
        const originalEmail = Buffer.from(reversedEncryptedEmail, 'base64').toString();
        return originalEmail;
    }

    const handleLogout = () => {
        document.cookie = 'is_admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/auth/login';
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!selectedFile) return alert("Please select an image.");

        // Upload the image to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('berita')
            .upload(`public/${selectedFile.name}`, selectedFile);

        if (uploadError) {
            console.error('Error uploading file:', uploadError);
            return alert('Error uploading file');
        }

        // Construct the public URL for the uploaded image
        const { data: publicURL } = supabase.storage
            .from('berita')
            .getPublicUrl(`public/${selectedFile.name}`);

        if (!publicURL) {
            return alert('Error retrieving public URL for the uploaded file');
        }

        // Insert the news content and image URL into the berita table
        const { data: insertData, error: insertError } = await supabase
            .from('berita')
            .insert([{ isi: newsContent, thumbnail: publicURL }]);

        if (insertError) {
            console.error('Error inserting data:', insertError);
            return alert('Error inserting data');
        }

        alert('News content and image uploaded successfully');
        // Optionally reset the form
        setSelectedImage(null);
        setNewsContent('');
        setSelectedFile(null);
    };

    return (
        <>
            <div className="header">
                <img src="/admin/logoheader.png" alt="Logo" className="logoHeader" />
                <button onClick={handleLogout} className="logout">
                    Keluar
                </button>
            </div>
            <form className="content" onSubmit={handleFormSubmit}>
                <label htmlFor="foto" className="labelContent1">
                    <div 
                        className="content1" 
                        style={{ 
                            backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="isiContent1">
                            {!selectedImage && (
                                <>
                                    <img src="/admin/fotoContent1.png" alt="Default" className="fotoContent1" />
                                    <p className="textContent1">
                                        Tambah gambar
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </label>
                <input id="foto" type="file" className="gambarFoto" name="" onChange={handleImageChange} />
                <textarea 
                    id="isiBerita" 
                    className="isiBerita" 
                    placeholder="Tulis keterangan di sini" 
                    value={newsContent} 
                    onChange={(e) => setNewsContent(e.target.value)}
                ></textarea>
                <button className="kirim" type="submit">
                    Kirim
                </button>
            </form>
        </>
    );
}
