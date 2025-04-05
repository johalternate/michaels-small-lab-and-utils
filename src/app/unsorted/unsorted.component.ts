import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SignalExamplsComponent } from '../temp-signal-tutorial-clone/signal-exampls.component'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { CodeStyledComponent } from '../code-styled.component'

@Component({
    selector: 'app-unsorted',
    imports: [
        FormsModule,
        SignalExamplsComponent,
        MatButtonModule,
        MatExpansionModule,
        CodeStyledComponent,
    ],
    template: `
        <app-code-styled />
        <mat-accordion>
            <mat-expansion-panel
                (opened)="$showSignalExamples.set(true)"
                (closed)="$showSignalExamples.set(false)"
            >
                <mat-expansion-panel-header>
                    <mat-panel-title>
                        {{
                            !$showSignalExamples()
                                ? 'SHOW signal examples'
                                : 'HIDE signal examples'
                        }}
                    </mat-panel-title>
                </mat-expansion-panel-header>
                <app-signal-examples />
            </mat-expansion-panel>
        </mat-accordion>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnsortedComponent {
    $showSignalExamples = signal(false)
}
