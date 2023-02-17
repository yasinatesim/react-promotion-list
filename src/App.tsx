import isMobile from 'ismobilejs';

import { MobileLayout, MainLayout } from 'containers';

import 'assets/styles/app.scss';

function App() {
  return <div>{isMobile().phone ? <MobileLayout /> : <MainLayout />}</div>;
}

export default App;
