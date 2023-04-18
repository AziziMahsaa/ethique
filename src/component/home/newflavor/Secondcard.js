const cards = [
  {
    imgSrc: "/cardimages/Bitkiselsutlu.jpg",
    name: "CROWN OF KING",
    price: "65.00",
  },
  {
    imgSrc: "/cardimages/rustik.jpg",
    name: "CevizliTamBugday",
    price: "425.00",
  },
  {
    imgSrc: "/cardimages/zeytinli.jpg",
    name: "DECADENT (6-8 PORTIONS)",
    price: "60.00",
  },
  {
    imgSrc: "/cardimages/çikolatapasta.jpg",
    name: "CARAMEL EXOTIQUE",
    price: "78.00",
  },
  {
    imgSrc: "/cardimages/omega.jpg",
    name: "NAPOLEON (LEMON)",
    price: "75.00",
  },
  {
    imgSrc: "/cardimages/Focaccia.jpg",
    name: "LE PARISIEN ROLL CARAMEL-VANILLA",
    price: "100.00",
  },
];
function Secondcard() {
  return cards.map((item, index) => {
    return (
      <div className="w-1/2">
        <div className="card rounded-none  flex flex-col gap-3" key={index}>
          <figure>
            <img className="w-[175px]" src={item.imgSrc} alt="pasta" />
          </figure>
          <div className="card-body flex flex-col gap-3 p-4 items-center font-serif text-darkgreen ">
            <p className="card-title  text-sm  font-thin  ">{item.name}</p>
            <p className="font-thin ">{item.price}</p>
          </div>
        </div>
      </div>
    );
  });
}

export default Secondcard;
