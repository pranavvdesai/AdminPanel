import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import MenuIcon from '@mui/icons-material/Menu';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
export default function Navbar({ fixed,showSidebar, setShowSidebar }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const logout = () => {
    localStorage.removeItem('HH');
    window.location.href = '/';
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-700 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
              >
                {/* <ViewSidebarIcon /> */}
                <ArrowForwardIosSharpIcon />
            {/* <Icon name="menu" size="2xl" color="white" /> */}
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-56" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
                >
                  <CloseSharpIcon />
              {/* <Icon name="close" size="2xl" color="white" /> */}
            </Button>
          </div>
        </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={logout}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Logout</span>
                </button>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}