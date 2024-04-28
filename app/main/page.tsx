import "./style.css"

export default function Main() {
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
                    <form action="">
                        <div className="inputBackgroundWhite">
                            <input type="text" placeholder="Nama lengkap" className="inputBW" />
                            <input type="text" placeholder="Kelas" className="inputBW" />
                            <input type="text" placeholder="Alamat" className="inputBW" />
                            <input type="number" placeholder="Nomor telepon" className="inputBW" />
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