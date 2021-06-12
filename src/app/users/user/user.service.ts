import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn :'root'})
export class UserActivate{

    activatedButton = new Subject<boolean>();

}

