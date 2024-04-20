function Header() {
  return (
    <div id="nav">
      <div id="nav-en-tete">
        <p className="nav-en-tete-p">Hi Safe Travels</p>
        <h3 className="nav-en-tete-h3">Bienvenue sur votre dashboard</h3>
      </div>
      <div id="nav-recherche">
        <div id="div-recherche">
          <i className="fa fa-search icon-recherche"></i>
          <input type="text" placeholder="Search" className="input-recherche" />
        </div>
      </div>
    </div>
  );
}
export default Header;
