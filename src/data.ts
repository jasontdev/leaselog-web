export type Contact = {
  id: string;
  userId: string;
  name: string;
}

export type Lease = {
  id: string;
  userId: string;
  name: string;
  startDate: string;
  endDate: string;
  rate: number;
  frequency: number;
  unit: string,
  contact: Contact;
}

export async function getLeases() {
  return await fetch('/api/leases');
}