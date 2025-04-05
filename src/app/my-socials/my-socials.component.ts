import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-my-socials',
    imports: [],
    template: `
        <ul>
            @for (social of socials; track $index) {
                <li>
                    <a [href]="social.url" target="_blank">{{
                        social.display
                    }}</a>
                </li>
            }
        </ul>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MySocialsComponent {
    socials: { display: string; url: string }[] = [
        {
            display: 'Reddit',
            url: 'https://www.reddit.com/user/MichaelSmallDev/',
        },
        {
            display: 'GitHub',
            url: 'https://github.com/michael-small',
        },
        {
            display: 'Bluesky',
            url: 'https://bsky.app/profile/michaelsmalldev.bsky.social',
        },
    ]
}
