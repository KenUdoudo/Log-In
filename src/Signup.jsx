import evon from './assets/logo (1).png'
import facebook from './assets/logo (3).png'
import google from './assets/logo (2).png'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (  
    <div className='flex flex-col justify-center items-center'>
      <img src={ evon } className='mt-14'/>
      <form className='flex flex-col justify-center items-center mt-20 gap-y-4'>
        <input type="text" placeholder='Full name' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' id='fullName' required/>
        <p id='error'></p>
        <input type="email" placeholder='Email' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' id='eMail' required/>
        <input type="password" placeholder='Password' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' id='password' required/>
        <button type="submit" className='border-0 rounded bg-blue-600 px-24 py-1 text-lg text-white' onSubmit={ Submit }>Sign Up</button>
      </form>
      <div className='flex flex-row justify-center items-center my-2'>
        <hr />
        <p>or</p>
        <hr />
      </div>
        <div className='flex flex-row justify-center items-center bg-blue-950'>
          <img src={ facebook } className='px-3  py-2'/>
          <p className='bg-blue-700 px-2 py-2 text-base font-semibold text-white'>Sign up with Facebook</p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4'>
          <img src={ google } className='px-3  py-2'/>
          <p className='bg-gray-300 pr-5 pl-2 py-2 text-base font-semibold'>Sign up with Google</p>
        </div>
        <p className='mt-20'>Already have an account? <Link to='/LogIn'><span className='text-blue-600'>Log In</span></Link></p>
    </div>
  );
}
 
export default SignUp;