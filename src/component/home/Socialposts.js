const images = [
  "/images/nargil.webp",
  "/images/gul.jpeg",
  "/images/creamy.jpg",
  "/images/tatlimobile.jpg",
  "/images/truffle.webp",
  "/images/soup.jpeg",
  "/images/gul.jpeg",
  "/images/essens.jpeg",
  "/images/gul.jpeg",
  "/images/soup.jpeg",
  "/images/truffle.webp",
  "/images/tatlimobile.jpg",
];

export default function Socialposts() {
  return (
    <div className="flex flex-wrap gap-5  justify-center">
      {images.map((img, i) => {
        return (
          <div className="group/item  md:hover  md:hover:opacity-50 " key={i}>
            <img
              className="w-[165px] md:w-[200px] h-[165px] md:h-[200px] "
              src={img}
              alt="hey"
            />
          </div>
        );
      })}
    </div>
  );
}
