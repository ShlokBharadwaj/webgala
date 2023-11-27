import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './GitHubProfiles.module.css';

const APIURL = 'https://api.github.com/users/';

const GitHubProfiles = () => {
    const [userData, setUserData] = useState({});
    const [reposData, setReposData] = useState([]);
    const [orgsData, setOrgsData] = useState([]);
    const [starredRepos, setStarredRepos] = useState([]);
    const [error, setError] = useState('');

    const searchRef = useRef();

    const getUser = async (username) => {
        try {
            const [userData, repos, orgs, starred] = await Promise.all([
                axios(APIURL + username),
                axios(APIURL + username + '/repos?sort=created'),
                axios(APIURL + username + '/orgs'),
                axios(APIURL + username + '/starred'),
            ]);

            setUserData(userData.data);
            setReposData(repos.data);
            setOrgsData(orgs.data);
            setStarredRepos(starred.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError('No profile with this username: ' + username);
            } else if (err.response.status === 403) {
                setError('Authentication error. Rate limit exceeded. This application does not use API Tokens and GitHub restricts API call without tokens. Please try again later.');
            } else {
                setError('An error occurred');
            }
        }
    };

    useEffect(() => {
        if (userData.login) {
            getUserStarredRepos(userData.login);
        }
    }, [userData.login]);

    const getUserStarredRepos = async (username) => {
        try {
            const { data } = await axios(APIURL + username + '/starred');
            setStarredRepos(data);
        } catch (err) {
            if (err.response) {
                if (err.response.status === 403) {
                    setError('Authentication error. Rate limit exceeded. This application does not use API Tokens and GitHub restricts API call without tokens. Please try again later.');
                } else {
                    setError('Problem fetching starred repos.');
                }
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    const createUserCard = () => {
        const userID = userData.name || userData.login;
        const userBio = userData.bio ? <p>{userData.bio}</p> : '';

        return (
            <div className={styles.card}>
                <div>
                    <img src={userData.avatar_url} alt={userData.name} className={styles.avatar} />
                </div>
                <div className={styles.userInfo}>
                    <h2>{userID}</h2>
                    {userBio}
                    <ul>
                        <li>
                            {userData.followers} <strong>Followers</strong>
                        </li>
                        <li>
                            {userData.following} <strong>Following</strong>
                        </li>
                        <li>
                            {userData.public_repos} <strong>Repos</strong>
                        </li>
                    </ul>
                    <div id="repos">
                        {reposData && reposData.length > 0 && <ReposList repos={reposData} />}
                    </div>
                    <div id="orgs">
                        {orgsData && orgsData.length > 0 && <OrgsList orgs={orgsData} />}
                    </div>
                    <div id="starred">
                        {starredRepos && starredRepos.length > 0 && (
                            <StarredReposList starredRepos={starredRepos} />
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const OrgsList = ({ orgs }) => (
        <div>
            <strong>Top Organizations:</strong> <br />
            <ul>
                {orgs.slice(0, 5).map((org) => (
                    <li key={org.id} className={styles.orgsLists}>{org.login}</li>
                ))}
            </ul>
        </div>
    );

    const StarredReposList = ({ starredRepos }) => (
        <div>
            <strong>Top Starred Repositories:</strong> <br />
            <ul>
                {starredRepos.slice(0, 5).map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.starredRepos}>
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    const ReposList = ({ repos }) => (
        <div>
            <strong>Top Repositories:</strong> <br />
            {repos.slice(0, 5).map((repo) => (
                <a key={repo.id} className={styles.repo} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                </a>
            ))}
        </div>
    );

    const createErrorCard = () => (
        <div className={styles.card}>
            <h1>{error}</h1>
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = searchRef.current.value;

        if (user) {
            getUser(user);
            searchRef.current.value = '';
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.userForm} onSubmit={handleSubmit}>
                <input type="text" ref={searchRef} placeholder="Search a Github User" autoFocus />
            </form>
            <main id="main">
                {error ? createErrorCard() : userData.login && createUserCard()}
            </main>
        </div>
    );
};

export default GitHubProfiles;
