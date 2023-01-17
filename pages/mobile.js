import {useEffect, useState} from "react";
import styles from '../styles/Home.module.css'
function IncDecCounter(){
  let [state, setState]= useState(0);
  let incNum =()=>{

    setState(Number(state)+1);
  };
  let decNum = () => {
     if(state>0)
     {
      setState(state - 1);
     }
  }
  let reset = () => {
    setState(0);
  }
 let handleChange = (e)=>{
   setState(e.target.value);
  }

//   useEffect(() => {
//     if (JSON.parse(localStorage.getItem("state"))) { 
    
//        //checking if there already is a state in localstorage
//        //if yes, update the current state with the stored one
//        dispatch({ 
//           type: "init_stored", 
//           value: JSON.parse(localStorage.getItem("state")),
//        });
//     }
//  }, []);
 useEffect(() => {
    // if (state !== initialState) {
       
       localStorage.setItem("state", JSON.stringify(state)); 
    
       //create and/or set a new localstorage variable called "state"
    // }
 }, [state]);

   return(
    <>
    <div className={styles.out}>  
      <button className={styles.btn} type="button" onClick={decNum}>-</button>
    <input type="text" class="form-control" value={state} onChange={handleChange}/>
      <button className={styles.btn}  type="button" onClick={incNum}>+</button>
      <button className={styles.btn_2} type="button" onClick={reset}>Reset</button>
  </div>

   </>
  );
}

export default IncDecCounter;