import React from "react"
import "./style.css"

export default function Admin() {
    return (
        <>
            <div className="header">
                <img src="/admin/logoheader.png" alt="" className="logoHeader" />
                <button className="logout">
                    Keluar
                </button>
            </div>
            <div className="info">
                <p className="infoText">
                    <b>Semua Pendaftar</b>
                </p>
                <p className="infoNomor">
                    15
                </p>
            </div>
            <div className="content">
                <div className="contentKeterangan">
                    <div className="namaEmail">
                        <p className="nama">
                            Selly Almira Diananda
                        </p>
                        <p className="email">
                            shellyalmira1@gmail.com
                        </p>
                    </div>
                    <p className="kelas">
                        XI KJIJ 1
                    </p>
                    <p className="alamat">
                        Jl. Serdadu No. 278, Semarang Barat
                    </p>
                    <p className="telepon">
                        087666177890
                    </p>
                </div>
                <div className="status">
                    <p className="statusInfo">
                        Dalam proses
                    </p>
                    <div className="statusButton">
                        <img src="/admin/terima.png" alt="" className="terima" />
                        <img src="/admin/tolak.png" alt="" className="tolak" />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="contentKeterangan">
                    <div className="namaEmail">
                        <p className="nama">
                            Selly Almira Diananda
                        </p>
                        <p className="email">
                            shellyalmira1@gmail.com
                        </p>
                    </div>
                    <p className="kelas">
                        XI KJIJ 1
                    </p>
                    <p className="alamat">
                        Jl. Serdadu No. 278, Semarang Barat
                    </p>
                    <p className="telepon">
                        087666177890
                    </p>
                </div>
                <div className="status">
                    <p className="statusInfo">
                        Dalam proses
                    </p>
                    <div className="statusButton">
                        <img src="/admin/terima.png" alt="" className="terima" />
                        <img src="/admin/tolak.png" alt="" className="tolak" />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="contentKeterangan">
                    <div className="namaEmail">
                        <p className="nama">
                            Selly Almira Diananda
                        </p>
                        <p className="email">
                            shellyalmira1@gmail.com
                        </p>
                    </div>
                    <p className="kelas">
                        XI KJIJ 1
                    </p>
                    <p className="alamat">
                        Jl. Serdadu No. 278, Semarang Barat
                    </p>
                    <p className="telepon">
                        087666177890
                    </p>
                </div>
                <div className="status">
                    <p className="statusInfo">
                        Dalam proses
                    </p>
                    <div className="statusButton">
                        <img src="/admin/terima.png" alt="" className="terima" />
                        <img src="/admin/tolak.png" alt="" className="tolak" />
                    </div>
                </div>
            </div>
        </>
    )
}