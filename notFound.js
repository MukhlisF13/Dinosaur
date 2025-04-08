import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: `center`, padding: `50px 20px`}}>
  <h1>404 - Page Not Found</h1>
<p>Oops! Looks Like this page has gone extinct.</p>
<div style={{ margin: `30px 0` }}>
<Link to="/" className="nav-link">
  Return to Homepage
  </Link>
  </div>
  </div>
);
};

export default notFound;
