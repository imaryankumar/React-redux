import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useTheme } from 'next-themes';
import { MdDarkMode,MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const count = useSelector((state) => state.counter.value)
  return (
    <nav className='flex items-center justify-between px-16 w-full h-16 shadow '>
        <span className='text-2xl font-serif'>Redux Store</span>
        <ul className='flex items-center justify-center gap-5 text-base font-sans list-none '>
            <li><Link href='/' >Home</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <div className='text-lg pl-5 font-mono '>
            cart Item : {count}
           </div>
           <div onClick={toggleTheme} className='text-2xl cursor-pointer ' >
            {
              theme==='light' ? <MdDarkMode  />:<MdOutlineDarkMode />
            }
           </div>
        </ul>
      
    </nav>
  )
}

export default Navbar