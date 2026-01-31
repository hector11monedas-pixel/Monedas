import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import EuroMenu from './pages/EuroMenu';
import EuroCountries from './pages/EuroCountries';
import EuroCountryView from './pages/EuroCountryView';
import CommemorativeMenu from './pages/CommemorativeMenu';
import CommemorativeCountryView from './pages/CommemorativeCountryView';
import CommemorativeYearView from './pages/CommemorativeYearView';
import EuroMap from './pages/EuroMap';
import Spain from './pages/Spain';
import World from './pages/World';
import Banknotes from './pages/Banknotes';
import Statistics from './pages/Statistics';
import LoginPage from './pages/LoginPage';
import WorldCountryView from './pages/WorldCountryView';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="euro" element={<EuroMenu />} />
          <Route path="euro/normal" element={<EuroCountries />} />
          <Route path="euro/normal/:countryName" element={<EuroCountryView />} />
          <Route path="euro/commemorative" element={<CommemorativeMenu />} />
          <Route path="euro/commemorative/year/:year" element={<CommemorativeYearView />} />
          <Route path="euro/commemorative/:countryName" element={<CommemorativeCountryView />} />
          <Route path="euro/map" element={<EuroMap />} />
          <Route path="spain" element={<Spain />} />
          <Route path="world" element={<World />} />
          <Route path="world/:countryId" element={<WorldCountryView />} />
          <Route path="banknotes" element={<Banknotes />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
