export type role = "client" | "technician";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: role;
  createdAt: Date;
}

export interface Technician {
  userId: string;
  categories: string[];
  pricePerHour: number;
  description: string;
  location: string;
  photo: string;
  rating: number;
}

export type status = "pending" | "accepted" | "completed" | "cancelled";
export interface Request {
  clientId: string;
  technicianId: string;
  description: string;
  date: Date;
  status: status;
}

export interface Review {
  requestId: string;
  technicianId: string;
  clientId: string;
  rating: number;
  comment: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export type GetUsersResponse = ApiResponse<User[]>;
