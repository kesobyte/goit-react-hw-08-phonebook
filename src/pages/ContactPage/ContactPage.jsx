import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { selectIsLoading } from '../../redux/selectors';
import css from './ContactsPage.module.css';

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
      <div className={css.container}>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </HelmetProvider>
  );
};

export default ContactPage;
