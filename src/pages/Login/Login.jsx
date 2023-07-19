import { CompanyDetails } from 'components/CompanyDetails/CompanyDetails';
import { Container } from './Login.styled';
import { FormLogin } from 'components/FormLogin/FormLogin';

export const Login = () => {
  return (
    <>
      <main>
        <Container>
          <FormLogin />
        </Container>
      </main>
      <footer>
        <Container>
          <CompanyDetails />
        </Container>
      </footer>
    </>
  );
};
