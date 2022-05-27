import React from 'react';
import styles from './Restaurant.module.css';

export const RestaurantCard = ({
    name,
    cuisine,
    cost,
    minPrice,
    paymentMethods,
    rating,
    votes,
    reviews,
    image,
}) => {
  return (
    <div className={styles.detailsM}>
        <div className={styles.details}>
            <div>
                <img height="100px" src={image} alt={name} />
            </div>
            <div>
                <div><h1>{name}</h1></div>
                <div><b>{cuisine}</b></div>
                <div><b>Cost ₹{cost} for one</b></div>
                <div><p>Min ₹{minPrice}</p></div>
                <div><p>Accepts {JSON.stringify(paymentMethods)} </p></div>
            </div>
            <div>
                <div><button>{rating}</button></div>
                <div><p>{votes}</p></div>
                <div><p>{reviews}</p></div>
            </div>
        </div>
        <div>
            <button>Order Online</button>
        </div>
    </div>
  )
}

