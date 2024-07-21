import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
