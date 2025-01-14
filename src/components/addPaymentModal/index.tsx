import Modal from 'react-modal';
import { usePayment, IPayment } from '../../hooks/usePayment';
import { Input, Button } from '../';
import { ContentButton, ContentInput, Title } from './styled';
import { useState, useEffect } from 'react';

interface IAddPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedPayment: IPayment | null;
}

export function AddPaymentModal({ isOpen, onRequestClose, selectedPayment }: IAddPaymentModalProps) {
  const [id, setId] = useState(0);
  const [usuario, setUsuario] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [titulo, setTitulo] = useState<string>('');
  const context = usePayment();

  useEffect(() => {
    if (selectedPayment) {
      setUsuario(selectedPayment.usuario);
      setData(selectedPayment.data);
      setValor(selectedPayment.valor);
      setTitulo(selectedPayment.titulo);
    } else {
      setUsuario('');
      setData('');
      setValor('');
      setTitulo('');
    }
  }, [selectedPayment, isOpen]);

  function handleSavePayment() {
    const newId = Number(id) + 1;
    const payment = { id: newId, usuario, data, valor, titulo, isPayment: false };

    if (selectedPayment) {
      context?.updatePayment(selectedPayment.id, { ...payment, id: selectedPayment.id });
    } else {
      context?.createPayment(payment);
      setUsuario('');
      setData('');
      setValor('');
      setTitulo('');
      setId(newId);
    }
    onRequestClose();
  }

  //function de excluir
  //ela seliciona o id

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title>Adicionar Pagamento</Title>
      <ContentInput>
        {/* <Input isError={false} placeholder="id" value={id} onChange={event => setId(event.target.value)} /> */}

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
        <Button style={{ color: '#ffffff', background: '#4079C0' }} onClick={handleSavePayment}>
          Salvar
        </Button>
        <Button style={{ color: '#4E4E4E', background: '#EDEDED' }} onClick={onRequestClose}>
          Cancelar
        </Button>
      </ContentButton>
    </Modal>
  );
}
