import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { useAuth } from '../../hooks/useAuth';
import {
  Box,
  IconButton,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <Box className={css.wrapper}>
      <Text className={css.username}>Welcome, {user.email}</Text>
      <IconButton
        aria-label="Logout"
        icon={<FiLogOut />}
        onClick={() => setIsOpen(true)}
        variant="ghost"
        className={css.logoutButton}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};
