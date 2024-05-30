"use client"
import { useState, useEffect } from "react";
import "./style.css"
import { setCookie, parseCookies } from 'nookies';
import supabase from "../../server/supabaseClient";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function encryptEmail(email: string): string {
        const encryptedEmail = Buffer.from(email).toString('base64');
        return encryptedEmail.split('').reverse().join('');
    }

    async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        const { data: adminData, error: adminError } = await supabase
          .from('admin')
          .select('*')
          .eq('email', email)
          .eq('password', password);
    
        if (adminError) {
          console.error('Error retrieving admin data:', adminError.message);
          return;
        }
    
        if (adminData && adminData.length > 0) {
          const encryptedEmail = encryptEmail(email);
          setCookie(null, 'is_admin', encryptedEmail, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
          window.location.href = '/admin'; 
          return;
        }
    
        const { data: usersData, error: usersError } = await supabase
          .from('users')
          .select('*')
          .eq('email', email);
      
        if (usersError) {
          console.error('Error retrieving user data:', usersError.message);
          return;
        }
      
        if (!usersData || usersData.length === 0 || usersData[0].password !== password) {
          console.error('Invalid email or password');
        //   setFormError('Invalid email or password');
          const errorContainer = document.getElementById('error');
          if (errorContainer) {
            errorContainer.classList.add('error-show');
          }
          return;
        }
    
        const userData = usersData[0];
        const encryptedEmail = encryptEmail(email);
        setCookie(null, 'is_login', encryptedEmail, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        window.location.href = '/main';
      }

      useEffect(() => {
        const isLoggedIn = parseCookies().is_login;
        const isLoggedInAdmin = parseCookies().is_admin;
        if (isLoggedIn) {
          window.location.href = '/main';
        } if (isLoggedInAdmin) {
          window.location.href = '/admin'
        }
      }, []);
    return (
        <>
           <div className="container">
                <div className="content">
                    <div className="text">
                        <p>
                            Login to your account
                        </p>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className="input">
                            <input type="email" placeholder="Email" className="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="password" placeholder="Password" className="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </div>
                        <div className="submit">
                            <button className="btn login">
                                Login
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