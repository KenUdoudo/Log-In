import evon from './assets/logo (1).png'
const SignUp = () => {
  return (  
    <div>
      <img src={ evon }/>
      <form>
        <input type="text" placeholder='Full name' required/>
        <input type="email" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
 
export default SignUp;