//Create a React component that displays a grid of items (e.g., products, images, or articles). The component must include a set of filter buttons above the grid. Clicking a filter button should instantly and dynamically update the visible items in the grid without a full page reload.

import React, { useMemo, useState } from 'react'

const PRODUCTS = [
    { id: 1, name: "iPhone", category: "Electronics" },
    { id: 2, name: "Laptop", category: "Electronics" },
    { id: 3, name: "T-Shirt", category: "Clothing" },
    { id: 4, name: "Jeans", category: "Clothing" },
    { id: 5, name: "Coffee Mug", category: "Home" },
    { id: 6, name: "Lamp", category: "Home" }
];

const GridFilter = () => {

    const [activeFilter, setActiveFilter] = useState("All")

    const filteredProducts = useMemo(() =>
        activeFilter === "All" ? PRODUCTS : PRODUCTS.filter(prod => prod.category === activeFilter)
        , [activeFilter])
    return (
        <>
            <header>
                {['All', 'Electronics', 'Clothing', 'Home', 'Sports'].map(fltr => (
                    <button key={fltr} style={{ backgroundColor: fltr === activeFilter ? "red" : "white", padding: "10px", fontSize: "1rem" }} onClick={() => setActiveFilter(fltr)}>{fltr}
                    </button>
                ))}
            </header>
            <main style={{ margin: "2rem", minWidth: "70vw", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "2rem", backgroundColor: "darkgreen" }}>
                {
                    filteredProducts.length === 0 ? (<p>No products found</p>) : (filteredProducts.map(prod => (
                        <div key={prod.id} style={{ height: "100px", width: "100px", backgroundColor: "lightgreen", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexDirection: "column", color: "black", fontWeight: "bold" }}>
                            <p>{prod.name}</p>
                            <p>{prod.category}</p>
                        </div>
                    )))
                }
            </main>
        </>
    )
}

export default GridFilter