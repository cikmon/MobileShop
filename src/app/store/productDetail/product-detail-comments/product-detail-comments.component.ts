import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/product.model';
import { Comment } from '../../../model/comment.model';

@Component({
  selector: 'app-product-detail-comments',
  templateUrl: './product-detail-comments.component.html',
  styleUrls: ['./product-detail-comments.component.css']
})
export class ProductDetailCommentsComponent implements OnInit {
  @Input()
  public product: Product;

  constructor() { }

  ngOnInit() {
  }

  commentSortData() {
    let arr = this.product.comments.sort(( a: Comment, b: Comment ) =>  {
      if (a.data > b.data) {
        return -1;
      }
      if (a.data < b.data) {
        return 1;
      }
      return 0;
    });
    return arr;
  }

  answerCommentSortData(id: number) {
    let arr = this.commentSortData().filter( arr => arr.commentAnswerId === id);
    return arr;
  }
}
