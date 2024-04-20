import ContentGlobalRight from "./ContentGlobal/ContentGlobalRight";
import Artisans from "./Artisans/Artisans";
import Navbar from "./Navbar/Navbar";

function Content() {
  return (
    <div id="content">
      <Navbar />
      <Artisans />
      <ContentGlobalRight />
    </div>
  );
}
export default Content;
