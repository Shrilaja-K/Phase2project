import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Example() {
   
    const [count,setCount] = useState(0);
    const [display,setDisplay] = useState("");
    const handlecount = () =>{
       setCount(count+1)
    }
  //  useEffect (() => {
  //   if(boolean){
  //     setDisplay("hello")
  //   }
  //   else{
  //     setDisplay("");
  //   }
  //  },[boolean])


   useEffect (() => {
        if(count%10===0){
          setDisplay("hii")
        }else{
          setDisplay("")
        }
   },[count])
    
    
  return (
    <div>
        <Typography>
            {count}
        </Typography>
      <button onClick={handlecount}>
        Count
      </button>
      <Typography>
        {display}
      </Typography>

    </div>
  )
}

export default Example
