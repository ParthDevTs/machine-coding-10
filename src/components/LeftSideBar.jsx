import React from 'react'
import { NavLink } from 'react-router-dom'

function LeftSideBar() {
    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "white" : "",
    });
    return (
        <div className="w-[250px]  bg-slate-800 text-white py-10 min-h-screen relative ">
            <div className="navbar h-[10rem] flex flex-col text-slate-400 items-start justify-between">
                <NavLink style={getActiveStyle} className="w-full transition-all hover:bg-slate-700 hover:text-gray-100  px-8 py-2" to={"/"}>Dashboard</NavLink>
                <NavLink style={getActiveStyle} className="w-full transition-all hover:bg-slate-700 hover:text-gray-100  px-8 py-2" to={"/departments"}>Departments</NavLink>
                <NavLink style={getActiveStyle} className="w-full transition-all hover:bg-slate-700 hover:text-gray-100  px-8 py-2" to={"/products"}>Products</NavLink>
            </div>
        </div>
    )
}

export default LeftSideBar