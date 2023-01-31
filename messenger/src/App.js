import { Routes, Route } from 'react-router-dom';

// Components
import Login from './Components/Login';
import Chats from './Components/Chats';

// Contexts
import AuthContextProvider from './Contexts/AuthContextProvider';

const App = () => {
  return (
    <>
    <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chats' element={<Chats />} />
        </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;
