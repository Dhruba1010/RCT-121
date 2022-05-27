import React, { useState, useEffect} from 'react';
import { RestaurantCard } from './RestaurantCard';
import axios from 'axios';
import styles from './Restaurant.module.css';

export const RestaurantDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sortShow, setSortShow] = useState(true);
  const [costSort, setCostSort] = useState("asc");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [card, setCard] = useState(null);
  const [cash, setCash] = useState(null);
  const [upi, setUpi] = useState(null);
  

  const getData = async ({page, costSort, ratingFilter,card,cash,upi}) => {
    setLoading(true);
    const paramsForPayment ={};
    if(card !== null) paramsForPayment["paymentMethods.card"]=card;
    if(cash !== null) paramsForPayment["paymentMethods.cash"]=cash;
    if(upi !== null) paramsForPayment["paymentMethods.upi"]=upi;
    axios({
      method: 'GET',
      url: "http://localhost:8080/retaurants",
      params : {
        _page: page,
        _limit: 5,
        _sort: "cost",
        _order: costSort,
        rating_gte: ratingFilter,
        ...paramsForPayment
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
    getData({page, costSort, ratingFilter,card,cash,upi});
  },[page, costSort, ratingFilter,card,cash,upi]);

  return (
    <div>
      <h1>Restaurant Details</h1>
      {loading && <div>...loading</div>}
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
      <div>
        <h4>Payment Methods</h4>
        <button className={card ? styles.paymentButton : null} onClick={() => setCard(!card)}>Card</button>
        <button className={cash ? styles.paymentButton : null} onClick={() => setCash(!cash)}>Cash</button>
        <button className={upi ? styles.paymentButton : null} onClick={() => setUpi(!upi)}>UPI</button>
        <button className={styles.paymentButtonAll} onClick={() =>{
          setCard(null);
          setCash(null);
          setUpi(null);
        }}>All</button>
      </div>
      <div>
        {data?.map(d => 
          <RestaurantCard key={d.id} {...d}/>
        )}
      </div>
    </div>
  )
}

