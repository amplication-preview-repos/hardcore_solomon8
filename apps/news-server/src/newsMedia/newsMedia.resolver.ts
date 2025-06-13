import * as graphql from "@nestjs/graphql";
import { NewsMediaResolverBase } from "./base/newsMedia.resolver.base";
import { NewsMedia } from "./base/NewsMedia";
import { NewsMediaService } from "./newsMedia.service";

@graphql.Resolver(() => NewsMedia)
export class NewsMediaResolver extends NewsMediaResolverBase {
  constructor(protected readonly service: NewsMediaService) {
    super(service);
  }
}
