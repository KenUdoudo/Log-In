import evon from './assets/logo (1).png'
import facebook from './assets/logo (3).png'
const SignUp = () => {
  return (  
    <div className='flex flex-col justify-center items-center'>
      <img src={ evon } className='mt-20'/>
      <form className='flex flex-col justify-center items-center mt-20 gap-y-4'>
        <input type="text" placeholder='Full name' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' required/>
        <input type="email" placeholder='Email' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' required/>
        <input type="password" placeholder='Password' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' required/>
        <button type="submit" className='border-0 rounded bg-blue-600 px-24 py-1 text-lg text-white'>Sign Up</button>
      </form>
      <div className='flex flex-row justify-center items-center mt-4'>
        <hr />
        <p>or</p>
        <hr />
      </div>
      <div>
        <div className='flex flex-row justify-center items-center bg-blue-950'>
          <img src={ facebook } className='px-3'/>
          <p className='bg-blue-700'>Sign up with Facebook</p>
        </div>
      </div>
    </div>
  );
}
 
export default SignUp;