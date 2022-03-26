import logo from "./logo.svg";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
export default function Layout() {
  let resolved = useResolvedPath("/");
  let match = useMatch({ path: resolved.pathname, end: true });
  let [open, setOpen] = useState(false);
  return (
    <div className="home">
      <aside className="fixed-side">
        <div className="-rotate-90 pt-56">
          Get In Touch{" "}
          <a href="mailto:info@blocverse.com">info@blocverse.com</a>
        </div>
      </aside>
      <nav className="navbar">
        <div className="flex justify-between gap-x-24 items-center">
          <div className="w-1/3">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <ul className={`nav ${open ? "w-11/12" : "w-11/12"}`}>
            <li className="lg:hidden justify-end flex text-black pb-8">
    
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/what-we-do">What We Do</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="https://blog.blocverse.com">Bloc-Blog</a>
            </li>
            <li>
              <a href="#teachables">Bloc-Learn</a>
            </li>
            <li>
              <Link to="/contact" className="nav-btn">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
