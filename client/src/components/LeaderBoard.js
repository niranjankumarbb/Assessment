import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBCardBody, MDBIcon } from "mdbreact";
import {MDBFormInline} from "mdbreact"
class Profile extends React.Component{
    constructor(){
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

    render(){
        console.log('AddProfile state values ',this.state)
         return(
           <div>
            <br/><br/> 
            <MDBContainer>
              <MDBRow>
              <MDBCol md="12"  >
                    <div class="card">
                    <div class="card-body">
                    <button type="button" class="btn btn-primary">Quiz masters</button>                  
                    <button type="button" class="btn btn-primary">Course toppers</button>
                    <MDBCol md="2" >
                    <MDBFormInline className="md-form">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    </MDBFormInline>
                    </MDBCol>
                    <button type="button" class="btn btn-indigo btn-md">Button<i class="fas fa-filter ml-2" aria-hidden="true"></i></button>
                    <div class="btn-group shadow-0">
                        <button
                            type="button"
                            class="btn btn-link dropdown-toggle"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li>
                            <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        </div>
                        <br/>
                        <span>Quiz masters of month-october 2020</span>
                        <table class="table table-borderless">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Points</th>
                            <th scope="col">Subjects</th>
                            <th scope="col">Instituatic</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                            <img
                                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                                style={{height:'40px',width:'40px'}}
                                 src='https://scholarlyoa.com/wp-content/uploads/2020/05/students.jpg'
                            />                            
                            </th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Instituatic1</td>                            
                            </tr>
                            <tr>
                            <th scope="row">
                            <img
                                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                                style={{height:'40px',width:'40px'}}
                                 src='https://scholarlyoa.com/wp-content/uploads/2020/05/students.jpg'
                            />
                            </th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>                             
                            <td>Instituatic2</td>                             
                             </tr>
                            <tr>
                            <th scope="row">
                            <img
                                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                                style={{height:'40px',width:'40px'}}
                                 src='/image/student.jpg'
                            />
                            </th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>                             
                            <td>Instituatic3</td>                             
                           </tr>
                            <tr>
                            <th scope="row">
                            <img
                                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                                style={{height:'40px',width:'40px'}}
                                 src='https://scholarlyoa.com/wp-content/uploads/2020/05/students.jpg'
                            />
                            </th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>                            
                            <td>Instituatic4</td>                            
                            </tr>
                            <tr>
                            <th scope="row">
                            <img
                                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                                style={{height:'40px',width:'40px'}}
                                 src='https://scholarlyoa.com/wp-content/uploads/2020/05/students.jpg'
                            />
                            </th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>                             
                            <td>Instituatic5</td>  
                            </tr>     
                            <tr>
                            <th scope="row">
                            <img
                                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                                style={{height:'40px',width:'40px'}}
                                 src='https://scholarlyoa.com/wp-content/uploads/2020/05/students.jpg'
                            />
                            </th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>                            
                            <td>Instituatic6</td>                             
                            </tr>
                        </tbody>
                        </table>
                      </div>
                   </div> 
                </MDBCol>    
              </MDBRow>
              </MDBContainer>
             </div>
         )}
}
export default Profile