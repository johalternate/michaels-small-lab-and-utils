import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

type UserInfo = {
    id: number, name: string, hobbies: string
}
@Component({
  selector: 'app-rxjs',
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h1><code>switchMap</code></h1>
    <button (click)="currentUser$.next('Dave')">Set Dave</button>
    <button (click)="currentUser$.next('Jeff')">Set Jeff</button>

    <pre>{{userInfo$ | async | json}}</pre>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsComponent {
    currentUser$ = new BehaviorSubject<'Dave' | 'Jeff'>('Dave');

    getUserInfo(user: 'Dave' | 'Jeff'): Observable<UserInfo> {
        const userInfo = user === 'Dave' ? {id: 1, name: 'Dave', hobbies: 'fishing'}: {id: 2, name: 'Jeff', hobbies: 'bowling'}
        return of(userInfo)
    }

    userInfo$: Observable<UserInfo> = this.currentUser$.pipe(
        switchMap(user => this.getUserInfo(user))
    )
}
