function MenuImage(travelInfo) {
  const nomTravel = travelInfo.travelInfo.nom;
  const emailTravel = travelInfo.travelInfo.email;

  return (
    <div id="menu-image">
      <div className="div-menu-image">
        <img alt="" src="assets2/menu.jpg" className="taille-menu-image" />
      </div>
      <div className="div-text-menu-image">
        <p>
          <span className="text-span-premier">
            {nomTravel}
            <br />
          </span>
          <span className="text-span-second">{emailTravel}</span>
        </p>
      </div>
    </div>
  );
}
export default MenuImage;
