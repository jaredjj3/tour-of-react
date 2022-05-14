import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <p>Welcome to a tour of React!</p>

      <br />

      <b>JavaScript, JSX, and TSX</b>
      <ul>
        <li>
          <Link to="/part/1">/part/1</Link>
        </li>
        <li>
          <Link to="/part/2">/part/2</Link>
        </li>
      </ul>
    </div>
  );
};
