export function getFromLocalStorage(item) {
    return JSON.parse(localStorage.getItem(item))
}

export function setInLocalStorage(item, data) {
    localStorage.setItem(item, JSON.stringify(data))
}

export function existInLocalStorage(item) {
    return localStorage.getItem(item) !== null
}