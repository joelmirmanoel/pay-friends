import { Container, Header, Content, Title, Box } from './styled';
import logoWhite from '../../assets/PayFriendsWhite.svg';
import Vector from '../../assets/Vector.svg';
import Pago from '../../assets/Pago.svg';
import { Image, Button, Input } from '../../components';

export function Home() {
  return (
    <Container>
      <Header>
        <Image src={logoWhite} alt="PayFriends" width={'12.8%'} height={'25.5%'} />
      </Header>
      <Content>
        <Title>Meus pagamentos</Title>
        <Button style={{ background: '#4079C0', paddingLeft: 50, paddingRight: 50 }}>ADICIONAR PAGAMENTO</Button>
      </Content>
      <Box>
        <Input isError={false} style={{ width: 333 }} placeholder="Pesquisar por usuário" />
        <Button style={{ marginLeft: 19 }}>
          {' '}
          <Image src={Vector} alt="PayFriends" width={20} height={18} /> Filtrar
        </Button>
        <table>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Título</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Pago</th>
            </tr>
          </thead>

          <tbody>
            <td>Claudia</td>
            <td>Professor 1</td>
            <td>23 Jun 2020</td>
            <td>R$ 100,00</td>
            <td>
              <Image src={Pago} alt="PayFriends" width={16} height={11} />
            </td>
          </tbody>
        </table>
      </Box>
    </Container>
  );
}
