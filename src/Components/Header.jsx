import { CiSearch } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import image from "../Utils/HeroImage.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const Header = () => {
  return (
    <nav className="flex flex-row justify-between w-full top-0 h-[80px] bg-gray-50 p-4  px-[50px]">
      <div className="ml-[60px] text-[#ff7000] text-[45px] font-extrabold">
        <FaBowlFood />
      </div>
      <form
        className="w-[25%] shadow-inset-custom
      rounded-full pl-[20px] sm:w-1/2 md:w-1/3 bg-transparent outline-none border-none flex items-center"
      >
        <span className="text-[25px] cursor-pointer text-[#ff7000]">
          <CiSearch />
        </span>
        <input
          placeholder="Search for food"
          className="text-gray-500 bg-transparent border-none outline-none flex justify-center w-[90%] ml-[10px]"
        />
      </form>
      <div className="flex  flex-row gap-[1rem] items-center shadow-lg p-[20px] rounded-lg bg-gray-100">
        <div className="text-[20px]">
          <IoIosNotificationsOutline />
        </div>
        <div className="text-[20px]">
          <IoChatbubbleEllipsesOutline />
        </div>
        <div >
          <img className="w-[40px] h-[40px] rounded-[50%]" src={image} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
