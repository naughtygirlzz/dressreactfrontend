
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [inputfield,Changeinputfield]=useState(
        {
        "Email":"",
        "Password":"",
        
        }
        
        )
        const inputhandler=(event)=>{

            Changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
                console.log(inputfield)
                if (inputfield.Email === "admin@gmail.com"&& inputfield.Password === "12345") {
                    navigate("/add")
                    
                } else {
                    alert("Invalid credentials")
                }
                
                    
                    
            }

  return (
    <div>
        
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <div class="card" >
  <img height="100pm" width="100px" src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
  <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label-control">Email</label>
                                <input type="text" className="form-control" name='Email' value={inputfield.Email} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name='Password' value={inputfield.Password} onChange={inputhandler}/>
                            
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <button  onClick={readvalue} className="btn btn-warning">Login</button>
                            </div>
      </div>
</div>
                            
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Login