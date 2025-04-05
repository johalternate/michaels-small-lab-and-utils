import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentCreatorsComponent } from "../content-creators.component";
import { CommonLinksComponent } from '../common-links.component';

@Component({
  selector: 'app-content-links',
  imports: [ContentCreatorsComponent, CommonLinksComponent],
  template: `
    <div id="links">
      <section>
        <h2>Helpful Links</h2>
        <app-common-links />
      </section>
      <section>
        <h2>Educators</h2>
        <app-content-creators
          name="Joshua Morony"
          specialty="rxjs + signals + signalSlice creator"
          description="YouTuber / ngxtension maintainer"
          [socials]="{ youtube: '@JoshuaMorony' }"
        />
      </section>
    </div>
  `,
  styles: `
    #links {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksComponent {

}
