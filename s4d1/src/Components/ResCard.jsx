import React from 'react';
import styles from './Res.module.css';

function ResCard({
    image,
    name,
    cuisine,
    cost,
    minPrice,
    paymentMethods,
    rating,
    votes,
    reviews
}) {

    return (
        <div className={styles.main}>
            <div className={styles.mainC}>
                <div><img width='100px' src={image} alt={name} /></div>
                <div>
                    <h2>{name}</h2>
                    <b>{cuisine}</b>
                    <br />
                    <br />
                    <b>Cost ₹{cost} for one</b>
                    <p>Min ₹{minPrice} ~~ Up to 30 min</p>
                    <p>{paymentMethods}</p>
                </div>
                <div>
                    <button>{rating}</button>
                    <p>{votes} votes</p>
                    <p>{reviews} reviews</p>
                </div>
            </div>
            <div className={styles.mainO}>
                <div className={styles.mainOo}>
                    <b>
                        Order Online
                    </b>
                </div>
            </div>
        </div>
    )
}

export default ResCard