import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller("movies")
export class MoviesController {
  @Get()
  getAll(): string {
    return "This will return all movies";
  }

  @Get("/:id")
  getOne(@Param("id") id: string): string {
    return `this will return one movie ${id}`;
  }

  @Post()
  create() {
    return "this will create a movie";
  }

  @Delete("/:id")
  delete(@Param("id") movieId: string) {
    return `this will delete a movie ${movieId}`;
  }

  @Patch("/:id")
  patch(@Param("id") movieId: string) {
    return `this will patch a movie ${movieId}`;
  }
}
