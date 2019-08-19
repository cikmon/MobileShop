import { Comment } from './comment.model';

export class Product {
  constructor(
            public id?: number,
            public name?: string,
            public category?: string,
            public brand?: string,
            public description?: string,
            public price?: number,
            public photos?: Array<object>,
            public videos?: Array<object>,
            public comments = new Array<Comment>() ) { }
    }
