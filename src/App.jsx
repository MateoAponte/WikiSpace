import { PlanetRouter } from './router/router.jsx';
import { Layout } from '@/layout/Layout.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="planet-wiki">
      <BrowserRouter>
        <Layout>
          <Routes>
            {PlanetRouter.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
