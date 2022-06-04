import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios('http://localhost:8080/products', {
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
    <div>
      {data?.map(p => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <h4>Price : ₹{p.price}</h4>
          <Link to={`/products/${p.id}`}>More Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Products