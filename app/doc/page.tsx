"use client"

import { useState, useEffect } from 'react';
import supabase from '../server/supabaseClient';

import "./style.css";

interface Berita {
    id: number;
    thumbnail: string;
    isi: string;
    created_at: string;
}

export default function Doc() {
    const [berita, setBerita] = useState<Berita[]>([]);

    useEffect(() => {
        async function fetchBerita() {
            try {
                const { data, error } = await supabase
                    .from('berita')
                    .select('id, thumbnail, isi, created_at');

                if (error) {
                    throw error;
                }

                if (data) {
                    const modifiedBerita = data.map(item => ({
                        ...item,
                        thumbnail: item.thumbnail.replace('{"publicUrl":"', '').replace('"}', '')
                    }));
                    setBerita(modifiedBerita);
                }
            } catch (error) {
                // console.error('Error fetching berita:', error.message);
            }
        }

        fetchBerita();
    }, []);

    function formatTanggal(dateString: string) {
        const options = { day: '2-digit', month: 'long', year: 'numeric' } as const;
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', options);
    }   

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <div>
                        <img src="/login/kamajayaLogo.svg" alt="" className="imgLogo" />
                    </div>
                    <ul className="menu-items">
                        <li><a href="/">Beranda</a></li>
                        <li><a href="/#tentang">Tentang</a></li>
                        <li><a className="daftar" href="/main">Daftar</a></li>
                    </ul>
                </div>
            </nav>
            <div className="buffer"></div>
            {berita.map(item => (
                <div className="content" key={item.id}>
                    <img loading='lazy' src={item.thumbnail} alt="" className="foto" />
                    <p className="desk">{item.isi}</p>
                    <p className="tanggal">
                        Dibuat pada: <b>{formatTanggal(item.created_at)}</b>
                    </p>
                </div>
            ))}
        </>
    );
}
