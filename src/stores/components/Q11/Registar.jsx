import React, { useEffect, useState} from 'react'
 
import '../Q11/login.css'
import '../Q11/registar.css'
import { Link,useNavigate } from 'react-router-dom'
const Registar = () => {
  // const [file, setFile] = useState(null);
  const[inputs,setInputs]=useState([{
    name:"",
    email:"",
    password:"",
   
   
  }])
  
  const navigate=useNavigate();
  const handleSubmit =(e)=>{

    e.preventDefault()
    navigate("/login")
    
  }
  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(inputs));
  },[inputs])
 
  
 
 

    const handleFileChange = ( ) => {
    //   const selectedFile = event.target.files[0];
  
    //   if (selectedFile) {
    //     const reader = new FileReader();
  
    //     reader.onload = (e) => {
    //       const fileContent = e.target.result;
  
    //       // Store file content in localStorage
    //       localStorage.setItem('myFile', fileContent);
    //       setFile({ file: selectedFile, content: fileContent });
    //     };
  
    //     reader.readAsDataURL(selectedFile);
    //   }
    // };
  
    // const getFileFromLocalStorage = () => {
    //   // Retrieve file content from localStorage
    //   const storedFileContent = localStorage.getItem('myFile');
  
    //   if (storedFileContent) {
    //     setFile({ file: null, content: storedFileContent });
    //   }
 
  }
  return (
    <div className='bg'>
      <Link to="/" className='emart' >E-Mart</Link>
      <Link to='/login' className='btn signUp' >Login</Link>
      <div className="loginCard">
      <h2 className=' head mb-2  '>E-Mart SignUp</h2>
      {/* <form action='#' >
        <div className="form-group">
    <label for="exampleInputName">UserName</label>
    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter UserName" minLength="3" autoFocus required title='Please Enter more then 3 Charactors' 
    name='name'
    value={inputs.name} 
     onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" title="abcd@gmail.com" autocomplete="yes" 
     name='email'
     value={inputs.email} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}  />
 
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  
     name='password'
     value={inputs.password} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}  />
  </div>
  <div className="form-group">
    <label for="CexampleInputPassword1">Conform Password</label>
    <input type="password" className="form-control" id="CexampleInputPassword1" placeholder="Password"
     name='cpassword'
     value={inputs.cpassword} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}
    />
 
  <Link type="submit" className="btn btn-primary mt-3 submit" onClick={handleSubmit}>SignUp</Link>
  </div>
</form> */}
 {/* <div class="form"> */}
       
       <form action="#" onSubmit={handleSubmit}>
         
           <h2  >Registar Form</h2>
           <div class="name">
               <label for="name">Name</label>
               <input type="text" placeholder="Enter Name" required minlength="5" autofocus autocomplete="yes"
                name='name'
                value={inputs.name} 
                 onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}
               /> 
           </div>
           <div class="name">
               <label for="name">Email</label>
               <input type="email" placeholder="Enter email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                   title="abcd@gmail.com" autocomplete="yes"
                   name='email'
     value={inputs.email} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})
    
      
    }/>
           </div>
           <div class="name">
               <label for="name">Phone</label>
               <input type="tel" placeholder="Enter Phone" required maxlength="10" pattern="[7-9]{1}[0-9]{9}"
                   title="Phone number with 7-9 and remaing 9 digit with 0-9" autocomplete="yes"
                   
                   name='number'
                   value={inputs.number} 
                    onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})} 
                   
                   />
           </div>
           <div class="name">
               <label for="name">password</label>
               <input type="password" placeholder="Enter password" required maxlength="50" minlength="8"
               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
               title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters Ex:@Abcd1235" autocomplete="yes"
               name='password'
     value={inputs.password} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}
               
               />
           </div>
           {/* <div class="name">
               <label for="file">Upload Profile Pic</label>
               <input  type="file" id="fileupload" placeholder="upload file" required  
      onChange={handleFileChange}
               
               />
           </div> */}
     {/* <img src={file.content} alt="Preview" style={{ maxWidth: '100%' }} /> */}

           <button type="submit" class="submit btn btn-primary" >Submit</button>
       </form>
   </div>
      </div>
     
     
      // </div>
  )
}

export default Registar