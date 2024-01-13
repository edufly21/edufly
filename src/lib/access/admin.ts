import type { Access, AccessArgs } from "payload/config";

import { checkRole } from "../utils/payload/check-role";

export const admin: Access = ({ req: { user } }) => {
  return checkRole("admin", user);
};
