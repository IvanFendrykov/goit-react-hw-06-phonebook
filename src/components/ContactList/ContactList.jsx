import { FcDeleteRow } from 'react-icons/fc';
import { Btn, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { delContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const showContList = filter === '' ? contacts : filteredContacts;
  const onDelContact = contId => {
    dispatch(delContact(contId));
  };
  return (
    <List>
      {showContList.map(contact => (
        <Item key={contact.id}>
          <span>{contact.name}</span>:<span> {contact.number}</span>
          <Btn onClick={() => onDelContact(contact.id)}>
            <FcDeleteRow size="16" />
          </Btn>
        </Item>
      ))}
    </List>
  );
};
