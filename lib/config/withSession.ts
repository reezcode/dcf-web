import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "./iron-config";

export function withSessionRoute(handler: any) {
    return withIronSessionApiRoute(handler, ironOptions);
}

export function withSessionSsr(handler: any) {
    return withIronSessionSsr(handler, ironOptions);
}

declare module "iron-session" {
    interface IronSessionData {
      user?: {
        id: number;
        email: string;
      };
    }
  }