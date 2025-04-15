import { ProjectProps } from './index.types';
import Influence from 'assets/portfolio/check/influence.webp';
import Product from 'assets/portfolio/check/product.webp';
import Container from './Container';

export const CheckProject = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container
      imageUrl={imageUrl}
      description={description}
      title="Check project"
    >
      <img src={Influence} alt="Influence" />
      <img src={Product} alt="Product" />
    </Container>
  );
};
export default CheckProject;
