import React, { useState, useEffect } from "react";
import { getRepos } from "../helpers";

const Repos = () => {
    
  const [repos, setRepos] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!getRepos()) {
        setError(true);
        setLoading(false);
    } else {
        setError(false);
        getRepos().then(async (res) => {
           await setRepos(res);
           setLoading(false);
        })
    }
  }, []);

  console.log('Repos: ', repos);

  return <h1>Created Repos in the last 30 days :</h1>;
};

export default Repos;
