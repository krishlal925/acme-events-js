import React from 'react';


function EventList(props){
  console.log(props)
  const {inVals, deleteEvent} = props

  return(
    <ul className= "list-group">
      {
        inVals.map((inVal, idx) =>{
          return(
            <li className="list-group-item" key= {idx}>
              <h2> { inVal.title}</h2>
              <p>on { inVal.date}</p>
              <p>{inVal.content}</p>
              <button onClick= {() => deleteEvent(idx)} > X</button>
            </li>
          )
        })
      }
    </ul>
  )
}
export default EventList;
