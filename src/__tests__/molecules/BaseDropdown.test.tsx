import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import BaseDropdown from '@/components/molecules/BaseDropdown';

describe('BaseDropdown', () => {
  it('renderiza o trigger e não mostra o conteúdo inicialmente', () => {
    render(
      <BaseDropdown trigger={() => <button>Toggle</button>}>
        <div>Dropdown Content</div>
      </BaseDropdown>
    );

    expect(screen.getByText('Toggle')).toBeInTheDocument();
    expect(screen.queryByText('Dropdown Content')).not.toBeInTheDocument();
  });

  it('mostra o conteúdo ao clicar no trigger', () => {
    render(
      <BaseDropdown trigger={() => <button>Toggle</button>}>
        <div>Dropdown Content</div>
      </BaseDropdown>
    );

    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.getByText('Dropdown Content')).toBeInTheDocument();
  });

  it('fecha o dropdown ao clicar fora', () => {
    render(
      <div data-testid="outside">
        <BaseDropdown trigger={() => <button>Toggle</button>}>
          <div>Dropdown Content</div>
        </BaseDropdown>
      </div>
    );

    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.getByText('Dropdown Content')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(screen.queryByText('Dropdown Content')).not.toBeInTheDocument();
  });
});
