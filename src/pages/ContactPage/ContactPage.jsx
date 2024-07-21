import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { selectIsLoading } from '../../redux/selectors';

const ContactPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </HelmetProvider>
  );
};

export default ContactPage;
