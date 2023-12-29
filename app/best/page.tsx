import { IoIosPhonePortrait } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";

const best = () => {
    return (
        <div className="ml-[20px] flex gap-10">
            <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	">
                <div>
                    <IoIosPhonePortrait size={90} />
                    <h1 className="ml-4">Pohnes</h1>
                </div>
            </div>
            <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	">
                <div>
                    <CiHeadphones size={90} />
                    <h1 className="ml-4">HeadPhones</h1>
                </div>
            </div>
            <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	">
                <div>
                    <BsSmartwatch size={90} />
                    <h1 className="ml-4">SmartWatch</h1>
                </div>
            </div>
            <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	">
                <div>
                    <IoCameraOutline size={90} />
                    <h1 className="ml-4">Camera</h1>
                </div>
            </div>
            <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	">
                <div>
                    <HiOutlineComputerDesktop size={90} />
                    <h1 className="ml-4">Computers</h1>
                </div>
            </div>
            <div className="w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	">
                <div>
                    <SiYoutubegaming size={90} />
                    <h1 className="ml-4">Gaming</h1>
                </div>
            </div>
        </div>
      );
}
 
export default best;