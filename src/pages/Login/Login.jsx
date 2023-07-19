import { CompanyDetails } from 'components/CompanyDetails/CompanyDetails';
import { Container } from './Login.styled';
import { FormLogin } from 'components/FormLogin/FormLogin';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';

export const Login = () => {
  return (
    <>
      <main>
        <Container>
          <HeadInfo />
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
