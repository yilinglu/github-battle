var React = require('react');
var Popular = require('./Popular');
var Home = require('./Home');
var Battle = require('./Battle');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
// state
// life cycle 
// UI 
class App extends React.Component {
    render(){
        return ( 
            <Router>
                <div className = 'container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/popular' component = {Popular} />
                        <Route exact path='/battle' component = {Battle} />
                        <Route exact path='/' component = {Home} />
                        <Route render = { function() {
                            return <p> Page Not found </p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;