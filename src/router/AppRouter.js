import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import WrapUserContext from '../hoc/WrapUserContext/WrapUserContext';
import Layout from '../layout/Layout';
import {
  Page404,
  PageAdmin,
  PageCookies,
  PageFeatures,
  PageHome,
  PageLogin,
  PageNoAccess,
  PageRegister,
} from '../pages';
import PageCV from '../pages/CV/CV';

export const ProtectedAdminPage = ({ children }) => {
  const isAdmin = JSON.parse(process.env.REACT_APP_ADMIN);

  if (isAdmin) {
    return children;
  } else {
    return <PageNoAccess />;
  }
};

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
        <Route path="/" element={<PageHome />} />
        <Route path="/cookies" element={<PageCookies />} />
        <Route path="/features" element={<PageFeatures />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/noaccess" element={<PageNoAccess />} />
        <Route path="/cv" element={<PageCV />} />
        <Route
          path="/admin"
          element={<ProtectedAdminPage children={<PageAdmin />} />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
