import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('processing request started in the interceptor');
    
    // Set session timer.
    localStorage.setItem('SessionTimeOut', 'Hi I am from LocalStorage!!'  );
    console.log(localStorage.getItem('SessionTimeOut'));
    
    return next.handle(request);
  }
}
