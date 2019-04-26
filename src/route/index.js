import Contact from "../containers/Contact";
import Stuff from "../containers/Stuff";
import Home from "../containers/home";
import {HashRouter, NavLink, Route} from "react-router-dom";
import React from "react";

class AppRoute extends React.Component{
    render (){
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default AppRoute;