import { Container, LoginSection } from './Login.styled';
import { FormLogin } from 'components/FormLogin/FormLogin';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { Footer } from 'components/Footer/Footer';

export const Login = () => {
  return (
    <>
      <main>
        <LoginSection>
          <Container>
            <HeadInfo />
            <FormLogin />
          </Container>
        </LoginSection>
      </main>
      <Footer />
    </>
  );
};
