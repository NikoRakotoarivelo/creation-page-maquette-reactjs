import MenuImage from "./MenuImage";
import React from "react";

function Menu(travel) {
  const nom = travel.travel.nomTravel;
  const email = travel.travel.emailTravel;

  return (
    <div id="menu">
      <MenuImage travelInfo={{ nom: nom, email: email }} />

      <div id="container-menu-change">
        <div id="menu-change">
          <div className="icone-place">
            <i className="fa fa-align-justify icon-color-change">
              <span className="text-menu-change">Tableau de bord</span>
            </i>
          </div>
        </div>
      </div>
      <div id="menu-pas-change">
        <div className="top">
          <div className="taille-menu-pas-change">
            <div id="menu-list">
              <i className="fa fa-user-friends icon-color"></i>
              <span className="text">Teams</span>
            </div>
            <div id="menu-list">
              <i className="fa fa-id-card icon-color"></i>
              <span className="text">Payments</span>
            </div>
            <div id="menu-list">
              <i className="fa fa-calendar-check icon-color"></i>
              <span className="text">Attendance</span>
            </div>
            <div id="menu-list">
              <i className="fa fa-cog icon-color"></i>
              <span className="text">Settings</span>
            </div>
          </div>
          <div id="div-boutton-logout">
            <button type="submit" className="boutton-logout">
              <i className="fa fa-door-closed icone-logout"></i>
              <span className="text-logout">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;