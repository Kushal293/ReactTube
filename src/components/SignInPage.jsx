import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { auth, googleAuth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useNavigate } from 'react-router-dom';
import { signIn, logOut } from '../utils/authSlice';
import { useDispatch } from 'react-redux';

 
const SignInPage = () => {
    
    const [ signInEmail, setSignInEmail ] = useState("");
    const [ signUpEmail, setSignUpEmail ] = useState("");
    const [ signInPassword, setSignInPassword ] = useState("");
    const [ signUpPassword, setSignUpPassword ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);
    const [ signIn, setSignIn ] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signUp = async () => {
        try {
            console.log(`Email: ${signUpEmail} Password: ${signUpPassword}`);
            await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
            // dispatch(signIn(auth.currentUser));
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


    const signInAccount = async () => {
        try {
            console.log(`Email: ${signInEmail} Password: ${signInPassword}`);
            await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
            // dispatch(signIn(auth.currentUser));
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth);
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(signInEmail)
    // console.log(signUpEmail)

    return (
      <div className='h-screen w-screen bg-black/80 text-white flex items-center justify-center'>
          <div className='flex flex-col gap-8 w-[calc(100vw-30px)] md:w-[400px] h-[400px] bg-[#181818] rounded-lg items-center justify-center'>
              <div className='flex flex-col gap-3'>
                    <input type="email" placeholder='email' value={ signIn ? signInEmail : signUpEmail } className='w-72 px-4 py-2 rounded-xl outline-none text-black font-semibold placeholder:text-gray-500' onChange={ (e) => {
                        signIn ? setSignInEmail(e.target.value) : setSignUpEmail(e.target.value);
                    } } />
                    <div className='relative w-72 flex items-center'>
                        <input type={ `${ showPassword ? "text" : "password" }` } placeholder='password' value={ signIn ? signInPassword : signUpPassword } className='w-full px-4 py-2 rounded-xl outline-none text-black font-semibold placeholder:text-gray-500' onChange={ (e) => {
                            signIn ? setSignInPassword(e.target.value) : setSignUpPassword(e.target.value);
                        } } />
                        <span className='absolute right-2 text-black' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</span>
                    </div>
                </div>
                {
                    signIn ? (<button className='px-20 py-3 bg-red-800 hover:bg-red-700 rounded-xl transition-all font-semibold' onClick={ signInAccount }>Sign In</button>) :
                        (<button className='px-20 py-3 bg-red-800 hover:bg-red-700 rounded-xl transition-all font-semibold' onClick={signUp}>Sign Up</button>)
                }
                {
                 signIn ? (<p onClick={() => setSignIn(false)}>Create new Account ? <span className='text-blue-600 font-semibold cursor-pointer'>Sign Up</span></p>) :
                        (<p onClick={() => setSignIn(true)}>Already have an Account ? <span className='text-blue-600 font-semibold cursor-pointer'>Sign In</span></p>)
                }
                <button className='px-12 py-3 bg-blue-700 hover:bg-blue-800 rounded-xl flex items-center gap-3 transition-all font-semibold' onClick={signInWithGoogle}><GoogleIcon className='text-red-900' /> Sign In Using Google</button>
          </div>
    </div>
  )
}

export default SignInPage