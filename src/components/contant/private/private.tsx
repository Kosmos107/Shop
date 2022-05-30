import LikeList from '../Like/LikeList'
import Basket from '../Backet/Basket'
import User from '../../register/User/User'



interface rote {
    path:string,
    element:any
  }
  export const privateRout:rote[] = [
    {path:"LikeList",
      element:<LikeList/>
    },
    {path:"Basket",
  element:<Basket/>},
  {path:"User",
  element:<User/>}
  ]