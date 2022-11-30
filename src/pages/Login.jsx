import { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectContacts } from '../redux/selectors';
import {  useSelector } from 'react-redux';

import {
    SectionForm,
    Form,
    Label,
    Input,
    Name,
    Click,
    Text,
  } from '../styledComponents/login.styled';

export const Login = () => {
    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');
    const { items } = useSelector(selectContacts);
  
    const nameInputId = nanoid();
    const numberInputId = nanoid();
  
    const isExistName = name => {
      return items.some(item => item.name === name);
    };
  
    const isExistNumber = phone => {
      return items.some(item => item.phone === phone);
    };
  
    const handleFormSubmit = event => {
      event.preventDefault();
      if (isExistName(name)) {
        alert(`${name} is already in name.`);
        return;
      }
      if (isExistNumber(phone)) {
        alert(`${phone} is already in number.`);
        return;
      }
    //   dispatch(addContact({ id: nanoid(), name, phone }));
      resetForm();
    };
  
    const resetForm = () => {
      setName('');
      setNumber('');
    };


    return (
<SectionForm>
      <Text>PhoneBook</Text>

      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor={nameInputId}>
          <Name>Name</Name>
          <Input
            type="text"
            name="name"
            required
            value={name}
            id={nameInputId}
            onChange={e => setName(e.currentTarget.value)}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          <Name>Number</Name>
          <Input
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={phone}
            id={numberInputId}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </Label>
        <Click type="submit">Add a contact</Click>
      </Form>
    </SectionForm>
    )
}