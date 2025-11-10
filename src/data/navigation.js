const NAVIGATION_DATA = [
  { name: 'Home', path: '/', admin: false, visible: true },
  { name: 'Features', path: '/features', admin: false, visible: true },
  { name: 'CV', path: '/cv', admin: false, visible: true },
  { name: 'Cookies', path: '/cookies', admin: false, visible: false },
  { name: 'Page', path: '/page', admin: true, visible: true },
  { name: 'Certyficate', path: '/certyficate', admin: false, visible: true },
  { name: 'Skills', path: '/skills', admin: false, visible: true },
  { name: 'AboutMe', path: '/aboutme', admin: false, visible: true },
];

const NAVIGATION_USER_DATA = [
  { name: 'Login', path: '/login', admin: false, visible: true },
  { name: 'Register', path: '/register', admin: false, visible: true },
  { name: 'Admin', path: '/admin', admin: false, visible: true },
];

export { NAVIGATION_DATA, NAVIGATION_USER_DATA };
