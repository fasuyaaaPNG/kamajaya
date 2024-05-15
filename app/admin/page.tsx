// Di Admin.tsx
"use client"
import { useState, useEffect } from "react";
import "./style.css";
import supabase from "../server/supabaseClient";

interface Registration {
    terima: boolean;
    nama_lengkap: string;
    email_pendaftar: string;
    kelas: string;
    alamat: string;
    nomor_telepon: string;
}

export default function Admin() {
    
    const [totalRegistrations, setTotalRegistrations] = useState<number>(0);
    const [registrations, setRegistrations] = useState<Registration[]>([]);

    function decryptEmail(encryptedEmail: string): string {
        const reversedEncryptedEmail = encryptedEmail.split('').reverse().join('');
        const originalEmail = Buffer.from(reversedEncryptedEmail, 'base64').toString();
        return originalEmail;
    }

    const fetchRegistrations = async () => {
        const { data: registrationsData, error: registrationsError } = await supabase
            .from('pendaftaran')
            .select('nama_lengkap, email_pendaftar, kelas, alamat, nomor_telepon, terima');

        if (registrationsError) {
            console.error('Error fetching registrations:', registrationsError.message);
            return;
        }

        if (registrationsData) {
            setRegistrations(registrationsData);
            setTotalRegistrations(registrationsData.length);
        }
    };

    const getUserId = async () => {
        const cookies = document.cookie;
        const cookieArray = cookies.split(';');
        const cookieObject: Record<string, string> = {};

        cookieArray.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            cookieObject[name] = decodeURIComponent(value);
        });

        const isLogin = cookieObject['is_admin'];
        const decryptedEmail = isLogin ? decryptEmail(isLogin) : '';

        if (!isLogin || !decryptedEmail) {
            window.location.href = '/auth/login';
            return null;
        }

        const { data, error } = await supabase
            .from('admin')
            .select('id')
            .eq('email', decryptedEmail);

        if (error) {
            console.error('Error fetching user id:', error.message);
            return null;
        }

        if (data.length === 0) {
            console.error('User not found');
            return null;
        }

        return data[0].id;
    };

    const handleAcceptClick = async (index: number) => {
        try {
            const { error } = await supabase
                .from('pendaftaran')
                .update({ terima: true })
                .eq('email_pendaftar', registrations[index].email_pendaftar);

            if (error) {
                // console.error('Error updating registration status:', error.message);
                return;
            }

            const updatedRegistrations = [...registrations];
            updatedRegistrations[index].terima = true;
            setRegistrations(updatedRegistrations);
        } catch (error) {
            // console.error('Error updating registration status:', error.message);
        }
    };

    const handleRejectClick = async (index: number) => {
        try {
            const { error } = await supabase
                .from('pendaftaran')
                .update({ terima: false })
                .eq('email_pendaftar', registrations[index].email_pendaftar);
    
            if (error) {
                // console.error('Error updating registration status:', error.message);
                return;
            }
    
            const updatedRegistrations = [...registrations];
            updatedRegistrations[index].terima = false;
            setRegistrations(updatedRegistrations);
        } catch (error) {
            // console.error('Error updating registration status:', error.message);
        }
    };

    useEffect(() => {
        getUserId();
        fetchRegistrations();
    }, []);

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
                    {totalRegistrations}
                </p>
            </div>
            <div className="content">
                {registrations.map((registration, index) => (
                    <div key={index} className="contentKeterangan">
                        <div className="namaEmail">
                            <p className="nama">
                                {registration.nama_lengkap}
                            </p>
                            <p className="email">
                                {registration.email_pendaftar}
                            </p>
                        </div>
                        <p className="kelas">
                            {registration.kelas}
                        </p>
                        <p className="alamat">
                            {registration.alamat}
                        </p>
                        <p className="telepon">
                            {registration.nomor_telepon}
                        </p>
                        <div className="status">
                            <p className="statusInfo" style={{ backgroundColor: registration.terima === true ? 'green' : registration.terima === false ? 'red' : 'gray' }}>
                                {registration.terima === true ? 'Diterima' : registration.terima === false ? 'Ditolak' : 'Dalam proses'}
                            </p>
                            <div className="statusButton">
                            {registration.terima ? (
                                <img src="/admin/terima.png" alt="" className="terima" />
                            ) : (
                                <img src="/admin/terima.png" alt="" className="terima" onClick={() => handleAcceptClick(index)} />
                            )}
                            <img src="/admin/tolak.png" alt="" className="tolak" onClick={() => handleRejectClick(index)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
