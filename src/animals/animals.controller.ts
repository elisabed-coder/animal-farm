import { Controller, Get } from '@nestjs/common';

@Controller('animals')
export class AnimalsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'cat' },
      { id: 2, name: 'dog' },
      { id: 3, name: 'pig' },
    ];
  }
}
