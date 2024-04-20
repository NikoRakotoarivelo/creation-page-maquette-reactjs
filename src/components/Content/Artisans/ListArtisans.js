function ListArtisans(listes){
   const artisans = listes.liste;
   return(
      <>
      { artisans.map((artisan, index) => (
      <div key={index}>
        <div className="content-table-positionnement">
          <tr>
            <td className="content-table-contenu-information">
              <div className="content-table-contenu-information-image">
                <img
                  className="content-table-information-image"
                  alt=""
                  src={artisan.image}
                />
              </div>
              <div className="content-table-information">
                <p className="information-name">{artisan.name}</p>
                <p className="information-email">{artisan.email}</p>
              </div>
            </td>
            <td className="content-table-contenu-lieu">
              <span className="information-lieu">{artisan.lieu}</span>
            </td>
            <td className="content-table-contenu-total-participant">
              <span className="information-total-participant">{artisan.total_participation}</span>
            </td>
          </tr>
        </div>
        { artisan.id!==3 && <div className="content-style-global">
          <div className="content-style-left"></div>
          <div className="content-style-right"></div>
          <span className="content-style-lines">
            --------------------------------------
          </span>
        </div>
}
      </div>
      ))}</>
   );
}
export default ListArtisans;