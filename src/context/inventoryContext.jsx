import { createContext, useContext, useReducer } from "react";
import { InventoryReducer } from "../reducer/InventoryReducer";
import { inventoryData } from "../data/datasource";
import { v4 as uuid } from "uuid";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {

    const actions = {
        ADD__NEW__PRODUCT: "ADD__NEW__PRODUCT"
    }
    const InitialInventoryData = {
        inventory: inventoryData,
        totalStock: inventoryData.reduce((total, curr) => total + curr.stock, 0),
        totalDelivered: inventoryData.reduce((total, curr) => total + curr.delivered, 0),
        lowStockItems: inventoryData.filter(item => item.stock < 10).length,
        departments: Array.from(new Set(inventoryData.map((item) => item.department)))
    }


    const [inventoryState, dispatch] = useReducer(InventoryReducer, InitialInventoryData)


    const addNewProducts = (productValues) => {
        const product = { ...productValues, id: uuid() }
        dispatch({ type: actions.ADD__NEW__PRODUCT, payload: { ...product } })
    }



    const values = {
        ...inventoryState,
        addNewProducts
    }

    return <InventoryContext.Provider value={values}>{children}</InventoryContext.Provider>
}

export const useInventory = () => useContext(InventoryContext)