/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Header } from './components/header/header';
import { Center } from './components/center/center';
import { Page } from './components/page/page';

const root = document.getElementById('root')

const App = () => (
  <>
    <Header />
    <Center justifyContent='space-between'>
      <Page color='main-dark' width='380px' title='Search'>Data</Page>
      <Page title='Main'>Main</Page>
    </Center>
  </>
);

const dispose = render(() => <App />, root!)

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}