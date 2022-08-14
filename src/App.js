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
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}

          <Route path="/" element={<Home />} />

          <Route path="editor" element={<Editor />} />

          <Route path="admin" element={<Admin />} />

          <Route path="lounge" element={<Lounge />} />

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
