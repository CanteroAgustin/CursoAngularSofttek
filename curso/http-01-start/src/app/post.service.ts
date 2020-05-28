import { HttpClient, HttpParams, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<{ name: string }>(
      'https://ng-complete-guide-8714f.firebaseio.com/post.json', postData
    ).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>('https://ng-complete-guide-8714f.firebaseio.com/post.json', {
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);

        })
      );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-8714f.firebaseio.com/post.json', {
      observe: 'events'
    }).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          //...
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
