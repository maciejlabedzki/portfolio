const NAVIGATION_DATA = [
  { name: 'Home', path: '/', admin: false },
  { name: 'Features', path: '/features', admin: false },
  { name: 'Cookies', path: '/cookies', admin: false, visible: false },
];

const NAVIGATION_USER_DATA = [
  { name: 'Login', path: '/login', admin: false },
  { name: 'Register', path: '/register', admin: false },
  { name: 'Admin', path: '/admin', admin: true },
];

export { NAVIGATION_DATA, NAVIGATION_USER_DATA };
