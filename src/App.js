import "./App.css";
import Homepage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import BrandParts from "./components/brandParts";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/brandParts" component={BrandParts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
