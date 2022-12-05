import { nanoid } from 'nanoid/non-secure';
import { Component } from 'react';
import s from './Form.module.css';
const NameId = nanoid();
const NumberId = nanoid();
class Form extends Component {
  state = { name: '', number: '' };
  AddNameInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  SubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div className={s.div}>
        <form onSubmit={this.SubmitForm} className={s.form}>
          <label htmlFor={NameId} className={s.label}>
            Name
          </label>
          <input
            className={s.label}
            id={NameId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.AddNameInput}
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
            value={this.state.number}
            onChange={this.AddNameInput}
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
  }
}
export default Form;
