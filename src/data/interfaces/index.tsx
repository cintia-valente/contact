// models.ts

import { ProfileEnum } from "./ProfileEnum";

export interface ContactModel {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
  }
  
  export interface UserModel {
    id: number;
    name: string;
    login: string;
    email: string;
    profile?: ProfileEnum; 
    password: string;
    registrationDate: string; 
    updateDate?: string;
    contacts?: ContactModel[]; 
  }
  