import React, { useState, useEffect } from "react";
import { getRepos } from "../helpers";
import Repo from "../components/Repo";
import { Container } from "reactstrap";

const Repos = () => {
  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!getRepos()) {
      setLoading(false);
    } else {
      getRepos().then(async res => {
        await setRepos(res);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Container>
      <section className="repos">
        <h1>Created Repos in the last 30 days</h1>
        <hr />
        {loading ? (
          <p className="lead">Loading...</p>
        ) : (
          repos.map(repo => (
            <Repo
              key={repo.id}
              avatar_url={repo.owner.avatar_url}
              name={repo.owner.login}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
              open_issues_count={repo.open_issues_count}
              updated_at={repo.updated_at}
            />
          ))
        )}
      </section>
    </Container>
  );
};

export default Repos;
