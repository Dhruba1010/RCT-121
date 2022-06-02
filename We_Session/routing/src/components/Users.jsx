import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Users() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {state} = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(Number(searchParams.get('page') || 1));


    const getData = () => {
        setLoading(true);

        axios('https://reqres.in/api/users', {
            method: 'GET',
            params : {
                page
            }
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
    }

    useEffect(() => {
        getData();
    },[page]);

    useEffect(() => {
        setSearchParams({
            page
        })
    },[[page, setSearchParams]])

    // if(!isAuth){
    //     return <Navigate to='\login' />
    // }

  return (
    <div>
        {state.token && <h3>Token : {state.token}</h3>}
        {loading && <div>...loading</div>}
        <div>
            <button disabled={page===1} onClick={()=> setPage(page-1)}>PREV</button>
            <button onClick={()=> setPage(page+1)}>NEXT</button>
        </div>
        {data?.map(u => (
            <div style={{marginTop: "1rem"}} key={u.id}>
                <div>Name : {u.first_name}</div>
                <div>Email : {u.email}</div>
                <Link to={`/users/${u.id}`} >See More</Link>
            </div>
        ))}
    </div>
  )
}

export default Users