import React from 'react';
import Students from './students'; 

function ClassComponent() {
    let name = "arun";
    let age = 32;
    let std = 67;
    let rank = "1";

    return (
        <div>
            <h1>Class XB</h1>
            <Students name={name} age={age} standerd={std} ranks={rank} />
        </div>
    );
}

export default ClassComponent;
