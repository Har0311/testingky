import kyLogo from "../../assets/ky-logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  let { userInfo, logoutUser } = useContext(AuthContext);
  const location = useLocation();
  const [mobMenu, setMobMenu] = useState(false);

  const handleMenu = () => {
    setMobMenu(!mobMenu);
  };

  const scrollToContactus = () => {
    window.scrollTo({
      top: 3950,
      behavior: "smooth",
    });
  };

  const scrollToambassador = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="z-50 w-[100%] fixed overflow-x-hidden overflow-y-auto">
        <nav className="navbar bg-white w-[100%] m-auto p-3 shadow-2xl lg:p-2 ">
          <div className="flex justify-between">
            <div
              className="md:hidden lg:hidden mx-5 my-auto"
              onClick={handleMenu}
            >
              {!mobMenu ? (
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <FaBars className="cursor-pointer text-black text-2xl" />
                </IconContext.Provider>
              ) : (
                <></>
              )}
              {mobMenu ? (
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <FaArrowLeft className="cursor-pointer text-black text-2xl" />
                </IconContext.Provider>
              ) : (
                <></>
              )}
            </div>

            <div className="m-auto xs:ml-5 md:m-0 lg:m-0">
              <Link to="/">
                <img
                  style={{ width: "13rem" }}
                  className={`text-xl max-w-xs mr-10 md:mr-0  ${
                    isActive("/") ? "text-red-500" : "text-black"
                  }`}
                  src={kyLogo}
                  alt=""
                />
              </Link>
            </div>

            <ul className="hidden md:flex lg:flex justify-around ">
              <li className="my-auto mx-3 md:mx-5 lg:mx-10">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/") ? "text-red-500" : ""
                  }`}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="my-auto mx-3 lg:mx-5">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("") ? "text-red-500" : ""
                  }`}
                  to={""}
                  onClick={scrollToambassador}
                >
                  Ambassador
                </Link>
              </li>
              <li className="my-auto mx-3 lg:mx-5">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/contactus") ? "text-red-500" : ""
                  }`}
                  to={""}
                  onClick={scrollToContactus}
                >
                  Contact
                </Link>
              </li>
              {userInfo && (
                <>
              <li className="my-auto mx-3 lg:mx-5">
                <Link
                  className={`text-black font-[Roboto] text-xl ${
                    isActive("/dashboard") ? "text-red-500" : ""
                  }`}
                  to={"/dashboard"}
                  onClick={scrollToambassador}
                >
                  Dashboard
                </Link>
              </li>
              </>
              )}

              
              
              {userInfo === null && (
                <>
                <li className="my-auto mx-3 lg:mx-5">
                  <Link to={"/login"}>
                    <button className="max-h-[2rem] font-[Roboto]  rounded-full text-black text-xl border-solid border-black border-2 px-6 hover:border-red-700">
                      Login
                    </button>
                  </Link>
                </li>
                </>
              )}
              {userInfo && (
                <>
                <li className="my-auto mx-3 lg:mx-5">
                    <Link to={"/login"} 
                        onClick={() => {
                          // closeNav();
                          logoutUser();
                        }}>
                      <button className="max-h-[2rem] font-[Roboto]  rounded-full text-black text-xl border-solid border-black border-2 px-6 hover:border-red-700">
                        Logout
                      </button>
                    </Link>
                    {/* <Link to="/">
                      <span
                        onClick={() => {
                          // closeNav();
                          logoutUser();
                        }}
                      >
                        Logout
                      </span>
                    </Link> */}
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            {mobMenu ? (
              <ul className="w-full bg-opacity-80 mx-auto p-4 relative top-5 transition-duration-400 ease-in-out md:hidden">
                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/"}
                    onClick={handleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={""}
                    onClick={handleMenu}
                  >
                    Ambassador
                  </Link>
                </li>
                <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/contactus"}
                    onClick={handleMenu}
                  >
                    Contact
                  </Link>
                </li>

            

                {userInfo &&(
                  <li className="my-auto mx-3 text-center py-2">
                  <Link
                    className="text-black font-[Roboto] text-xl"
                    to={"/dashboard"}
                    onClick={handleMenu}
                  >
                    Dashboard
                  </Link>
                </li>

                )}

                {userInfo === null && (
                  <li className="text-center py-2">
                  <Link to={"/login"}>
                    <button
                      className="max-h-[2rem] my-auto font-[Roboto] rounded-full text-black text-xl mx-2 text-center"
                      onClick={handleMenu}
                    >
                      Login
                    </button>
                  </Link>
                </li>
                )}

                {userInfo &&(
                  <li className="text-center py-2">
                  <Link to={"/login"}>
                    <button
                      className="max-h-[2rem] my-auto font-[Roboto] rounded-full text-black text-xl mx-2 text-center"
                      onClick={handleMenu}
                    >
                      Logout
                    </button>
                  </Link>
                </li>

                )}
                
              </ul>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
