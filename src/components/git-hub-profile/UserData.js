import React from 'react'
import './data.css'
export const UserData = ({userProfile}) => {

    const {avatar_url , public_repos,login } = userProfile ;  
  return (
    <div className='data'>
      
      <div className='profile'>
      
        <img src={avatar_url} className='profile-image'/>

      </div>

      <div>
      <p><h4>UserName : {login}</h4></p>  
      </div>

      <div >
        <p>Repository: {public_repos}</p>
      </div>

      
      
     </div>
  )
}
