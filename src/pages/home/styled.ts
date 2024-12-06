import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 35%;
  height: 100vh;
  background: #ededed;
  padding-left: 8.8%;
  padding-right: 8.8%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  background: #8cb1f5;
  color: #ffffff;
  border: 0;
  cursor: pointer;
`;

export const ContentBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 100vh;
`;

export const Text = styled.h2`
  margin-top: 30px;
  margin-bottom: 90px;
  color: #4e4e4e;
  font-size: 36px;
`;
