import { useEffect, useState } from 'react'

import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Popular from './components/Popular'
import Trending from './components/Trending'

function App() {
  
  const [search, setSearch] = useState()
  const [movie, setMovie] = useState([])
  const [trendingmovie, setTrendingmovie] = useState([])
  const [filtrendingmovie, setfilTrendingmovie] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([ ])




  const  getMovie = ()=> {
    
     fetch('https://api.themoviedb.org/3/discover/movie?api_key=f9a340ae7811ba6fc9c70a00d6680fae')
    .then(res => res.json())
    .then(json => setMovie(json.results))
  }



  const  getFavMovie = ()=> {
    
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f9a340ae7811ba6fc9c70a00d6680fae')
   .then(res => res.json())
   .then(json => setTrendingmovie(json.results))
 }


//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';





  
  useEffect(() => {
    getMovie(),
    getFavMovie()
    
  }, [filteredUsers, search ])


  console.log(trendingmovie);
  
  
  return (
    <div className='w-[100%] dark:bg-gray-600'>
  

      {/* <Navbar  search={search} setSearch={setSearch} setFilteredUsers={setFilteredUsers} movie={movie} filteredUsers={filteredUsers}/>
      <HomePage  movie={movie}  filteredUsers={filteredUsers} />
      <Footer/> */}

<Navbar  search={search} setSearch={setSearch} setFilteredUsers={setFilteredUsers} movie={movie} filteredUsers={filteredUsers} 
   trendingmovie={trendingmovie}  setfilTrendingmovie={setFilteredUsers}

/>
<Routes>

  <Route index element={<HomePage  movie={movie}  filteredUsers={filteredUsers} />
}/>
  <Route path='/popular' element={<Popular/>}/>
  <Route path='/trending' element={<Trending  filtrendingmovie={filtrendingmovie} />}/>
  
</Routes>      

  <Footer/>


    </div>
  ) 
}

export default App
