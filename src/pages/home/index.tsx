import React from 'react';
import { usePayment } from '../../hooks/usePayment';
import {
  Container,
  Header,
  Content,
  Title,
  Box,
  Table,
  ContentRowImpar,
  ContentRowPar,
  TableHeaderContent,
  Checkbox,
  Linha,
  Busca,
  Lupa,
  ButtonAdd,
  Buttonfilter,
  ContentFilter,
} from './styled';
import logoWhite from '../../assets/PayFriendsWhite.svg';
import Vector from '../../assets/Vector.svg';
import { Image } from '../../components';

interface IHomeProps {
  handleOpenAddPaymentModal: () => void;
}

export function Home({ handleOpenAddPaymentModal }: IHomeProps) {
  const context = usePayment();
  const paymentList = context?.listPayment();

  return (
    <Container>
      <Header>
        <Image src={logoWhite} alt="PayFriends" width={'12.8%'} height={'25.5%'} />
      </Header>
      <Content>
        <Title>Meus pagamentos</Title>
        <ButtonAdd onClick={handleOpenAddPaymentModal}>ADICIONAR PAGAMENTO</ButtonAdd>
      </Content>
      <Box>
        <ContentFilter>
          <Busca>
            <input placeholder="Pesquisar..." />
            <Lupa />
          </Busca>

          <Buttonfilter>
            <Image src={Vector} alt="PayFriends" width={20} height={18} /> Filtrar
          </Buttonfilter>
        </ContentFilter>

        <Table>
          <thead>
            <tr>
              <TableHeaderContent>Usuário</TableHeaderContent>
              <TableHeaderContent>Título</TableHeaderContent>
              <TableHeaderContent>Data</TableHeaderContent>
              <TableHeaderContent>Valor</TableHeaderContent>
              <TableHeaderContent>Pago</TableHeaderContent>
            </tr>
          </thead>
        </Table>

        <Linha />

        <Table>
          <tbody>
            {paymentList?.map((item, index) => (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <tr>
                    <ContentRowImpar>{item.usuario}</ContentRowImpar>
                    <ContentRowImpar>{item.titulo}</ContentRowImpar>
                    <ContentRowImpar>{item.data}</ContentRowImpar>
                    <ContentRowImpar>R$ {item.valor}</ContentRowImpar>
                    <ContentRowImpar>
                      <Checkbox type="checkbox" />
                    </ContentRowImpar>
                  </tr>
                ) : (
                  <tr style={{ background: '#c1c1c1' }}>
                    <ContentRowPar>{item.usuario}</ContentRowPar>
                    <ContentRowPar>{item.titulo}</ContentRowPar>
                    <ContentRowPar>{item.data}</ContentRowPar>
                    <ContentRowPar>R$ {item.valor}</ContentRowPar>
                    <ContentRowPar>
                      <Checkbox type="checkbox" />
                    </ContentRowPar>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Box>
    </Container>
  );
}
