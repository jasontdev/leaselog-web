type Claim = {
  typ: string;
  val: string;
}
type ClientPrincipal =
  {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: string[];
    claims: Claim[];
  }

export type {
  Claim,
  ClientPrincipal
};

export async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const {clientPrincipal} = payload;
  return clientPrincipal;
}