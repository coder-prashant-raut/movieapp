import React, { useEffect, useState } from 'react' 
import { Rating } from "@material-tailwind/react";
import DetailsCard from './DetailsCard';
function HomePage({movie, filteredUsers}) {


    const [selectedMovie, setSelectedMovie] = useState('')


    const handleDetailsClick = (filteredUsers) => {
    
        setSelectedMovie(filteredUsers); // Set employee to display in the modal
        
        // console.log(filteredUsers);
        
        
        console.log(filteredUsers.title);
        
      };

      const closeModal = () => {
        setSelectedMovie(null); // Close the modal
      };
  

  return (


    <div className='min-h-screen flex flex-wrap justify-around p-5 dark:bg-gray-600' >


    {filteredUsers.map((filteredUsers)=>(
          
      <div key={filteredUsers.id} class="w-80 max-w-sm max-90 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-10">
          <a href="#">
              <img class="p-0 rounded-t-lg max-h-120 w-1xs" src={`https://image.tmdb.org/t/p/w1280/${filteredUsers.poster_path
      }`} alt="product image" />
          </a>
          <div class="px-5 pb-5">
              <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{filteredUsers.title}</h5>
              </a>
              <br />
              <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{`Relase Date  ${filteredUsers.release_date}`}    </h5>
              </a>
      
      
              <Rating value={4} />
<br />

                <button onClick={() => handleDetailsClick(filteredUsers)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
               MORE
                </span>
                </button>
              
        
          </div>
      </div>
      
                ))}


 {/* Render the popup if an employee is selected */}
 {selectedMovie && (
        <DetailsCard selectedMovie={selectedMovie} onClose={closeModal} />
        
      )}



          </div>


)

}


export default HomePage

