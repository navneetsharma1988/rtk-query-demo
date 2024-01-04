import { useGetUsersQuery } from "./features/userSlice";


function App() {
  
  const { 
    data: users,
    isLoading,
    isSuccess
  } = useGetUsersQuery();
  
  return (
    <div className="App">
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}
      {isSuccess && users.map(user => (<h2 key={Math.random()}>{user.name}</h2>))}
    </div>
  );
}
export default App;