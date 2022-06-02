import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UsersDetails() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const params = useParams();


    useEffect(() => {
        setLoading(true);
        const {id} = params;
        axios(`https://reqres.in/api/users/${id}`, {
            method: 'GET',
        })
        .then(res => {
            setLoading(false);
            setError(false);
            setData(res.data.data);
        })
        .catch(err => {
            setLoading(false);
            setError(true);
            console.log(err);
        })
    },[params.id]);
    
    

  return (
    <div>
        {loading && <div>...loading</div>}
        <div style={{marginTop: "1rem"}} key={data?.id}>
            <img src={data?.avatar} alt="avatar" />
            <div>Name : {data?.first_name} {data?.last_name}</div>
            <div>Email : {data?.email}</div>
        </div>
    </div>
  )
}

export default UsersDetails;