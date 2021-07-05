import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../service/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = JSON.parse(this.token.getToken());

    if (authToken) {
      const authReq = request.clone({
        headers: request.headers.set(
          'Authorization', `Token ${authToken.token}`,
        )
      });
  
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
