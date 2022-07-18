import { Injectable } from '@nestjs/common';
import { CaldavService } from 'src/caldav/caldav.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

@Injectable()
export class CalendarsService {
  constructor(private readonly caldavService: CaldavService) {}

  async create(createCalendarDto: CreateCalendarDto) {
    const create = await this.caldavService.createCalendar();

    return create;
  }

  findAll() {
    return `This action returns all calendars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calendar`;
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return `This action updates a #${id} calendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendar`;
  }
}
