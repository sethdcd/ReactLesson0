import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyD8hLBxwt-9lw_0i04x-u6noVE3VyV3e1U';

// Create a new component. This should produce some HTML.
const App = () => {
    return (
    	<div>
    		<SearchBar />
    	</div>
	);
}

// Take this component's generate HTML and put it   
// on the page (in the dom).

ReactDOM.render(<App />, document.querySelector('.container'));
