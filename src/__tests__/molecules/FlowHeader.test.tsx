import React from 'react';
import { render, screen } from '@testing-library/react';
import FlowHeader from '@/components/molecules/FlowHeader';

jest.mock('@/components/organisms/HeaderSearch', () => {
  const HeaderSearchMock = () => <div data-testid="header-search" />;
  HeaderSearchMock.displayName = 'HeaderSearchMock';
  return HeaderSearchMock;
});

describe('FlowHeader', () => {
  it('renderiza o título', () => {
    render(<FlowHeader title="Meu Título" />);
    expect(screen.getByText('Meu Título')).toBeInTheDocument();
  });

  it('não renderiza link se url for null ou undefined', () => {
    const { rerender } = render(<FlowHeader title="Título" url={null} />);
    expect(screen.queryByText(/see more/i)).not.toBeInTheDocument();

    rerender(<FlowHeader title="Título" url={undefined} />);
    expect(screen.queryByText(/see more/i)).not.toBeInTheDocument();
  });

  it('renderiza link com o href correto quando url é passada', () => {
    render(<FlowHeader title="Título" url="/pagina" />);
    const link = screen.getByText(/see more/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/pagina');
  });
});
