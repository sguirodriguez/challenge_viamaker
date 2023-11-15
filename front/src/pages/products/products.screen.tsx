import React, { Fragment } from 'react';
import * as Style from './products.styles';
import { H2, H3, H5 } from '@styles/text';
import Layout from '../../components/layout/layout.component';
import { colors } from '@styles/theme/colors';
import {
  TableBody,
  TableComponent,
  TableHead,
  TableRow,
} from '../../components/table';
import { FaEye, FaRegTimesCircle } from 'react-icons/fa';
import { moneyMask } from '../../helpers/masks';
import { Else, If, Then } from 'react-if';
import Spinner from '../../components/spinner';
import { useModal } from '../../context/modal';
import { HandlersProductsTypes } from './products.types';

const ProductsScreen = ({ handlers }: { handlers: HandlersProductsTypes }) => {
  const { isOpen, closeModal, openModal } = useModal();
  const { products, loading, productSelected, setProductSelected } = handlers;

  return (
    <Layout>
      <If condition={loading}>
        <Then>
          <Spinner />
        </Then>
        <Else>
          <Style.Container>
            <H2 color={colors.primaryDefault} marginBottom={30}>
              Lista de produtos disponíveis
            </H2>

            <TableComponent
              key="table-products"
              header={
                <Fragment>
                  <TableHead
                    text="Nome do produto"
                    className="thead-point-name"
                  />
                  <TableHead text="Preço do produto" />

                  <TableHead width={20} />
                </Fragment>
              }
              body={
                <>
                  {products?.map((item, index) => {
                    return (
                      <TableRow key={`table-row-prducts` + index}>
                        <TableBody text={item?.name} />

                        <TableBody text={moneyMask(item?.value)} />

                        <TableBody>
                          <a
                            onClick={() => {
                              setProductSelected(item);
                              openModal();
                            }}
                          >
                            <FaEye style={{ fontSize: 20 }} />
                          </a>
                        </TableBody>
                      </TableRow>
                    );
                  })}
                </>
              }
            />
          </Style.Container>
        </Else>
      </If>
      <Style.ModalWrapper isOpen={isOpen}>
        <Style.ModalContent>
          <div className="header">
            <div className="flex1 justify-left">
              <H2 color={colors.primaryDefault}>{productSelected?.name}</H2>
            </div>

            <div className="flex1 justify-center">
              <H3 color={colors.green}>
                {moneyMask(productSelected?.value || '')}
              </H3>
            </div>

            <div className="flex1 justify-right">
              <FaRegTimesCircle
                style={{ fontSize: 20, cursor: 'pointer' }}
                onClick={() => closeModal()}
              />
            </div>
          </div>

          <H5 color={colors.primaryDefault} marginTop={30}>
            {productSelected?.description}
          </H5>
        </Style.ModalContent>
      </Style.ModalWrapper>
    </Layout>
  );
};

export default ProductsScreen;
