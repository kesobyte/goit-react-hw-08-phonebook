import { ContactListItem } from './ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import css from './ContactList.module.css';

// Chakra UI
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
} from '@chakra-ui/react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {isLoading && !error && <Loader />}

      {!isLoading && !error && filteredContacts.length === 0 && (
        <p className={css.info}>No contacts found.</p>
      )}

      {!isLoading && !error && filteredContacts.length > 0 && (
        <TableContainer>
          <Table variant="striped" size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Number</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredContacts.map(filteredContact => (
                <ContactListItem
                  key={filteredContact.id}
                  filteredContact={filteredContact}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
