import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar({ setSearchWord }: Props) {
  const [inputSearchValue, setInputSearchValue] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSearchValue(value);

    if (value.length >= 3) {
      setSearchWord(value.trim());
    } else {
      setSearchWord("");
    }
  };

  return (
    <div className="relative w-4/5 md:w-2/5 mx-auto mb-14 md:mb-24 ">
      <input
        className="w-full rounded-md border border-slate-500 py-3 px-12 pl-5"
        placeholder="Search for Rich & Morty"
        value={inputSearchValue}
        onChange={handleSearch} // Call handleSearch on input change
      />
      <MagnifyingGlassIcon className="absolute w-5 h-5 right-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}
