import logo from "./logo.svg";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Layout() {
  let resolved = useResolvedPath("/");
  let match = useMatch({ path: resolved.pathname, end: true });
  let [open, setOpen] = useState(false);
  return (
    <div className="home">
      {/*  <aside className="fixed-side pt-[335px]">
        <div className="-rotate-90 border-t border-black origin-top-left">
          <a className="text-brand-blue" href="mailto:info@blocverse.com">Get In Touch info@blocverse.com</a>
        </div>
      </aside> */}
      <section className="xl:mx-20">
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
                <a onClick={() => (setOpen(false))} href="/#bloc-labs">Bloc-Labs</a>
              </li>
              <li>
                <a href="https://blog.blocverse.com">Bloc-Blog</a>
              </li>
              <li>
                <a href="#teachables">Bloc-Learn</a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="btn lg:text-xl xl:text-2xl nav-btn"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
