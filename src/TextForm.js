import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
 
  const convertTextCapital = ()=>{

    let newText =  text.toUpperCase();
    setText(newText);}
  const convertTextSmaller = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{

    setText(event.target.value);
  }

  return (
    <div>
 <div className="form-group container mt-5">
    <label htmlFor="exampleFormControlTextarea1"><h3>{props.heading}</h3></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className='btn btn-dark mt-3 mx-3' onClick={convertTextCapital}>ABC</button>
    <button className='btn btn-dark mt-3' onClick={convertTextSmaller}>abc</button>
  </div>
  <div className="container mt-4">
    <div className='row'>
      <div className='col-md-6'>
        <h3>Your text preview</h3>
        <p>{text.length>0?text:"Enter your text"}</p>
      </div>
      <div className='col-md-6'>
        <h3>Your text summary</h3>
        <p>Characters count :{text.length}</p>
        <p>Words cound :{text.split(" ").length}</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
      </div>
    </div>
  </div>
    </div>
  )
}
