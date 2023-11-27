import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './GitHubProfiles.module.css';

const APIURL = 'https://api.github.com/users/';

const GitHubProfiles = () => {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const formRef = useRef(null);
    const searchRef = useRef(null);

    const getUser = async (username) => {
        try {
            const { data } = await axios(APIURL + username);
            setUserData(data);
            getRepos(username);
        } catch (err) {
            console.error('Error fetching user data:', err);
            setUserData(null);
            if (err.response && err.response.status === 404) {
                createErrorCard('No profile with this username');
            } else {
                createErrorCard('Error fetching user data');
            }
        }
    };


    const getRepos = async (username) => {
        try {
            const { data } = await axios(APIURL + username + '/repos?sort=created');
            setRepos(data.slice(0, 5));
        } catch (err) {
            setRepos([]);
            createErrorCard('Problem fetching repos');
        }
    };

    const createErrorCard = (msg) => {
        console.log('Error message:', msg);
        setUserData(
            <div className={styles.card}>
                <h1>{msg}</h1>
            </div>
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = searchRef.current.value;

        if (user) {
            getUser(user);
            searchRef.current.value = '';
        }
    };

    useEffect(() => {
        formRef.current.addEventListener('submit', handleSubmit);

        return () => {
            formRef.current.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <div className={styles.container}>
            <form ref={formRef} className={styles.userForm}>
                <input type="text" placeholder="Search a GitHub user" className={styles.userInput} ref={searchRef} />
            </form>
            <main className={styles.main}>
                {userData !== null ? (
                    userData === 'NOT_FOUND' ? (
                        <div className={styles.card}>
                            <h1>No profile with this username</h1>
                        </div>
                    ) : (
                        <div className={styles.card}>
                            <div>
                                <img src={userData.avatar_url} alt={userData.name} className={styles.avatar} />
                            </div>
                            <div className={styles.userInfo}>
                                <h2>{userData.name || userData.login}</h2>
                                {userData.bio && <p>{userData.bio}</p>}
                                <ul>
                                    <li>{userData.followers} <strong>Followers</strong></li>
                                    <li>{userData.following} <strong>Following</strong></li>
                                    <li>{userData.public_repos} <strong>Repos</strong></li>
                                </ul>
                                <div>
                                    {repos.map((repo) => (
                                        <a key={repo.id} className={styles.repo} href={repo.html_url} target="_blank">
                                            {repo.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                ) : null}
            </main>
        </div>
    );
}

export default GitHubProfiles;
