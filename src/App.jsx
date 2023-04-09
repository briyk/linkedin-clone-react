import {useEffect} from 'react'
import Feed from "./components/Feed/Feed"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Login from "./components/Login/Login";
import { auth } from './firebase'
import { useSelector ,useDispatch} from 'react-redux';
import { logIn, logOut ,selectUser  } from './redux/userSlice';
import Widgets from './components/widgets/Widget';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(logIn({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photo: userAuth.photo,
        }))
      } else {
        //user logged out
        dispatch(logOut())
      }
    })
  },[])
 
  return (
    <div className="app">
      {
        user === null ? <Login /> : (
          <>
            <Header />
            <main className="app__body">
              <Sidebar />
              <Feed />
              <Widgets/>
            </main>
          </>
        )
      }
    </div>
  )
}


export default App
