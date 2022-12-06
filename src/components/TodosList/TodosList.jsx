import { useDispatch, useSelector } from 'react-redux';
import { TodosItem } from '../TodosItem/TodosItem';
import { TodoList, TodoBosx } from './todosList.styled';
import { allContacts } from '../../redux/todos/operation';
import { selectVisibleTasks } from '../../redux/todos/selectors';
import { useEffect } from 'react';

export const TodosList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <TodoBosx>
      {filteredContacts.length > 0 && (
        <TodoList>
          {filteredContacts.map(item => (
            <TodosItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.phone}
            />
          ))}
        </TodoList>
      )}
    </TodoBosx>
  );
};
