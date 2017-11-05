import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from "../shared/leader";

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders() : Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((dish) => dish.featured)[0]);
  }

}
