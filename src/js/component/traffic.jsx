import React from "react";
import { useState, useEffect } from "react";


//create your first component
export const TrafficLight= ()=> {

  const [countR, setCountR] = useState('red-circle');
  const [countY, setCountY] = useState('blank-circle');
  const [countG, setCountG] = useState('blank-circle');  
  const [countW, setCountW] = useState('blank-circle');  
  const [countS, setCountS] = useState(10);
  const [countI, setCountI] = useState(1);
  const [count, setCount] = useState(0);

let  interval;

  useEffect(() => {
 
     interval = setInterval(() => {

      if(countS==1 && count==1) { 
        setCountG('blank-circle');
        setCountR('blank-circle');
        setCountY('blank-circle');  
        setCountW('white-circle');
        setCount(0);
        setCountS(10);

      }

  else if(countS==1 && count==0) { 
       setCountS(5);
if(countI==1)
{   
  setCountG('blank-circle');
  setCountR('blank-circle');
  setCountY('orange-circle');  
  setCountW('blank-circle');
  setCountI(2);
}

else if(countI==2){
  setCountW('blank-circle');
  setCountG('green-circle');
  setCountR('blank-circle'); 
  setCountY('blank-circle');
  setCountI(3);

}
  else if(countI==3) {
    setCountW('blank-circle');
    setCountG('blank-circle');
    setCountR('red-circle');
    setCountY('blank-circle');  
    setCountI(1);

  }
      }
    
      else{
        setCountS(countS-1);
      }
   
  
    }, 1000);

  
    return () => {
      clearInterval(interval);
   
    }
  }, [countS]);



function CrossStreet (){
setCount(1);

}

    

	return	(
        <div class="container">

<div class="rectangle1" >
<span id="red-light"  class={countR}></span>
<span id="orange-light"  class={countY}></span>
<span id="green-light" class={countG}></span>
<span id="walk-light" class={countW}  onClick={()=>CrossStreet()}><i class="fa-solid fa-person-walking fa-2xl"></i></span>
</div>
<div class="rectangle2"></div>
<div class="rectangle3"></div>








{/* 
        <div class="trafficlight">
            <div class="countlight"><span>{countS}</span></div>
            <div class="redlight" style={{ backgroundColor:countR }}><strong></strong></div>
            <div class="yellowlight" style={{ backgroundColor:countY }}></div>
            <div class="greenlight" style={{ backgroundColor:countG}}></div>
            <div class="walklight" style={{ backgroundColor:countW}}><i class="fa-solid fa-person-walking fa-2xl"></i></div>
            
            </div>
            <button type="button" class="btn btn-secondary" onClick={()=>CrossStreet()}>Press the button if you want to cross</button>
      */}






    </div>
     
      
    

  

    );
	
};
// export default TimeCount;


// <button type="button" class="btn btn-secondary">Secondary</button>