import { Global, Module } from '@nestjs/common';
import { v4 } from 'uuid';
@Global()
@Module({
  providers: [{
    provide : 'randomID',
    useValue : v4()
  }], 
  exports : [{
    provide : 'randomID',
    useValue : v4()
  }]
})
export class CommonModule {}
