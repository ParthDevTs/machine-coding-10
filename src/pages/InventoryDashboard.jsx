import React from 'react'
import { useInventory } from '../context/inventoryContext'
import LeftSideBar from '../components/LeftSideBar'

function InventoryDashboard() {
    const { totalStock, totalDelivered, lowStockItems } = useInventory()
    return (
        <div className='Inventory DashBoardPage w-screen flex'>
            <LeftSideBar />
            <div className="dashboard w-full p-10 bg-[#f1f1f1] flex flex-wrap gap-8 ">
                <div className="dashboard__item gap-4 shadow-lg shadow-teal-300  bg-white rounded-md h-[10rem] w-[10rem] box-border flex flex-col items-center justify-center">
                    <p className="Value text-2xl font-bold text-teal-300">{totalStock}</p>
                    <p className="title">Total Stock</p></div>
                <div className="dashboard__item gap-4 shadow-lg shadow-orange-300  bg-white rounded-md h-[10rem] w-[10rem] box-border flex flex-col items-center justify-center">
                    <p className="Value text-2xl font-bold text-orange-300">{totalDelivered}</p>
                    <p className="title ">Total Delivered</p></div>
                <div className="dashboard__item gap-4 shadow-lg shadow-red-300  bg-white rounded-md h-[10rem] w-[10rem] box-border flex flex-col items-center justify-center">
                    <p className="Value text-2xl font-bold text-red-300">{lowStockItems}</p>
                    <p className="title ">Low Stock Items</p></div>
            </div>
        </div>
    )
}

export default InventoryDashboard