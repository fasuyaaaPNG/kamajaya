    "use client"

import { useState, useEffect } from "react"
import "./style.css"
import supabase from "../server/supabaseClient";

    export default function Main() {
        const [nama, setNama] = useState('');
        const [kelas, setKelas] = useState('');
        const [alamat, setAlamat] = useState('');
        const [email, setEmail] = useState('');
        const [telepon, setTelepon] = useState('');
        
        function decryptEmail(encryptedEmail: string): string {
            const reversedEncryptedEmail = encryptedEmail.split('').reverse().join('');
            const originalEmail = Buffer.from(reversedEncryptedEmail, 'base64').toString();
            return originalEmail;
        }

        const getUserId = async () => {
            const cookies = document.cookie;
            const cookieArray = cookies.split(';');
            const cookieObject: Record<string, string> = {};

            cookieArray.forEach(cookie => {
                const [name, value] = cookie.trim().split('=');
                cookieObject[name] = decodeURIComponent(value);
            });

            const isLogin = cookieObject['is_login'];
            const decryptedEmail = isLogin ? decryptEmail(isLogin) : '';

            if (!isLogin || !decryptedEmail) {
                window.location.href = '/auth/login';
                return null;
            }

            const { data, error } = await supabase
                .from('users')
                .select('id')
                .eq('email', decryptedEmail);

        if (error) {
            // console.error('Error fetching user id:', error.message);
            return null;
        }

        if (data.length === 0) {
            console.error(error);
            return null;
        }

        return data[0].id;
    };  

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('pendaftaran')
            .insert([{ nama_lengkap: nama, kelas: kelas,alamat: alamat, nomor_telepon: telepon}])
            .eq('email', decryptEmail)
        
        if (error) {
            console.error(error);
            const errorContainer = document.getElementById('error');
            if (errorContainer) {
                errorContainer.classList.add('error-show');
            }
        }
    };

    useEffect(() => {
        getUserId();
    }, []);

    return (
        <div className="backgroundDark">
            <img src="/main/lingkaranAtas.png" className="lingkaran1" alt="" />
            <img src="/main/lingkaranAtas2.png" className="lingkaran2" alt="" />
            <img src="/main/lingkaranAtas3.png" className="lingkaran3" alt="" />
            <img src="/main/logo.svg" alt="" className="logo" />
            <div className="judul">
                <p className="judul1">
                    Kamajayaratih
                </p>
                <p className="judul2">
                    Temukan kesenangan dunia tari bersama kami. Ekspresikan gerak, ekspresikan dirimu. 
                    Yuk, gabung sekarang!
                </p>
            </div>
            <div className="backgroundWhite">
                <div className="isiBackgroundWhite">
                    <p className="judulBackgroundWhite">
                        Daftar
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="inputBackgroundWhite">
                            <input type="text" placeholder="Nama lengkap" className="inputBW" value={nama} onChange={(e) => setNama(e.target.value)} required/>
                            <input type="text" placeholder="Kelas" className="inputBW" value={kelas} onChange={(e) => setKelas(e.target.value)} required/>
                            <input type="text" placeholder="Alamat" className="inputBW" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
                            <input type="text" placeholder="Email" className="inputBW" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <input type="number" placeholder="Nomor telepon" className="inputBW" value={telepon} onChange={(e) => setTelepon(e.target.value)} required/>
                            <button type="submit" className="kirim">
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
                <img src="/main/lingkaranBawah.png" className="lingkaran4" alt="" />
            </div>
        </div>
    )
}