import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './orders.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async create(orderDto: any): Promise<Order> {
    const createdOrder = new this.orderModel(orderDto);
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async search(query: string): Promise<Order[]> {
    return this.orderModel
      .find({
        $or: [
          { firstName: { $regex: query, $options: 'i' } },
          { lastName: { $regex: query, $options: 'i' } },
          { phone: { $regex: query, $options: 'i' } },
        ],
      })
      .exec();
  }

  async accept(id: string): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, { status: 'accepted' }, { new: true }).exec();
  }

  async complete(id: string): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, { status: 'completed' }, { new: true }).exec();
  }
}