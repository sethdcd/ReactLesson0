import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD8hLBxwt-9lw_0i04x-u6noVE3VyV3e1U';

// Create a new component. This should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'rogan'}, (videos) => {
    		this.setState({ videos }); // syntax sugar where object is videos: videos
		});
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
