import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import Background from './components/Background/Background';
 import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import './App.css'
import { Navigate } from "react-router-dom";
function App() {
 
  return (
    <div>
      <SignedOut>
        <div className="sign-btn">
        <h1>Project Based Learning</h1>
        <SignInButton/>
        </div>
        {/* <p>This content is public. Only signed out users can see the SignInButton above this text.</p> */}
        <Background/>
        <Navbar/>
        <Home/>
        <Footer/>
       
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => <Navigate to="Home"/>} />
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
    </div>
  )
}
 
export default App