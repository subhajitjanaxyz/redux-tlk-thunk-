import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { alldataapi } from "./redux/dataSlice";

const App =()=>{
  const {data,isloading,error}=useSelector((state)=>state.apidata)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(alldataapi())
  },[])
console.log(data)
console.log(isloading)
console.log(error)
if(isloading){
  return <h1>loading..................</h1>
}


if(error){
  return <h1>..................{error}...........</h1>
}


return (
<>
{
  data.map((curElemnt)=>{
    return <div className="">
<h2>{curElemnt.id}</h2>
<h2>{curElemnt.title}</h2>
<h2>{curElemnt.body}</h2>
    </div>
  })
}




</>
  )
}
export default App