import { Search } from "lucide-react";
import React from "react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  const handdleSearchRecipie = () => {
    console.log("Hey");
  };
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handdleSearchRecipie}>
          <label className="input flex items-center gap-2 shadow-md">
            <Search size={"24"} />
            <input
              type="text"
              placeholder="What do you want to cook today?"
              className="text-sm md:text-md grow"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommend Recipes
        </h1>
        <p className="font-semibold text-slate-500  ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
