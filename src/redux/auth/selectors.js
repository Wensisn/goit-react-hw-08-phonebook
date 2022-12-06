export const getIsLoggenIn = state => state.auth.isLoggenIn;

export const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggenIn,
  getUsername,
};

export default authSelectors;
