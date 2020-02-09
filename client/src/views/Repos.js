import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { getRepos } from '../helpers';
import Repo from '../components/Repo';
import Pages from '../components/Pages';
import BadRequest from '../components/BadRequest';

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    setLoading(true);
    getRepos(currentPage)
      .then(async (res) => {
        await setRepos(res);
        setLoading(false);
      })
      .catch((error) => setError(true));
  }, [currentPage]);

  if (error) return <BadRequest />;

  return (
    <Container>
      <section className="repos">
        <h1>Created Repos in the last 30 days</h1>
        <hr />
        <Pages onclick={handleClick} currentPage={currentPage} />
        {loading ? (
          <p className="lead">Loading...</p>
        ) : repos.length > 0 ? (
          repos.map((repo) => (
            <Repo
              key={repo.id}
              avatar_url={repo.owner.avatar_url}
              repoName={repo.name}
              name={repo.owner.login}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
              open_issues_count={repo.open_issues_count}
              pushed_at={repo.pushed_at}
            />
          ))
        ) : (
          setError(true)
        )}
        <Pages onclick={handleClick} currentPage={currentPage} />
      </section>
    </Container>
  );
};

export default Repos;
