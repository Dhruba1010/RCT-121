import React, { useState, useEffect} from 'react';
import { RestaurantCard } from './RestaurantCard';
import axios from 'axios';

export const RestaurantDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sortShow, setSortShow] = useState(true);
  const [costSort, setCostSort] = useState("asc");
  const [ratingFilter, setRatingFilter] = useState(0);
  

  const getData = async ({page, costSort, ratingFilter}) => {
    setLoading(true);
    axios({
      method: 'GET',
      url: "http://localhost:8080/retaurants",
      params : {
        _page: page,
        _limit: 5,
        _sort: "cost",
        _order: costSort,
        rating_gte: ratingFilter
      }
    })
    .then(res => {
      console.log(res);
      setData(res.data);
      setLoading(false);
    })
    .catch(err => {
      setError(true);
      setLoading(false);
      console.log(err);
    })
  }

  const handleSort = () => {
    if(costSort==="asc"){
      setCostSort("desc")
    }else {
      setCostSort("asc")
    }
    setSortShow(!sortShow)
  }

  useEffect(() => {
    getData({page, costSort, ratingFilter});
  },[page, costSort, ratingFilter]);

  return (
    <div>
      <h1>Restaurant Details</h1>
      {loading && <div>...loading</div>}
      
      <div>
        {data.map(d => 
          <RestaurantCard key={d.id} {...d}/>
        )}
      </div>
      <div>
        <button disabled={page===1} onClick={() => setPage(pre => pre-1)}>PREV</button>
        <button onClick={() => setPage(pre => pre+1)}>NEXT</button>
      </div>
      <div>
        {sortShow ? (<button onClick={handleSort}>Sort by ASC Cost</button>) : (<button onClick={handleSort}>Sort by DESC Cost</button>)}
      </div>
      <div>
        <button onClick={() => setRatingFilter(4)}>4</button>
        <button onClick={() => setRatingFilter(3)}>3</button>
        <button onClick={() => setRatingFilter(2)}>2</button>
        <button onClick={() => setRatingFilter(1)}>1</button>
      </div>
    </div>
  )
}

