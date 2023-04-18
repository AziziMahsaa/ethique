import Modal from "../home/Modal";
function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-10   bg-darkgreen p-10 mt-5   ">
      <div>
        <img
          className="h-32 w-32 md:hidden"
          src="/images/greenlogo.webp"
          alt="logo"
        />
        <img
          className=" w-36 h-36 hidden md:block "
          src="/images/footerlogo.avif"
          alt="logo"
        />
      </div>
      <div className="flex flex-row gap-5 md:gap-10  font-serif  ">
        <div className="w-1/2">
          <ul className="flex flex-col  gap-5 text-rose text-xs md:text-sm tracking-widest">
            <li>ORDER DETAILS</li>
            <li>CORPORATE COMMUN</li>
            <li>Terms of Service</li>
            <li>Return Policy</li>
            <li>Delivery Policy</li>
            <li>Confidentiality Agreement</li>
            <li>Lighting Agreement</li>
            <li>KVKK Policy</li>
            <li>Membership</li>
          </ul>
        </div>
        <div className="w-1/2">
          <ul className="flex md:text-sm flex-col gap-5 text-rose text-xs tracking-widest">
            <li>Wholesale</li>
            <li>Career</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-36 text-rose font-serif text-md gap-5">
        <div className="flex flex-col gap-3">
          <span>follow us</span>
          <div className="border border-lightgreen flex flex-row w-fit ">
            <div className="mybottom p-2 md:p-4">
              <img
                className="h-6 w-6"
                src="/images/facebook.png"
                alt="facebook"
              />
            </div>
            <div className="mybottom border-x border-lightgreen  p-2 md:p-4 ">
              <img src="/images/instagram.png" alt="facebook" />
            </div>
            <div className="mybottom p-2 md:p-4 ">
              <img
                className="h-6 w-6"
                src="/images/twitter.png"
                alt="facebook"
              />
            </div>
          </div>
        </div>
        <img
          className="h-4 mt-10"
          src="/images/cardslogo.avif"
          alt="cardslogo"
        />
      </div>
      <Modal />
    </div>
  );
}

export default Footer;
