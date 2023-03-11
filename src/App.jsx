import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'utils/routes';
import { Layout } from 'layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const DetailsPage = lazy(() =>
  import('./pages/DetailsPage/DetailsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.LAYOUT} element={<Layout />}>

        <Route index element={<HomePage />} />
        <Route path={routes.DETAILS} element={<DetailsPage />} />

        <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
