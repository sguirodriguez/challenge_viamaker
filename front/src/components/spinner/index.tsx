import React from 'react';
import { LoadingContainer, SpinnerContainer } from './styles';

interface SpinnerProps {
  // Adicione propriedades conforme necessário
}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <LoadingContainer>
      <SpinnerContainer />
    </LoadingContainer>
  );
};

export default Spinner;
