import divideInChunks from "./divideInChunks"

const BASE_URL = "https://fakestoreapi.com/products"

export default async function fetchProducts() {
    const response = await fetch(`${BASE_URL}`)
    const data = await response.json()

    return divideInChunks(data)
}