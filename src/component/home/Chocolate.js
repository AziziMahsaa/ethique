export default function Çocolate() {
  return (
    <div className="flex-flex-col gap-4 p-5 md:p-20 ">
      <div className="flex flex-col gap-3 p-4 items-center font-serif text-darkgreen">
        <h6 className="tracking-wider text-xs">100% PLANT BASED</h6>
        <h2 className="text-2xl font-extralight">ETHIQUE CREATIONS</h2>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 ">
        <div className="rounded-none h-full overflow-hidden">
          <div className="h-full object-cover hover:scale-105 object-bottom  ease-in-out duration-700 ">
            <img src="/images/bonbon.webp" alt="bonbon" className="" />
          </div>
        </div>
        <div className="flex flex-col gap-4  md:mt-0 md:gap-8 mt-4">
          <div className="rounded-none h-full overflow-hidden">
            <div className="card   image-full rounded-none before:!bg-transparent h-full object-cover hover:scale-105 object-bottom overflow-hidden ease-in-out duration-700">
              <figure>
                <img src="/images/nargil.webp" alt="pasta" className="" />
              </figure>
              <div className="card-body text-center flex flex-col  justify-center items-center mt-8">
                <h2 className="card-title font-serif tracking-widest text-xl font-extralight">
                  Bars
                </h2>
                <p className="text-md underline underline-offset-1 font-serif tracking-widest ">
                  discover
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-none h-full overflow-hidden">
            <div className="card image-full rounded-none before:!bg-transparent h-full object-cover hover:scale-105 object-bottom  ease-in-out duration-700">
              <figure>
                <img src="/images/truffle.webp" alt="pasta" />
              </figure>
              <div className="card-body text-center flex flex-col  justify-center items-center mt-10">
                <h2 className="card-title font-serif tracking-widest text-xl font-extralight">
                  Truffle Chocolates
                </h2>
                <p className="text-md underline underline-offset-1 font-serif tracking-widest ">
                  discover
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
