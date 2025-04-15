import { ProjectProps } from './index.types';
import Container from './Container';
import Product1 from 'assets/portfolio/hollit/product-1.webp';
import Product2 from 'assets/portfolio/hollit/product-2.webp';
import Product3 from 'assets/portfolio/hollit/product-3.webp';

export const Hollit = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container imageUrl={imageUrl} description={description} title="Hollit">
      <img src={Product1} alt="Product 1" />
      <img src={Product2} alt="Product 2" />
      <img src={Product3} alt="Product 3" />
    </Container>
  );
};
export default Hollit;
