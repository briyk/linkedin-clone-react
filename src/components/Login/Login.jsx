import { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword  , updateProfile  } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/userSlice'


const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [picture, setPicture] = useState('')

  const dispatch = useDispatch()

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: picture,
        })
          .then(() => {
            dispatch(
              logIn({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photo: picture,
              })
            );
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            dispatch(logIn({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                picture: userCredential.user.photo,
            }));
        })
        .catch(error => alert(error.message));
};
  return (
    <div className="login">
      Sign In
      <img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-logo-png-transparent.png" alt="" />
      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="User Name (Required)" />
        <input value={picture} onChange={e => setPicture(e.target.value)} type="text" placeholder="User Avatar (Optional)" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="User Email" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member yet <span href="" onClick={handleRegister}>Register Now</span></p>
    </div>
  )
}

export default Login