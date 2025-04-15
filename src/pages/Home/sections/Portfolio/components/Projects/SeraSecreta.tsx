import { ProjectProps } from './index.types';
import Container from './Container';
import Influence from 'assets/portfolio/sera-secreta/influence.webp';
import Product1 from 'assets/portfolio/sera-secreta/product-1.webp';
import Product2 from 'assets/portfolio/sera-secreta/product-2.webp';
import Product3 from 'assets/portfolio/sera-secreta/product-3.webp';

export const SeraSecreta = (props: ProjectProps) => {
  const { description, imageUrl } = props;
  return (
    <Container
      imageUrl={imageUrl}
      description={description}
      title="Sera Secreta"
    >
      <img src={Influence} alt="Influence" />
      <img src={Product1} alt="Product1" />
      <img src={Product2} alt="Product2" />
      <img src={Product3} alt="Product3" />
    </Container>
  );
};
export default SeraSecreta;
