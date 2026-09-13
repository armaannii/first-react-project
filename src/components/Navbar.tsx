import logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto p-4">
            <img src={logo} alt="" className='object-contain '/>
            <ul className=" flex gap-5 items-center text-[#475569] hover:text-[#DB2777] ">
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className='flex gap-8 text-[#475569] btn border-none bg-transparent'>
                <button className='cursor-pointer  hover:!text-red-700'>Sign In</button>
                <button className='cursor-pointer'>Sign Up</button>
            </div>
      </nav>
    );
};

export default Navbar;