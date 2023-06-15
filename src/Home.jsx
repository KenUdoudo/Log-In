import evon from './assets/logo (1).png'
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex flex-col justify-center items-center mt-40'>
      <img src={ evon }/>
      <h2 className='text-2xl font-semibold mt-6'>EVON</h2>
      </div>
     <p className='text-center text-2xl mt-10'>Discover upcoming events near you</p>

     <div className='mt-20 flex flex-col justify-center items-center'>
      <button className='border-0 rounded py-2 px-24 text-lg bg-blue-600 text-white'>Sign Up</button>
      <button className='border border-blue-600 text-blue-600 rounded py-2 px-24 text-xl'>Log In</button>
     </div>
     <a href="#"><p>Skip For Now</p></a>
    </div>
  );
}
 
export default Home;