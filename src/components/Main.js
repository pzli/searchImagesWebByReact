require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImagesList from './ImagesList.js';
import Header from './Header.js';


class AppComponent extends React.Component {
  render() {
    return (
    	<div>
			<Header/>
        	<ImagesList/>
    	</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
