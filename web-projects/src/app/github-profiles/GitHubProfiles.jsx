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
    const [loading, setLoading] = useState(false);

    const searchRef = useRef();

    const getUser = async (username) => {
        try {
            setLoading(true);
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
            } else {
                setError('An error occurred');
            }
        } finally {
            setLoading(false);
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
            setError('Problem fetching starred repos');
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
            <h3>Organizations:</h3>
            <ul>
                {orgs.map((org) => (
                    <li key={org.id}>{org.login}</li>
                ))}
            </ul>
        </div>
    );

    const StarredReposList = ({ starredRepos }) => (
        <div>
            <h3>Top Starred Repositories:</h3>
            <ul>
                {starredRepos.slice(0, 5).map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    const ReposList = ({ repos }) => (
        <div>
            <h3>Top Repositories:</h3>
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
        <div>
            <form className={styles.userForm} onSubmit={handleSubmit}>
                <input type="text" ref={searchRef} placeholder="Search a Github User" />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
            <main id="main">
                {error ? createErrorCard() : userData.login && createUserCard()}
            </main>
        </div>
    );
};

export default GitHubProfiles;
