import React from 'react';
import Students from './students'; 

function ClassComponent() {
    let name = "arun";
    let age = 23;
    let std = 11;
    let rank = "1";

    return (
        <div>
            <h1>Class XB</h1>
            <Students name={name} age={age} standerd={std} ranks={rank} />
        </div>
    );
}

export default ClassComponent;
