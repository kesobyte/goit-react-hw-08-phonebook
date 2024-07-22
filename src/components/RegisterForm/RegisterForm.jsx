import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      className={css.form}
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      p={4}
      boxShadow="md"
      borderRadius="md"
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Register
      </Heading>
      <FormControl className={css.formControl} mb={3}>
        <FormLabel>Username</FormLabel>
        <Input type="text" name="name" />
      </FormControl>
      <FormControl className={css.formControl} mb={3}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl className={css.formControl} mb={3}>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="full">
        Register
      </Button>
    </Box>
  );
};
