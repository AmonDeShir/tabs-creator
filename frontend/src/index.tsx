/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Header } from './components/header/header';
import { Center } from './components/center/center';
import { TitleBar } from './components/title-bar/title-bar';

const root = document.getElementById('root')

const App = () => (
  <>
    <Header />
    <Center justifyContent='space-between'>
      <div style="width: 100%; max-width: 380px;"><TitleBar>Search</TitleBar></div>
      <div style="width: 100%"><TitleBar>Main</TitleBar></div>
    </Center>
  </>
);

const dispose = render(() => <App />, root!)

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}