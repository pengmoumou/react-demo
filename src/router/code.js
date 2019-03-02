//as component
import { Router } from 'react-router';
render(<Router />, document.getElementById('app'));


//use router

//react-router2.0
import { Router, Route, hashHistory } from 'react-router';
render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));

//Multiple route
<Router history={hashHistory}>
    <div>
        <Route path="/" component={App} />
        <Route path="/repos" component={Repos} />
        <Route path="/about" component={About} />
    </div>
</Router>

    //Nested Routes
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/* be discarded in react-router4.0 */}
            <IndexRoute component={Demo} />
            <Route path="/repos" component={Repos} />
            <Route path="/about" component={About} />
        </Route>
    </Router>

//or
let routes = <Route path="/" component={App}>
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
</Route>;

<Router routes={routes} history={hashHistory} />

//react-router4.0
import { Router, Route } from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()
render((
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));

//Multiple route
<Router history={history}>
    <div>
        <Route path="/" component={App} />
        <Route path="/repos" component={Repos} />
        <Route path="/about" component={About} />
    </div>
</Router>

//Nested Routes in component
class App extends Component {
    render () {
        return (<div>
            <Route path="/demo" component={Demo}></Route>
        </div>
        )
    }
}

//The secondary routing
import Demo from '../components/demo';
<Route path="/demo/demo0" component={Demo} />