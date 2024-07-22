import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  editContact,
} from '../../../redux/contacts/contactsOperation';
import { selectContacts } from '../../../redux/selectors';

// Chakra UI
import {
  Tr,
  Td,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaUser, FaPhone } from 'react-icons/fa';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(filteredContact.name);
  const [number, setNumber] = useState(filteredContact.number);

  // Handle Delete
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  // Handle Edit Toggle
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle Save
  const handleSave = () => {
    // Check if the edited contact name already exists
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.id !== filteredContact.id
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      editContact({ contactId: filteredContact.id, contact: { name, number } })
    );
    setIsEditing(false);
  };

  return (
    <Tr>
      <Td>
        {isEditing ? (
          <InputGroup className={css.inputGroup}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUser className={css.icon} />}
            />
            <Input
              htmlSize={15}
              width="auto"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              value={name}
              onChange={e => setName(e.target.value)}
              focusBorderColor="#5046e5"
              placeholder="Enter contact name"
            />
          </InputGroup>
        ) : (
          filteredContact.name
        )}
      </Td>
      <Td>
        {isEditing ? (
          <InputGroup className={css.inputGroup}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaPhone className={css.icon} />}
            />
            <Input
              htmlSize={15}
              width="auto"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={e => setNumber(e.target.value)}
              focusBorderColor="#5046e5"
              placeholder="Enter contact number"
            />
          </InputGroup>
        ) : (
          filteredContact.number
        )}
      </Td>
      <Td>
        {isEditing ? (
          <>
            <Button
              size="sm"
              colorScheme="blue"
              onClick={handleSave}
              className={css.saveBtn}
            >
              Save
            </Button>
            <Button size="sm" variant="ghost" onClick={handleEditToggle}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              colorScheme="red"
              onClick={handleDelete}
              className={css.deleteBtn}
            >
              Delete
            </Button>
            <Button
              size="sm"
              colorScheme="blue"
              onClick={handleEditToggle}
              className={css.editBtn}
            >
              Edit
            </Button>
          </>
        )}
      </Td>
    </Tr>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
