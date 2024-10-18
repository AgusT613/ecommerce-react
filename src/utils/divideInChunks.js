export default function divideInChunks(itemList) {
    let chunks = []

    const itemsPerChunk = 6 // --> 6 items as the list starts at index 0
    let iterations = Math.ceil((itemList.length / itemsPerChunk))

    for (let i = 0; i < iterations; i++){
        let chunk = itemList.slice(i*itemsPerChunk, itemsPerChunk + i*itemsPerChunk)
        chunks.push(chunk)
    }

    return chunks
}