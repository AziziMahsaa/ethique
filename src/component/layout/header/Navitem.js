import { Link } from "react-router-dom";

function Navitem(props) {
  return (
    <div>
      <Link
        to={props.link}
        className={
          "py-2  px-5 items-center flex font-semibolod w-fit  md:font-semibold hover hover:underline underline-offset-2 "
        }
      >
        {props.title}
      </Link>
    </div>
  );
}

export default Navitem;
