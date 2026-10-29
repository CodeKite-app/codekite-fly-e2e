import { readCustomer } from '@codekite/test-provider';

/** Customer-facing receipts must keep their name and amount during API rollout. */
export async function formatReceipt(response) {
  const customer = readCustomer(response);
  const amount = (response.amount_minor / 100).toFixed(2);
  const name = customer.given_name != null && customer.family_name != null
    ? `${customer.given_name} ${customer.family_name}`
    : customer.full_name;
  return `Receipt for ${name}: ${response.currency_code ?? response.currency} ${amount}`;
}
