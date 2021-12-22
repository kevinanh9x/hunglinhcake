import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./apps/components/AboutUs/AboutUs";
import Blogs from "./apps/components/Blogs/blogs";
import Contacts from "./apps/components/Contacts/contacts";
import Home from "./apps/components/Home";
import Shopp from "./apps/components/Products/shopp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/shop" component={Shopp}></Route>
          <Route exact path="/blog" component={Blogs}></Route>
          <Route exact path="/contact" component={Contacts}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
