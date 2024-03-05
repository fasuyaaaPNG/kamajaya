import "./page.module.css"

export default function Home() {
  return (
      
<header className="header">
    <nav className="navbar">
      <div className="navbar-container container">
        <div>
          <h1 className="navbar-brand">Roronoa Zoro</h1>
        </div>
        <ul className="menu-items">
          <li><a href="#about">About</a></li>
          <li><a href="#my-works">Profile</a></li>
          <li><a href="#contact-me">Contact</a></li>
        </ul>
      </div>
    </nav>
</header>  
  )
}
