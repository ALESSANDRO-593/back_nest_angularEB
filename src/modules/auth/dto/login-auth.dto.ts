
import { IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";
import { User } from "../interfaces/user.interface";


export class LoginAuthDto  implements User{
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(32)
    password: string;


}