import evon from './assets/logo (1).png'
const Home = () => {
  return (
    <div className="flex flex-col">
      <div className='flex flex-col'>
      <img src={ evon }/>
      <h2>EVON</h2>
      </div>
    <p className='text-center'>Discover upcoming events near you</p>
    </div>
  );
}
 
export default Home;