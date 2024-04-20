function Reservation() {
  const artisans = [
    {
      id: 1,
      name: "Safidy Hanta",
      email: "safidyhanta@gmail.com",
      image: "assets2/niko.png",
    },
    {
      id: 2,
      name: "Rakoto Be",
      email: "rakotobe@gmail.com",
      image: "assets2/niko.png",
    },
    {
      id: 3,
      name: "Floyd Miles",
      email: "floydmiles@gmail.com",
      image: "assets2/niko.png",
    },
    {
      id: 4,
      name: "Marvin Mackinley",
      email: "marvinmackinley@gmail.com",
      image: "assets2/niko.png",
    },
  ];

  return (
    <div id="content-reservation">
      <div className="content-reservation-titre">
        <h4 className="content-reservation-text">
          <br />
          Artisans le plus réservée
        </h4>
      </div>
      <div>
        {artisans.map((artisan, index) => (
          <div className="content-reservation-liste">
            <div className="content-reservation-card-artisans"></div>
            <div className="content-reservation-card-image">
              <img
                alt=""
                src={artisan.image}
                className="content-reservation-image"
              />
            </div>
            <div key={index} className="content-reservation-card-information">
              <p className="content-reservation-text-nom">{artisan.name}</p>
              <p className="content-reservation-text-email">{artisan.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Reservation;
