var React = require('react');
var ReactDOM = require('react-dom');

var Start = function() {
	return (
		<div> 
			<p>Hello Wolrd</p>
		</div>
	);
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Start />, document.getElementById('app'));
});