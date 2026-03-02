import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout/Layout';
import LoadingFallback from './components/common/LoadingFallback';
import GlobalSearch from './components/common/GlobalSearch';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const EuroMenu = lazy(() => import('./pages/EuroMenu'));
const EuroCountries = lazy(() => import('./pages/EuroCountries'));
const EuroCountryView = lazy(() => import('./pages/EuroCountryView'));
const CommemorativeMenu = lazy(() => import('./pages/CommemorativeMenu'));
const CommemorativeCountryView = lazy(() => import('./pages/CommemorativeCountryView'));
const CommemorativeYearView = lazy(() => import('./pages/CommemorativeYearView'));
const EuroMap = lazy(() => import('./pages/EuroMap'));

const World = lazy(() => import('./pages/World'));
const Banknotes = lazy(() => import('./pages/Banknotes'));
const Statistics = lazy(() => import('./pages/Statistics'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const WorldCountryView = lazy(() => import('./pages/WorldCountryView'));
const WorldPeriodView = lazy(() => import('./pages/WorldPeriodView'));
const BanknoteCountryView = lazy(() => import('./pages/BanknoteCountryView'));
const TradeList = lazy(() => import('./pages/TradeList'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Gallery = lazy(() => import('./pages/Gallery'));
const PublicCollection = lazy(() => import('./pages/PublicCollection'));
const DataManagement = lazy(() => import('./pages/DataManagement'));
const InventoryManager = lazy(() => import('./pages/InventoryManager'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <ScrollToTop />
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Routes>
        <Route path="/login" element={
          <Suspense fallback={<LoadingFallback />}>
            <LoginPage />
          </Suspense>
        } />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shared/:userId" element={<PublicCollection />} />
          <Route path="euro" element={<EuroMenu />} />
          <Route path="euro/normal" element={<EuroCountries />} />
          <Route path="euro/normal/:countryName" element={<EuroCountryView />} />
          <Route path="euro/commemorative" element={<CommemorativeMenu />} />
          <Route path="euro/commemorative/year/:year" element={<CommemorativeYearView />} />
          <Route path="euro/commemorative/:countryName" element={<CommemorativeCountryView />} />
          <Route path="euro/map" element={<EuroMap />} />

          <Route path="world" element={<World />} />
          <Route path="world/:countryId" element={<WorldCountryView />} />
          <Route path="world/:countryId/:periodId/:subPeriodId?" element={<WorldPeriodView />} />
          <Route path="banknotes" element={<Banknotes />} />
          <Route path="banknotes/:countryId" element={<BanknoteCountryView />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="trade" element={<TradeList />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="data" element={<DataManagement />} />
          <Route path="inventory" element={<InventoryManager />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
