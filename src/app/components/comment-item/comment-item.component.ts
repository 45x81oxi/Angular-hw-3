import { Component, OnInit, Input } from '@angular/core';
import { Comment} from "../../models/Comment";

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input('comment') commentItem: Comment;

  constructor() {
  }

  ngOnInit() {
  }

}
