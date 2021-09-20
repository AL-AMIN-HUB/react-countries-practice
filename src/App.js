import "./App.css";
import Counties from "./components/Countries/Counties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Counties></Counties>
      <Footer></Footer>
    </div>
  );
}

export default App;
