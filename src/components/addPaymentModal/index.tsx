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
      //setId(selectedPayment.id); // Atribuindo o ID selecionado
    } else {
      setUsuario('');
      setData('');
      setValor('');
      setTitulo('');
      //setId(0); // Resetando o ID
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
    console.log(JSON.stringify(handleSavePayment, null, 2));
    onRequestClose();
  }

  // Função de excluir pagamento
  function handleDeletePayment() {
    if (selectedPayment) {
      context?.deletePayment(selectedPayment.id); // Excluindo o pagamento com base no id
      onRequestClose(); // Fecha o modal após a exclusão
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title>{selectedPayment ? 'Atualizar' : 'Adicionar'} Pagamento</Title>
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
        {selectedPayment && (
          <Button style={{ color: '#4E4E4E', background: '#EDEDED' }} onClick={handleDeletePayment}>
            Excluir
          </Button>
        )}
      </ContentButton>
    </Modal>
  );
}
