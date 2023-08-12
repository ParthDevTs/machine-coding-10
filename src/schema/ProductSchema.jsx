import * as Yup from "yup";


export const ProductSchema = Yup.object({
    department: Yup.string().required("Select a Department"),
    name: Yup.string("should be a string").required(),
    description: Yup.string("Should be a string").required(),
    price: Yup.number("should be a number").positive("should be positive").required(),
    stock: Yup.number("should be a number").positive("should be positive").required(),
    sku: Yup.string("should be a string").required(),
    supplier: Yup.string("should be a string").required(),
    delivered: Yup.number("should be a number").positive("should be positive").required(),
    imageUrl: Yup.string("should be a string").url("Should be a URL"),
})

export const ProductInitialValues = {
    department: "",
    name: "",
    description: "",
    price: 0.0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: ""
}