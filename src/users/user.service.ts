import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({where: userWhereUniqueInput});
    }

    async users() {
        return this.prisma.user.findMany();
    }

    async createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({data});
    }

    async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
        return this.prisma.user.update({where, data});
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.delete({where});
    }
}