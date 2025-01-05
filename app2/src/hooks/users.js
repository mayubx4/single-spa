import { useState, useEffect, useMemo, useCallback } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run only once on mount

  // Memoizing the users list to avoid unnecessary recalculations on re-renders
  const memoizedUsers = useMemo(() => users, [users]);

  // Memoize the loading and error states to avoid unnecessary renders
  const memoizedLoading = useMemo(() => loading, [loading]);
  const memoizedError = useMemo(() => error, [error]);

  return { users: memoizedUsers, loading: memoizedLoading, error: memoizedError };
};

export default useUsers;
