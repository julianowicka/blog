import {serialize} from "../../helpers/contentfulDataSerializer";

describe('unit test for contenfulDataSerializer', () => {
    test('it returns empty object if provided with empty object', ()=>{
        expect( serialize({})).toStrictEqual({})
    })
    test('itflattens input data', ()=>{
       let inputData: any =  {
           artwork: 'test1',
            description: {
                description: {
                    test: 1
                }
            },
            test: {
                test: 'gellyfrog'
            }
        }
        let outputData: any = {
            artwork: 'test1',
            description:{
                test:1
            },
            test: 'gellyfrog'
        }
        console.log(serialize(inputData))

        expect(serialize(inputData)).toStrictEqual(outputData)
    })
})
