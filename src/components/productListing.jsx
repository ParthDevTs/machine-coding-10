import React from 'react'
import { Link } from 'react-router-dom'

function ProductListing({ productData: { id, name, imageUrl, description, price, stock, supplier } }) {

    return (
        <tr className="bg-white border">
            <td className="px-2 py-2 text-xs"><img className="w-20 h-20" src={imageUrl} alt={name} /></td>
            <td className="px-2 py-2 text-xs"><Link to={`/product/${id}`}>{name}</Link></td>
            <td className="px-2 py-2 text-xs">{description}</td>
            <td className="px-2 py-2 text-xs">{price}</td>
            <td className="px-2 py-2 text-xs">{stock}</td>
            <td className="px-2 py-2 text-xs">{supplier}</td>
        </tr>
    )
}

export default ProductListing