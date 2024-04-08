import { FC } from "react";
import { useNavigate } from "react-router-dom";

type CardItem = {
  id: string;
  name: string;
  image: string;
};

const CharatersCard: FC<{ cardItem: CardItem }> = ({ cardItem }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${cardItem.id}`);
  };

  return (
    <main>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 p-4 shadow-md">
        <div className="relative -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src={cardItem.image}
            alt="img-blur-shadow"
            className="cursor-pointer hover:scale-95 duration-700 hover:rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {cardItem.name}
          </h5>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-gray-500 py-4 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={handleNavigate}
          >
            View More
          </button>
        </div>
      </div>
    </main>
  );
};

export default CharatersCard;
