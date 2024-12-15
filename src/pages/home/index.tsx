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

export function Home() {
  return (
    <Container>
      <Header>
        <Image src={logoWhite} alt="PayFriends" width={'12.8%'} height={'25.5%'} />
      </Header>
      <Content>
        <Title>Meus pagamentos</Title>
        <ButtonAdd>ADICIONAR PAGAMENTO</ButtonAdd>
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
            <tr>
              <ContentRowImpar>Claudia</ContentRowImpar>
              <ContentRowImpar>Professor 1</ContentRowImpar>
              <ContentRowImpar>23 Jun 2020</ContentRowImpar>
              <ContentRowImpar>R$ 100,00</ContentRowImpar>
              <ContentRowImpar>
                <Checkbox type="checkbox" />
              </ContentRowImpar>
            </tr>

            <tr style={{ background: '#c1c1c1' }}>
              <ContentRowPar>Raposo</ContentRowPar>
              <ContentRowPar>Professor 1</ContentRowPar>
              <ContentRowPar>23 Jun 2020</ContentRowPar>
              <ContentRowPar>R$ 100,00</ContentRowPar>
              <ContentRowPar>
                <Checkbox type="checkbox" />
              </ContentRowPar>
            </tr>
          </tbody>
        </Table>
      </Box>
    </Container>
  );
}
