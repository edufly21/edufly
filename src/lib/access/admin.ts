import type { Access, AccessArgs } from "payload/config";

import { checkRole } from "../payload-utils/check-role";

export const admin: Access = ({ req: { user } }) => {
  return checkRole("admin", user);
};
