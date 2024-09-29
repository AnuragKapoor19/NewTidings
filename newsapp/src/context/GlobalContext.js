import React, { createContext, useContext, useState } from "react"

const CategoryContext = createContext()

export default function GlobalContext({ children }) {
  const [category, setcategory] = useState('top');
  const [search, setsearch] = useState();

  return (
    <CategoryContext.Provider value={{ category, setcategory, search, setsearch }}>{children}</CategoryContext.Provider>
  )
}

export const CategoryState = () => {
  return useContext(CategoryContext)
}