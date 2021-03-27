import logo from "../images/content/logo.png";
import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function Header({ cart, currentPage }) {
  return (
    <header
      className={`${currentPage !== "details" && "absolute"} w-full z-50 px-4`}
    >
      <div className="container mx-auto py-5">
        <div className="flex flex-stretch items-center">
          <div className="w-56 items-center flex">
            <Link to="/">
              <img
                src={logo}
                alt="Luxspace | Fulfill your house with beautiful furniture"
              />
            </Link>
          </div>
          <div className="w-full"></div>
          <Menu currentPage={currentPage} cart={cart} />
        </div>
      </div>
    </header>
  );
}

export default Header;
