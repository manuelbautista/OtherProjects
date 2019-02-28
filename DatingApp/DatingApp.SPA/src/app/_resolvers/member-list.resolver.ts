// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { User } from './../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
pageSize = 5;
pageNumber = 1;

    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(error => {
            this.alertify.error('Problem retriving data');
            this.router.navigate(['/home']);
            return Observable.of((null));
        });
    }
}
