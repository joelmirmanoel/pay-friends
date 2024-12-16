import Modal from 'react-modal';
import { Input, Button } from '../';
import { ContentButton, ContentInput, Title } from './styled';
import { useState } from 'react';

interface IAddPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AddPaymentModal({ isOpen, onRequestClose }: IAddPaymentModalProps) {
  const [usuario, setUsuario] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [titulo, setTitulo] = useState<string>('');

  function handleCreatePayment() {
    <p></p>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title>Adicionar Pagamento</Title>
      <ContentInput>
        <Input
          isError={false}
          placeholder="Usuario"
          value={usuario}
          onChange={event => setUsuario(event.target.value)}
        />
        <Input isError={false} placeholder="Data" value={data} onChange={event => setData(event.target.value)} />
        <Input isError={false} placeholder="Valor" value={valor} onChange={event => setValor(event.target.value)} />
        <Input isError={false} placeholder="Titulo" value={titulo} onChange={event => setTitulo(event.target.value)} />
      </ContentInput>
      <ContentButton>
        <Button style={{ color: '#ffffff', background: '#4079C0' }} onClick={handleCreatePayment}>
          Salvar
        </Button>
        <Button style={{ color: '#4E4E4E', background: '#EDEDED' }} onClick={onRequestClose}>
          Cancelar
        </Button>
      </ContentButton>
    </Modal>
  );
}
