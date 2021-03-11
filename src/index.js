import reactDom from 'react-dom';
import App from './App';
import './index.scss';
import {BrowserRouter as Router} from 'react-router-dom';

reactDom.render(
<Router>
    <App/>
</Router>
,document.querySelector('#app'));