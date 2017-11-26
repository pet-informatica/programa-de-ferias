import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
