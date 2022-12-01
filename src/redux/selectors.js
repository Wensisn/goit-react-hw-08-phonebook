import { createSelector } from '@reduxjs/toolkit';

export const selectLogin = state => state.login;

export const selectFilter = state => state.filter;

// export const selectVisibleTasks = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normolizedFilter = filter.toLowerCase();

//     return contacts.items.filter(item =>
//       item.name.toLowerCase().includes(normolizedFilter)
//     );
//   }
// );
