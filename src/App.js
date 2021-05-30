import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

const App = () => {

    return (

        <Router>
            <NavBar />
            <div className="content">
                <Home />
            </div>
        </Router>
    );
};

export default App;