import React, { useState, useEffect } from 'react';
import styles from './LiveUserFilter.module.css';

const LiveUserFilter = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://randomuser.me/api?results=69');
                const { results } = await res.json();
                setUsers(results);
                setFilteredUsers(results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        filterData(searchTerm);
    }, [searchTerm]);

    const filterData = (term) => {
        const filteredData = users.filter((user) => {
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const location = `${user.location.city}, ${user.location.country} - ${user.location.postcode}`;
            return fullName.toLowerCase().includes(term.toLowerCase()) || location.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredUsers(filteredData);
    };

    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h4 className={styles.title}>Live User Filter</h4>
                    <small className={styles.subtitle}>Search by name or location</small>
                    <input
                        type="text"
                        name="name"
                        id="filter"
                        placeholder="Search..."
                        className={`w-1/3 py-2 border-b-2 border-blue-500 outline-none focus:border-red-500 focus:outline-none ${styles.searchInput}`}
                        autoFocus
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </header>
                <ul className={styles.userList}>
                    {loading ? (
                        <li>
                            <h3>Loading...</h3>
                        </li>
                    ) :
                        filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <li key={user.login.uuid} className={styles.userListItem}>
                                    <img src={user.picture.large} alt={user.name.first} />
                                    <div className={styles.userInfo}>
                                        <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
                                        <p>
                                            <strong>Age:</strong> {user.dob.age}
                                        </p>
                                        <p>
                                            <strong>Location:</strong> {`${user.location.city}, ${user.location.country} - ${user.location.postcode}`}
                                        </p>
                                        <p>
                                            <strong>Email:</strong> {user.email}
                                        </p>
                                        <p>
                                            <strong>Phone No.:</strong> {user.phone}
                                        </p>
                                        <p>
                                            <strong>Username:</strong> {user.login.username}
                                        </p>
                                        <p>
                                            <strong>Password:</strong> {user.login.password}
                                        </p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>
                                <h3>User not found.</h3>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default LiveUserFilter;
