export const getTokenStatus = () => {
  const token = localStorage.getItem('access_token');

  return !!token;
};
