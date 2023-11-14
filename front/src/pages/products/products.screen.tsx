import React, { Fragment } from 'react';
import * as Style from './products.styles';
import { H2 } from '@styles/text';
import Layout from '../../components/layout/layout.component';
import { colors } from '@styles/theme/colors';
import {
  TableBody,
  TableComponent,
  TableHead,
  TableRow,
} from '../../components/table';
import { FaEye } from 'react-icons/fa';

const ProductsScreen = ({ handlers }: { handlers: any }) => {
  const {} = handlers;

  return (
    <Layout>
      <Style.Container>
        <H2 color={colors.primaryDefault} marginBottom={30}>
          Lista de produtos disponíveis
        </H2>

        <TableComponent
          key="table-products"
          header={
            <Fragment>
              <TableHead text="Nome do produto" className="thead-point-name" />
              <TableHead text="Preço do produto" />

              <TableHead width={20} />
            </Fragment>
          }
          body={
            <>
              <TableRow key={`table-row-prducts`}>
                <TableBody text="Produto 1" />

                <TableBody text="12442" />

                <TableBody>
                  <a>
                    <FaEye style={{ fontSize: 20 }} />
                  </a>
                </TableBody>
              </TableRow>
            </>
          }
        />
      </Style.Container>
    </Layout>
  );
};

export default ProductsScreen;
