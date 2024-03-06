import "./pageModule.css"

export default function Home() {
  return (
      

<body>     
<header className="header">
    <nav className="navbar">
      <div className="navbar-container container">
        <div>
          <img src="/login/kamajayaLogo.svg" alt="" className="imgLogo" />
        </div>
        <ul className="menu-items">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#daftar">Daftar</a></li>
        </ul>
      </div>
    </nav>

    <div className="home-content" id="home-page">
      <div className="name">
        <div>
          <img src="/login/Ellips 1.svg"></img>
        </div>
        <h1>Ekspresikan gerak, ekspresikan &nbsp; &nbsp; dirimu</h1>
        <p>Ayo menjadi bagian dari komunitas kami!</p>
      </div>
    </div>

</header>
</body> 
  )
}
