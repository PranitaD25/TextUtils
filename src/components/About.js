import React,{useState} from 'react'

export default function About(props) {

    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle={
      color:props.mode==='dark'?'white':'#34363e',
      backgroundColor:props.mode==='dark'?'#34363e':'white',
    }

    // const[btnText,setBtnText]=useState("Enable Dark Mode")
    

    // const toggleStyle=()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }



   return (
      <div className='container' style={myStyle}>
          <h1 className='my-3' style={myStyle}>About Us</h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your Text</strong>    
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          TextUtils is a free character counter tool made using React.js and BootStrap.It allows you to count the number of words, characters, and lines in a text input. You can also convert the text to uppercase or lowercase, and calculate the expected time to read the document.Here are some of the features of TextUtils:Count the number of words, characters, and lines in a text input.Convert the text to uppercase or lowercas.Calculate the expected time to read the document.Clear the text input.Copy the text input to the clipboard.TextUtils is a great tool for writers, students, and anyone who needs to count words or characters in a text. It is easy to use and can be accessed from any web browser. 
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to Use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
         TextUtils is completely free to use.There are no hidden fees or subscription charges.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong> Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils can be accessed from any web browser.There is no need to download or install any software.
        </div>
      </div>
    </div>
  </div>
   {/* <div className="container my-3">
      <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
   </div> */}
</div>
  )
}
