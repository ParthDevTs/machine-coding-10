
export const InventoryReducer = (state, action) => {
    switch (action.type) {
        case "ADD__NEW__PRODUCT":

            localStorage.setItem("inventory", JSON.stringify([...state.inventory, action.payload]))
            return {
                ...state,
                inventory: [...state.inventory, action.payload],
                totalStock: state.totalStock + action.payload.stock,
                totalDelivered: state.totalDelivered + action.payload.delivered,
                lowStockItems: [...state.inventory, action.payload].filter(item => item.stock < 10).length
            };
        default:
            return state
    }
}