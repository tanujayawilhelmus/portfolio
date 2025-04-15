import { ProjectProps } from './index.types';
import Container from './Container';
import Product1 from 'assets/portfolio/estungkara/product-1.webp';
import Product2 from 'assets/portfolio/estungkara/product-2.webp';
import Product3 from 'assets/portfolio/estungkara/product-3.webp';
import Product4 from 'assets/portfolio/estungkara/product-4.webp';

export const Estungkara = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container imageUrl={imageUrl} description={description} title="Estungkara">
      <img src={Product1} alt="Product 1" />
      <img src={Product2} alt="Product 2" />
      <img src={Product3} alt="Product 3" />
      <img src={Product4} alt="Product 4" />
    </Container>
  );
};
export default Estungkara;
