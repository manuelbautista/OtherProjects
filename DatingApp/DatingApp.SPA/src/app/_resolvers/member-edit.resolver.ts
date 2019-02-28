import { AuthService } from './../_services/auth.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { User } from './../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService,
                private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(error => {
            this.alertify.error('Problem retriving data');
            this.router.navigate(['/members']);
            return Observable.of((null));
        });
    }
}