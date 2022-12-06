export const getIsLoggenIn = state => state.auth.isLoggenIn;

export const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggenIn,
  getUsername,
};

export default authSelectors;

// export const selectVisibleTasks = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normolizedFilter = filter.toLowerCase();

//     return contacts.items.filter(item =>
//       item.name.toLowerCase().includes(normolizedFilter)
//     );
//   }
// );
