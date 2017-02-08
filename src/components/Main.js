require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImagesList from './ImagesList.js'



class AppComponent extends React.Component {
  render() {
    return (
      <ImagesList/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
