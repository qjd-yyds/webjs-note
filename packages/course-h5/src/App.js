import { BrowserRouter } from 'react-router-dom';
import Frame from './common/components/frame';
import IndexRoute from './router';
function App() {
  return (
    <BrowserRouter>
      <Frame>
        <IndexRoute></IndexRoute>
      </Frame>
    </BrowserRouter>
  );
}

export default App;
