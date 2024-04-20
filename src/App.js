import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";

function App() {
  const information = {
    nomTravel: "Safe Travels",
    emailTravel: "safetravels@gmail.com",
  };
  return (
    <div id="page">
      <Menu travel={information} />
      <Content />
    </div>
  );
}

export default App;
