import { useDispatch } from 'react-redux';
import { AuthList } from './UserMenu.styled';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <AuthList>
      <button type="button" onClick={handleLogout}>
        Вихід
      </button>
    </AuthList>
  );
};
