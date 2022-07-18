import { Test, TestingModule } from '@nestjs/testing';
import { CaldavService } from './caldav.service';

describe('CaldavService', () => {
  let service: CaldavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaldavService],
    }).compile();

    service = module.get<CaldavService>(CaldavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
