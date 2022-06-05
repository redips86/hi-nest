import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `searching... ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `this will return one movie ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `this will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      movieId,
      ...updateData,
    };
  }
}
