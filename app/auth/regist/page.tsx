"use client"

import { useState } from "react";
import supabase from "../../server/supabaseClient";
import "./styleRegis.css"
import { setCookie } from "nookies";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function encryptEmail(email: string): string {
        const encryptedEmail = Buffer.from(email).toString('base64');
        return encryptedEmail.split('').reverse().join('');
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const encryptedEmail = encryptEmail(email);
        const { data, error } = await supabase
            .from('users')
            .insert([{ email, password }]);
        const { error: error_email_daftar } = await supabase 
            .from('pendaftaran')
            .insert([{email_pendaftar: email}])
        
        if (error) {
            console.error(error);
            const errorContainer = document.getElementById('error');
            if (errorContainer) {
                errorContainer.classList.add('error-show');
            }
            } else {
            setCookie(null, 'is_login', encryptedEmail, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            window.location.href = '/main';
            console.log(data)
        }
    };

    return (
        <>
           <div className="container">
                <div className="content">
                    <div className="text">
                        <p>
                            Create your account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <input type="email" className="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" className="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="submit">
                            <button className="btn login">
                                Regis
                            </button>
                        </div>
                        <div className="continue">
                            <img src="/login/google.png" alt="" className="google" />
                            <button className="btn cgoogle">
                                Continue with Google
                            </button>
                        </div>
                    </form>
                </div>
           </div>
        </>
    )
}