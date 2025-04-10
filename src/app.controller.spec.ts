import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('helloWorld', () => {
    it('should return welcome HTML message', () => {
      const result = controller.helloWorld();
      expect(result).toContain('한입 북스 서버');
      expect(result).toContain('/api');
    });
  });
});
