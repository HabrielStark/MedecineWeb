export interface Specialist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  experience: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  cost: string;
  icon: string;
}

export interface Technology {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface AppointmentSlot {
  id: number;
  date: Date;
  available: boolean;
  specialistId: number;
}