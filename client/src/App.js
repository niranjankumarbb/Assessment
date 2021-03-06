import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import {connect } from 'react-redux'
import Home from './components/Home'
import Profile from './components/Profile'
import LeaderBoard from './components/LeaderBoard'
import Details from './components/Details'
import Help from './components/Help'
import Login from './components/Login'
import Register from './components/Register'
import {startLogout} from './actions/userAction'
import {Navbar, Nav, DropdownButton, Dropdown, NavDropdown} from 'react-bootstrap'
import {MDBBtn, MDBCol , MDBFormInline, MDBIcon, button } from "mdbreact";
 
function App(props){

 const handleClick= ()=>{
   props.dispatch(startLogout())
 }
  
    return (
     <div >
        <BrowserRouter>
       {(Object.keys(props.user).length>0)? (
          <div className='App'>
         <Navbar bg= 'info' variant="dark">        
         {/* <Navbar bg= 'light' variant="dark">         */}
         <Navbar.Brand href="#">Inquel</Navbar.Brand>
               <Nav.Link href='#'> 
                  <MDBCol md="15" >
                  <MDBFormInline className="md-form">
                  <MDBIcon icon="search" />
                  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                  </MDBFormInline>
                  </MDBCol>
               </Nav.Link>
               <Nav className="ml-auto">
               <Nav.Link href='/'>Features</Nav.Link>
               <NavDropdown title="Study guide" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <Nav.Link href='/board'>Leader Board</Nav.Link>
               <Nav.Link href='/profile'>Buy a course</Nav.Link>
               <Nav.Link href='/login'>Login</Nav.Link>
               <Nav.Link href='/'>Signup</Nav.Link>
               <Nav.Link href='/details'> 
               <MDBBtn size="sm" color="brown" ><MDBIcon icon="cart-arrow-down" className="ml-2" /></MDBBtn>
               </Nav.Link>
               <Nav.Link href='/help'>Help?</Nav.Link>
               <Nav.Link href='#' onClick={handleClick}>Logout</Nav.Link>
               </Nav>
            </Navbar>
          
          

         </div> 
        ):(
           <div className='App'>
               <Navbar bg="info" variant="dark">
                <Navbar.Brand href="#">Inquel</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/users/login'>Login</Nav.Link>
                <Nav.Link href='/users/register'>Register</Nav.Link>    
                </Nav>
            </Navbar>
         
           
         </div>
         )}  

         <Switch> 
           <Route path='/' component={Home} exact={true}/>
           <Route path='/users/login' component={Login}  />
           <Route path='/users/register' component={Register}  />
           <Route path='/profile' component={Profile}  />
           <Route path='/login' component={Login}  />
           <Route path='/board' component={LeaderBoard}  />
           <Route path='/register' component={Register}  />
           <Route path='/details' component={Details}  />
           <Route path='/help' component={Help}  />
           </Switch>
      </BrowserRouter>
       </div>
   )
}
const mapStateToProps = (state)=>{
 return {
       user : state.user 
 }
}
export default connect(mapStateToProps)(App)