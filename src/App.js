import Home from "./pages/home/Home";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";

import classes from "./App.module.scss";
function App() {
  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
