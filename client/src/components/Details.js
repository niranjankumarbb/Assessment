import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBCardBody, MDBIcon  } from "mdbreact";

function Details(props){

    return(
        <div  className='details'>
            <br/><br/> 
           <MDBContainer>
              <MDBRow>
              <MDBCol md="12"  >
                    <div class="card">
                     <div class="card-body">
                        <MDBRow>
                        <MDBCol md="1">
                        <div className="form-group">
                        <label htmlFor="example3">Type</label>
                        <input type="text" id="example3" placeholder='Quiz master' className="form-control form-control-sm" />
                        </div>
                        </MDBCol>
                        <MDBCol md="1">
                        <div className="form-group">
                        <label htmlFor="example3"> </label>
                        <input type="text" id="example3" placeholder='Course topper'className="form-control form-control-sm" />
                        </div>
                        </MDBCol>
                        <MDBCol md="2">
                         <div className="form-group">
                        <label htmlFor='date'>Date</label>
                        <input type='date' id='date'  name='date'   />
                         </div>
                        </MDBCol>
                        <MDBCol md="2">
                         <div className="form-group">
                        <label htmlFor='date'>  </label>
                        <input type='date' id='date'  name='date'   />
                         </div>
                        </MDBCol>
                        </MDBRow>
                        <br/><br/>
                        <MDBRow>
                        <MDBCol md="2">
                        <div className="form-group">
                         <label>Subject</label> <br/>
                         <select name='subject'     className="form-control">
                          <option value='subject1'>Subject01</option>
                          <option value='Subject2'>Subject2</option>
                          <option value='Subject3'>Subject3</option>
                          <option value='Subject4'>Subject4</option>
                          <option value='Subject5'>Subject5</option>                           
                     </select>   
                    </div>
                        </MDBCol>
                        <MDBCol md="2">
                        <div className="form-group">
                         <label>Instituatic04</label> <br/>
                         <select name='Institiuatic' className="form-control">
                          <option value='Institiuatic1'>Institiuatic1</option>
                          <option value='Institiuatic2'>Institiuatic2</option>
                          <option value='Institiuatic1'>Institiuatic3</option>
                          <option value='Institiuatic1'>Institiuatic4</option>
                      </select>   
                    </div>
                        </MDBCol>
                        <MDBCol md="2">
                        <div className="form-group">
                         <input type="text" id="example3" placeholder='Clear all' className="form-control form-control-sm" />
                        </div>
                        </MDBCol>
                        <MDBCol md="2">
                        <div className="form-group">
                         <input type="text" id="example3" placeholder='filter'className="form-control form-control-sm" />
                        </div>
                        </MDBCol>
                      </MDBRow>
                     </div>
                   </div>
              </MDBCol>
              </MDBRow>
           </MDBContainer>    
        </div>
    )
}

export default Details