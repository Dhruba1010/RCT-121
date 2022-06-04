import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

function ProductDetails() {
  const [data, setData] = useState([]);
  const params = useParams();

  const {id} = params;

  const getData = () => {
    axios(`http://localhost:8080/products/${id}`, {
      method: 'GET',
    })
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      {data?.name===undefined ? (<ErrorPage />) : (
        <div>
          <img height="100px" src={data?.image} alt={data?.name} />
          <h2>{data?.name}</h2>
          <h4>Price : ₹{data?.price}</h4>
        </div>
      )}
    </>
  )
}

export default ProductDetails