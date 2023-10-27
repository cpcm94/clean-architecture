import { JwtPayload } from "./jwt-payload";

export type TUserLoginResponse = {
  user: JwtPayload;
  accessToken: string;
};
