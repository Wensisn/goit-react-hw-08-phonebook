import { useDispatch } from 'react-redux';
import {
  TodoItem,
  TodoInfo,
  TodoButton,
  TodoBoxsInfo,
} from '../TodosList/todosList.styled';
import { deleteContact } from '../../redux/todos/operation';

export const TodosItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TodoItem key={id}>
        <TodoBoxsInfo>
          <TodoInfo>{name}:</TodoInfo>
          <TodoInfo>{number}</TodoInfo>
          <TodoButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </TodoButton>
        </TodoBoxsInfo>
      </TodoItem>
    </>
  );
};
