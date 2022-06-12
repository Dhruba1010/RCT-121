import React, { useEffect, useState } from 'react'
import { getData } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import ResCard from './ResCard';
import { useSearchParams } from 'react-router-dom';

function Restaurents() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  
  
  const [filterCost, setFilterCost] = useState(0);


  const [page,setPage] = useState(1);

  const [sort, setSort] = useState('asc');

  const [searchRating, setSearchRating] = useSearchParams();
  const [filterRating, setFilterRating] = useState(Number(searchRating.getAll('filterRating')) || 0);

  const handlePage = (v) => {
    setPage(page+v)
  }

  

  const handleSort = (v) => {
    sort==='asc' ? setSort('desc') : setSort('asc');
  }


  useEffect(() => {
    if(filterRating){
      setSearchRating({rating : filterRating})
    }
    dispatch(getData({page,sort,filterRating}))
  },[dispatch,page,sort,filterRating,setSearchRating])


  const totalP = 5;

  return (
    <>
      <h1>Restaurents</h1>
      {state.isLoading && <div><h2>...loading</h2></div>}
      {state.isError && <div><h2>oops... Something went wrong!</h2></div>}
      <div>
        <button disabled={page===1} onClick={() => {handlePage(-1)}}>PREV</button>
        <button disabled={page===totalP} onClick={() => {handlePage(+1)}}>NEXT</button>
      </div>
      
      <div>
        {sort==='asc' ? (<button onClick={() => {handleSort()}}>Price : High to Low</button>) : (<button onClick={() => {handleSort()}}>Price : Low to High</button>)}
      </div>
      <div style={{display:'flex', gap:'3rem', justifyContent:'center'}}>
        <div >
          <h4>Filter Rating</h4>
          <button onClick={() => setFilterRating(4)}>4</button>
          <button onClick={() => setFilterRating(3)}>3</button>
          <button onClick={() => setFilterRating(2)}>2</button>
          <button onClick={() => setFilterRating(1)}>1</button>
          <button onClick={() => setFilterRating(0)}>All</button>
        </div>
        <div>
          <h4>Filter Cost</h4>
          <button onClick={() => setFilterCost(600)}>600-400</button>
          <button onClick={() => setFilterCost(400)}>400-200</button>
          <button onClick={() => setFilterCost(200)}>200-0</button>
          <button onClick={() => setFilterCost(0)}>All</button>
        </div>
      </div>
      <div>
        {state?.data?.map(d => (
          <div key={d.id} >
            <ResCard {...d}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Restaurents