import React from "react";
import { useState, useEffect } from "react";


//create your first component
export const TrafficLight= ()=> {

  const [countR, setCountR] = useState('red');
  const [countY, setCountY] = useState('gray');
  const [countG, setCountG] = useState('gray');   
  const [countS, setCountS] = useState(5);
  
  

let  interval;
let i = 1;
  useEffect(() => {
 
     interval = setInterval(() => {

           if(countS==1)   { 
           

if(i==1)
{   

  setCountG('gray');
  setCountR('gray');
  setCountY('yellow');  
  
i=2;
console.log('This is the current position :'+i); 

}

else if(i==2){
 
  setCountG('green');
  setCountR('gray'); 
  setCountY('gray');
  
   i=3;
console.log('This should be 3rd position :'+i);

}
  else if(i==3) {
  
    setCountG('gray');
    setCountR('red');
    setCountY('gray');   
    i=1;
console.log('This is the current position :'+ i);
  }
  
      }
    
      else{
        setCountS(countS-1);
      }
   
  
    }, 3000);

  
    return () => {
      clearInterval(interval);
   
    }
  }, [countS]);



function CrossStreet (){
 
clearInterval(interval);



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