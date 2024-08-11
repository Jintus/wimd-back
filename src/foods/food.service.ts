import {Injectable} from "@nestjs/common";
import {UserService} from "../users/user.service";
import {PrismaService} from "../prisma.service";

@Injectable()
export class FoodService {
    constructor(private readonly prisma: PrismaService) {
    }
}