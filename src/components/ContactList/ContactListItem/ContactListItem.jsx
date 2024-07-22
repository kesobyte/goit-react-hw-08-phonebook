import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsOperation';

// Chakra UI
import { Tr, Td, Button } from '@chakra-ui/react';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  // Handle Delete
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <Tr>
      <Td>{filteredContact.name}</Td>
      <Td>{filteredContact.number}</Td>
      <Td>
        <Button
          colorScheme="red"
          onClick={handleDelete}
          className={css.deleteBtn}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
