import React, {useState} from 'react';
import CreateEvent from "./createEvent";
import EventList from "./eventList"
import moment from 'moment'
function App() {
  const [inVals, setVals] = useState([]);

  function onSave(inVal){

    setVals([...inVals, inVal])
    /*
    inVals.sort(function( a , b ) {
      //console.log(`${a.date} - ${b.date} = `, a.date - b.date)

      return({ a.date - b.date } )
    })
    console.log(inVals.length, inVals)
     */
  }

  function deleteEvent(idx){

    setVals(inVals.filter((inVal, id) => id !== idx))
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
