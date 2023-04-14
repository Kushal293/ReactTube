import { Provider, useDispatch } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { auth } from './config/firebase';
import { logOut, signIn } from './utils/authSlice';
import { onAuthStateChanged } from 'firebase/auth';



function App () {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      const { email, uid } = currentUser;
        dispatch(signIn({email, uid}));
    }
    else {
        dispatch(logOut());
    }
    // console.log(currentUser);
  });

  return (
      <div className='bg-black main main-dark w-screen max-w-full'>  {/*h-screen bg-black container container-dark main w-screen */ }
        <Head />
        <Body />
      </div>
  );
}

export default App;
