import React from "react";
import { useState, useEffect } from "react";


//create your first component
export const TrafficLight2= ()=> {

  const [countR2, setCountR2] = useState('red');
  const [countY2, setCountY2] = useState('gray');
  const [countG2, setCountG2] = useState('gray');   

  
  

let  interval;
let i = 1;
  useEffect(() => {
 

     interval = setInterval(() => {
    
        if(i==1)
        {    
          setCountG2('gray');
          setCountR2('gray');
          setCountY2('yellow');  
          console.log('This is the current position :'+i);   
        i=2;
        
          
        }

        else if(i==2){
                  
          setCountG2('green');
          setCountR2('gray'); 
          setCountY2('gray');
        console.log('This is the current position :'+i);
        i=3;
        }
          else if(i==3) {
           
            setCountG2('gray');
            setCountR2('red');
            setCountY2('gray');   
        
           console.log('This is the current position :'+ i);
       i=1;
          }
    
   
   
  
    }, 2000);

  
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
            <div class="countlight"><span>00</span></div>
            <div class="redlight" style={{ backgroundColor:countR2 }}></div>
            <div class="yellowlight" style={{ backgroundColor:countY2 }}></div>
            <div class="greenlight" style={{ backgroundColor:countG2}}></div>
            <div class="walklight"><i class="fa-solid fa-person-walking fa-2xl"></i></div>

            </div>
            <button type="button" class="btn btn-secondary">Press the button if you want to cross</button>
     
    </div>
     
      
    

  

    );
	
};
// export default TimeCount;


// <button type="button" class="btn btn-secondary">Secondary</button>