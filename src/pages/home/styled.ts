import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ededed;
`;

export const Title = styled.h1`
  color: #4e4e4e;
  font-family: 'Roboto';
  font-size: 36px;
`;

export const Header = styled.div`
  background: #153250;
  padding: 74px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 102px;
  padding-right: 88px;
  padding-left: 80px;
  padding-bottom: 80px;
  background: #ededed;
`;

export const Box = styled.div`
  //width: ;
  //display: flex;
  background: #ffffff;
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 80px;
  padding-top: 27px;
  border-radius: 10px;

  table {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 21px;

    th {
      font-family: 'Roboto';
      font-size: 24px;
      font-weight: 400;
      text-align: left;
    }
  }

  tbody {
    //width: 100%;
    //padding-top: 30px;
    //padding-bottom: 21px;

    td {
      font-family: 'Roboto';
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      padding-top: 30px;
      padding-bottom: 21px;
      margin-top: 10px;
    }
  }
`;
