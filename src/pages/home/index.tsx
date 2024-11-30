import { Box, Button, Container, ContentBrand, ContentForm, Input, Text } from './styled';
import brand from '../../assets/brand.svg';
import logo from '../../assets/PayFriends.svg';

export function Home() {
  return (
    <Container>
      <ContentForm>
        <Box>
          <img src={logo} alt="logo PayFriends" width={160} height={30} />
          <Text>Bem vindo de volta</Text>
          <Input placeholder="Email" />
          <Input
            placeholder="Senha"
            style={{
              marginTop: '20px',
              marginBottom: '30px',
            }}
          />
          <Button>ENTRAR</Button>
        </Box>
      </ContentForm>
      <ContentBrand>
        <img src={brand} alt="brand" width={'87%'} height={'87%'} />
      </ContentBrand>
    </Container>
  );
}
