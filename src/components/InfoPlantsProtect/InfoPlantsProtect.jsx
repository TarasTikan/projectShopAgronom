import treelist from '../../assets/images/treelist.png';
import {
  Container,
  DescriptionPlants,
  ImageDecoration,
  SectionPlants,
  TitlePlants,
  WrapContent,
  WrapDescrtiption,
  WrapTitle,
} from './InfoPlantsProtect.styled';
export const InfoPlantsProtect = () => {
  return (
    <SectionPlants>
      <Container>
        <WrapContent>
          <WrapTitle>
            <ImageDecoration src={treelist} alt="treelist" />
            <TitlePlants>Засоби захисту рослин</TitlePlants>
          </WrapTitle>
          <WrapDescrtiption>
            <DescriptionPlants>
              Засоби захисту рослин поділяють на чотири основні види: механічні,
              хімічні, біологічні та агротехнічні. Проте найраціональніше - це
              їх одночасне, правильне поєднання. Найпоширеніший метод - це
              хімічний. Існують тисячі різних видів препаратів хімічного
              захисту. Але не варто їх плутати, а тим більше об′єднувати з
              хімічними добривами. Методи їх впливу на рослини абсолютно
              протилежні.
            </DescriptionPlants>
            <DescriptionPlants>
              Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже
              ці препарати мають суоро визначений об′єкт впливу (збудник
              хвороби, комахи-шкідники, вид або родина бур′янів).
            </DescriptionPlants>
            <DescriptionPlants>
              Отрутохімікати не терплять халатності. Це той тип препарату, який
              недостатньо просто розвести у воді і обприскати ним рослини. Якщо
              отрутохімікати неправильно застосувати, то вони можуть завдати
              шкоди вам, корисним комахам, урожаю.
            </DescriptionPlants>
          </WrapDescrtiption>
        </WrapContent>
      </Container>
    </SectionPlants>
  );
};
