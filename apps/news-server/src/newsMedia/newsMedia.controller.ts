import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsMediaService } from "./newsMedia.service";
import { NewsMediaControllerBase } from "./base/newsMedia.controller.base";

@swagger.ApiTags("newsMedias")
@common.Controller("newsMedias")
export class NewsMediaController extends NewsMediaControllerBase {
  constructor(protected readonly service: NewsMediaService) {
    super(service);
  }
}
