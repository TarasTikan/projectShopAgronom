import { ColorRing } from 'react-loader-spinner';
import { Loadering } from './Loader.styled';
export const Loader = () => {
  return (
    <Loadering>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#21603F', '#e74e13', '#f8b26a', '#84be51', '#849b87']}
      />
    </Loadering>
  );
};
