import { useState, useEffect } from 'react';
import { login, getUsers } from '../api/api'; 

const useAuthLogic = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loginUser = async (email, password) => {
        try {
            const response = await login(email, password);
            const { token, user } = response; 

            
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('email', email);

            setUser(user);
        } catch (err) {
            setError(err.message);
        }
    };

    const verifyUserType = async () => {
        try {
            const users = await getUsers();
            const currentUserEmail = window.localStorage.getItem('email');

            const currentUser = users.find((user) => user.email === currentUserEmail);
            if (currentUser) {
                setUser(currentUser);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            verifyUserType();
        } else {
            setLoading(false);
        }
    }, []);

    return { user, loading, error, loginUser };
};

export default useAuthLogic;
