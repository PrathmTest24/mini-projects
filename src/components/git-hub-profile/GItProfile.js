import React, { useEffect, useState } from 'react'
import { UserData } from './UserData';

export const GItProfile = () => {

    const[user,setUser] = useState();
    const [userInfo , setUserInfo] = useState(null)

    
    async function fetchData(){
     const res = await fetch(`https://api.github.com/users/${user}`);

     const data = await res.json();
      
     if(data){
        setUserInfo(data);
     }

     console.log(data)
    }


     function searchProfile(){
       fetchData();
    

       
     }
     
     
  return (
    <>
    <div className='git-profile'
     style={{
         display:'flex',
         justifyContent:'center',
         justifyItems:'center'
    }}>
        

        <div>
        <h2>GitHub Profile</h2>
            <input 
                type='text'
                name='github-profile'
                placeholder='search GitHub Profile'
                value={user}
                onChange={(e)=> setUser(e.target.value)}

            />
            <button onClick={searchProfile} >Search</button>
        </div>

        
    </div>
    <div>
        { userInfo !== null ? <UserData userProfile={userInfo} /> : null}
        </div>
    </>
  )
}
