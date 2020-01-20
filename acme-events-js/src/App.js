import React, {useState} from 'react';
import CreateEvent from "./createEvent"

function EventList(inVals){
  //this will print the event list later
  //console.log(inVals)
  return(
    <div>

    </div>

  )
}


function App() {
  const [inVals, setVals] = useState([]);



  function onSave(inVal){
    //inVals.push(inVal)
    setVals([...inVals, inVal])
    console.log(inVals.length, inVals)

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
          <EventList inVals= { inVals } />
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
