import React from 'react'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import {startLoginUser} from '../actions/userAction'
class Login extends React.Component{
       state= {
            email: '',
            password : ''
        }
    

    handleChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault()
        const formData={
            email : this.state.email,
            password : this.state.password
        }
        localStorage.setItem('profileEmail',this.state.email)
        const redirect = ()=>{
          return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
       }

    render(){
        console.log(this.state)
        return(
            <div className='login'>
              <br/><br/>
     <MDBContainer>
      <MDBRow center>
      {/* <MDBRow start center end around between> */}
        <MDBCol   md="6">
        {/* <MDBCol size="12"> */}
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit}>
                <p className="h2 text-left py-4">Login</p>
                <MDBCol md="7" className="d-flex justify-content-start">
                  <p className="font-small grey-text mt-20">
                   Enjoy unlimited learning| Enjoy 7 days free trial
                  </p>
                </MDBCol>
                 <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="defaultFormCardNameEx"
                  placeholder='xyz@gmail.com'
                  name= 'email'
                  onChange={this.handleChange}
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                Password
                </label>
                <input
                  type="password"
                  id="defaultFormCardEmailEx"
                  name='password'
                  onChange={this.handleChange}
                  placeholder='...........'
                  className="form-control"
                />
                 <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text ml-1 font-weight-bold"
                >
                  Password?
                </a>
              </p>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    LOGIN
                   </MDBBtn>
                </div>
                <MDBCol md="7" className="d-flex justify-content-center">
                  <p className="font-small grey-text mt-3">
                    Don't have an account? Join inquel online learning
                  </p>
                </MDBCol>

                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                Other login
              </p>
              <div className="row my-3 d-flex justify-content-center">
              <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
                 <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>            </div>                    
        )
    }
}
export default connect()(Login)