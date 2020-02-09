import React from 'react';

const Repo = ({
  avatar_url,
  name,
  repoName,
  description,
  stargazers_count,
  open_issues_count,
  pushed_at,
}) => (
  <div className="repo">
    <div className="avatar">
      <img className="img-responsive img-fluid" src={avatar_url} alt={name} />
    </div>

    <div className="info">
      <h2>{repoName}</h2>
      <p className="lead">{description}</p>
      <div className="star_issue">
        <span className="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {' '}
          Star
          {' '}
          <strong>{stargazers_count}</strong>
        </span>
        <span className="issue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          {' '}
          Issues
          {' '}
          <strong>{open_issues_count}</strong>
        </span>
        <span className="last_submit">
          {new Date(pushed_at).toISOString().split('T')[0]}
          {' '}
by
          {name}
        </span>
      </div>
    </div>
  </div>
);

export default Repo;
