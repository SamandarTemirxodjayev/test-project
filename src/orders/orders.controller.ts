import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() orderDto: any) {
    return this.ordersService.create(orderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.ordersService.search(query);
  }

  @Post(':id/accept')
  accept(@Param('id') id: string) {
    return this.ordersService.accept(id);
  }

  @Post(':id/complete')
  complete(@Param('id') id: string) {
    return this.ordersService.complete(id);
  }
}