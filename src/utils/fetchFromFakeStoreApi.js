export default async function fetchFromFakeStoreApi(baseUrl) {
    const response = await fetch(baseUrl)
    return await response.json()
}