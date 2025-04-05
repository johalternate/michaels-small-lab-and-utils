import { AsyncPipe } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core'
import { of } from 'rxjs'

@Component({
    selector: 'app-let',
    imports: [AsyncPipe],
    template: `
        <h1>{{ lett }}</h1>

        <p>
            Signals narrowing (since subsequent signal invocations don't truly
            narrow, but <code>{{ lett }}</code> can narrow)
        </p>

        @let mySignal = someSignal();

        @if (mySignal) {
            <p>mySignal: {{ mySignal }}</p>
        }

        <hr />

        <!-- Needed to not use an observable multiple times w/o same call -->
        <p>Needs to be scoped to if</p>
        @if (someVar$ | async; as someVar) {
            <p>someVar w/if {{ someVar }}</p>
        }

        <!-- Allows only one call but no scoped to an @if -->
        <p>Does not need to be scoped</p>
        @let someVar = someVar$ | async;
        @if (someVar) {
            <p>someVar w/let {{ someVar }}</p>
        }

        <hr />

        <p>
            <code>async</code> pipe calls the observable every time. So two HTTP
            calls.
        </p>
        <p>See two calls here for the <code>someVar1$ | async</code></p>
        <p>{{ sv1 }} {{ someVar1$ | async }}</p>
        <p>{{ sv2 }} {{ someVar1$ | async }}</p>

        <p>
            See only one call here for the
            <code>{{ lett }} someVar = someVar2$ | async</code>
        </p>
        @let someVar2 = someVar2$ | async;
        <p>someVar2 {{ someVar2 }}</p>
        <p>someVar2 {{ someVar2 }}</p>

        <hr />

        <p>Other use cases: long reactive forms paths</p>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LetComponent {
    readonly #httpClient = inject(HttpClient)

    someVar$ = of(100)

    someVar1$ = this.#httpClient.get('localhost:4201/1')
    someVar2$ = this.#httpClient.get('localhost:4201/2')

    someSignal = signal<string | undefined>(
        'value that could have been undefined'
    )

    // Helpers for reserved characters
    sv1 = 'someVar1$'
    sv2 = 'someVar2$'
    lett = '@let'

    ngOnInit() {
        console.clear()
        console.warn('FAILED CALLS INTENTIONAL')
    }
    ngOnDestroy() {
        console.clear()
    }
}
