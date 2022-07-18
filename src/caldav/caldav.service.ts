import { Injectable } from '@nestjs/common';
import { createDAVClient, DAVNamespaceShort, makeCalendar } from 'tsdav';

@Injectable()
export class CaldavService {
  async createCalendar() {
    const client = await createDAVClient({
      serverUrl: 'http://localhost:5232/user/some-cal',
      credentials: {
        username: 'user',
        password: 'pass',
      },
      authMethod: 'Basic',
      defaultAccountType: 'caldav',
    });

    const created = await client.makeCalendar({
      url: 'http://localhost:5232/user/some-cal',
      props: {
        displayname: 'personal calendar',
      },
    });

    return JSON.stringify(created);
  }
}
