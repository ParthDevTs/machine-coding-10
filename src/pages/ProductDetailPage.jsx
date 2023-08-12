import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import { useInventory } from '../context/inventoryContext'
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
    const { inventory } = useInventory();
    const { productId } = useParams()
    const Product = inventory?.find(item => item.id == productId)
    console.log(productId, "id")
    console.log(Product)
    return (
        <div className='Inventory DashBoardPage w-screen flex'>
            <LeftSideBar />
            <div className="dashboard w-full p-10 bg-[#f1f1f1] flex flex-col gap-5 ">
                <h1 className="text-2xl">{Product.name}</h1>
                <div className="content bg-white p-10 rounded=lg shadow-md flex-col flex gap-2">
                    <img className="h-[10rem] w-[10rem]" src={Product.imageUrl} alt="" />
                    <p>Stock: {Product.stock}</p>
                    <p>Supplier: {Product.supplier}</p>
                    <p>Department: {Product.department}</p>
                    <p>Delivered: {Product.delivered}</p>
                    <p>SKU: {Product.sku}</p>
                    <p>Description: {Product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage