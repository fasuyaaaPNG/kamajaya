import "./styleRegis.css"

export default function Login() {
    return (
        <>
           <div className="container">
                <div className="content">
                    <div className="text">
                        <p>
                            Create your account
                        </p>
                    </div>
                    <form action="">
                        <div className="input">
                            <input type="email" className="email" placeholder="Email" />
                            <input type="password" className="password" placeholder="Password" />
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