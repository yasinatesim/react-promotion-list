import isMobile from 'ismobilejs';

import { Provider } from 'react-redux';

import Routes from 'routes';

import DesktopLayout from 'containers/DesktopLayout';

import Modal from 'components/Modal';

import { store } from './store';

import 'assets/styles/app.scss';

function App() {
  if (!isMobile().phone) {
    return <DesktopLayout />;
  }

  return (
    <Provider store={store}>
      <Routes />

      <Modal />
    </Provider>
  );
}

export default App;
