import image from "../Utils/HeroImage.jpg";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiReceiptTax } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
const AsideNavbar = () => {
  return (
    <>
      <aside className="left-0 shadow-md flex justify-center pt-[30px] w-[20%] bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 ">
        <div className="flex flex-col gap-5 w-full items-center">
          <div className=" w-full flex flex-col items-center">
            <img
              className="h-[6rem] rounded-full w-[6rem]"
              src={image}
              alt=""
            />
            <span className="flex text-center pt-[5px] font-semibold text-[23px]">Adnan Khan</span>
          </div>
          <div className="flex  w-[60%]">
            <ul className="flex flex-col gap-6 w-full" >
              <li className="flex flex-row bg-[#ff7000] text-white cursor-pointer   py-[5px] rounded-[20px] justify-center  w-full items-center gap-2 font-semibold"><GoHomeFill className="text-[20px] "/>Home</li>
              <li className="flex flex-row hover:bg-gray-200 cursor-pointer py-[5px] rounded-[20px] justify-center items-center gap-2 font-semibold"><HiOutlineClipboardList className="text-[20px]"/>Order</li>
              <li className="flex flex-row hover:bg-gray-200 cursor-pointer  py-[5px] rounded-[20px] justify-center items-center gap-2 font-semibold"><HiReceiptTax className="text-[20px]"/>Bills</li>
              <li className="flex flex-row hover:bg-gray-200 cursor-pointer py-[5px] rounded-[20px] justify-center items-center gap-2 font-semibold"><BiCategory  className="text-[20px]"/>Categories</li>
              <li className="flex flex-row hover:bg-gray-200 cursor-pointer  py-[5px] rounded-[20px] justify-center items-center gap-2 font-semibold"><IoSettingsOutline className="text-[20px]"/>Settings</li>
               
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideNavbar;
