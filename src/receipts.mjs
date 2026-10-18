import { readCustomer } from '@codekite/test-provider';

/** Customer-facing receipts must keep their name and amount during API rollout. */
export async function formatReceipt(response) {
  const customer = readCustomer(response);
  const name = customer.full_name ?? customer.display_name ?? `${customer.given_name} ${customer.family_name}`;
  const amountMinor = response.amount_minor ?? response.total_minor;
  const currency = response.currency_code ?? response.currency;
  const amount = (amountMinor / 100).toFixed(2);
  return `Receipt for ${name}: ${currency.toUpperCase()} ${amount}`;
}
