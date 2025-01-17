import { Box, Container, ContentBrand, ContentForm, ErrorMessage, Text } from './styled';
import logo from '../../assets/PayFriends.svg';
import brand from '../../assets/brand.svg';
import { Input, Button, Image } from '../../components';
import { useState } from 'react';

interface ILoginProps {
  setIsLogin: (value: boolean) => void;
}

export function Login({ setIsLogin }: ILoginProps) {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordlValue, setPasswordValue] = useState<string>('');
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const emailCadastrado = 'joelmirmanoel80@gmail.com';
  const senhaCadastrada = '123456';

  function isValidEmail(value: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return regex.test(value);
  }

  function handleClickButton() {
    if (isValidEmail(emailValue)) {
      if (emailValue === emailCadastrado && passwordlValue === senhaCadastrada) {
        setIsLogin(true);
        setErrorLogin(false);
      } else {
        setErrorLogin(true);
      }
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  }

  return (
    <Container>
      <ContentForm>
        <Box>
          <Image src={logo} alt="logo PayFriends" width={160} height={30} />
          <Text>Bem vindo de volta</Text>
          <Input
            placeholder="Email"
            value={emailValue}
            onChange={event => setEmailValue(event.target.value)}
            isError={errorLogin || errorEmail}
          />
          <Input
            placeholder="Senha"
            value={passwordlValue}
            onChange={event => setPasswordValue(event.target.value)}
            isError={errorLogin}
            style={{
              marginTop: '15px',
            }}
          />

          {errorLogin && <ErrorMessage>Email e/ou senha inválido.</ErrorMessage>}
          {errorEmail && <ErrorMessage>Email inválido.</ErrorMessage>}

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
        <Image src={brand} alt="brand" width={'87%'} height={'87%'} />
      </ContentBrand>
    </Container>
  );
}
