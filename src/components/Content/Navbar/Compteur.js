function Compteur() {
  const date = "10 NOV 2023";
  const reservations = 250;
  const chiffres_affaires = 50.5;

  return (
    <div id="tableau">
      <div id="tableau-1">
        <div id="tableau-content-icon">
          <i className="far fa-calendar" id="tableau-icon"></i>
        </div>
        <div id="tableau-1-content-date">
          <p id="tableau-text-1">Date</p>
          <p id="tableau-text-2">
            {date} &nbsp;
            <span>
              <i className="fa fa-angle-down"></i>
            </span>
          </p>
        </div>
      </div>
      <div id="tableau-3">
        <div id="tableau-content-icon">
          <i className="fas fa-align-right" id="tableau-icon"></i>
        </div>
        <div id="tableau-1-content-date">
          <p id="tableau-text-1">Total de réservation</p>
          <p id="tableau-3-text-2">{reservations}</p>
        </div>
      </div>
      <div id="tableau-2">
        <p id="tableau-2-text-1">Chiffres d'affaires</p>
        <p id="tableau-2-text-2">
          {chiffres_affaires}&nbsp; <i className="fa fa-euro-sign"></i>
        </p>
      </div>
    </div>
  );
}
export default Compteur;
