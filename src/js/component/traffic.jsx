import React from "react";
import { useState, useEffect } from "react";




//create your first component
export const TrafficLight= ()=> {


  const [countR, setCountR] = useState('gray');
  const [countY, setCountY] = useState('gray');
  const [countG, setCountG] = useState('gray');
   
    
    const [countS, setCountS] = useState(10);


let  interval;
let  interval2;
let i = 1;
  useEffect(() => {
    // interval2 = setInterval(() => {
    //   if(countS==0)
    //   {
    //     setCountS(10);
    //   }
    
    //   else{
    //     setCountS(countS-1);
    //   }

    // },1000);


     interval = setInterval(() => {

      if(i==1)
      {     
        setCountG('gray');
        setCountR('red');
        setCountY('gray');
        console.log('This is the current position :'+i);    
      i++;
     
        
      }
      else if(i==2){
     
          setCountG('gray');
          setCountR('gray');
          setCountY('yellow');
      console.log('This is the current position :'+i);
      i=3;
      }
        else if(i==3) {
        
          setCountG('green');
          setCountR('gray');
          setCountY('gray');   
      
         console.log('This is the current position :'+ i);
     i=1;
        }
    
  
    }, 5000);

  

    return () => {
      clearInterval(interval);
   
    }
  }, []);



function stopCounter (){
 
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
     
    </div>
     
      
    

  

    );
	
};
// export default TimeCount;


// <button type="button" class="btn btn-secondary">Secondary</button>