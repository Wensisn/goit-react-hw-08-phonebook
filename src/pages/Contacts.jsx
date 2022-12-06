import { useSelector } from 'react-redux';
import { getIsLoggenIn } from 'redux/auth/selectors';
import { TodosList } from '../components/TodosList/TodosList';
import { TodosForm } from '../components/TodosForm/TodosForm';
import { Filter } from '../components/Filter/Filter';

export const Contacts = () => {
  const isLoggenIn = useSelector(getIsLoggenIn);
  return (
    <>
      {isLoggenIn && <TodosForm />}
      {isLoggenIn && <Filter />}
      {isLoggenIn && <TodosList />}
    </>
  );
};
