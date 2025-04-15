import { ProjectProps } from './index.types';
import Product from 'assets/portfolio/wishing-fountain/product.webp';
import Container from './Container';

export const CheckProject = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container
      imageUrl={imageUrl}
      description={description}
      title="Wishing Fountain"
    >
      <img src={Product} alt="Product" />
    </Container>
  );
};
export default CheckProject;
