import axios from 'axios'
 
   export const startRegisterUser= (formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register', formData )
            .then((response)=>{
                console.log(response.data)
                if(response.data._id){
                    window.alert('successfully registered')
                    redirect()
                }else {
                    alert('Registration failed')
                }
            })
            .catch((err)=>{
            console.log(err)
            })
        } 
    }
 
   export const startLogout= ()=>{
       return (dispatch)=>{        
             localStorage.removeItem('tokenAssessment1')
            dispatch(setUser({}))
            alert('logout successfully')
            window.location.href = '/'          
       }
   }

   export const startLoginUser = (formData, redirect)=>{
       return (dispatch)=>{
           axios.post('/users/login', formData)
            .then((response)=>{
              console.log('startLoginUser response.data',response.data)
              if(response.data.token){
                localStorage.setItem('tokenAssessment1', response.data.token)
                 dispatch(startGetUser())
                 window.alert('Login successful')
                redirect()
              }else {
                  alert('Login failed')
              }                          
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

   export const startGetUser = ()=>{
      return (dispatch)=>{
        axios.get('/users/account', {
            headers : {
                'Authorization' : localStorage.getItem('tokenAssessment1')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(setUser(response.data))
             
        })
        .catch((err)=>{
            console.log(err)
        })
       }            
   }

    
   export const setUser = (user)=>{
          return {type: 'SET_USER', payload: user}
   }
