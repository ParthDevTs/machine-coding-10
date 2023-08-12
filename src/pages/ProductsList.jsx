import React, { useState } from 'react'
import { useInventory } from '../context/inventoryContext'
import LeftSideBar from '../components/LeftSideBar'
import { useNavigate, useParams } from 'react-router-dom'
import ProductListing from '../components/productListing'

function ProductsList() {
    const { inventory } = useInventory()
    const { department } = useParams();
    // const productList = department ? inventory.filter((item) => item.department === department) : inventory
    const productList = inventory
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false)
    const [departmentFilter, setDepartmentFilter] = useState(department ? department : "All")

    return (
        <div className='Inventory DashBoardPage flex'>
            <LeftSideBar />
            <div className="product__gallery  bg-[#f1f1f1]  p-5 flex flex-col gap-4  w-full">
                <div className="filter__bar flex w-full justify-between bg-white py-2 rounded shadow-sm text-xs items-center px-4">
                    <h3>Products</h3>
                    <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} name="departmentSelect">
                        <option value="All">All</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Toys">Toys</option>
                    </select>
                    <div className="checkbox flex items-center justify-center gap-2">
                        <label htmlFor="lowStock">Low Stock</label>
                        <input value={isChecked} onChange={() => setIsChecked((prev => !prev))} type="checkbox" name="lowStock" id="lowStock" />
                    </div>
                    <button onClick={() => navigate("/addproducts")} className="bg-teal-300 shadow-md shadow-teal-300 px-8 py-2">New</button>
                </div>
                <table className="border-collapse shadow-lg shadow-teal-300 border border-slate-500 ">
                    <thead>
                        <tr className="bg-slate-400 text-white">
                            <th className="border p-2 text-sm">Image</th>
                            <th className="border p-2 text-sm">Name</th>
                            <th className="border p-2 text-sm">Description</th>
                            <th className="border p-2 text-sm">Price</th>
                            <th className="border p-2 text-sm">Stock</th>
                            <th className="border p-2 text-sm">Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.filter((item) => {
                            switch (departmentFilter) {
                                case "All":
                                    return true;
                                case "Kitchen":
                                    return item.department === "Kitchen"
                                case "Clothing":
                                    return item.department === "Clothing"
                                case "Toys":
                                    return item.department === "Toys"
                                default: return true
                            }
                        }).filter(item => {
                            if (isChecked === true) {
                                return item.stock < 10 ? true : false
                            } else {
                                return true
                            }
                        }).map((item) => <ProductListing key={item.id} productData={item} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsList