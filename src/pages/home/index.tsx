import { Container, Header } from './styled';
import logoWhite from '../../assets/PayFriendsWhite.svg';
import { Image } from '../../components';

export function Home() {
  return (
    <Container>
      <Header>
        <Image src={logoWhite} alt="PayFriends" width={'12.8%'} height={'25.5%'} />
      </Header>
    </Container>
  );
}
