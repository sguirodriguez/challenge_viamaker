import { H2 } from '@styles/text';
import { Container, Row, ResponsiveIframe } from './home.styles';
import Layout from '../../components/layout/layout.component';
import { colors } from '@styles/theme/colors';

const HomeScreen = ({ handlers }: any) => {
  const another = [
    'https://www.youtube.com/embed/C-wu2VcYNCA',
    'https://www.youtube.com/embed/C-wu2VcYNCA',
    'https://www.youtube.com/embed/C-wu2VcYNCA',
    'https://www.youtube.com/embed/C-wu2VcYNCA',
  ];
  return (
    <Layout>
      <Container>
        <H2 color={colors.primaryDefault} marginBottom={20}>
          Meu vídeo favorito
        </H2>

        <iframe
          src="https://www.youtube.com/embed/C-wu2VcYNCA"
          width="100%"
          height="450"
        />

        <H2 color={colors.primaryDefault} marginTop={30} marginBottom={20}>
          Outros vídeos que eu gosto
        </H2>

        <Row>
          {another.map((item, index) => {
            return <ResponsiveIframe key={index} src={item} />;
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default HomeScreen;
