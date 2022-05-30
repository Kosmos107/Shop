import React,{FC} from 'react'
import { Route,Routes} from 'react-router-dom'
import { privateRout } from './private'
import Login from "../../register/Login/Login"
interface priv {
  user?:any
}
                
const PrivateRounter:FC<priv> = ({user}) => {
  return (
    user?
    (<Routes>
    {privateRout.map(({path,element})=>{
      return(<Route path={path} element={element} />)
    })}
    </Routes>): 
      (<Routes>
      {privateRout.map(({path,})=>{
        return(<Route path={path} element={<Login/>} />)
      })}
      </Routes>)
)
  
}

export default PrivateRounter