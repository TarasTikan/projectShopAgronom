import { useDispatch } from 'react-redux';
import { AuthList, ButtonLogout } from './UserMenu.styled';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <AuthList>
      <ButtonLogout type="button" onClick={handleLogout}>
        Вихід
      </ButtonLogout>
    </AuthList>
  );
};
