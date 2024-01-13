/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Header } from './components/header/header';
import { Center } from './components/center/center';

const root = document.getElementById('root')

const App = () => (
  <>qq
    <Header />
    <Center justifyContent='space-between'>
      <div>Songs</div>
      <div>Main</div>
    </Center>
  </>
);

const dispose = render(() => <App />, root!)

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}