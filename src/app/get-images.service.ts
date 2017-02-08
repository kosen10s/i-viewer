import { Injectable } from '@angular/core';
import { Http, Response,  Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Image } from './image';

const GET_URL = 'https://api.github.com/repos/kosen10s/i/contents/';

@Injectable()
export class GetImagesService {

  constructor(private http: Http) {}

  getImages(): Observable<Image[]> {
    return this.http.get(GET_URL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json().filter(obj => {
      return obj.path.match(/\.jpg/i) ||
             obj.path.match(/\.png/i) ||
             obj.path.match(/\.gif/i);
    }).map(obj => {
      return new Image(obj.path, obj.name);
    }) || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
