import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddUser from './AddUser';
function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Register User</Link>
                                </li>
                            </ul >
                        </div >
                    </div >
                </nav >

                < Switch >
                    <Route exact path ="/" >
                        <AddUser></AddUser>
                    </Route >
                </Switch >
            </div >
        </Router >
    )
}
export default ReactRouter

