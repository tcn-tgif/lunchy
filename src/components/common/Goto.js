import React from 'react';
import { Link } from 'react-router-dom';

// Small HOC to pass to a MUI Button element
/*
eg:
  <Button component={Goto('path/to/navigate/to/${someParameter}`)} color="primary">
    Navigate!
  </Button>
*/
const Goto = (path) => props => <Link to={path} {...props} />;

export default Goto;
