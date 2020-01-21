import React, {useState} from 'react';
import CreateEvent from "./createEvent";

function EventList({inVals, deleteEvent}){


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


function App() {
  const [inVals, setVals] = useState([]);

  function onSave(inVal){
    //inVals.push(inVal)
    setVals([...inVals, inVal])
    console.log(inVals.length, inVals)

  }

  function deleteEvent(idx){
    delete inVals[idx];
  }

  return (

    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>The ACME event site</h1>
        </div>
      </div>
      <div className="row">
        <div name= "input_column" className="col border">
          <CreateEvent onSave= { onSave }/>
        </div>
        <div className="col border">
          Submited events will appear here:
          <EventList inVals= { inVals } deleteEvent = { deleteEvent} />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          Neel © 2020
        </div>
      </div>
    </div>
  );
}

export default App;
