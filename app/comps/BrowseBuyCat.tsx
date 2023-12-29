import Square from "../comps/Square";
import { CiHeadphones } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { IoIosPhonePortrait } from "react-icons/io";

const BrowseBuyCat = () => {
    return (
        <div className="ml-[20px] flex gap-10">
        <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20 hover:bg-red hover:text-white cursor-pointer">
            <div>
                <IoIosPhonePortrait size={90} />
                <h1 className="ml-4 mt-[15px]">Pohnes</h1>
            </div>
        </div>
        <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	hover:bg-red hover:text-white cursor-pointer">
            <div>
                <CiHeadphones size={90} />
                <h1 className="mt-[15px]">HeadPhones</h1>
            </div>
        </div>
        <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	hover:bg-red hover:text-white cursor-pointer">
            <div>
                <BsSmartwatch size={90} />
                <h1 className="mt-[15px]">SmartWatch</h1>
            </div>
        </div>
        <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	hover:bg-red hover:text-white cursor-pointer">
            <div>
                <IoCameraOutline size={90} />
                <h1 className="ml-4 mt-[15px]">Camera</h1>
            </div>
        </div>
        <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	hover:bg-red hover:text-white cursor-pointer">
            <div>
                <HiOutlineComputerDesktop size={90} />
                <h1 className="ml-1 mt-[15px]">Computers</h1>
            </div>
        </div>
        <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	hover:bg-red hover:text-white cursor-pointer">
            <div>
                <SiYoutubegaming size={90} />
                <h1 className="ml-4 mt-[15px]">Gaming</h1>
            </div>
        </div>
    </div>
      );
}
 
export default BrowseBuyCat;