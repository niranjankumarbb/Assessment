import React from 'react'
import {connect} from 'react-redux'
// import spinner from './spinner.svg'
// import {startPostProfile, startRemoveProfile, startGetProfile} from '../actions/profileAction'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
class Profile extends React.Component{
    constructor (){
        super()
        this.state= {
            fullname : '',
            email : '',
            mobile: null,
            course:'',
            location:'',
            referralCode:''
           
        }
    }

    componentDidMount(){
        console.log('entered profile componentDidMount')
        //  this.props.dispatch(startGetProfile(localStorage.getItem('tokenAssessment1')))
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
 
    handleDelete=()=>{
        const confirmed= window.confirm('Are you sure?')
         if(confirmed){
            const id=localStorage.getItem('tokenAssessment1')
            const redirect = ()=>{
              return  this.props.history.push('/')
            }
            // this.props.dispatch(startRemoveProfile(id,redirect))
       }
    }

    handleSubmit = (e)=>{
         e.preventDefault()        
         const formData ={
            fullname : this.state.fullname,
             email : this.state.email,
             mobile : this.state.mobile,
             course:this.state.course,
             location:this.state.location,
             referralCode:this.state.referralCode     
         }
         const redirect = ()=>{
            console.log('redirect function entered')
            return  this.props.history.push('/')
         }
        // this.props.dispatch(startPostProfile(formData))
    }


    render(){
        console.log('AddProfile state values ',this.state)
         return(
            <div  className='profile'>
                {this.props.profile ?(
                <div>
                 <h1>Profile</h1>
                <MDBContainer>
      <MDBRow>
         <MDBCol md="6"  >
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">CREATE YOUR ACCOUNT</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  placeholder='John Smith'
                  className="form-control"
                />
                <br />
                <label
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  placeholder='John@gmail.com'
                  className="form-control"
                />
                <br/>
                 <label
                  className="grey-text font-weight-light"
                >
                  Mobile
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  placeholder='+91 9847568595'
                  className="form-control"
                />
                <br/>
                <label
                  className="grey-text font-weight-light"
                >
                  Select a course
                </label>
                <select className="browser-default custom-select">
                <option>Select a course</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
                <br/><br/>
                 <label
                  className="grey-text font-weight-light"
                >
                  Location
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  placeholder='Enter city'
                  className="form-control"
                />
                <br/>
                <label
                  className="grey-text font-weight-light"
                >
                  Referral code(optional)
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  placeholder='Enter city'
                  className="form-control"
                />
                <br/>
                <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="#b0bec5"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                Other signup
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
                <MDBCol md="7" className="d-flex justify-content-center">
                  <p className="font-small grey-text mt-3">
                   click here to
                    <a
                      href="/login"
                      className="dark-grey-text ml-1 font-weight-bold"
                    >
                      login
                    </a>
                  </p>
                </MDBCol>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                </div>
                ):(
                    <h1></h1>
                //   <img src={spinner} alt="spinner" style={{width:'100px',margin:'auto',display:'block'}} />
                ) }  
          </div>                  
         )
    }
}

const mapStateToProps= (state)=>{
    console.log('AddProfile page mapStateToProps entered')
    return {
        profile : []

    }
}
export default connect( mapStateToProps)(Profile)