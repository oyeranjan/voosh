import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style1.css";
import HomeView from "./views/HomeView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Navbar />
       <HomeView />
       <Footer />
    </div>
  );
}

export default App
