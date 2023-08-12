import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import { useInventory } from '../context/inventoryContext'
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
    const { inventory } = useInventory();
    const { productId } = useParams()
    const Product = inventory.find(item => item.id === parseInt(productId))
    return (
        <div className='Inventory DashBoardPage w-screen flex'>
            <LeftSideBar />
            <div className="dashboard w-full p-10 bg-[#f1f1f1] flex flex-wrap gap-8 ">
                <h1>{Product.name}</h1>
                <img src={Product.imageUrl} alt="" />
                <p>Stock: {Product.stock}</p>
                <p>Supplier: {Product.supplier}</p>
                <p>Department: {Product.department}</p>
                <p>Delivered: {Product.delivered}</p>
                <p>SKU: {Product.sku}</p>
                <p>Description: {Product.description}</p>
            </div>
        </div>
    )
}

export default ProductDetailPage