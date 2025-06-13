import { Module } from "@nestjs/common";
import { NewsMediaModuleBase } from "./base/newsMedia.module.base";
import { NewsMediaService } from "./newsMedia.service";
import { NewsMediaController } from "./newsMedia.controller";
import { NewsMediaResolver } from "./newsMedia.resolver";

@Module({
  imports: [NewsMediaModuleBase],
  controllers: [NewsMediaController],
  providers: [NewsMediaService, NewsMediaResolver],
  exports: [NewsMediaService],
})
export class NewsMediaModule {}
