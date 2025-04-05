import { AsyncPipe, JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import {
    BehaviorSubject,
    combineLatest,
    delay,
    interval,
    map,
    Observable,
    of,
    startWith,
    switchMap,
} from 'rxjs'
@Component({
    selector: 'app-rxjs',
    imports: [AsyncPipe, JsonPipe],
    template: `
        <h1>RXJS</h1>
        <p>Most commentary is in code comments for the main operator</p>

        <h2><code>switchMap</code></h2>
        <button (click)="currentUser$.next('Dave')">Set Dave</button>
        <button (click)="currentUser$.next('Jeff')">Set Jeff</button>

        <pre>{{ userInfo$ | async | json }}</pre>

        <h2><code>combineLatest</code></h2>
        <pre>{{ (netWorth$ | async) ?? 'Loading...' }} USD</pre>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent {
    currentUser$ = new BehaviorSubject<'Dave' | 'Jeff'>('Dave')

    getUserInfo(user: 'Dave' | 'Jeff'): Observable<UserInfo> {
        const userInfo =
            user === 'Dave'
                ? { id: 1, name: 'Dave', hobbies: 'fishing' }
                : { id: 2, name: 'Jeff', hobbies: 'bowling' }
        return of(userInfo)
    }

    // `switchMap` for sequentially processing observables and passing the output of the first one to the next one
    // Can also be nice if the observables are calls to a server that don't neccisary have a response that is needed,
    //     so you don't need more nich operators like `concat`
    // Commonly used in NgRx Component Store as first thing in an `this.effect` or NgRx Signal Store in an `rxMethod`
    //     since those start with an observable context and you need to pivot into the observable at hand
    userInfo$: Observable<UserInfo> = this.currentUser$.pipe(
        switchMap((user) => this.getUserInfo(user))
    )

    // `combineLatest` requires each observable emit at least once. With HTTP calls, this just lets calls be combined and wait however long they take.
    // Also easily exposes each observable as the callback for a later operator in the pipe
    // In this example, the first value is available at 2.5s since the `checkings$` takes the longest
    // And stocks go up by 1 every second, but if you have a cold observable like a one off HTTP call then this scenario isn't as relevant
    savings$ = of(100).pipe(delay(500))
    checkings$ = of(250).pipe(delay(2500))
    stocks$ = interval(1000).pipe(map((v) => v + 10))
    netWorth$ = combineLatest([
        this.savings$,
        this.checkings$,
        this.stocks$,
    ]).pipe(map(([savings, checkings, stocks]) => savings + checkings + stocks))
}

type UserInfo = {
    id: number
    name: string
    hobbies: string
}
