import useUsers from "./hooks/users";

export default function Root() {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
