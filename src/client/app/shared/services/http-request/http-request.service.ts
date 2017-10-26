import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpRequest {

  constructor(private http: Http) {}

  init(){
    console.log('HttpRequest Init');
  }

  get(url: string, header?: any):  Promise<any> {
    if(!header) header = {};
    return this.http.get(url, header)
                    .map((res: Response) => {return res.json()})
                    .toPromise()
  }

  post(url: string, header?: any):  Promise<any> {
    if(!header) header = {};
    return this.http.post(url, header)
                    .map((res: Response) => {return res.json()})
                    .toPromise()
  }

  put(url: string, header?: any):  Promise<any> {
    if(!header) header = {};
    return this.http.put(url, header)
                    .map((res: Response) => {return res.json()})
                    .toPromise()
  }

  delete(url: string, header?: any):  Promise<any> {
    if(!header) header = {};
    return this.http.delete(url, header)
                    .map((res: Response) => {return res.json()})
                    .toPromise()
  }

}

