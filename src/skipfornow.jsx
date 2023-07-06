import One from './assets/wallpaperflare.com_wallpaper (6).jpg'
import two from './assets/wallpaperflare.com_wallpaper (7).jpg'
import three from './assets/wallpaperflare.com_wallpaper (8).jpg'
import four from './assets/wallpaperflare.com_wallpaper (9).jpg'
import five from './assets/wallpaperflare.com_wallpaper (7).jpg'
const Skip = () => {
  return ( 
    <div className='flex flex-col justify-center items-center gap-y-4'>
      <img src={ One }/>
      <img src={ two }/>
      <img src={ three }/>
      <img src={ four }/>
      <img src={ five }/>
    </div>
  );
}
 
export default Skip;