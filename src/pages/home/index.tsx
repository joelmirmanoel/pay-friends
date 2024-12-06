import { Box, Container, ContentBrand, ContentForm, ErrorMessage, Text } from './styled';
import brand from '../../assets/brand.svg';
import logo from '../../assets/PayFriends.svg';
import { Input, Button } from '../../components';
import { useState } from 'react';

export function Home() {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordlValue, setPasswordValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  function isValidEmail(value: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return regex.test(value);
  }

  function handleClickButton() {
    if (isValidEmail(emailValue)) {
      setError(false);
    } else {
      setError(true);
    }
    console.log('Hello', emailValue, passwordlValue);
  }

  return (
    <Container>
      <ContentForm>
        <Box>
          <img src={logo} alt="logo PayFriends" width={160} height={30} />
          <Text>Bem vindo de volta</Text>
          <Input
            placeholder="Email"
            value={emailValue}
            onChange={event => setEmailValue(event.target.value)}
            isError={error}
          />
          <Input
            placeholder="Senha"
            value={passwordlValue}
            onChange={event => setPasswordValue(event.target.value)}
            isError={error}
            style={{
              marginTop: '15px',
            }}
          />

          {error && <ErrorMessage>Email e/ou senha inválido.</ErrorMessage>}

          <Button
            onClick={handleClickButton}
            style={{
              marginTop: '30px',
            }}
          >
            ENTRAR
          </Button>
        </Box>
      </ContentForm>
      <ContentBrand>
        <img src={brand} alt="brand" width={'87%'} height={'87%'} />
      </ContentBrand>
    </Container>
  );
}
