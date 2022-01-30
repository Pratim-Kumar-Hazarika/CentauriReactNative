/* eslint-disable */

import React, { createContext, useContext } from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}:any){
    const praatim = "test"
    let pra1 = "test1"
    let arr =[1]

    return(
        <CartContext.Provider value={{praatim,pra1,arr}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}