import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostRepository } from '../../../prisma/repositories/post.repository';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PrismaService, PostRepository],
  exports: [PostService],
})
export class PostModule {}
