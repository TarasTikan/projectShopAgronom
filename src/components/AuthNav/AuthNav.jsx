import { LogoutIcon } from 'assets/icons/logoutIcon';
import { AuthItem, AuthList, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthItem>
      <LogoutIcon/>
        <StyledLink to="/signIn">Вхід</StyledLink>
      </AuthItem>
      <li>
        <StyledLink to="/signUp">Реестрація</StyledLink>
      </li>
    </AuthList>
  );
};
