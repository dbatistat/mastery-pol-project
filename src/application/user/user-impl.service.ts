import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserImplService implements UserService{}
