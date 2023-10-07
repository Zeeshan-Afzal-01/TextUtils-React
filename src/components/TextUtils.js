import React,{useState} from 'react'

export default function PracticeExercise(props) {


  const [alertMessage,updatealertMessage]=useState(null)
  const [alertColor,updatealertColor]=useState(null)

  let alertTimeout;
  if (alertMessage !== '') {
    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(() => {
      updatealertColor(null);
      updatealertMessage(null);
    }, 3500);

  }
  

  const [text,updateText]=useState('')
  let upper_case = () => {
    if (text === '') {
      updatealertMessage( 'The Textbox is empty!');
      updatealertColor('alert-warning')
    } else {
      let newtext = text.toUpperCase();
      updateText(newtext);
      updatealertMessage( 'The Text is Converted in UpperCase');
      updatealertColor('alert-success')
    }
  }
  
  let lower_case = () => {
    if (text === '') {
      updatealertMessage( 'The Textbox is empty!');
      updatealertColor('alert-warning')
    } else {
      let newtext = text.toLowerCase();
      updateText(newtext);
      updatealertMessage('The Text is Converted in LowerCase');
      updatealertColor('alert-success')
    }
  }
  


    const [visibility,updateVisibility]= useState({
      color:"black",
      backgroundColor:"white"
    })
    const [navbar,updatenavbar]= useState('navbarColor1')



    let dark_mode = () => {
      if (visibility.color === 'black') {
        
        updateVisibility({
          color: 'white',
          backgroundColor: '#363539 ',
          
        });
        updatenavbar('navbarColor2')
       
       
        document.body.style.backgroundColor = '#363539';
        document.body.style.color = 'white';
        updatealertMessage('The Dark Mode is Activated');
        updatealertColor('alert-success');
        document.title='TextUtils - Dark Mode';
        setInterval(() => {
          document.title='Textutils'
        }, 1700);
       
      } else {
      
        updateVisibility({
          color: 'black',
          backgroundColor: 'white',
        });
        
        updatenavbar('navbarColor1')
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        updatealertMessage('The Light Mode is Activated');
      updatealertColor('alert-success')
      document.title='TextUtils - Light Mode'
      setInterval(() => {
        document.title='Textutils'
      }, 1700);
      }
    };

    let clear_text=()=>{
        return updateText('');
    }

    let word_check = () => {
      let word = text.split(/\s+/);
      let wordcount= word.length;
     
      return wordcount;
    }

    const changeStatement=(event)=>{
        updateText(event.target.value);
    }

    const [foundEmails, setFoundEmails] = useState([]);
    let email_founder=()=>{
      let word=text.split(' ');
      const email=word.filter((words) =>{
        return words.includes('@')&& words.includes('.com');
      });
      setFoundEmails(email)
      if(text==='')
      {
        updatealertMessage( 'The Textbox is empty!');
        updatealertColor('alert-warning')
      
      }
      else if(email.length===0)
      {
        updatealertMessage('The Email is not found in this text!');
        updatealertColor('alert-danger')
      }
      else
      {
        updatealertMessage('The Email found Successfully');
        updatealertColor('alert-success')
      }
      
    }
    const [phoneNumber, setphoneNumber] = useState([]);
  
    const MobileNumber_founder= () => {
      const words = text.split(' ');
      const numbers = words.filter((word) => word.includes('+92') && word.length === 13);
      setphoneNumber(numbers);
      if(text==='')
      {
        updatealertMessage( 'The Textbox is empty!');
        updatealertColor('alert-warning')
      
      }
      else if(numbers.length===0)
      {
        updatealertMessage('The PhoneNumber is not found in this text!');
        updatealertColor('alert-danger')
      }
      else
      {
        updatealertMessage('The PhoneNumber  found Successfully');
        updatealertColor('alert-success')
      }
      
    }


  return (
    <>

   <div style={visibility}>
    <nav className={`navbar navbar-expand-lg ${navbar}`}  >
    <div className="container-fluid">
    <span className={`title navbar-brand ${navbar}`} >TextUtils</span>

    <div className="nav-mode form-check form-switch">
  <input className="form-check-input" onClick={dark_mode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
<div className={`alert ${alertColor} d-flex align-items-center`} role="alert">
  <p className='mt-3'>{alertMessage}</p>
</div>
    <div className='textbox'>
      <textarea  placeholder="Enter your text"style={visibility} value={text} onChange={changeStatement} className='my-3 textarea' id="text-box mybox" cols="130" rows="40"></textarea>
      <div className='buttons'>
      <button onClick={upper_case} type="button" className="btn btn-primary mx-1 my-1">Click Me For Uppercase</button>
      <button onClick={lower_case} type="button" className="btn btn-primary mx-1 my-1">Click Me For Lowercase</button>
      <button onClick={email_founder}  type="button" className="btn  btn-primary  mx-1 my-1">Email Founder</button>
      <button onClick={MobileNumber_founder}  type="button" className="btn btn-primary mx-1 my-1">Mobile Number Founder</button>
      <button onClick={clear_text}  type="button" className="btn  btn-primary  mx-1 my-1">Clear Text</button>

      </div>
    </div>
    
    <div className='counter'>
    <h2>Words Counter</h2>
    <p>{word_check()} Words {text.length} Character</p>
    <h2>Email Addresses Found:</h2> 
      <ul>
        {foundEmails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
      <h2>Phone Number Found:</h2>
      <ul>
        {phoneNumber.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
</div>
    </>
  )
}
