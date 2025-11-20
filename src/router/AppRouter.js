import { useCallback, useContext, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import WrapUserContext from '../hoc/WrapUserContext/WrapUserContext';
import Layout from '../layout/Layout';
import { getLocalStorage } from '../lib/localstorage';
import {
  Page404,
  PageAboutMe,
  PageAdmin,
  PageBoilerplate,
  PageCertyficate,
  PageCookies,
  PageCV,
  PageFeatures,
  PageHome,
  PageLogin,
  PageNoAccess,
  PageRegister,
  PageSkills,
} from '../pages';

export const ProtectedAdminPage = ({ children }) => {
  const { isAdmin, updateUserContext } = useContext(UserContext);
  const isAdminLS = getLocalStorage('userRoleAdmin', true);

  const validateAdminFromLocalstorage = useCallback(() => {
    if (isAdminLS) {
      updateUserContext?.((prevState) => ({
        ...prevState,
        isAdmin: true,
      }));
    }
  }, [isAdminLS, updateUserContext]);

  useEffect(() => {
    validateAdminFromLocalstorage();
  }, [validateAdminFromLocalstorage]);

  if (isAdminLS || isAdmin) {
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
        <Route path="/features" element={<PageFeatures />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/noaccess" element={<PageNoAccess />} />
        <Route path="/cv" element={<PageCV />} />
        <Route path="/certyficate" element={<PageCertyficate />} />
        <Route path="/skills" element={<PageSkills />} />
        <Route path="/aboutme" element={<PageAboutMe />} />

        <Route
          path="/page"
          element={<ProtectedAdminPage children={<PageBoilerplate />} />}
        />
        <Route
          path="/cookies"
          element={<ProtectedAdminPage children={<PageCookies />} />}
        />

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
