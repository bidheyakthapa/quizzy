import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-[#4A90E2] text-white flex justify-between items-center p-3 px-4 md:px-12 overflow-hidden">
      <img src="assets/logo.svg" alt="Logo" className="relative z-20 h-10" />

      <ul className="flex gap-8 items-center">
        {[
          { path: "/", name: "Home" },
          { path: "/dashboard", name: "Dashboard" },
          { path: "/quiz", name: "Take Quiz" },
          { path: "/create", name: "Create Quiz" },
        ].map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-semibold py-2 ${
                  isActive ? "underline underline-offset-[4px]" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="bg-[#1974DE] hover:bg-orange-600 text-white px-6 py-2 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 font-semibold cursor-pointer">
        LogIn
      </button>
    </div>
  );
}

export default Nav;
