import React from 'react';
import { ProjectsProps } from './index.types';

const DressProject = React.lazy(() => import('./DressProject'));
const CheckProject = React.lazy(() => import('./CheckProject'));
const SweaterProject = React.lazy(() => import('./Sweater'));
const SeraSecretaProject = React.lazy(() => import('./SeraSecreta'));
const HollitProject = React.lazy(() => import('./Hollit'));
const EstungkaraProject = React.lazy(() => import('./Estungkara'));
const WishingFountainProject = React.lazy(() => import('./WishingFountain'));
const TheUnderDogProject = React.lazy(() => import('./TheUnderDogCircus'));
const OnnellinenProject = React.lazy(() => import('./Onnellinen'));

const Projects = (props: ProjectsProps) => {
  const { description, imageUrl, id } = props;
  let ComponentToRender = null;
  switch (id) {
    case 1:
      ComponentToRender = CheckProject;
      break;
    case 2:
      ComponentToRender = DressProject;
      break;
    case 3:
      ComponentToRender = SweaterProject;
      break;
    case 4:
      ComponentToRender = SeraSecretaProject;
      break;
    case 5:
      ComponentToRender = HollitProject;
      break;
    case 6:
      ComponentToRender = EstungkaraProject;
      break;
    case 7:
      ComponentToRender = WishingFountainProject;
      break;
    case 8:
      ComponentToRender = TheUnderDogProject;
      break;
    case 9:
      ComponentToRender = OnnellinenProject;
      break;
    default:
      ComponentToRender = CheckProject;
      break;
  }
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ComponentToRender description={description} imageUrl={imageUrl} />
    </React.Suspense>
  );
};

export default Projects;
