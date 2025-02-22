import React from "react";
import { Rating } from "@material-tailwind/react";

function Trending({ filtrendingmovie }) {
  return (
    <div className="min-h-screen flex flex-wrap justify-around p-5 dark:bg-gray-600">
      {filtrendingmovie.map((filtrendingmovie) => (
        <div
          key={filtrendingmovie.id}
          class="w-80 max-w-sm max-90 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-10"
        >
          <a href="#">
            <img
              class="p-0 rounded-t-lg max-h-120 w-1xs"
              src={`https://image.tmdb.org/t/p/w1280/${filtrendingmovie.poster_path}`}
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {filtrendingmovie.title}
              </h5>
            </a>
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {`Relase Date  ${filtrendingmovie.release_date}`}{" "}
              </h5>
            </a>

            <Rating value={4} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
