import { readCustomer } from '@codekite/test-provider';

/** Customer-facing receipts must keep their name and amount during API rollout. */
export async function formatReceipt(response) {
  const customer = readCustomer(response);
  const amount = (response.amount_minor / 100).toFixed(2);
  const currency = response.currency_code ?? response.currency;
  return `Receipt for ${customer.display_name ?? customer.full_name}: ${currency} ${amount}`;
}
