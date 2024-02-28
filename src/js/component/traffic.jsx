import React from "react";
import { useState, useEffect } from "react";


//create your first component
export const TrafficLight= ()=> {

  const [countR, setCountR] = useState('red');
  const [countY, setCountY] = useState('gray');
  const [countG, setCountG] = useState('gray');  
  const [countW, setCountW] = useState('gray');  
  const [countS, setCountS] = useState(10);
  const [countI, setCountI] = useState(1);
  const [count, setCount] = useState(0);

let  interval;

  useEffect(() => {
 
     interval = setInterval(() => {

      if(countS==1 && count==1) { 
        setCountG('gray');
        setCountR('gray');
        setCountY('gray');  
        setCountW('white');
        setCount(0);
        setCountS(10);

      }

  else if(countS==1 && count==0) { 
       setCountS(10);
if(countI==1)
{   
  setCountG('gray');
  setCountR('gray');
  setCountY('yellow');  
  setCountW('gray');
  setCountI(2);
}

else if(countI==2){
  setCountW('gray');
  setCountG('green');
  setCountR('gray'); 
  setCountY('gray');
  setCountI(3);

}
  else if(countI==3) {
    setCountW('gray');
    setCountG('gray');
    setCountR('red');
    setCountY('gray');  
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
        <div class="trafficlight">
            <div class="countlight"><span>{countS}</span></div>
            <div class="redlight" style={{ backgroundColor:countR }}></div>
            <div class="yellowlight" style={{ backgroundColor:countY }}></div>
            <div class="greenlight" style={{ backgroundColor:countG}}></div>
            <div class="walklight" style={{ backgroundColor:countW}}><i class="fa-solid fa-person-walking fa-2xl"></i></div>
            
            </div>
            <button type="button" class="btn btn-secondary" onClick={()=>CrossStreet()}>Press the button if you want to cross</button>
     
    </div>
     
      
    

  

    );
	
};
// export default TimeCount;


// <button type="button" class="btn btn-secondary">Secondary</button>