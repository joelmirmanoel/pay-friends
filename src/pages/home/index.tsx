import { Container, Header, Content, Title } from './styled';
import logoWhite from '../../assets/PayFriendsWhite.svg';
import { Image, Button } from '../../components';

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
    </Container>
  );
}
