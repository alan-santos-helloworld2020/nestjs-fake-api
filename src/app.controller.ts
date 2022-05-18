import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ICliente } from './models/ICliente';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): ICliente[] {
    return this.appService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number): ICliente {
    return this.appService.findById(id);
  }

  @Post()
  save(@Body() cliente: ICliente): ICliente {
    return this.appService.save(cliente);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() cliente: ICliente) {
    return this.appService.update(id, cliente);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): boolean {
    return this.appService.delete(id);
  }
}
