import { BrowserRouter } from 'react-router-dom';
import { Navbar, ContentPanel } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-panel-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <ContentPanel />
      </div>
    </BrowserRouter>
  );
};

export default App;
