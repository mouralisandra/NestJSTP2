import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
@Injectable()
export class CommonService {
    randomId(){
        return v4();
    }
}
