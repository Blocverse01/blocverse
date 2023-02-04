import logo from "./logo.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import twitter from "svgs/twitter.png";
import discord from "svgs/discord.svg";
import instagram from "svgs/instagram.svg";
import github from "svgs/GitHub-Mark-Light-120px-plus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Layout() {
  let [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <div className="home">
      {/*  <aside className="fixed-side pt-[335px]">
        <div className="-rotate-90 border-t border-black origin-top-left">
          <a className="text-brand-blue" href="mailto:info@blocverse.com">Get In Touch info@blocverse.com</a>
        </div>
      </aside> */}
      <section className="xl:mx-20 min-h-screen">
        <nav className="navbar">
          <div className="flex justify-between xl:gap-x-14 lg:gap-x-8 items-center">
            <div className="">
              <Link to="/">
                <img src={logo} className="h-[48px] md:h-[68px]" alt="logo" />
              </Link>
            </div>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              <svg
                className="lg:hidden cursor-pointer"
                width="31"
                height="16"
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="31" y2="1" stroke="#2C2C2C" strokeWidth="2" />
                <line y1="8" x2="31" y2="8" stroke="#2C2C2C" strokeWidth="2" />
                <line
                  x1="10"
                  y1="15"
                  x2="31"
                  y2="15"
                  stroke="#2C2C2C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <ul
              onMouseLeave={() => {
                setOpen(false);
              }}
              className={`nav ${open ? "w-11/12" : "w-0"}`}
            >
              <li className="lg:hidden justify-end flex pr-4 pb-8">
                <button
                  className="text-black text-[24px]"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={solid("times")} />
                </button>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/what-we-do">What We Do</Link>
              </li>
              <li>
                <Link onClick={() => setOpen(false)} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.blocverse.com"
                >
                  Bloc-Blog
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="btn lg:text-xl xl:text-2xl nav-btn"
                >
                  Contact Us
                </Link>
              </li>
              <li className="lg:hidden font-normal absolute bottom-[50.36px]">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:info@blocverse.com"
                  className="text-white font-normal mb-[10px]"
                >
                  Email: info@blocverse.com
                </a>
                
                <div>
                  <div className="flex mt-[10.16px] justify-start gap-[24.47px]">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/Blocverse_"
                    >
                      <img src={twitter} alt="blocverse-twitter" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="#instagram">
                      <img src={instagram} alt="blocverse-instagram" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Blocverse01"
                    >
                      <img
                        src={github}
                        className="w-[25px] h-[25px]"
                        alt="blocverse-github"
                      />
                    </a>
                    <a target="_blank" rel="noreferrer" href="#discord">
                      <img src={discord} alt="blocverse-discord" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>
      <footer className="bg-black py-[50px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:mx-20 gap-[35px]">
          <div className="flex flex-col md:gap-[28.58px] md:flex-row">
            <a
              href="mailto:info@blocverse.com"
              className="text-white mb-[10px] md:hidden"
            >
              Email: info@blocverse.com
            </a>
            <div>
            <img
              src={logo}
              alt="logo"
              className="md:h-[82px] hidden md:block"
            />
            
            <div className="flex mt-[10.16px] gap-[24.47px]">
                <h3 className="font-medium text-white lg:mt-[13px] lg:text-[16px] lg:leading-[20.83px]">
                  651N Broad st, suite 201, Middletown, Delarware, Newcastle, 19709
                </h3>
              </div>
            </div>
             
            <div>
              <h3 className="font-medium text-white lg:mt-[13px] lg:text-[16px] lg:leading-[20.83px]">
                (c) 2023 Blocverse All Rights Reserved.
              </h3>
             
              <div className="flex mt-[10.16px] gap-[24.47px]">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Blocverse_"
                >
                  <img src={twitter} alt="blocverse-twitter" />
                </a>
                <a target="_blank" rel="noreferrer" href="#instagram">
                  <img src={instagram} alt="blocverse-instagram" />
                </a>
                <a target="_blank" rel="noreferrer" href="#discord">
                  <img src={discord} alt="blocverse-discord" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Blocverse01"
                >
                  <img
                    src={github}
                    className="w-[25px] h-[25px]"
                    alt="blocverse-github"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex md:justify-end">
            <div>
              <h3 className="lg:text-[16px] mb-[10px] text-white lg:leading-[20.83px]">
                GOT ANY PROJECTS?
              </h3>
              <Link
                to="/contact"
                className="btn h-[52px] text-xl rounded-[8px]"
              >
                Contact Us 👋
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
