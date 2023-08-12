import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import { useFormik } from 'formik'
import { ProductInitialValues, ProductSchema } from '../schema/ProductSchema'
import { useInventory } from '../context/inventoryContext'
import { useNavigate } from 'react-router-dom'


function ProductManagementPage() {
    const { addNewProducts } = useInventory();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: ProductInitialValues,
        validationSchema: ProductSchema,
        onSubmit: (values) => {
            addNewProducts(values);
            navigate(-1)
        }
    })

    return (
        <div className='AddProductPage  flex'>
            <LeftSideBar />
            <div className="Add Product w-full p-10 bg-[#f1f1f1] text-black flex flex-col items-start gap-8  ">
                <h1 className="text-2xl font-bold drop-shadow-lg">Add a New Product</h1>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-start gap-4 w-full bg-white p-8 rounded shadow">
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="department" className="formLabel">
                            Department
                        </label>
                        <select className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.department} name="department" id="department" >
                            <option disabled value="">Select Department</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Toys">Toys</option>
                        </select>
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="name" className="formLabel">
                            Name
                        </label>
                        <input className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" name="name" id="name" />
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="description" className="formLabel">
                            Description
                        </label>
                        <textarea className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} name="description" id="description" cols="30" rows="2"></textarea>
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="price" className="formLabel">
                            Price
                        </label>
                        <input step="0.1" className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.price} type="number" name="price" id="price" />
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="stock" className="formLabel">
                            Stock
                        </label>
                        <input className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.stock} type="number" name="stock" id="stock" />
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="sku" className="formLabel">
                            SKU
                        </label>
                        <input className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sku} type="text" name="sku" id="sku" />
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="supplier" className="formLabel">
                            Supplier
                        </label>
                        <input className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.supplier} type="text" name="supplier" id="supplier" />
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="delivered" className="formLabel">
                            Delivered
                        </label>
                        <input className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.delivered} type="number" name="delivered" id="delivered" />
                    </div>
                    <div className="form__group grid grid-cols-2 w-full">
                        <label htmlFor="imageUrl" className="formLabel">
                            Image URL
                        </label>
                        <input className="shadow-md bg-teal-300 rounded-md px-4 py-1 text-white text-left shadow-teal-400 " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageUrl} type="text" name="imageUrl" id="imageUrl" />
                    </div>
                    <button disabled={!formik.isValid} type="Submit" className="bg-red-500 disabled:bg-slate-200 disabled:text-slate-500 w-full py-2 mt-4 text-white shadow-lg shadow-red-400 rounded hover:bg-red-300">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default ProductManagementPage