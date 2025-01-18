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