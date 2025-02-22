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
              <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{`Relase Date  ${filteredUsers.release_date}`}    </h5>
              </a>
      
      
              <Rating value={4} />

              <button onClick={() => handleDetailsClick(filteredUsers)} >show details</button>
        
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

