function Statistique() {
  const total_artisans_aide = 70;
  const pourcentages_hommes = 40;
  const pourcentages_femmes = 60;

  return (
    <div id="content-statistique">
      <div className="content-statistique-card">
        <br />
        <div className="content-statistique-card-premier">
          <span className="content-mois">
            Mois
            <i className="fa fa-angle-down content-statistique-icone-mois"></i>
          </span>
          <br />
          <span className="content-total-artisans">Total d'artisans aidé</span>
        </div>
        <div className="content-statistique-icone-friend">
          <div className="content-statistique-container-icon-friend">
            <i className="fa fa-user-friends icon-friends"></i>
          </div>
        </div>
        <div className="content-statistique-compteur">
          <div>
            <span className="compteur-statistique">{total_artisans_aide}</span>
            <br />
          </div>
          <div>
            <div className="content-statistique-taille-card">
              <div className="content-statistique-positionnement-card">
                <div className="content-statistique-card-first"></div>
                <div className="content-statistique-card-second"></div>
              </div>
              <div className="content-statistique-card-pourcentage">
                <span className="content-statistique-taille-genre">
                  {pourcentages_hommes}% hommes
                </span>
                <br />
                <span className="content-statistique-taille-genre">
                  {pourcentages_femmes}% femmes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-statistique-chart">
          <div className="chart">
            <div className="center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Statistique;
