import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './register-auth.dto';
import { LoginAuthDto } from './login-auth.dto';
import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService) { 
        
    }

    @Post("register")
    registeruser(@Body() userObj: RegisterAuthDto) {
        console.log(userObj);
        return userObj;
    }

    @Post("login")
    login(@Body() credenciales: LoginAuthDto){
        return this.authService.login(credenciales)
    }
}
