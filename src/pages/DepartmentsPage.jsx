import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import { useInventory } from '../context/inventoryContext'
import { useNavigate } from 'react-router-dom'

function DepartmentsPage() {
    const { departments } = useInventory()
    const navigate = useNavigate()
    return (
        <div className='Inventory DashBoardPage w-screen flex'>
            <LeftSideBar />
            <div className="dashboard w-full p-10 bg-[#f1f1f1] flex flex-wrap gap-8 ">
                {departments.map((item, i) =>
                    <div
                        key={i}
                        onClick={() => navigate(`/products/${item}`)}
                        className="dashboard__item gap-4 cursor-pointer hover:scale-105 hover:shadow-indigo-300 transition-all  shadow-lg text-2xl bg-white rounded-md h-[10rem] w-[10rem] box-border flex flex-col items-center justify-center">
                        {item}</div>)}
            </div>
        </div>
    )
}

export default DepartmentsPage