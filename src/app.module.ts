import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CalendarsModule } from './calendars/calendars.module';
import { CaldavService } from './caldav/caldav.service';

@Module({
  imports: [CalendarsModule],
  controllers: [],
  providers: [AppService, CaldavService],
})
export class AppModule {}
