import React,{useState}from 'react'
import './Style.css'
function Usage() {
  const [state,setState]=useState(0);
  const [color,setcolor]=useState('white');

  return (
    <div className='counter'>
      <div className='counter-wrapper'>
      <button className='increament' onClick={()=>{
        setState((state)=>{
          return state+1; 
        })
      }}>Increaments</button>
      <label style={{backgroundColor:color}}>{state}</label>
      <button className='decreament' onClick={()=>{
        setState((state)=>{
          return state-1; 
        })
      }}>decreament</button>
       <button className='green' onClick={()=>{setcolor('green')}}>Green</button>
       <button className='red' onClick={()=>{setcolor('red')}}>red</button>
      </div>
     
    </div>
  )
}

export default Usage
