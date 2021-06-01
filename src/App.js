import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import CreateBlog from "./Components/CreateBlog";
import PageNotFound from "./Components/PageNotFound";

const App = () => {

    return (

        <Router>
            <NavBar />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/createBlog">
                        <CreateBlog />
                    </Route>
                    <Route path="/blog/:id">
                        <Blog />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
};

export default App;