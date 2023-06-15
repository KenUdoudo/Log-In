import evon from './assets/logo (1).png'
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex flex-col justify-center items-center mt-40'>
      <img src={ evon }/>
      <h2 className='text-2xl font-semibold'>EVON</h2>
      </div>
     <p className='text-center'>Discover upcoming events near you</p>

     <div>
      <button>Sign Up</button>
      <button>Log In</button>
     </div>
     <a href="#"><p>Skip For Now</p></a>
    </div>
  );
}
 
export default Home;