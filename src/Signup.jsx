import evon from './assets/logo (1).png'
const SignUp = () => {
  return (  
    <div className='flex flex-col justify-center items-center'>
      <img src={ evon } className='mt-20'/>
      <form className='flex flex-col justify-center items-center mt-20'>
        <input type="text" placeholder='Full name' className='border-0 rounded bg-gray-200 pl-4 py-1 pr-5 text-xl' required/>
        <input type="email" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <hr />
        <p>or</p>
        <hr />
      </div>
    </div>
  );
}
 
export default SignUp;