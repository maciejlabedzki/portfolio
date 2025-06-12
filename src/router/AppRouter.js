import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import WrapUserContext from '../hoc/WrapUserContext/WrapUserContext';
import Layout from '../layout/Layout';
import AdminPage from '../pages/Admin/Admin';
import PageCookies from '../pages/Cookies/Cookies';
import Features from '../pages/Features/Features';
import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <WrapUserContext>
            <Layout />
          </WrapUserContext>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/cookies" element={<PageCookies />} />
        <Route path="/features" element={<Features />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
