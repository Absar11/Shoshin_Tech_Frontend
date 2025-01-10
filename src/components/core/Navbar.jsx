import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import Avatar from "react-avatar";

const Navbar = ({ toggleSidebar }) => {
    const userProfilePic = "./images/navbar/unsplash_OH2S9XAcLhc.png";

    return (
        <div className="navbar fixed top-0 left-0 md:left-[243px] w-full md:w-[calc(100%-243px)] h-[70px] md:h-[91px] bg-[#FDFDFD] z-10 px-4 md:px-[50px]">
            <div className="flex justify-between items-center h-full border-b border-[#F1F1F1]">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden border-none bg-none cursor-pointer"
                    >
                        <FaBars size={20} />
                    </button>

                    <div className="hidden md:flex items-center">
                        <input
                            type="text"
                            name="nav-search"
                            id="nav-search"
                            placeholder="Search"
                            className="w-[200px] md:w-[343px] h-[36px] md:h-[44px] rounded-[4px] border border-[#E0E0E0] px-[12px] md:px-[16px] text-gray-700 bg-no-repeat bg-right"
                            style={{ backgroundImage: "url(/public/images/navbar/Union.png)" }}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <button className="md:hidden border-none bg-none cursor-pointer">
                        <FaSearch size={20} />
                    </button>

                    <button className="border-none cursor-pointer bg-none">
                        <IoMdNotificationsOutline size={20} md:size={24} />
                    </button>
                    <button className="border-none cursor-pointer bg-none">
                        <HiOutlineChatAlt2 size={20} md:size={24} />
                    </button>

                    <div className="flex items-center gap-2 md:gap-3">
                        <Avatar
                            src={userProfilePic}
                            alt="profile-pic"
                            size="42"
                            round={true}
                        />
                        <div className="hidden md:flex gap-1 items-center">
                            <p className="font-poppins text-[#000033] font-medium text-[14px] md:text-[16px]">
                                John Doe
                            </p>
                            <button className="border-none cursor-pointer bg-none">
                                <BsChevronDown size={14} md:size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
