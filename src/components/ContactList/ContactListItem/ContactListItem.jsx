import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  editContact,
} from '../../../redux/contacts/contactsOperation';
import { selectContacts } from '../../../redux/selectors';
import {
  Tr,
  Td,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import {
  FaUser,
  FaPhone,
  FaEdit,
  FaTrashAlt,
  FaSave,
  FaTimes,
} from 'react-icons/fa';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const cancelRef = useRef();

  const [name, setName] = useState(filteredContact.name);
  const [number, setNumber] = useState(filteredContact.number);

  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
    setIsDeleteDialogOpen(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
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
    <>
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
              <IconButton
                aria-label="Save"
                icon={<FaSave />}
                size="sm"
                colorScheme="blue"
                onClick={handleSave}
                className={css.saveBtn}
                mr={2}
              />
              <IconButton
                aria-label="Cancel"
                icon={<FaTimes />}
                size="sm"
                variant="ghost"
                onClick={handleEditToggle}
              />
            </>
          ) : (
            <>
              <IconButton
                aria-label="Delete"
                icon={<FaTrashAlt />}
                size="sm"
                colorScheme="red"
                onClick={() => setIsDeleteDialogOpen(true)}
                className={css.deleteBtn}
                mr={2}
              />
              <IconButton
                aria-label="Edit"
                icon={<FaEdit />}
                size="sm"
                colorScheme="blue"
                onClick={handleEditToggle}
                className={css.editBtn}
              />
            </>
          )}
        </Td>
      </Tr>
      <>
        <AlertDialog
          isOpen={isDeleteDialogOpen}
          leastDestructiveRef={cancelRef}
          onClose={() => setIsDeleteDialogOpen(false)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Contact
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to delete this contact? This action cannot
                be undone.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={() => setIsDeleteDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
