import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: any[], searchTerm: string): any[] {
    if (!posts || !searchTerm) {
      return posts;
    }
    return posts.filter(post =>
      post.postId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
