import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={css.header}>
        <div className={css.navWidth}>
          <div className={css.menuNav}>
            <Navigation />
          </div>
          <div className={css.userNav}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </div>
      </header>
    </>
  );
};
