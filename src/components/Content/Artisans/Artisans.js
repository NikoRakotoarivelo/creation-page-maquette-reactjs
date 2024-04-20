import HeaderTitle from "./HeaderTitle";
import ListArtisans from "./ListArtisans";
import TableHeader from "./TableHeader";

function Artisans() {
  const artisans = [
    {
      id: 1,
      name: "Safidy Hanta",
      email: "safidyhanta@gmail.com",
      image: "assets2/niko.png",
      lieu: "Antananarivo",
      total_participation: 150
    },
    {
      id: 2,
      name: "Floyd Miles",
      email: "floydmiles@gmail.com",
      image: "assets2/niko.png",
      lieu: "Antananarivo",
      total_participation: 10
    },
    {
      id: 3,
      name: "Marvin Mackinley",
      email: "marvinmackinley@gmail.com",
      image: "assets2/niko.png",
      lieu: "Antananarivo",
      total_participation: 130
    },
  ];
  return (
    <div id="content-global">
      <HeaderTitle />
      <TableHeader />
      <ListArtisans liste = {artisans} />
  </div>
  );
}
export default Artisans;
