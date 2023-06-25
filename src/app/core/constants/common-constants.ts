import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CommonConstants {
    public TOKEN_KEY = 'auth-token';
    public USER_KEY = 'auth-user';
}
