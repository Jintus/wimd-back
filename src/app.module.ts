import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {PrismaService} from "./prisma.service";
import {UserModule} from "./users/user.module";
import {FoodModule} from "./foods/food.module";

@Module({
    imports: [ConfigModule.forRoot(), UserModule, FoodModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {
}
