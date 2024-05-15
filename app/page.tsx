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
          <li><a href="#home-page">Beranda</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a className="daftar" href="/auth/regist">Daftar</a></li>
        </ul>
      </div>
    </nav>

    <div className="home-content" id="home-page">
      <div className="name">

          <img src="/login/Ellipse 1.svg" className="circle1"></img>
        <h1>Ekspresikan gerak, ekspresikan &nbsp; &nbsp; dirimu</h1>
        <p className="ayo">Ayo menjadi bagian dari komunitas kami!</p>
        <a href="/auth/login" className="regist">
          Mulai
        </a>
        <div>
          <img src="/login/Ellipse 2.png" className="circle2"></img>
        </div>
        <div className="sejarah" id="tentang">
          <div>
            <h1 className="sejarah1 sejarahJudul"><i>Sejarah</i> <img src="/login/curve.svg" className="curve1"></img></h1>
          </div>
          <div>
            <h2 className="sejarah1">Kamajayaratih merupakan komunitas tari di SMK Negeri 7 Semarang. Pada masa sebelum tahun 2017, aktivitas seni tari di lingkungan tersebut masih berkutat pada momen-momen spesifik, terutama sebelum acara wisuda dimana tarian gambyong menjadi sorotan utama.  </h2> <br></br>
            <h2 className="sejarah1">Pada tahun 2017, semangat tersebut menjadi sebuah inisiatif yang lebih terstruktur. Dari kolaborasi mereka lahir sebuah komunitas yang diberi nama Kamajayaratih. </h2> <br></br>

            <h2 className="sejarah1">Kamajayaratih tidak berjalan sendiri. Mereka mulai berkolaborasi dengan berbagai pihak, termasuk Steen. Nama Kamajayaratih diambil dari tokoh pewayangan, Kamajaya-Kamaratih, melambangkan semangat berkarya, berkembang, dan berkolaborasi.
            <br></br> <br></br>
            Sejak berdirinya, Kamajayaratih bukan hanya komunitas seni tari, tetapi juga wadah bagi individu dengan minat serupa untuk belajar, berkarya, dan tumbuh bersama. Dengan semangat kebersamaan dan dedikasi, Kamajayaratih terus maju sebagai pelaku seni tari yang berpengaruh. </h2>
          </div>
          <div>
          <img src="/login/Ellipse 3.svg" className="circle3"></img>
        </div>
      </div>
      <div className="dokumentasi">
        <p className="dokumentasiJudul">
          Dokumentasi<br /><span className="dokumentasiJudulEvent">Event</span>
        </p>
        <img src="/landing/foto1.png" alt="" className="fotoDokumentasi" />
        <h2 className="textDokumentasi">
          "Tari Gambyong Pareanom"<br /><br />Karya gubahan oleh S. Ngaliman Condropangrawit<br/><br />Gambyong merupakan salah satu bentuk tarian Jawa klasik yang berasal mula dari wilayah Surakarta dan biasanya dibawakan untuk pertunjukan atau menyambut tamu.
        </h2>
        <img src="/landing/foto2.png" alt="" className="fotoDokumentasi" />
        <h2 className="textDokumentasi">
          “Tari Geol Denok”<br /><br />Karya tari Geol Denok merupakan karya tari menceritakan tentang wanita muda atau remaja atau anak di kota Semarang tarian ini mencerminkan kelincahan para wanita atau denok yang sedang beranjak dewasa. Dalam rangka pagelaran “BRAMASWARA 2022” SMKN 7 SEMARANG
        </h2>
        <img src="/landing/foto3.png" alt="" className="fotoDokumentasi" />
        <h2 className="textDokumentasi">
          “Tari Warak Dugder”<br/><br />Tari Warak Dugder berasal dari Semarang. Tarian ini bisa dikatakan sebagai perpaduan antara tari tradisonal dengan kreasi baru. Dimodifikasi dari Tari Gambang Semarang oleh seniman tari kenamaan Didik Nini Towok bersama Yoyok Bambang Priyambodo.
        </h2>
      </div>
      <img src="/landing/asset1.png" alt="" className="asset1" />
      <div className="footer">
        <div className="fotoJudul">
          <img src="/landing/foto4.png" alt="" className="fotoFooter" />
          <p className="judulTextFooter">
            Kamajayaratih<br /><span className="judulTextFooterBiasa">Komunitas Tari Pojok Simpang Lima</span>
          </p>
        </div>
        <p className="footerAjakan">
          Ayo bergabung dengan komunitas kami! Berkarya bersama-sama bangun mimpimu 
        </p>
        <a href="" className="gabungFooter">
          Gabung sekarang
        </a>
        <img src="/landing/asset2.png" alt="" className="asset2" />
      </div>
    </div>
  </div>
</header>
</body> 
  )
}
