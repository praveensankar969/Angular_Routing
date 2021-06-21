import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req : HttpRequest<any>, next :  HttpHandler){
        console.log("Request is being send!!");
        return next.handle(req);
    }
}