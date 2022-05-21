import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GithubCard } from './GithubCard';
import { GithubSearch } from './GithubSearch';

const getUsers = (q="Dhruba1010", page=1, per_page=5) => {
    return axios("https://api.github.com/search/users", {
        method: 'GET',
        params : {
            q,
            per_page,
            page
        }
    })
}



export const GithubRepositories = () => {
    const [user, setUser] = useState("react");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [text, setText] = useState(null);
    const [sort, setSort] = useState(false);

    useEffect(() => {
        getUsers(user,page,perPage)
            .then((res) =>{
                setData(res.data)
            })
            .catch((err) =>{
                console.log(err);
            })
    },[user, page, perPage]);

    const handleClick = (user) => {
        setUser(user);
    }

    const handlePage = (v) => {
        setPage(page+v);
    }

    const handlePerPage =(perPage) => {
        setPerPage(perPage)
    }

    const handleSort = () => {
        setSort(!sort);
    }

    const totalPage = Math.ceil(data.total_count/perPage);

  return (
    <div>
        <GithubSearch handleClick={handleClick}/>
        {data?.items?.map(u => (
            <GithubCard key={u.id} {...u} />
        ))}
        <div>
            <div>
                <input type="number" placeholder=" Per Page" onChange={p => setText(p.target.value)}/>
                <button onClick={() => handlePerPage(text)}>GO</button>
                {sort ? (<button onClick={() =>{handleSort()}}>Sort By Descending</button>) : (<button onClick={() =>{handleSort()}}>Sort by Ascending</button>)}
            </div>
            <div>
                <button disabled={page===1} onClick={() => handlePage(-1)}>PREV</button>
                <button onClick={() => handlePage(+1)}>NEXT</button>
                <b>Total Pages : {totalPage}</b>
            </div>
        </div>
    </div>
  )
}

