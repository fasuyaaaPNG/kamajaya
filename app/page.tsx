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
          <li><a className="daftar" href="#daftar">Daftar</a></li>
        </ul>
      </div>
    </nav>

    <div className="home-content" id="home-page">
      <div className="name">
        <div>
          <img src="/login/Ellipse 1.svg" className="circle1"></img>
        </div>
        <h1>Ekspresikan gerak, ekspresikan &nbsp; &nbsp; dirimu</h1>
        <p>Ayo menjadi bagian dari komunitas kami!</p>
        <a href="" className="regist">
          Mulai
        </a>
        <div>
          <img src="/login/Ellipse 2.png" className="circle2"></img>
        </div>
        <div className="sejarah" id="tentang">
          <div>
            <h1 className="sejarah1 sejarahJudul">Sejarah <img src="/login/curve.svg" className="curve1"></img></h1>
          </div>
          <div>
            <h2 className="sejarah1">Kamajayaratih merupakan komunitas tari di SMK Negeri 7 Semarang. Pada masa sebelum tahun 2017, aktivitas seni tari di lingkungan tersebut masih berkutat pada momen-momen spesifik, terutama sebelum acara wisuda dimana tarian gambyong menjadi sorotan utama.  </h2> <br></br>
            <h2 className="sejarah1">Pada tahun 2017, semangat tersebut menggeliat menjadi sebuah inisiatif yang lebih terstruktur dan berkesinambungan. Dari kolaborasi mereka lahir sebuah komunitas yang diberi nama Kamajayaratih. Awalnya, Kamajayaratih masih berupa komunitas tanpa struktur organisasi yang jelas, namun semangat dan keinginan untuk terus berkembang dalam seni tari menjadi pendorong utama.</h2>
          </div>
      </div>
      </div>
    </div>



</header>
</body> 
  )
}
