import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.todos;

export const selectFilter = state => state.filter;

export const selectVisibleTasks = createSelector(
  [selectContacts, selectFilter],
  (todos, filter) => {
    const normolizedFilter = filter.toLowerCase();

    return todos.items.filter(item =>
      item.name.toLowerCase().includes(normolizedFilter)
    );
  }
);
