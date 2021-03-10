import "./App.css";
import backgroundImg from "./assets/background.jpg";
import GlassCard from "./glasscard";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <GlassCard />
    </div>
  );
}

export default App;
