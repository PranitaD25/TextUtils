import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick=()=>{
    //console.log("Uppercase was clicked:",text)
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }

  const handleLowClick=()=>{
    //console.log("Lowercase was clicked:",text)
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
  }

  const handleInverseCaseClick=()=>{
    //console.log("Inverse Case was clicked:",text)
    var newText='';
    for(let i=0;i<text.length;i++)
    {
      var temp=text.charAt(i);
      if(temp===temp.toUpperCase())
      {
        temp=temp.toLowerCase();
      }
      else
      {
        temp=temp.toUpperCase();
      }
      newText+=temp;
    }
    setText(newText)
    props.showAlert("Converted to Inversecase!","success")
  }

  const handleClearClick=()=>{
    //console.log("Clear click was clicked:",text)
    let newText='';
    setText(newText)
    props.showAlert("Cleared Text!","success")
  }


  const handleCopyClick=()=>{
    // console.log("Copy Click was clicked:",text)
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!","success")
  }

  const handleExtraSpacesClick=()=>{
      // console.log("Handle extra spaces Click was clicked:",text)
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra spaces!","success")
  }



  const handleOnChange=(event)=>{
    //console.log("Handle On Change!")
    setText(event.target.value)
  }


  const [text, setText] = useState("");
 
  //text="hi" wrong way to change state
  //setText("New Text") right way to change state
  return (
    <>
   <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>

    <h1>{props.heading}</h1>

    <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="8" value={text
      } style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>

      <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert to Uppercase</button>

      <button className="btn btn-primary mx-1 my-3" onClick={handleLowClick}>Convert to Lowercase</button>

      <button className="btn btn-primary mx-1 my-3" onClick={handleInverseCaseClick}>InverseCase Text</button>

      <button className="btn btn-primary mx-1 my-3" onClick={handleClearClick}>Clear Text</button>

      <button className="btn btn-primary mx-1 my-3" onClick={handleCopyClick}>Copy Text</button>

      <button className="btn btn-primary mx-1 my-3" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>

    </div>
    </div >

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p><b>{text?text.trim().split(/[ ]+/).length:0}</b> words and <b>{text.length} </b>characters</p>
      <p><b>{0.008*text.split(" ").length}</b> Minutes to Read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>

    </>
  )
}
