import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import Routes from "./routes/Routes";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
