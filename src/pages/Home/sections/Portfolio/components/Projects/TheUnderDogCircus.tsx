import { ProjectProps } from './index.types';
import Product1 from 'assets/portfolio/the-underdog-circus/product-1.webp';
import Product2 from 'assets/portfolio/the-underdog-circus/product-2.webp';
import Product3 from 'assets/portfolio/the-underdog-circus/product-3.webp';
import Container from './Container';

export const CheckProject = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container
      imageUrl={imageUrl}
      description={description}
      title="The Under Dog Circus"
    >
      <img src={Product1} alt="Product 1" />
      <img src={Product2} alt="Product 2" />
      <img src={Product3} alt="Product 3" />
    </Container>
  );
};
export default CheckProject;
