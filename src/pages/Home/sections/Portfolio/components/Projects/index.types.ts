export interface ProjectProps {
  description: string;
  imageUrl: string;
}

export interface ProjectsProps extends ProjectProps {
  id: number;
}

export interface ContainerProps extends ProjectProps {
  title: string;
  children: React.ReactNode;
}
