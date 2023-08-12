import { createContext, useContext, useReducer } from "react";
import { InventoryReducer } from "../reducer/InventoryReducer";
import { inventoryData } from "../data/datasource";
import { v4 as uuid } from "uuid";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const localInventory = JSON.parse(localStorage.getItem("inventory"))
    const imagePlaceholder = "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"

    const actions = {
        ADD__NEW__PRODUCT: "ADD__NEW__PRODUCT"
    }
    const InitialInventoryData = {
        inventory: !localInventory ? inventoryData : localInventory,
        totalStock: !localInventory ? inventoryData.reduce((total, curr) => total + curr.stock, 0) : localInventory.reduce((total, curr) => total + curr.stock, 0),
        totalDelivered: !localInventory ? inventoryData.reduce((total, curr) => total + curr.delivered, 0) : localInventory.reduce((total, curr) => total + curr.delivered, 0),
        lowStockItems: !localInventory ? inventoryData.filter(item => item.stock < 10).length : localInventory.filter(item => item.stock < 10).length,
        departments: Array.from(new Set(inventoryData.map((item) => item.department)))
    }

    const [inventoryState, dispatch] = useReducer(InventoryReducer, InitialInventoryData)

    const addNewProducts = (productValues) => {
        const product = { id: uuid(), ...productValues, imageUrl: productValues.imageUrl.length > 0 ? productValues.imageUrl : imagePlaceholder }
        dispatch({ type: actions.ADD__NEW__PRODUCT, payload: { ...product } })
    }
    const values = {
        ...inventoryState,
        addNewProducts,
        imagePlaceholder
    }
    return <InventoryContext.Provider value={values}>{children}</InventoryContext.Provider>
}

export const useInventory = () => useContext(InventoryContext)