import "./App.css";
import OurRoutes from "./OurRoutes/OurRoutes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PopupModal from "./Component/PopupModal/PopupModal";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <PopupModal />
      {/* <h1 className="a1 flex bg-[#000] text-[#fff] justify-center lg:bg-[yellow] lg:text-[red]">
        Hello
      </h1> */}
      <OurRoutes />
      {/* <Link to="/" className="logo-footer">
                <img src={footerLogo} alt="Footer logo" className="logo-footer1" />
              </Link> */}
    </div>
  );
}

export default App;
