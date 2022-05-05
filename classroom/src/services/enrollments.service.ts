import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

interface CreateEnrolmentParams {
  courseId: string;
  studentId: string;
}

interface getByCourseAndStudentIdParams {
  courseId: string;
  studentId: string;
}

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) { }

  getByCourseAndStudentId({courseId, studentId}: getByCourseAndStudentIdParams){
    return this.prisma.enrollment.findFirst({
        where: {
          courseId,
          studentId,
          canceledAt: null,
        },
    });
  }

  listAllEnrollments() {
    return this.prisma.enrollment.findMany({
      where: { 
        canceledAt: null,
      },
      orderBy: {
        createAt: 'desc'
      }
    });
  }

  listAllEnrollmentsByStudent(studentId: string) {
    return this.prisma.enrollment.findMany({
      where: {
        studentId,
        canceledAt: null,
      },
      orderBy: {
        createAt: 'desc'
      }
    })
  }

  createEnrollment({courseId, studentId}: CreateEnrolmentParams){
    return this.prisma.enrollment.create({
        data: {
          courseId,
          studentId,
        },
    });
  }

}