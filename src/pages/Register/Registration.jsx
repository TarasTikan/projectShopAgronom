import { FormRegister } from "components/FormRegister/FormRegister"
import { Container, RegisterSection } from "./Registration.styled";
import { HeadInfo } from "components/HeadInfo/HeadInfo";
import { Footer } from "components/Footer/Footer";

export const Registration = () => {
    return (
      <>
        <main>
          <RegisterSection>
            <Container>
              <HeadInfo />
              <FormRegister />
            </Container>
          </RegisterSection>
        </main>
        <Footer />
      </>
    );
}