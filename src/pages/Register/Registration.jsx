import { FormRegister } from "components/FormRegister/FormRegister"
import { Container } from "./Registration.styled";
import { HeadInfo } from "components/HeadInfo/HeadInfo";
import { Footer } from "components/Footer/Footer";

export const Registration = () => {
    return (
      <>
        <main>
          <Container>
            <HeadInfo />
            <FormRegister />
          </Container>
        </main>
        <Footer />
      </>
    );
}