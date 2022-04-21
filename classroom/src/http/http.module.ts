import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { CoursesResolver } from '../graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from '../graphql/resolvers/enrollments.resolver';
import { StudentsResolver } from '../graphql/resolvers/students.resolver';

import { DatabseModule } from '../database/databse.module';
import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,

    //services
    CoursesService,
    EnrollmentsService,
    StudentsService,

  ],
})
export class HttpModule {}
