import evon from './assets/logo (1).png'
const SignUp = () => {
  return (  
    <div className='flex flex-col justify-center items-center'>
      <img src={ evon }/>
      <form>
        <input type="text" placeholder='Full name' required/>
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