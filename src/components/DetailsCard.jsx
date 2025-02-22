import React from "react";


export default function DetailsCard({ selectedMovie, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-100 backdrop-blur-lg z-50">
      {/* Popup container */}
        
      <div className=" dark:bg-gray-800 min-w-2xl max-w-4xl mx-4 p-8 rounded-2xl shadow-2xl relative">
        {/* Header */}

        {/* selectedMovie details
        <div className=" space-y-5  h-[80%] text-gray-700 ">
            <div key={selectedMovie.id} class="flex w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-0">
                   <a href="#">
                       <img class="p-0 rounded-t-lg w-400 max-h-80 w-1xs" src={`https://image.tmdb.org/t/p/w1280/${selectedMovie.poster_path
               }`} alt="product image" />
                   </a>
                   <div class="px-5 pb-5">
                       <a href="#">
                           <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedMovie.title}</h5>
                       </a>
                       <br />
                       <a href="#">
                           <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{`Relase Date  ${selectedMovie.release_date}`}    </h5>
                       </a>
                       <br />
                        <div>
                        <a href="#">
                           <p class="text-xl text-justify font-semibold tracking-tight text-gray-900 dark:text-white">{`Relase Date  ${selectedMovie.overview}`}    </p>
                       </a>
                        </div>
                   </div>
               </div>
          
        </div> */}




               
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  src={`https://image.tmdb.org/t/p/w1280/${selectedMovie.poster_path
               }`} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedMovie.title}</h5>
        
        <p className="mb-3 text-2xl  tracking-tight text-gray-900 dark:text-white">{`Relase Date  ${selectedMovie.release_date}`}   </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedMovie.overview}</p>
    </div>
</a>












      </div>
        {/* Close Button */}
       
        <button onClick={onClose} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                ✕
                </span>
                </button>
    </div>
  );
}

