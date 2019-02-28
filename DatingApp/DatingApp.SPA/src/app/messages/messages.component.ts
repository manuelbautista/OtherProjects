import { PaginatedResult } from './../_models/Pagination';
import { AuthService } from './../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination } from '../_models/Pagination';
import * as _ from 'underscore';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages: Message[];
pagination: Pagination;
messageContainer = 'Unread';

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;
      this.pagination = data['messages'].pagination;
    });
  }

  loadMessages() {

    this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage,
    this.pagination.itemsPerPage, this.messageContainer)
    .subscribe((res: PaginatedResult<Message[]>) => {

      this.messages = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
deleteMessage(id: number) {
  this.alertify.confirm('Are you sure you want to delete the message?', () => {
    this.userService.deleteMessage(id, this.authService.decodedToken.nameid).subscribe(() => {
      this.messages.splice(_.findIndex(this.messages, {id: id}), 1);
      this.alertify.success('Message have been deleted');
    }, error => {
      this.alertify.error(error)
    });
  });
}
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }

}
