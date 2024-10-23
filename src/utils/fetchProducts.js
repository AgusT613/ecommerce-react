const BASE_URL = "https://fakestoreapi.com/products"

export default async function fetchProducts() {
    const response = await fetch(`${BASE_URL}`)
    return await response.json()
}