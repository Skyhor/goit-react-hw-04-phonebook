import { nanoid } from 'nanoid/non-secure';
import { useState } from 'react';
import s from './Form.module.css';
const NameId = nanoid();
const NumberId = nanoid();
const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const AddNameInput = e => {
    const { value } = e.currentTarget;
    setName(value);
  };
  const AddNumberInput = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };
  const SubmitForm = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className={s.div}>
      <form onSubmit={SubmitForm} className={s.form}>
        <label htmlFor={NameId} className={s.label}>
          Name
        </label>
        <input
          className={s.label}
          id={NameId}
          type="text"
          name="name"
          value={name}
          onChange={AddNameInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={NumberId} className={s.label}>
          Number
        </label>
        <input
          id={NumberId}
          type="tel"
          name="number"
          value={number}
          onChange={AddNumberInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={s.button}>
          add contact
        </button>
      </form>
    </div>
  );
};
export default Form;
