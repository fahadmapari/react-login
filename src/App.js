import Register from "./Register";
import Login from "./Login";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import Layout from "./components/Layout";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";
import Unathorized from "./components/Unathorized";
import LinkPage from "./components/LinkPage";  


function App() {
  return (
    <main className="App">
      {/* <Register /> */}
      <Login />
    </main>
  );
}

export default App;
