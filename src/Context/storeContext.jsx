import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";


export const storeContext = createContext(null)

const storeContextProvider = (props) => {

    const [cartItems, setCartItem] = useState({})
    const [token, setToken] = useState("")
    const [foodList, setFoodList] = useState([])
    const [showLogin, setShowLogin] = useState(false)
    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)


    const url = "https://tomato-backend-3e3n.onrender.com"

    const addToCart = async (itemId) => {
        const normalizedItemId = String(itemId);
        setCartItem((prev) => ({
            ...prev,
            [normalizedItemId]: (prev[normalizedItemId] || 0) + 1,
        }));

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId: normalizedItemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        const normalizedItemId = String(itemId);
        setCartItem((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[normalizedItemId] > 1) {
                updatedCart[normalizedItemId] -= 1;
            } else {
                delete updatedCart[normalizedItemId];
            }
            return updatedCart;
        });

        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId: normalizedItemId }, { headers: { token } });
        }
    };

    const loadData = async (token) => {
        setLoading(true)
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
        setCartItem(response.data.cartData)
        setLoading(false)
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = foodList.find((product) => product._id === String(item));

                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item with id ${item} not found in food_list.`);
                }
            }
        }

        return totalAmount;
    };

    useEffect(() => {
        async function getFood() {
            await fetchList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadData(localStorage.getItem("token"));
            }
        }
        getFood();
    }, []);


    const fetchList = async () => {
        setLoading(true)
        const response = await axios.get(`${url}/api/food/list`)

        if (response.data.success) {
            setFoodList(response.data.data)
            setLoading(false)
        }
        else {
            return null
        }

    }


    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        foodList,
        setShowLogin,
        showLogin,
        visible,
        setVisible,
        search,
        setSearch,
        loading,
        setLoading
    }


    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default storeContextProvider;