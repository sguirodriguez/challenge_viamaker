import React, { useRef } from 'react';
import { H2 } from '@styles/text';
import { Row, ResponsiveIframe } from './home.styles';
import Layout from '../../components/layout/layout.component';
import { colors } from '@styles/theme/colors';
import { HandlersHomeTypes } from './home.types';
import { Else, If, Then } from 'react-if';
import Spinner from '../../components/spinner';

const HomeScreen = ({ handlers }: { handlers: HandlersHomeTypes }) => {
  const { videos, loading, videoHighlight, handleChangeVideoHighlight } =
    handlers;

  const iframeRefs = useRef<React.RefObject<HTMLIFrameElement>[]>([]);

  return (
    <Layout>
      <If condition={loading}>
        <Then>
          <Spinner />
        </Then>
        <Else>
          <H2 color={colors.primaryDefault} marginBottom={20}>
            Meu vídeo favorito
          </H2>

          <iframe src={videoHighlight?.url || ''} width="100%" height="450" />

          <H2 color={colors.primaryDefault} marginTop={30} marginBottom={20}>
            Outros vídeos que eu gosto
          </H2>

          <Row>
            {videos?.map((item, index) => {
              return (
                <ResponsiveIframe
                  ref={iframeRefs.current[index + 1]}
                  key={index + item?.name}
                  src={item?.url}
                  onPlay={() => console.log('deu play')}
                  title={item?.name}
                  onClick={() => {
                    handleChangeVideoHighlight(item);
                  }}
                />
              );
            })}
          </Row>
        </Else>
      </If>
    </Layout>
  );
};

export default HomeScreen;
