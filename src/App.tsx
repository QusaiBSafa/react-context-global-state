import React from 'react';
import { AuthContext } from './context/AuthContext';

const App: React.FC = () => {
  const { user, login, logout } = React.useContext(AuthContext);

  return (
    <div>
      <h1>React Context Global State</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login("testuser", "password")}>Login</button>
      )}
    </div>
  );
};

export default App;