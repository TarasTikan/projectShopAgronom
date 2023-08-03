import herbicidesImg from './assets/images/herbicides.png';
import fungicidesImg from './assets/images/fungicides.png';
import insecticidesImg from './assets/images/insecticides.png';
import desiccantsImg from './assets/images/desiccants.png';
import stainRemoversImg from './assets/images/stainremovers.png';
import rodenticidesImg from './assets/images/rodenticides.png';
import retardantsImg from './assets/images/retardants.png';
import adjuvantsImg from './assets/images/adjuvants.png';
import bird from './assets/images/bird-min.jpg';
import fish from './assets/images/fish-min.jpg';
import animals from './assets/images/animals-min.jpg';
import organic from './assets/images/organicimg-min.jpeg';
import complex from './assets/images/compleximg-min.jpg';
import microFertilizers from './assets/images/microfertilizes-min.jpg';
export const plantsProtectCatalog = [
  {
    id: 'p-1',
    name: 'Гербіциди',
    routesName: 'herbicides',
    imgPL: herbicidesImg,
  },
  {
    id: 'p-2',
    name: 'Фунгіциди',
    routesName: 'fungicides',
    imgPL: fungicidesImg,
  },
  {
    id: 'p-3',
    name: 'Інсектициди',
    routesName: 'insecticides',
    imgPL: insecticidesImg,
  },
  {
    id: 'p-4',
    name: 'Десиканти',
    routesName: 'desiccants',
    imgPL: desiccantsImg,
  },
  {
    id: 'p-5',
    name: 'Протруювачі',
    routesName: 'stainRemovers',
    imgPL: stainRemoversImg,
  },
  {
    id: 'p-6',
    name: 'Родентициди',
    routesName: 'rodenticides',
    imgPL: rodenticidesImg,
  },
  {
    id: 'p-7',
    name: 'Ретарданти',
    routesName: 'retardants',
    imgPL: retardantsImg,
  },
  {
    id: 'p-8',
    name: 'Ад’юванти',
    routesName: 'adjuvants',
    imgPL: adjuvantsImg,
  },
];
export const feedGroupCatalog = [
  {
    id: 'l-1',
    name: 'Для тварин',
    routesName: 'pigs',
    imgPL: animals,
  },
  {
    id: 'l-2',
    name: 'Для риби',
    routesName: 'fishs',
    imgPL: fish,
  },
  {
    id: 'l-3',
    name: 'Для птиці',
    routesName: 'chickens',
    imgPL: bird,
  },
];
export const feedGroupAnimals = [
  {
    id: 'f-1',
    name: 'Для свиней',
    routesName: 'pigs',
  },
  {
    id: 'f-2',
    name: 'Для ВРХ',
    routesName: 'cattles',
  },
  {
    id: 'f-3',
    name: 'Для кроликів',
    routesName: 'rabbits',
  },
];
export const feedGroupBird = [
  {
    id: 'g-1',
    name: 'Для курей',
    routesName: 'chickens',
  },
  {
    id: 'g-2',
    name: 'Для індиків',
    routesName: 'turkeys',
  },
  {
    id: 'g-3',
    name: 'Для водоплавної птиці',
    routesName: 'waterfowls',
  },
  {
    id: '4-3',
    name: 'Для  перепелів',
    routesName: 'quails',
  },
];
export const fertilizersCatalog = [
  {
    id: 'lk-4',
    name: 'Комплексні',
    routesName: 'complex',
    imgPL: complex,
  },
  {
    id: 'lk-5',
    name: 'Органічні',
    routesName: 'organic',
    imgPL: organic,
  },
  {
    id: 'lk-6',
    name: 'Мікродобрива',
    routesName: 'microFertilizers',
    imgPL: microFertilizers,
  },
];
export const fertilizersProducer = [
  { id: 'c-28', name: 'Нертус' },
  { id: 'c-29', name: 'WUXAL - Unifer (Aglukon)' },
  { id: 'c-30', name: 'Terra Tarsa' },
  { id: 'c-31', name: ' Квадроплюс' },
  { id: 'c-32', name: 'УкрАвіт' },
];

export const plantsProducer = [
  { id: 'c-1', name: 'Нертус' },
  { id: 'c-2', name: 'Басф' },
  { id: 'c-3', name: 'Адама Україна' },
  { id: 'c-4', name: 'Байєр' },
  { id: 'c-5', name: 'ГЗД' },
  { id: 'c-6', name: 'Штефес' },
  { id: 'c-7', name: 'Ретарданти' },
  { id: 'c-8', name: 'Ад’юванти' },
];

export const plantsCulture = [
  { id: 'c-9', name: 'Соняшник' },
  { id: 'c-10', name: 'Кукурудза' },
  { id: 'c-11', name: 'Пшениця' },
  { id: 'c-12', name: 'Ячмінь' },
  { id: 'c-13', name: 'Ріпак' },
  { id: 'c-14', name: 'Соя' },
  { id: 'c-15', name: 'Горох' },
  { id: 'c-16', name: 'Гірчиця' },
  { id: 'c-17', name: 'Горошок' },
  { id: 'c-18', name: 'Житняк' },
  { id: 'c-19', name: 'Квасоля' },
  { id: 'c-20', name: 'Конюшина' },
  { id: 'c-21', name: 'Кострець/Костриця' },
  { id: 'c-22', name: 'Люцерна' },
  { id: 'c-23', name: 'Тимофіївка' },
  { id: 'c-24', name: 'Тритикале' },
  { id: 'c-25', name: 'Цукровий буряк' },
  { id: 'c-26', name: 'Кормовий буряк' },
  { id: 'c-27', name: 'Інше' },
];


export const allRouterName = [
  {
    id: 'rout-1',
    name: 'Для риби',
    routesName: 'fishs',
  },
  {
    id: 'rout-2',
    name: 'Для свиней',
    routesName: 'pigs',
  },
  {
    id: 'rout-3',
    name: 'Для ВРХ',
    routesName: 'cattles',
  },
  {
    id: 'rout-4',
    name: 'Для кроликів',
    routesName: 'rabbits',
  },
  {
    id: 'rout-5',
    name: 'Для курей',
    routesName: 'chickens',
  },
  {
    id: 'rout-6',
    name: 'Для індиків',
    routesName: 'turkeys',
  },
  {
    id: 'rout-7',
    name: 'Для водоплавної птиці',
    routesName: 'waterfowls',
  },
  {
    id: 'rout-8',
    name: 'Для  перепелів',
    routesName: 'quails',
  },
  {
    id: 'rout-9',
    name: 'Комплексні',
    routesName: 'complex',
  },
  {
    id: 'rout-10',
    name: 'Органічні',
    routesName: 'organic',
  },
  {
    id: 'rout-11',
    name: 'Мікродобрива',
    routesName: 'microFertilizers',
  },
  {
    id: 'rout-12',
    name: 'Гербіциди',
    routesName: 'herbicides'
  },
  {
    id: 'rout-13',
    name: 'Фунгіциди',
    routesName: 'fungicides'
  },
  {
    id: 'rout-14',
    name: 'Інсектициди',
    routesName: 'insecticides'
  },
  {
    id: 'rout-15',
    name: 'Десиканти',
    routesName: 'desiccants'
  },
  {
    id: 'rout-16',
    name: 'Протруювачі',
    routesName: 'stainRemovers'
  },
  {
    id: 'rout-17',
    name: 'Родентициди',
    routesName: 'rodenticides'
  },
  {
    id: 'rout-18',
    name: 'Ретарданти',
    routesName: 'retardants'
  },
  {
    id: 'rout-19',
    name: 'Ад’юванти',
    routesName: 'adjuvants'
  },
     {id: 'rout-20',
    name: 'Оформлення заказу',
    routesName: 'basketProducts' }
];