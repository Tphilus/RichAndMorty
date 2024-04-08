import { useState } from "react";
import CharatersCard from "../components/card/CharatersCard";
import Searchbar from "../components/Searchbar";
import Loader from "../core-ui/Loading";
import { useCharacters } from "../hooks/useCharaters";

const HomePage: React.FC = () => {
  const { error, loading, data } = useCharacters();
  const [searchWord, setSearchWord] = useState<string>("");

  if (loading) return <Loader />;
  if (error) return <p>Error</p>;

  const filteredCharacters =
    data?.characters.results.filter((character) =>
      character.name.toLowerCase().includes(searchWord.toLowerCase())
    ) ?? [];

  return (
    <main className="w-full md:w-4/5 mx-auto">
      <Searchbar setSearchWord={setSearchWord} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-14 px-2 md:px-0">
        {filteredCharacters.length === 0 ? (
          <p className=" text-gray-500 mt-8 text-4xl ">No results found.</p>
        ) : (
          filteredCharacters.map((cardItem) => (
            <CharatersCard key={cardItem.id} cardItem={cardItem} />
          ))
        )}
      </div>
    </main>
  );
};

export default HomePage;
