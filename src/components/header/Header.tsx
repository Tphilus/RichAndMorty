import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";

const Header = () => {
  return (
    <header>
      <Link
        to="/"
        className="flex justify-center py-2 mt-2 md:mt-4 text-2xl text-black"
      >
        Rich & Morty
      </Link>

      <h3 className=" text-lg text-center w-[90%] md:w-[40%] mx-auto ">
        The fractured domestic lives of a nihilistic mad scientist and his
        anxious grandson are further complicated by their inter-dimensional
        misadventures.
      </h3>
    </header>
  );
};

export default Header;
