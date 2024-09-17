import "./App.css";
import Navbar from "./components/Navbar";
import { getConfigData } from "./data/configReader";
import Social from "./components/Social";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[5rem] px-5 py-5 flex justify-center">
        <div className=" bg-white rounded-xl shadow-lg flex justify-center w-[50rem]">
          <div className="flex flex-col">
              <SiteRoutes />
              <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
