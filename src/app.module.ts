import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './presentation/user.controller';
import { SignInController } from './presentation/sign-in.controller';
import { ApartmentController } from './presentation/apartment.controller';
import { EmployeeController } from './presentation/employee.controller';
import { PostulationController } from './presentation/postulation.controller';
import { PostulationImplService } from './application/postulation/postulation-impl.service';
import { EmployeeImplService } from './application/employee/employee-impl.service';
import { ApartmentImplService } from './application/apartment/apartment-impl.service';
import { UserImplService } from './application/user/user-impl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './domain/apartment.entity';
import { User } from './domain/user.entity';
import { Role } from './domain/role.entity';
import { Postulation } from './domain/postulation.entity';
import { Employee } from './domain/employee.entity';
import { Convocation } from './domain/convocation.entity';
import { ConvocationImplService } from './application/convocation/convocation-impl.service';
import { QueuingService } from './application/queuing/queuing.service';
import { QueuingAdapter } from './commons/adapter/queuing/queuing.service';
import { BullyAdapter } from './commons/adapter/bully/bully.service';
import { PostulationRepository } from './persistence/postulation.repository';

@Module({
  imports: [TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Apartment, User, Role, Postulation, Employee, Convocation, PostulationRepository]),
    HttpModule,
  ],
  controllers: [
    AppController, UserController,
    SignInController, ApartmentController,
    EmployeeController, PostulationController,
  ],
  providers: [AppService, QueuingAdapter, BullyAdapter, {
    provide: 'PostulationService',
    useClass: PostulationImplService,
  }, {
    provide: 'EmployeeService',
    useClass: EmployeeImplService,
  }, {
    provide: 'ApartmentService',
    useClass: ApartmentImplService,
  }, {
    provide: 'UserService',
    useClass: UserImplService,
  }, ConvocationImplService, QueuingService],
})
export class AppModule {
}
