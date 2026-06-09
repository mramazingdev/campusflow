import { UserRole } from "../constants/roles";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  universityId: string;
}