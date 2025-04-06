import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  template: `
    <mat-toolbar>
      <a mat-button routerLink="/">
        <span>☃️ Michael's Lab/DevTools</span>
      </a>
      @for (item of mainMenuItems; track item.link) {
        <a mat-button [routerLink]="item.link" routerLinkActive="active">
          <span>{{ item.label }}</span>
        </a>
      }
      <span class="spacer"></span>
      <a mat-button [href]="githubMenuItem.href" target="_blank">
        <mat-icon style="height: 24px; width: 24px;" [svgIcon]="githubMenuItem.svgIcon" />
        <span>{{ githubMenuItem.label }}</span>
      </a>
    </mat-toolbar>
  `,
  styles: `
    .spacer {
      flex: 1 1 auto;
    }

    .active {
      background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected readonly mainMenuItems = [
    {
      label: 'RxJS',
      link: 'rxjs',
    },
    {
      label: 'Links',
      link: 'links',
    },
    {
      label: 'Unsorted',
      link: 'unsorted',
    },
    {
      label: 'Base 64',
      link: 'base-64',
    },
    {
      label: '@let',
      link: 'let',
    },
    {
      label: 'My Socials',
      link: 'my-socials'
    }
  ]

  protected readonly githubMenuItem = {
    href: "https://github.com/msmallest/michaels-small-lab-and-utils",
    label: "GitHub",
    svgIcon: 'socials:github'
  }
}
