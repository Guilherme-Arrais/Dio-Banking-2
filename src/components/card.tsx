import { ChakraProvider,
    Input,
    Box,
   Center
    } from '@chakra-ui/react'
import { button } from './button'
import { login } from '../service/login'

export const Card =()=>{
return(
    <ChakraProvider>

 
<Box minHeight='100vh'  backgroundColor='#cc0099' padding='100px'>

<Box borderRadius='20px' padding='60px' backgroundColor='white'>
  <Center><h1>Faça Login</h1></Center>
  <Input placeholder="email"/>
  <Input  placeholder="password"/>
  <div> {button(login)}</div>
</Box>

  </Box>  


</ChakraProvider>
)

}


/*interface Icard{
    Id:number
}

export const Card =({Id}:Icard)=>{
    return(
    <div>Card ${Id}</div>
    )
}
    
<Center><Button onClick={login} colorScheme='blue' size='sm' width='100%'>Enter</Button></Center>

*/