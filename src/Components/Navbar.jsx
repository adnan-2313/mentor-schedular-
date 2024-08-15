import { useState } from "react";
import logo from "../Utils/logo.png";

import { NavLink } from "react-router-dom";

const Navbar = ({menuItems}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={`h-[100vh] flex ${
        isHovered ? "w-[18rem]" : "w-[7rem]"
      } transition-all duration-[300ms] shadow-[0px_-2px_10px_rgba(0,0,0,0.2)] flex flex-col p-[20px_10px] font-DMSANS`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center px-[10px]">
        <img src={logo} className="w-[100px] h-[80px]" alt="Logo" />
        {isHovered && (
          <h1 className="text-[2rem] text-blue-500 flex justify-center items-center font-kalam transition-all duration-[300ms]">
            Mentorly
          </h1>
        )}
      </div>
      <div className="w-full">
        <ul className="w-full py-[50px] flex flex-col justify-center items-start gap-2">
          {menuItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              className={({ isActive }) =>
                `w-full p-[15px_25px] relative my-[2px] flex flex-row gap-[3rem] ${
                  isActive ? " text-blue-400" : "hover:bg-blue-200"
                }`
              }
            >
              <li className="flex items-center">
                <span className="text-[1.8rem]">{item.icon}</span>
                {isHovered && (
                  <span className="ml-4 text-[1.2rem] font-[550]">
                    {item.label}
                  </span>
                )}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
