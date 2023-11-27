import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './GitHubProfiles.module.css';

const APIURL = 'https://api.github.com/users/';

const GitHubProfiles = () => {
    const [userData, setUserData] = useState({});
    const [reposData, setReposData] = useState([]);
    const [error, setError] = useState('');
    const [starredRepos, setStarredRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchRef = useRef();

    const getUser = async (username) => {
        try {
            setLoading(true);
            const [userData, repos, starred] = await Promise.all([
                axios(APIURL + username),
                axios(APIURL + username + '/repos?sort=updated'),
                axios(APIURL + username + '/starred'),
            ]);

            setUserData(userData.data);
            setReposData(repos.data);
            setStarredRepos(starred.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError('No profile with this username: ' + username);
            } else {
                setError('An error occured.');
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
            const { data } = await axios(APIURL + username + './starred');
            setStarredRepos(data);
        } catch (err) {
            setError('Problem fetching starred repos.');
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
                    <div id="repos">{reposData && reposData.length > 0 && <ReposList repos={reposData} />}</div>
                </div>
            </div>
        );
    };

    const createErrorCard = () => (
        <div className={styles.card}>
            <h1>{error}</h1>
        </div>
    );

    const ReposList = ({ repos }) => (
        <div>
            {repos.slice(0, 5).map((repo) => (
                <a key={repo.id} className={styles.repo} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                </a>
            ))}
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
            </form>
            <main id="main">{error ? createErrorCard() : userData.login && createUserCard()}</main>
        </div>
    );
};

export default GitHubProfiles;
