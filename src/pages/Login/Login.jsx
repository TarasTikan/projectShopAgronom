import { Container } from './Login.styled';
import { FormLogin } from 'components/FormLogin/FormLogin';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { Footer } from 'components/Footer/Footer';

export const Login = () => {
  return (
    <>
      <main>
        <Container>
          <HeadInfo />
          <FormLogin />
        </Container>
      </main>
      <Footer />
    </>
  );
};
