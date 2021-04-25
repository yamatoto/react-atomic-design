import axios from 'axios';
import { useState } from 'react';
import { UserType } from '../../types/user';

export const useFetchUsers: () => {
  fetchUsers: () => void;
  users: UserType[];
  setId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  loading: boolean;
  error: boolean;
} = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    setError(false);
    setUsers([]);
    const queryParam = id === '' ? '' : `?id=${id}`;
    axios
      .get<UserType[]>(
        `https://jsonplaceholder.typicode.com/users${queryParam}`
      )
      .then(({ data }) => setUsers(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return { fetchUsers, users, setId, id, loading, error };
};
