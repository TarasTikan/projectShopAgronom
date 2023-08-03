import treeLeastLeft from '../../assets/images/treelist.png';
import treeLeastRight from '../../assets/images/treelestright.png';
import {
    BtnConfirmOrder,
  ContactInput,
  ContactSelect,
  ContactsComment,
  ContactsForm,
  ContactsTitle,
  Container,
  ContainerBasket,
  FormChackbox,
  FormDelivery,
  FormLabel,
  FormPay,
  InputPostIndex,
  PlantsSection,
  TitleBasket,
  TitleOrder,
  WrapOrder,
  WrapTitle,
} from './PlacingOrder.styled';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { Footer } from 'components/Footer/Footer';
import { ProductsBasketList } from 'components/ProductsBasketList/ProductsBasketList';
import { UrlList } from 'components/UrlList/UrlList';
export const PlacingOrder = () => {
  return (
    <>
      <PlantsSection>
        <Container>
          <HeadInfo />
          <UrlList/>
          <WrapTitle>
            <img src={treeLeastLeft} alt="decorLeast" />
            <TitleOrder>Оформлення заказу</TitleOrder>
            <img src={treeLeastRight} alt="decorLeast" />
          </WrapTitle>
          <WrapOrder>
            <div>
              <ContactsTitle>Ваші контакти</ContactsTitle>
              <ContactsForm>
                <ContactInput type="text" placeholder="Ім’я" />
                <ContactInput type="text" placeholder="Фамілія" />
                <ContactInput type="tel" placeholder="Телефон" />
                <ContactInput type="email" placeholder="E-mail" />
                <ContactsComment
                  name="comment"
                  placeholder="Коментарій"
                ></ContactsComment>
              </ContactsForm>
              <ContactsTitle>Доставка</ContactsTitle>
              <FormDelivery>
                <ContactSelect name="domen">
                  <option>Область</option>
                </ContactSelect>
                <ContactSelect name="domen">
                  <option>Місто</option>
                </ContactSelect>
                <ContactSelect name="domen">
                  <option>Відділення</option>
                </ContactSelect>
                <InputPostIndex
                  name="postIndex"
                  placeholder="Поштовий індекс"
                />
              </FormDelivery>
              <ContactsTitle>Оплата</ContactsTitle>
              <FormPay>
                <FormLabel>
                  <FormChackbox type="checkbox" name="Cash" value="Cash" />
                  Готівка
                </FormLabel>
                <FormLabel>
                  <FormChackbox
                    type="checkbox"
                    name="Payment"
                    value="Payment"
                  />
                  Оплата картою
                </FormLabel>
                <FormLabel>
                  <FormChackbox
                    type="checkbox"
                    name="PaymentOnline"
                    value="PaymentOnline"
                  />
                  Оплата картою онлайн
                </FormLabel>
              </FormPay>
            </div>

            <ContainerBasket>
              <TitleBasket>Товари у кошику</TitleBasket>
             <ProductsBasketList/>
              <BtnConfirmOrder type="submit">Підтвердити заказ</BtnConfirmOrder>
            </ContainerBasket>
          </WrapOrder>
        </Container>
      </PlantsSection>
      <Footer />
    </>
  );
};
