import { login } from "./login"

describe('login',()=>{
  const mockalert= jest.fn()
  window.alert=mockalert


    it('deve fazer o login',()=>{
        login()
        expect(mockalert).toBeCalled()
    })
})