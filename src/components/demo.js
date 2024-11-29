import React, { useState } from 'react'
import './Style.css'

function Demo (){
   const [name,SetName]=useState('');
        return(
            <div>
             <form className='label-1'>
              <label>Username</label>
              <input value={name} onChange={(e)=>SetName(e.target.value)}/>
              <br/>
              {
               console.log(name)
              }
              
             </form>
            </div>
            
        )
}
 export default Demo