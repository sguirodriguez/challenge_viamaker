import React, { Fragment, ReactElement } from 'react';
import { Container, ContainerTitle, Left, Row } from './styles';
import { sidebarMenuMock } from './menu';
import { H4, H5 } from '@styles/text';
import { colors } from '@styles/theme/colors';
import { useNavigate } from 'react-router-dom';

interface SidebarMenuItem {
  title: string;
  icon: ReactElement;
  routePath?: string;
  redirectLink?: string;
}

interface MySVGProps extends React.SVGProps<SVGImageElement> {
  xlinkHref: string;
}

function SidebarMenu() {
  const navigate = useNavigate();
  const handleRedirect = (value: string): void => {
    navigate(value);
  };

  const handleOnClick = (item: SidebarMenuItem): void => {
    if (item?.routePath) {
      return handleRedirect(item?.routePath);
    }

    if (item?.redirectLink) {
      window.open(item?.redirectLink, '_blank');
    }
  };

  const MySVGComponent: React.FC<MySVGProps> = ({
    xlinkHref,
    ...otherProps
  }) => (
    <svg width={otherProps.width} height={otherProps.height}>
      <image xlinkHref={xlinkHref} {...otherProps} />
    </svg>
  );

  return (
    <Container>
      <ContainerTitle>
        <H4 color={colors.primary}>Desafio Viamaker</H4>
        <MySVGComponent
          xlinkHref="https://viamaker.com/images/logo-viamaker.c7282cb7e4205dc789687b835402f936.svg"
          width={40}
          height={40}
        />
      </ContainerTitle>

      {sidebarMenuMock?.map((item, index) => (
        <Fragment key={item?.title + index}>
          <Row onClick={() => handleOnClick(item)}>
            <Left>
              <div className="icon">{item?.icon}</div>
              <H5 color={colors.primary} marginLeft={8} marginRight={4}>
                {item?.title}
              </H5>
            </Left>
          </Row>
        </Fragment>
      ))}
    </Container>
  );
}

export default SidebarMenu;
