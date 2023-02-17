import { Controller, Get, Param } from '@nestjs/common';
import { AiService } from './ai/ai.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly aiService: AiService,
  ) {}

  @Get(':parameter')
  async getHello(@Param('parameter') parameter: string): Promise<string> {
    return await this.aiService.someMethod(parameter);
  }
}
