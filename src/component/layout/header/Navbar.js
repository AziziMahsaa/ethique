function Navbar() {
  return (
    <div className="navbar h-16 md:px-8 bg-rose">
      <div className="navbar-start md:w-full ">
        <img
          src="/images/webimg/logoweb.avif"
          alt="glass"
          className=" w-20 hidden md:block mr-3   "
        />
        <div className="navbar">
          <label tabIndex={0} className="btn btn-ghost md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <img
            src="/icones/glass.png"
            alt="glass"
            className="h-6 w-6 md:hidden"
          />
          <ul className="menu md:flex md:flex-row gap-5 hidden w-full">
            <li className="hover hover:underline underline-offset-1 tracking-wide	 font-serif text-darkgreen ">
              ONLINE SHOPPING
            </li>
            <li className="hover hover:underline underline-offset-1 tracking-wide	 font-serif text-darkgreen ">
              CUISINE MENU
            </li>
            <li className="hover hover:underline underline-offset-1 tracking-wide	 font-serif text-darkgreen ">
              ETIQUE PLANT-BASE
            </li>
            <li className="hover hover:underline underline-offset-1 tracking-wide	 font-serif text-darkgreen ">
              CONTACT US
            </li>
            <li className="hover hover:underline underline-offset-1 tracking-wide	 font-serif text-darkgreen ">
              CAREER
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center md:hidden ">
        <img src="/images/Logo.avif" alt="glass" className=" h-8 w-20 " />
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex md:items-center gap-6">
          <img src="/icones/glass.png" alt="glass" className="h-6 w-6 " />
          <img src="/icones/user.png" alt="glass" />
          <img src="/icones/mail.png" alt="glass" className="h-5 w-5" />
          <img src="/icones/basket.png" alt="glass" className="h-7 w-7" />
        </div>
      </div>
      <img src="/icones/basket.png" alt="glass" className="h-7 w-7 md:hidden" />
    </div>
  );
}

export default Navbar;
