import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {

  const [ isRegistrated, setIsRegistrated ] = useState(true);
  
  return (
    <div>
      { isRegistrated ? <Login setIsRegistrated={setIsRegistrated} /> : <Register setIsRegistrated={setIsRegistrated} /> }
    </div>
  );
}

export default Auth;