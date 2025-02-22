import React from "react";


export default function DetailsCard({ selectedMovie, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-100 backdrop-blur-lg z-50">
      {/* Popup container */}
      <div className="bg-white max-w-lg w-full mx-4 p-8 rounded-2xl shadow-2xl relative">
        {/* Header */}
        <h3 className="text-3xl font-extrabold mb-6 text-gray-900 border-b pb-4">
          selectedMovie Details
        </h3>

        {/* selectedMovie details */}
        <div className="space-y-5 text-gray-700">
            <div key={selectedMovie.id} class="w-80 max-w-sm max-90 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-10">
                   <a href="#">
                       <img class="p-0 rounded-t-lg max-h-120 w-1xs" src={`https://image.tmdb.org/t/p/w1280/${selectedMovie.poster_path
               }`} alt="product image" />
                   </a>
                   <div class="px-5 pb-5">
                       <a href="#">
                           <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{selectedMovie.title}</h5>
                       </a>
                       <a href="#">
                           <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{`Relase Date  ${selectedMovie.release_date}`}    </h5>
                       </a>
               
               
                 
                   </div>
               </div>
          
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

