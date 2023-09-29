export interface SignInUser {
  signIn: (login: string, password: string) => Promise<void>;
}
