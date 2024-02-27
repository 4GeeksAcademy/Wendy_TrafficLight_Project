import React from "react";
import { useState, useEffect } from "react";




//create your first component
export const TrafficLight= ()=> {

    const [counter, setCounter] = useState(0);
   

let  interval_sec;

  useEffect(() => {
     interval_sec = setInterval(() => {
    
  
    }, 10000);


    return () => {
      clearInterval(interval_sec);
   
    }
  }, [counter]);



function stopCounter (){
 
clearInterval(interval_sec);


}




    
    

	return	(
        <div class="container">
        <div class="trafficlight">
            <div class="redlight"></div>
            <div class="yellowlight"></div>
            <div class="greenlight"></div>
            <div class="walklight"><i class="fa-solid fa-person-walking fa-2xl"></i></div>

            </div>
     
    </div>
     
      
    

  

    );
	
};
// export default TimeCount;


// <button type="button" class="btn btn-secondary">Secondary</button>