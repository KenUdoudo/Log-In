import evon from './assets/logo (1).png'
import facebook from './assets/logo (3).png'
import google from './assets/logo (2).png'
const SignUp = () => {
  return (  
    <div className='flex flex-col justify-center items-center'>
      <img src={ evon } className='mt-20'/>
      <form className='flex flex-col justify-center items-center mt-20 gap-y-4'>
        <input type="email" placeholder='Email' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' required/>
        <input type="password" placeholder='Password' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' required/>
        <button type="submit" className='border-0 rounded bg-blue-600 px-24 py-1 text-lg text-white'>Sign Up</button>
      </form>
      <p className='text-blue-600'>Forgot Password?</p>
      <div className='flex flex-row justify-center items-center mt-4'>
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
    </div>
  );
}
 
export default SignUp;