import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  productType: string;

  @Prop({ type: String })
  eniga: string;

  @Prop({ type: String })
  boyiga: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ default: 'new', enum: ['new', 'accepted', 'completed'] })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
