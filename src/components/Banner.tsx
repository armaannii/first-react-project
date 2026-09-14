import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className='grid grid-cols-12 container mx-auto mb-10 items-center'>
            <div className='col-span-7'>
                <h1 className='text-5xl font-extrabold text-[#0F172A]'>Build Your Ideal <br/>
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
                </h1>
                <p className='text-[#475569] py-6'>
                    Explore frontend, backend, database, and tooling options, <br/> compare them side by side, 
                    and put together the stack that fits your <br/> next project.
                </p>
                <button className='btn bg-transparent me-4 py-6 rounded-lg hover:text-white hover:bg-gradient-to-r from-[#F97316] to-[#EC4899]'>Explore Technologies</button>
                <button className='btn bg-transparent px-14 py-6 rounded-lg hover:text-white hover:bg-gradient-to-r from-[#F97316] to-[#EC4899]'>Learn More</button>
            </div>
            <div className='col-span-5'>
                <img src={bannerImage} alt="" />
            </div>
        </section>
    );
};

export default Banner;