import isMobile from 'ismobilejs';

// import { Provider } from 'react-redux'

import Routes from 'routes';

import DesktopLayout from 'containers/DesktopLayout';

import 'assets/styles/app.scss';

function App() {
  if (!(isMobile().phone)) {
    return (
      <DesktopLayout />
    )
  }

  return (
    // <Provider store={{}}>
      <Routes />
    // </Provider>
  );
}

export default App;
