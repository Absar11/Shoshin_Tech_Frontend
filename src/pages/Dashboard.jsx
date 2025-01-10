import React from 'react';
import { FaRegStickyNote, FaEllipsisH, FaUsers, FaChartLine } from 'react-icons/fa';
import Main from '../components/core/Main';

export default function Dashboard() {
    return (
        <Main>
            <div className="p-4 md:p-6 lg:p-8 bg-black-100 min-h-screen font-poppins md:ml-16 lg:ml-64 mt-16">
                <h1 className="text-xl md:text-2xl font-bold text-black mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-[#FFEFE7] rounded-lg p-4">
                        <h2 className="text-base md:text-[18px] font-semibold text-black mb-2">Available Position</h2>
                        <p className="text-2xl md:text-[36px] font-bold text-black mb-2">24</p>
                        <p className="text-sm md:text-[16px] text-red-500">4 Urgently needed</p>
                    </div>
                    <div className="bg-[#E8F0FB] rounded-lg p-4">
                        <h2 className="text-base md:text-[18px] font-semibold text-black mb-2">Job Open</h2>
                        <p className="text-2xl md:text-[36px] font-bold text-black mb-2">10</p>
                        <p className="text-sm md:text-[16px] text-blue-500">4 Active hiring</p>
                    </div>
                    <div className="bg-[#FDEBF9] rounded-lg p-4">
                        <h2 className="text-base text-[18px] font-semibold text-black mb-2">New Employees</h2>
                        <p className="text-2xl text-[36px] font-bold text-black mb-2">24</p>
                        <p className="text-sm text-[16px] text-purple-500">4 Department</p>
                    </div>
                    <div className="md:col-span-3 lg:col-span-1 lg:row-span-2 order-3 md:order-2 lg:order-none bg-[#1B204A] text-white rounded-lg shadow">
                        <div className='flex items-center justify-center bg-[#11163B] p-4 rounded-tr-sm rounded-sm'>
                            <h2 className="text-base md:text-lg font-semibold">Recently Activity</h2>
                        </div>
                        <div className='p-4'>
                            <p className="text-xs mb-2">10:40 AM, Fri 10 Sept 2021</p>
                            <h3 className="text-lg md:text-xl font-semibold mb-2">You Posted a New Job</h3>
                            <p className="text-xs md:text-sm mb-6">Kindly check the requirements and terms of work and make sure everything is right.</p>
                            <div className="flex justify-between items-center">
                                <p className="text-xs md:text-xs mt-3">Today you made 12 Activities</p>
                                <button className="bg-red-500 text-white text-xs py-1 px-4 rounded">See All Activity</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow">
                            <h2 className="text-base md:text-lg font-semibold text-black-800 mb-2">Total Employees</h2>
                            <div className="flex items-center flex-row justify-between">
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-black-800">216</p>
                                    <p className="text-xs md:text-sm text-black">120 Men</p>
                                    <p className="text-xs md:text-sm text-black">96 Women</p>
                                </div>
                                <div className='flex flex-col'>
                                    <FaChartLine className="w-24 h-14" />
                                    <p className="text-xs text-[#686868] bg-[#FFEFE7] inline-block px-2 py-1 rounded mt-2">+5% Past month</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow">
                            <h2 className="text-base md:text-lg font-semibold text-black-800 mb-2">Talent Request</h2>
                            <div className="flex items-center flex-row justify-between">
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-black-800">16</p>
                                    <p className="text-xs md:text-sm text-black">6 Men</p>
                                    <p className="text-xs md:text-sm text-black">10 Women</p>
                                </div>
                                <div className='flex flex-col'>
                                    <FaChartLine className="w-24 h-14" />
                                    <p className="text-xs text-[#686868] bg-[#FFEFE7] inline-block px-2 py-1 rounded mt-2">+2% Past month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 order-2 md:order-1 lg:order-none bg-white rounded-lg p-4 shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-base md:text-lg font-semibold text-black-800">Announcement</h2>
                            <div className="flex items-center border border-gray-300 bg-[#FAFAFA] rounded-sm">
                                <p className="text-xs md:text-xs text-black-500 mr-2">Today, 13 Sep 2021</p>
                                <FaEllipsisH className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                            </div>
                        </div>
                        {[
                            { title: 'Outing schedule for every department', time: '5 Minutes ago' },
                            { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
                            { title: 'IT Department need two more talents for UX/UI Designer position', time: 'Yesterday, 09:15 AM' },
                            { title: 'Outing schedule for every department', time: '5 Minutes ago' },
                        ].map((item, index) => (
                            <div key={index} className="bg-[#FAFAFA] border border-gray-300 rounded-lg p-3 mb-2 flex justify-between items-center">
                                <div>
                                    <p className="text-xs md:text-sm text-black-800">{item.title}</p>
                                    <p className="text-xs text-black-500">{item.time}</p>
                                </div>
                                <div className="flex items-center">
                                    <FaRegStickyNote className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2" />
                                    <FaEllipsisH className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                                </div>
                            </div>
                        ))}
                        <div className='flex items-center justify-center bg-slate-50 rounded-md'>
                            <button className="text-red-500 text-xs md:text-sm font-semibold">See All Announcement</button>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-1 order-4 lg:order-none bg-white rounded-lg p-4 shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-base md:text-lg font-semibold text-black-800">Upcoming Schedule</h2>
                            <div className="flex items-center border border-gray-300 bg-[#FAFAFA] rounded-sm">
                                <p className="text-xs md:text-xs text-black mr-2 ">Today, 13 Sep 2021</p>
                            </div>
                        </div>
                        <p className="text-xs md:text-sm font-semibold text-black-700 mb-2">Priority</p>
                        {[
                            { title: 'Review candidate applications', time: 'Today - 11:30 AM' },
                            { title: 'Interview with candidates', time: 'Today - 10:30 AM' },
                        ].map((item, index) => (
                            <div key={index} className="rounded-lg p-3 mb-2 bg-[#FAFAFA] border border-gray-300">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs md:text-sm text-black-800">{item.title}</p>
                                        <p className="text-xs text-black-500">{item.time}</p>
                                    </div>
                                    <FaEllipsisH className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Main>
    );
}
