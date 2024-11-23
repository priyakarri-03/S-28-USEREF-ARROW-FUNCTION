import React, { useRef } from 'react'

export default function MarkSheet() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let engInputRef=useRef();
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();
    let resultLableRef=useRef();
  return (
    <div>
        <form>
            <h1>Tenth MarkSheet</h1>
            <div>
                <label>First Name</label>
                <input type='text' ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Telugu</label>
                <input type='number' ref={telInputRef}></input>
            </div>
            <div>
                <label>English</label>
                <input type='number' ref={engInputRef}></input>
            </div>
            <div>
                <label>Hindi</label>
                <input type='number' ref={hinInputRef}></input>
            </div>
            <div>
                <label>Maths</label>
                <input type='number'ref={matInputRef}></input>
            </div>
            <div>
                <label>science</label>
                <input type='number'ref={sciInputRef}></input>
            </div>
            <div>
                <label>Social</label>
                <input type='number' ref={socInputRef}></input>
            </div>
            <div>
                <button type='button ' onClick={()=>{
                    let firstName= firstNameInputRef.current.value;
                    let lastName= lastNameInputRef.current.value;
                    let engMarks=Number(engInputRef.current.value);
                    let telMarks=Number(telInputRef.current.value);
                    let hinMarks=Number(hinInputRef.current.value);
                    let matMarks=Number(matInputRef.current.value);
                    let sciMarks=Number(sciInputRef.current.value);
                    let socMarks=Number(socInputRef.current.value);
                    let totalMarks=engMarks+telMarks+hinMarks+matMarks+sciMarks+socMarks;
                    resultLableRef.current.innerHTML=`${firstName} ${lastName} 's Total Marks are ${totalMarks}`
                    
                    // engInputRef.current.style.backgroundColor= "orange"
                    // alert(engInputRef.current.value);
                    // console.log("hai")
                    alert(`${firstName} ${lastName} 's Total Marks are ${totalMarks}`)
                }}>Click To Obtain Total of Marks</button>
                
            </div>
            <label style={{width:"500px"}} ref={resultLableRef}>Please Enter Your Marks and Calculate</label>
        </form>
    </div>
  )
}

