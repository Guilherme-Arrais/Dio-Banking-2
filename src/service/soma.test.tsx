import { soma, multiplica } from "./soma"


describe('soma', ()=>{
    it('deve somar 1 ao numero informado', ()=>{
    const value = soma(1)
    expect(value).toBe(2)
    }
)

it('deve multiplicar o numero',()=>{
const value = multiplica(2)
expect(value).toBe(4)
})
})


