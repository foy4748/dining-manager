const SERVER_ADDRESS = import.meta.env.VITE_SERVER_ADDRESS;

const ApiRoutes = {
  get: {
    deactivate_meal: `${SERVER_ADDRESS}/deactivate-meal/`,
  },
  post: {
    activate_meal: `${SERVER_ADDRESS}/activate-meal`,
    deactivate_meal: `${SERVER_ADDRESS}/deactivate-meal/`,
  },
};
export default ApiRoutes;
