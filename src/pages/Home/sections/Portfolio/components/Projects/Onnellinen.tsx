import { ProjectProps } from './index.types';
import Container from './Container';
import Product1 from 'assets/portfolio/onnellinen/product-1.webp';
import Product2 from 'assets/portfolio/onnellinen/product-2.webp';

export const CheckProject = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container imageUrl={imageUrl} description={description} title="Onnellinen">
      <img src={Product1} alt="Product 1" />
      <img src={Product2} alt="Product 2" />
    </Container>
  );
};
export default CheckProject;
