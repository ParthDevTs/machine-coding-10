import React from 'react'
import { useInventory } from '../context/inventoryContext'
import LeftSideBar from '../components/LeftSideBar'
import { useNavigate, useParams } from 'react-router-dom'
import ProductListing from '../components/productListing'

function ProductsList() {
    const { inventory } = useInventory()
    const { department } = useParams();
    const productList = department ? inventory.filter((item) => item.department === department) : inventory
    const navigate = useNavigate();

    return (
        <div className='Inventory DashBoardPage flex'>
            <LeftSideBar />
            <div className="product__gallery  bg-[#f1f1f1]  p-5 flex flex-col gap-4  w-full">
                <div className="filter__bar flex w-full justify-between bg-white py-2 rounded shadow-sm text-xs items-center px-4">
                    <h3>Products</h3>
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
                        {productList.map((item) => <ProductListing key={item.id} productData={item} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsList