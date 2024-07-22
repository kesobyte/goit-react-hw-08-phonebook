import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperation';
import { Filter } from 'components/Filter/Filter';
import { selectContacts } from '../../redux/selectors';
import { FaUser, FaPhone } from 'react-icons/fa';

// Chakra UI
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Chakra UI Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // If name and number is empty it will not submit
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    // If existing contact exist it will not submit
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    // Reset form
    setName('');
    setNumber('');

    // Close the modal after submission
    onClose();
  };

  return (
    <>
      <div className={css.filter}>
        <Filter />
        <Button onClick={onOpen} colorScheme="white" className={css.addContact}>
          Add Contact
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="contact-form" onSubmit={handleSubmit}>
              <label>
                <p>Name</p>
                <InputGroup className={css.inputGroup}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUser className={css.icon} />}
                  />
                  <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    value={name}
                    onChange={handleNameChange}
                    // Chakra UI Attributes
                    focusBorderColor="#5046e5"
                    placeholder="Enter contact name"
                  />
                </InputGroup>
              </label>

              <label>
                <p>Number</p>
                <InputGroup className={css.inputGroup}>
                  <InputLeftElement
                    children={<FaPhone className={css.icon} />}
                  />
                  <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleNumberChange}
                    // Chakra UI Attributes
                    focusBorderColor="#5046e5"
                    placeholder="Enter contact number"
                  />
                </InputGroup>
              </label>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="white"
              mr={3}
              type="submit"
              form="contact-form"
              className={css.saveButton}
            >
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
