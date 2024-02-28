import React from "react";
import { useState, useEffect } from "react";


//create your first component
export const TrafficLight= ()=> {

  const [countR, setCountR] = useState('red');
  const [countY, setCountY] = useState('gray');
  const [countG, setCountG] = useState('gray');   
  const [countS, setCountS] = useState(5);
  const [countI, setCountI] = useState(1);
  
  

let  interval;
let  interval2;

  useEffect(() => {
 
     interval = setInterval(() => {

    if(countS==1) { 
           
            setCountS(5);
if(countI==1)
{   
 
  setCountG('gray');
  setCountR('gray');
  setCountY('yellow');  
  setCountI(2);

}

else if(countI==2){
 
  setCountG('green');
  setCountR('gray'); 
  setCountY('gray');
  setCountI(3);


}
  else if(countI==3) {
   
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

console.log(countS);
interval2 = setInterval(() => {

if(countI==1)
{   
  setCountG('gray');
  setCountR('gray');
  setCountY('gray');  
 // setCountI(10);
 console.log('test cross button')
}
},1000);
return() => {
  clearInterval(interval2);

}
}





    

	return	(
        <div class="container">
        <div class="trafficlight">
            <div class="countlight"><span>{countS}</span></div>
            <div class="redlight" style={{ backgroundColor:countR }}></div>
            <div class="yellowlight" style={{ backgroundColor:countY }}></div>
            <div class="greenlight" style={{ backgroundColor:countG}}></div>
            <div class="walklight"><i class="fa-solid fa-person-walking fa-2xl"></i></div>

            </div>
            <button type="button" class="btn btn-secondary" onClick={()=>CrossStreet()}>Press the button if you want to cross</button>
     
    </div>
     
      
    

  

    );
	
};
// export default TimeCount;


// <button type="button" class="btn btn-secondary">Secondary</button>