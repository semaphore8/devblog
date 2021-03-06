---
path: "/Using-React-Router-with-create-react-app"
date: 2020-05-02
title: "Using React Router with create-react-app"
subtitle: "Simplify your code"
tags: "React"
readtime: 3
template: blogpost
tableOfContents: false
postType: "Article"
---

One of the obvious advantages of React Router (v4 and higher) comparing to other web-app frameworks routers is the freedom of implementation. React Router developers call it ["Dynamic Routing"](https://reacttraining.com/react-router/web/guides/philosophy). Since React Router is basically a bunch of React components, we can initialize and configure them anywhere in our app.

If you are starting your project with `create-react-app`, it can be very handy to put the router in your `index.js` file to avoid spawning unneccessary wrapping components in your root component.

We're simply adding function component straight into `index.js` and that's it:

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Admin from './Admin';

function Routing(props) {
    return (
            <Router>
                <Route exact path="/" component={App} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
            </Router>
    )
}

ReactDOM.render(<Routing/>, document.getElementById('root'));
```
