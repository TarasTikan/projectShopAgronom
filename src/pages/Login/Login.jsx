import { CompanyDetails } from 'components/CompanyDetails/CompanyDetails';
import { Container } from './Login.styled';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { FormLogin } from 'components/FormLogin/FormLogin';

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
