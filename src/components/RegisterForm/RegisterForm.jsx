import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = await dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    if (result.meta.requestStatus === 'fulfilled') {
      toast({
        title: 'Registration successful.',
        description: "You've successfully registered.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      form.reset();
    } else {
      toast({
        title: 'Registration failed.',
        description: 'Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

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
      <Heading as="h3" size="lg" mb={4} textAlign="center">
        Sign-up Account
      </Heading>
      <FormControl className={css.formControl} mb={3}>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaUserAlt className={css.icon} />}
          />
          <Input type="text" name="name" focusBorderColor="#5046e5" required />
        </InputGroup>
      </FormControl>
      <FormControl className={css.formControl} mb={3}>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon className={css.icon} />}
          />
          <Input
            type="email"
            name="email"
            focusBorderColor="#5046e5"
            required
          />
        </InputGroup>
      </FormControl>
      <FormControl className={css.formControl} mb={3}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon className={css.icon} />}
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            focusBorderColor="#5046e5"
            required
          />
          <InputRightElement>
            <IconButton
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={handlePasswordVisibility}
              variant="ghost"
              size="sm"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button type="submit" mt={3} className={css.registerBtn} width="full">
        Register
      </Button>
    </Box>
  );
};
