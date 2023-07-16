import { CompanyDetails } from "components/CompanyDetails/CompanyDetails"
import { FormRegister } from "components/FormRegister/FormRegister"
import { Container } from "./Registration.styled";
import { HeadInfo } from "components/HeadInfo/HeadInfo";

export const Registration = () => {
    return (
      <>
        <main>
          <Container>
          <HeadInfo/>
            <FormRegister />
          </Container>
        </main>
        <footer>
          <Container>
            <CompanyDetails />
          </Container>
        </footer>
      </>
    );
}