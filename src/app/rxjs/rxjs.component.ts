import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  imports: [],
  template: `
    <p>
      rxjs works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsComponent {

}
