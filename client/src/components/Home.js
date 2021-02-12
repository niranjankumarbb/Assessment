import React from 'react'
import {startRegisterUser} from '../actions/userAction'
import {connect} from 'react-redux'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { MDBContainer, MDBRow,   MDBCard, MDBCardBody, MDBInput,   MDBBtn } from 'mdbreact';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView  } from 'mdbreact'
import {   MDBCardTitle,   MDBCardGroup, MDBCardImage, MDBCardText, MDBFooter  } from "mdbreact";

class Home extends React.Component{
   state = {
      email : '',
      password : ''
   }

   handleChange =(e)=> {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    const formData= {
         email: this.state.email,
        password: this.state.password 
     }
    const redirect = ()=> {
        this.props.history.push('/users/login')
    }
    this.props.dispatch(startRegisterUser(formData, redirect))
}
   
   render(){
     console.log(this.state)
    return(
        <div  className='home'> 
         <div className='row'>
           {/* <div className= 'homeText'> */}
           <div className='col-md-5 offset-md-1'>
           <h2>Become your most</h2>
            <h2>unstoppable yourself</h2>
           <button>Get started</button>
           <button>Free trial</button>
        </div>        
          <div className='col-md-5 offset-md-1'>
          <MDBContainer>      
          <MDBCard>
            <MDBCardBody className='mx-4'>
            <form onSubmit={this.handleSubmit}>
               <div className='text-center'>
                <h3 className='yellow-text mb-4'>
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput label='Your email' name='email' value={this.state.email} onChange= {this.handleChange} group type='text' validate />
              <MDBInput label='Your password' name='password' value={this.state.password} onChange= {this.handleChange} group type='password' validate />
              <div className='md-form pb-3'>
                <div className='form-check my-4'  >
                  <MDBInput
                    label={
                      <>
                        Accept&nbsp;
                        <a href='http://www.wikipedia.com/apple' className='blue-text'>
                          the Terms and Conditions
                        </a>
                      </>
                    }
                    type='checkbox'
                    id='checkbox1'
                  />
                </div>
              </div>
              <MDBRow className='d-flex align-items-center mb-4'>
                <MDBCol md='6' className='text-center'>
                  <MDBBtn className='z-depth-1' type="submit" color='blue' rounded block>
                    Sign up
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='6'>
                  <p className='font-small grey-text d-flex justify-content-end'>
                    Have an account?
                    <a href='/login' className='blue-text ml-1'>
                      Log in
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
              </form>
            </MDBCardBody>
            <div className='footer pt-3 mdb-color lighten-3'>
              <MDBRow className='d-flex justify-content-center'>
                <p className='font-small white-text mb-2 pt-3'>
                  or Sign up with
                </p>
              </MDBRow>
              <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                <a href='http://www.facebook.com' className='fa-lg p-2 m-2 fb-ic'>
                  <MDBIcon
                    icon='facebook-f'
                    fab
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='http://www.twitter.com' className='fa-lg p-2 m-2 tw-ic'>
                  <MDBIcon
                    fab
                    icon='twitter'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
                  <MDBIcon
                    fab
                    icon='google-plus-g'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
              </MDBRow>
            </div>
          </MDBCard>
        {/* </MDBCol>
      </MDBRow> */}
    </MDBContainer>
    </div> 
  </div> 
 <br/><br/>
  <MDBContainer>
      <MDBCarousel
        activeItem={3}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
                <MDBCard>
                  <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                    <MDBCardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </MDBCardText>
                    <div className="text-center"> 
                    <MDBBtn color="primary" size="md">
                      read more
                    </MDBBtn>
                    </div>
                    <br/>
                  </MDBCardBody>
                </MDBCard>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <MDBCard>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="MDBCard image cap" top hover
                  overlay="white-slight" />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                  <MDBCardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </MDBCardText>
                  <div className="text-center"> 
                  <MDBBtn color="primary" size="md">
                    read more
                  </MDBBtn>
                  </div>
                  <br/>
              </MDBCardBody>
              </MDBCard>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
                <MDBCard>
                  <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                    <MDBCardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </MDBCardText>
                    <div className="text-center"> 
                    <MDBBtn color="primary" size="md">
                      read more
                    </MDBBtn>
                    </div>
                    <br/>
                  </MDBCardBody>
                </MDBCard>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <br/><br/>
    <MDBFooter>
    <div className="footer-copyright text-center py-3">
    <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                <a href='http://www.facebook.com' className='fa-sm p-2 m-2 fb-ic'>
                  <MDBIcon
                    icon='facebook-f'
                    fab
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='http://www.twitter.com' className='fa-sm p-2 m-2 tw-ic'>
                  <MDBIcon
                    fab
                    icon='twitter'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-sm p-2 m-2 li-ic'>
                  <MDBIcon
                    fab
                    icon="linkedin-in"
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-sm p-2 m-2 ins-ic'>
                  <MDBIcon
                    fab
                    icon="instagram"
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
              </MDBRow>
      </div>
    </MDBFooter>
  </div>
    )
}
}

export default  connect()(Home)