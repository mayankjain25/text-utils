import React, { useState } from 'react'
import './TextForm.css'
import { CopyToClipboard } from "react-copy-to-clipboard";



export default function TextForm(props) {
    const [text,setText]=useState("")
    const [numWords,setNumWords] = useState(0);
    const [numChar,setNumChar] = useState(0);
    const [isCopied,setIsCopied]=useState(false);
    


    const onCopyText=()=>{
        setIsCopied(true);
        setTimeout(()=>{
            setIsCopied(false);
        },1000)
    }

   
    const handleUpClick = () =>{
        console.log("Upper was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
        countWords(text);
        countCharacters(text);
        // let len = countWords(text)
        // setNumWords(len)
        // console.log("change triggered");
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        
        setText(newText);
    }

    const handleTrimClick=()=>{
        setText(text.trim());
    }

    const handleCapitalizeClick=()=>{
        let newText=text;
        const arr=newText.split(" ");
        
        for(let i=0;i<arr.length;i++){

            arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        newText=arr.join(" ");
        setText(newText);
    }

    const resetWord=()=>{
        setNumWords(0);
        setNumChar(0);
    }

    const countWords=(text)=>{
        const newT=text.split(" ");
        if(newT===[("")])setNumWords(0);
        else setNumWords(newT.length);
    }

    const countCharacters = (text) =>{
        setNumChar(text.length)
    }
    
    const handleOccurrenceClick=()=>{

            let count=0;
            const key=prompt("Enter the value to find its occurrences: ")
            const arr=text.split(" ");
            for(let i=0;i<arr.length;i++){
                if(arr[i]===key) count=count+1;
            }

            alert(key + " occurs "+ count+ " times")
    }
    return (
        <div style={{color: props.mode==='light'?'black':'white'}}>
            <div className={`mb-3 container`} >
                <h1 className="textform-heading">{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="my-textarea" className="form-label my-3">{props.heading}</label> */}
                    
                    
                    <textarea className="form-control input-textarea" style={{backgroundColor: props.mode==='light'?'white':'lightgray'}} id="my-textarea" rows="10" value={text} onChange={handleOnChange} onKeyDown={(e)=>{
                        if(e.key==='Backspace')
                        {resetWord();console.log("Backspace")}
                        }
                        }>
                        
                    </textarea>

                    <CopyToClipboard text={text} onCopy={onCopyText}>
                            <div className="copy-area">
                            <button className="btn btn-dark my-3">Copy</button>
                            
                            </div>
                     </CopyToClipboard>
                </div> 
            </div>

            <div className="container">

            <p>{numWords} Words, {numChar} Characters</p>
            <div className="text-btn-container">

                <button onClick={handleUpClick}  className="btn btn-primary text-buttons ">Convert to Upper Case</button>
                <button onClick={handleLowClick} className="btn btn-primary text-buttons">Convert to Lower Case</button>
                <button onClick={handleTrimClick} className="btn btn-primary text-buttons">Remove Trailing spaces</button>
                <button onClick={handleCapitalizeClick} className="btn btn-primary text-buttons">Capitalize String</button>
                <button onClick={handleOccurrenceClick} class="btn btn-primary text-buttons">Find Occurrence</button>
            </div>
            </div>

            

            <div className="container text-preview">
                <h2>Text Preview</h2>
                <p>{text===""?"(Enter some text in the textbox to preview)":text}</p>
            </div>
        </div>
    )
}
