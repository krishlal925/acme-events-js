import React, {useState} from 'react';


function App() {
  const [inVals, setVals] = useState([]);
  const [inVal, setVal] = useState({ title: '', date: "2020-01-01", content: '' });

  function onChange(ev){
    //console.log(ev.target)
    const change = {};
    change[ev.target.id] = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setVal({...inVal, ...change})
    console.log(ev.target, change, inVal)
  }

  function onSubmit(ev){
    ev.preventDefault()
    inVals.push(inVal)
  }


  function eventList(){
    //this will print the event list later
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
          <form onSubmit= {onSubmit}>
            <div className="form-group row">
              <label className="col-2 col-form-label">Date</label>
              <div className="col-10">
                <input className="form-control" type="date" value={inVal.date} onChange= {onChange} id="date"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Title</label>
              <div className="col-10">
                <input className="form-control" type="text" placeholder= " Event Title" value= {inVal.title} onChange= {onChange} id="title"/>
              </div>
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea className="form-control" rows="3" value= {inVal.content} placeholder= "type event details here" onChange= {onChange} id= "content"></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <div className="col border">
          Submited events will appear here:
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
