// import React from "react";

import { useParams } from "react-router-dom";
import { useCharacterById } from "../hooks/useCharaterById";
import Loader from "../core-ui/Loading";

const Details = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacterById(id!);

  console.log("DATA RESPONSE", data);

  if (loading) return <Loader />;
  if (error) return <p>Error</p>;

  return (
    <main className=" w-full md:w-2/5 mx-auto shadow-lg rounded-lg p-4 mt-2 md:mt-10 ">
      <div className=" flex flex-col md:flex-row justify-evenly items-center gap-4  ">
        <img
          src={data?.character.image}
          alt="Img data"
          className=" rounded-full"
        />
        <div>
          <h1 className=" text-4xl font-bold ">{data?.character.name}</h1>
          <p className=" text-2xl"> Gender: {data?.character.gender}</p>
        </div>
      </div>

      <hr className=" my-6" />

      <div>
        <ul className=" text-center mt-6 ">
          {data?.character.episode.map((episodeItem) => {
            return (
              <li key={episodeItem.name} className=" text-lg ">
                {episodeItem.name} - <b>{episodeItem.episode}</b>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Details;
