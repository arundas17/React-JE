import React from 'react'

function Students(props) {
  return (
    <div>
      <h1>my name is {props.name}</h1>
      <h1>my age is {props.age}</h1>
      <h1>my std is {props.standerd}</h1>
      <h1>my rank is {props.ranks}</h1>
    </div>
  )
}

export default Students

