import { Observable } from 'rxjs';

export interface SampleUser {
  name: string;
  picture: string;
}

export interface SampleContacts {
  user: SampleUser;
  type: string;
}

export interface SampleRecentUsers extends SampleContacts {
  time: number;
}

export abstract class SampleUserData {
  abstract getUsers(): Observable<SampleUser[]>;
  abstract getContacts(): Observable<SampleContacts[]>;
  abstract getRecentUsers(): Observable<SampleRecentUsers[]>;
  abstract getIPCCUsers(): Observable<SampleUser[]>;
}
