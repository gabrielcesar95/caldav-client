import { Module } from '@nestjs/common';
import { CalendarsService } from './calendars.service';
import { CalendarsController } from './calendars.controller';
import { CaldavService } from 'src/caldav/caldav.service';

@Module({
  controllers: [CalendarsController],
  providers: [CalendarsService, CaldavService],
})
export class CalendarsModule {}
