import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-intercaptor',
  templateUrl: './http-intercaptor.component.html',
  styleUrls: ['./http-intercaptor.component.css']
})
export class HttpIntercaptorComponent implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    alert(btoa('user:user'));
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Basic ' + btoa('user:user'))
    });
    return next.handle(authReq);
  }

}
