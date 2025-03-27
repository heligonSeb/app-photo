export const useProgramState = () => {
    const getSkaterName = (skaterList: string[]) => {
        if (skaterList.length === 0) {
            return 'John Doe'
        }

        if (skaterList.length === 1) {
            return skaterList[0]
        }

        if (skaterList.length > 1) {
            return skaterList.join(', ')
        }
    }

    return {
        getSkaterName,
    }
}
