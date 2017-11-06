import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from "../shared/leader";
import {DISHES} from "../shared/dishes";

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders() : Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeader(id: number): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    });
  }

}
