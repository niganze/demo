export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[]; // You can adjust this based on your roles structure
  gender: string;
}
