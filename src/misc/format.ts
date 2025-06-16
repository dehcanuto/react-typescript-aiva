/**
 * Formata um número ou string numérica como valor monetário brasileiro.
 *
 * @param money - Valor a ser formatado (ex: `1234.56` ou `"1234.56"`).
 * @returns Uma string no formato "R$ 1.234,56".
 */
export function MoneyFormat(money: string | number): string {
  return Number(money).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
