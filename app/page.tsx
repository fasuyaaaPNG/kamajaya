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
        <h1>Hi, I'm ロロノア・ ゾロ</h1>
        <p>The Strongest Swordsman</p>
      </div>
      <div className="angle-down-icon">
        <a href="#about"><i className="fas fa-angle-down"></i></a>
      </div>
    </div>

</header>
</body> 
  )
}
