
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data);
        } catch (err) {
            setError("Looks like we can't find the users");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData.length > 0 && (
                <div>
                    {userData.map((user) => (
                        <div key={user.id} className="border-b py-4">
                            <h2 className="text-lg font-bold">{user.login}</h2>
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos}</p>
                            <p>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                    View Profile
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;