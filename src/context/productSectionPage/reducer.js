export default function reducer(state, action) {
    switch (action.type) {
        case "SET_MAX_PAGES": {
            const { sectionName, maxPages } = action
            return {
                ...state, [sectionName]: {
                    ...state[sectionName], maxPages
                }
            }
        }
        case "PREVIOUS_PAGE": {
            const { sectionName } = action
            const previousPage = {
                ...state, [sectionName]: {
                    ...state[sectionName], page: state[sectionName].page - 1
                }
            }
    
            if (previousPage[sectionName].page < 0) {
                return {
                    ...state, [sectionName]: {
                        ...state[sectionName], page: state[sectionName].maxPages - 1
                    }
                }
            }
            
            return previousPage
        }
        case "NEXT_PAGE": {
            const { sectionName } = action
            const nextPage = {
                ...state, [sectionName]: {
                    ...state[sectionName], page: state[sectionName].page + 1
                }
            }
    
            if (nextPage[sectionName].page === state[sectionName].maxPages) {
                return {
                    ...state, [sectionName]: {
                        ...state[sectionName], page: 0
                    }
                }
            }
            
            return nextPage
        }
        default:
            return state
    }
}