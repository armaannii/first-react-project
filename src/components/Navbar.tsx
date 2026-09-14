import logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto p-4 sticky top-0 z-50 bg-white">
            <img src={logo} alt="" className='object-contain '/>
            <ul className=" flex gap-5 items-center text-[#475569] font-medium text-sm">
                <li><a href="" className='hover:text-[#DB2777]'>Home</a></li>
                <li><a href="" className='hover:text-[#DB2777]'>Technologies</a></li>
                <li><a href="" className='hover:text-[#DB2777]'>Projects</a></li>
                <li><a href="" className='hover:text-[#DB2777]'>About</a></li>
                <li><a href="" className='hover:text-[#DB2777]'>Contact</a></li>
            </ul>
            <div>
                <button className="btn btn-ghost rounded-full hover:text-white hover:bg-[#D91B7E] hover:rounded-4xl">Sign In</button>
                <button className="btn btn-ghost rounded-full hover:text-white hover:bg-[#D91B7E] hover:rounded-4xl">Sign Up</button>
            </div>
      </nav>
    );
};

export default Navbar;