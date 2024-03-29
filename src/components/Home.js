import React from 'react'
import { useUserAuth } from '../context/UserAuthContent';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const {user,logOut}=useUserAuth();
   const navigate=useNavigate()
    const handleLogOut= async()=>{
        try{
             await logOut();
             navigate("/")
        }catch(err){
               console.log(err.message)
        }
    }
  return (
    <>
    <div className='p-4 box mt-3 text-center'>Hello Welcome 
    <br/>
    {user && user.email}
    </div>
    <div className='d-grid gap-2'>
    <Button varient="primary" onClick={handleLogOut}>Log out</Button>
    </div>
    </>   
  )
}

export default Home