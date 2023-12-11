import logo from "./logo.svg";
import "./App.css";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./utils/firebase.utils";

function App() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactxx
        </a>
        <button onClick={logGoogleUser}>Sign With Google Popup</button>
      </header>
    </div>
  );
}

export default App;
