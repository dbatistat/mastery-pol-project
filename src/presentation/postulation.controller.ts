import { Body, Controller, Get, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { PostulationService } from '../application/postulation/postulation.service';
import { CreatePostulation } from '../application/postulation/api/create-postulation';

@Controller('postulation')
export class PostulationController {
  constructor(@Inject('PostulationService') private postulationService: PostulationService) {
  }

  @Get()
  getAll() {
    return this.postulationService.getAll();
  }

  @Post()
  create(@Body() clientData: CreatePostulation, @Res() response) {
    this.postulationService.register(clientData).then(data => {
      response.status(HttpStatus.OK).json(data);
    }).catch(error => {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    });
  }
}
