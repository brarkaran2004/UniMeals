import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function Navbar() {
  const [modalOpen, setmodalopen] = useState(false);
  const trigger = ()=>{
    setmodalopen(!modalOpen)}

    const[signup , setsignup] = useState(false);
    const signuptrigger = ()=>{
        setsignup(!signup)
      }

  
  return (
    <div className='flex justify-center items-center h-16 px-4 m-2'>
      <div className='px-4'>
        <h1 className='text-red-500 text-4xl'>
         <Link to="/" >Uni<span className='text-black'>Meals</ span ></ Link>
        </h1>
      </div>
      
      <div className='flex items-center px-2 border-2 rounded-md shadow-md p-1'>
        <div>
        <LocationOnIcon  className='text-red-300'/>
        <input 
          type='text' 
          placeholder='Search...' 
          className='p-2 ml-2 bg-transparent outline-none'
        />
        </div> 
        <span className='text-gray-400'> | </span>
        <div className='px-2'>
        <SearchIcon className='text-gray-400' />
        <input 
          type='text' 
          placeholder='Search for restaurants' 
          className='p-2 ml-2 bg-transparent outline-none w-80'
        />
        </div>
      </div>
      <div className='flex justify-between m-10'>
        <div className='px-12 text-xl text-gray-500'>
        <button onClick={trigger}>Log in</button>
        <Login isopen = {modalOpen} onclose= {trigger}/>
        <SignUp isopen= {signup} onclose = {signuptrigger}/>
        </div>
        <div className='text-xl text-gray-500'>
            <button onClick={signuptrigger}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
