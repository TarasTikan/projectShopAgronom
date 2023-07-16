import { AuthList, StyledLink } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
      <AuthList>
        <li>
          <StyledLink to="/signIn">Вхід</StyledLink>
        </li>
        <li>
          <StyledLink to="/signUp">Реестрація</StyledLink>
        </li>
      </AuthList>
    );
}