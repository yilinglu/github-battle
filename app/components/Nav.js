var React = require('react');
var ReactRouter = require('react-router-dom');
var NavLink = ReactRouter.NavLink;
var Link = ReactRouter.Link;


function Nav(props) {
    return (
        <ul className="nav">
            <li>
                <NavLink exact activeClassName='active' to="/">
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink exact activeClassName='active' to="/popular">
                    Popular
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName='active' to="/battle">
                    Battle
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;