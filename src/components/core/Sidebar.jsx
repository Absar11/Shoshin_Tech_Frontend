import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaTachometerAlt, FaUserTie, FaCalendarAlt, FaUsers, FaBuilding, FaHeadset, FaCog } from 'react-icons/fa'; // Importing React Icons
import Navbar from './Navbar';
import NamedLogo from '../../assets/NamedLogo.png';
import Logo from "../../assets/Logo.png"

const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", link: "/", section: "MAIN MENU" },
    { icon: <FaUserTie />, label: "Recruitment", link: "/recruitment", section: "MAIN MENU" },
    { icon: <FaCalendarAlt />, label: "Schedule", link: "/schedule", section: "MAIN MENU" },
    { icon: <FaUsers />, label: "Employee", link: "/employee", section: "MAIN MENU" },
    { icon: <FaBuilding />, label: "Department", link: "/department", section: "MAIN MENU" },
    { icon: <FaHeadset />, label: "Support", link: "/support", section: "OTHER" },
    { icon: <FaCog />, label: "Settings", link: "/settings", section: "OTHER" },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Menu Button - only visible on mobile */}
            <div className="fixed top-0 left-0 z-50 md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 m-2 bg-white rounded-md"
                >
                    {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-[#FAFAFA] shadow-lg transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'w-64' : 'w-0 md:w-16 lg:w-64'}
          overflow-hidden md:overflow-visible
        `}
            >
                {/* Logo Section */}
                <div className="p-4 flex items-center justify-center">
                    {/* Main logo appears on mobile when hamburger menu is open */}
                    <img
                        src={NamedLogo}
                        alt="Company Logo"
                        className={`h-10 ${isOpen ? 'block' : 'hidden'} md:hidden`}
                    />
                    {/* Tablet logo (hidden when hamburger menu is open on mobile) */}
                    <img
                        src={Logo}
                        alt="Logo"
                        className={`h-12 w-12 ${isOpen ? 'hidden' : 'block'} lg:hidden`}
                    />
                    {/* Always display the main logo on large screens */}
                    <img src={NamedLogo} alt="Vasitum Logo" className="hidden lg:block h-10" />
                </div>

                {/* Navigation Menu */}
                <nav className="mt-8">
                    {["MAIN MENU", "OTHER"].map((section) => (
                        <div key={section} className="mb-4">
                            <h2 className="px-4 md:text-xs font-semibold text-gray-500 mb-2 hidden md:block text-[10px]">{section}</h2>
                            {menuItems
                                .filter((item) => item.section === section)
                                .map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 gap-[24px]
                      ${isActive ? 'text-[#FF5151]' : 'text-gray-700'} 
                      hover:text-[#FF5151]`
                                        }
                                    >
                                        <span className="text-lg">{item.icon}</span> {/* Replace PNG with React Icon */}
                                        {/* Show label only when the sidebar is open */}
                                        <span className={`lg:inline ${isOpen ? 'block' : 'hidden'} font-poppins`}>{item.label}</span>
                                    </NavLink>
                                ))}
                        </div>
                    ))}
                </nav>
            </div>

            <Navbar />
        </>
    );
}
