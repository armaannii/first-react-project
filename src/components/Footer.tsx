import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-6 lg:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <img src={logo} alt="" className="w-24 h-auto" />
            <p className="mt-4 max-w-[300px] text-[11px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-5 text-[10px] font-semibold text-slate-500">
              <a href="https://github.com" target="_blank" rel="noreferrer"> GitHub </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"> LinkedIn </a>
            </div>
          </div>
          <div className="col-span-7">
                <div className="grid grid-cols-3">
                    <ul className="text-xs text-[#64748B] grid gap-y-2">
                        <li className="font-bold text-xs text-[#0F172A]">PRODUCT</li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Project</a></li>
                    </ul>
                    <ul className="text-xs text-[#64748B] grid gap-y-2">
                        <li className="font-bold text-xs text-[#0F172A]">COMPANY</li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                    <ul className="text-xs text-[#64748B] grid gap-y">
                        <li className="font-bold text-xs text-[#0F172A] ">LEGAL</li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-6 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
