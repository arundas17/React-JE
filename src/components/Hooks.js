import React from 'react';
import { useState } from 'react';
import './Style.css'

function Hooks() {
  const [state, setState] = useState(
    {
      Name:"arun",
      class:"IX",
      Rank:112,
    }
  );

  return (
    <div className="outer-react" style={{ textAlign: 'center' }}>
     {state.Name}<br/>
     {state.class}<br/>
     {state.Rank}<br/>
     <button onClick={()=>setState({...state,Rank:82})}>Change</button>
    </div> 
  );
}

export default Hooks;