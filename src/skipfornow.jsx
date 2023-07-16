import One from './assets/wallpaperflare.com_wallpaper (6).jpg'
import two from './assets/wallpaperflare.com_wallpaper (7).jpg'
import three from './assets/wallpaperflare.com_wallpaper (8).jpg'
import four from './assets/wallpaperflare.com_wallpaper (9).jpg'
import five from './assets/wallpaperflare.com_wallpaper (7).jpg'
const Skip = () => {
  return ( 
    <div className='flex flex-col justify-center items-center gap-y-4 mt-4'>
      <img src={ One } className='w-3/5 lg:border-1 rounded border-blue-600 m-4'/>
      <img src={ two } className='w-3/5 lg:border-1 rounded border-blue-600'/>
      <img src={ three } className='w-3/5 lg:border-1 border-blue-600'/>
      <img src={ four } className='w-3/5 lg:border-1 border-blue-600'/>
      <img src={ five } className='w-3/5 lg:border-1 border-blue-600'/>
    </div>
  );
}
 
export default Skip;