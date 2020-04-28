export interface Pet {
  petImageId: number;
  name: string;
  gender: 'male' | 'female';
  level: number;
  exp: number;
  trainerID: string;
}
