export const serialize = (data: any) => {
    let objectKeys: string[] = Object.keys(data)
            return objectKeys.reduce((accumulator: any, key: string)=>{
                if (data[key].hasOwnProperty(key)){
                    accumulator = {...accumulator, [key]: data[key][key]}
                }
                else {
                    accumulator = {...accumulator, [key]: data[key]}
                }
                return accumulator
            }, {})

}
