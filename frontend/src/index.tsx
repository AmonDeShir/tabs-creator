/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Header } from './components/header/header';
import { SongList } from './components/song-list/song-list';
import { MainPage } from './components/main-page/main-page';

const root = document.getElementById('root')

const App = () => (
  <>
    <Header />
    <div class="main">
      <SongList />
      <MainPage />
    </div>
  </>
);

const dispose = render(() => <App />, root!)

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}