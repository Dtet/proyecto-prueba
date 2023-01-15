import { IFacultativo, IFacultativoList } from "@models/facultativo.model";

export interface IReturn {
    formattedData: Array<IFacultativo>,
    keys: string[]
}

const facultativoListAdapter = ( response: IFacultativoList ): IReturn  => {
    const rowsLength = Object.values(response)[0].length 
    const keys = Object.keys(response); // [key1, key2, key3, ..., keyN]
    
    const arr = Array(rowsLength).fill({}); // [{}, {}, {}, ..., {}]
    const formattedData = arr.map((_obj, index) => keys.reduce((accumulator, key) => {
        const currentArray = response[key]
        const value = currentArray[index]
        return {...accumulator, [key]: value};
    }, {}))
    
    return {formattedData, keys}
}

export default facultativoListAdapter
