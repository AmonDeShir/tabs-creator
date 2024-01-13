/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Header } from './components/header/header';

const root = document.getElementById('root')

const App = () => (
  <>
    <Header />
  </>
);

render(() => <App />, root!)
