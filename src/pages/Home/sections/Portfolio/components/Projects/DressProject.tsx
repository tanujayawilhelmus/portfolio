import { ProjectProps } from './index.types';
import Container from './Container';
import Product from 'assets/portfolio/dress/product.webp';

export const DressProject = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container
      imageUrl={imageUrl}
      description={description}
      title="Dress project"
    >
      <img src={Product} alt="Product" />
    </Container>
  );
};
export default DressProject;
