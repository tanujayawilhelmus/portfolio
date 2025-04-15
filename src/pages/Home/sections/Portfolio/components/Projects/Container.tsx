import { ContainerProps } from './index.types';

export const Container = (props: ContainerProps) => {
  const { title, description, imageUrl, children } = props;
  return (
    <div className="flex items-center justify-center flex-col flex-wrap gap-4 pb-20 w-full">
      <img src={imageUrl} alt={title} className="scale-105 w-full" />
      <p className="text-lg mt-4">{description}</p>
      {children}
    </div>
  );
};
export default Container;
