import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from './components/link';

export const App = () => (
  <div>
    <h1>Hello, World!!!</h1>
    <br />
    <Link to="/hello">/hello</Link>
    <br />
    <Link to="/world">/world</Link>
  </div>
);

export default hot(module)(App);
