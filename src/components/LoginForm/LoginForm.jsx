import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';
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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const result = await dispatch(
      login({
        email,
        password,
      })
    );

    if (result.meta.requestStatus === 'fulfilled') {
      toast({
        title: 'Login successful.',
        description: "You've successfully logged in.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } else {
      toast({
        title: 'Login failed.',
        description: 'Invalid email or password.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }

    form.reset();
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
        Log In
      </Heading>
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
      <Button type="submit" mt={3} className={css.loginBtn} width="full">
        Log In
      </Button>
    </Box>
  );
};
