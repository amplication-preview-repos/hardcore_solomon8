import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsMediaServiceBase } from "./base/newsMedia.service.base";

@Injectable()
export class NewsMediaService extends NewsMediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
