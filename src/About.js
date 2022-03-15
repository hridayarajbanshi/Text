import React,{useState} from 'react'

export default function About() {
    const [btnText, setBtnText] = useState("Dark Mode");
    const [textStyle, setTextStyle] = useState({
        color:"black",
        background: "white",
        padding:"40px",
        boxShadow: "0px 0px 20px gray",
        borderRadius:"20px",
    })
  let  btnStyle ={
    backgroundColor: "rgb(19,126,154)",
    background:" linear-gradient(90deg, rgba(19,126,154,1) 0%, rgba(200,46,174,1) 47%, rgba(16,27,218,1) 100%)",
float:"right",

  }
  const darkMode = ()=>{
      if(textStyle.color === "black"){
          setTextStyle({
            boxShadow: "0px 0px 20px gray",
              color:"white",
              background:"black",
              padding:"40px",
              borderRadius:"20px",
              transition: "all 0.5s"
          })
          setBtnText("Light Mode");
      }
      else{
          setTextStyle({
            boxShadow: "0px 0px 20px gray",
            color:"black",
            background: "white",
            padding:"40px",
            borderRadius:"20px",
            transition: "all 0.5s"
          })
          setBtnText("Dark Mode");

      }
  }
  return (
    <div className='container mt-5' style={textStyle}>
        <h1>About</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos provident pariatur iure odit totam quibusdam sapiente repellendus architecto facere cumque sit quam asperiores deserunt fugit, itaque distinctio magni harum soluta?</p>
<button onClick={darkMode} className='btn btn-secondary my-3' type='button' style={btnStyle}>{btnText}</button>
    </div>
  )
}
