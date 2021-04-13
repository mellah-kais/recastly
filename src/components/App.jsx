import VideoList from './VideoList.js';
import VideoData from '../data/VideoData.js';

var App = () => (
	<div>
		<nav className="navbar">
			<div className="col-md-6 offset-md-3"></div>
		</nav>
		<div className="row">
			<div className="col-md-7"></div>
			<div className="col-md-5">
				<VideoList videos={VideoData} />
			</div>
		</div>
	</div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
