import React from 'react';
import { FaAngleDown, FaBell, FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import ProfileIcon from '../../assets/ProfileIcon.png';

export default function Navbar() {
    return (
        <nav className="flex items-center p-2 sm:p-4 justify-between bg-white shadow-sm fixed top-0 h-16 z-30 transition-all duration-300 ease-in-out left-0 right-0 w-full">
            {/* Left Side - Search Bar */}
            <div className="flex items-center w-full max-w-[140px] sm:max-w-xs md:max-w-md ml-16 lg:ml-64 lg:max-w-lg md:pl-[25px]">
                <div className="relative w-full ml-[-13px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-2 pr-8 sm:pl-4 sm:pr-10 py-1 sm:py-2 bg-[#FAFAFA] text-sm sm:text-base rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center pointer-events-none">
                        <FaSearch
                            width={16}
                            height={16}
                            className="text-gray-400"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">

                <button className="relative p-1 sm:p-2">
                    <FaBell
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                </button>

                <button className="relative p-1 sm:p-2">
                    <MdMessage
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                </button>

                <div className="flex items-center space-x-1 sm:space-x-2">
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <span className="font-medium text-xs sm:text-sm md:text-base hidden md:inline">John Doe</span>

                    <FaAngleDown
                        width={16}
                        height={16}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                </div>
            </div>
        </nav>
    );
}