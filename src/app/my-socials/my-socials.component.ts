import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core'

@Component({
    selector: 'app-my-socials',
    imports: [
        forwardRef(() => {
            return RedditLinksComponent // VSC says this is a standalone error but it is valid
        }),
    ],
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

        <app-reddit-links />
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

@Component({
    selector: 'app-reddit-links',
    template: `<h2>Reddit Links</h2>
        <ul>
            @for (link of links; track $index) {
                <li>
                    <a [href]="link.url" target="_blank">{{ link.display }}</a>
                </li>
            }
        </ul>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class RedditLinksComponent {
    links: { display: string; url: string }[] = [
        {
            display:
                'Why reactive forms which are class fields should always be initialized',
            url: 'https://www.reddit.com/r/Angular2/comments/1ijsd5k/where_to_initialize_formgroup_in_angular/mbh4lhz/',
        },
        {
            display: 'Favorite VSC extensions for Angular',
            url: 'https://www.reddit.com/r/angular/comments/1d5ne1c/deleted_by_user/l6mqntj/',
        },
        {
            display: 'My favorite RXJS learning utils. Missing RX Marbles.',
            url: 'https://reddit.com/r/Angular2/comments/1i44gdo/how_can_i_learn_to_understand_observables_and_use/m7tkfz1/',
        },
        {
            display:
                'Why inject() will be needed and constructor() based DI will quit working',
            url: 'https://www.reddit.com/r/Angular2/comments/1hswfhx/the_dilemma_about_angular_di_patterns_and_code/m598jkh/',
        },
        {
            display: 'Ben Lesh (RXJS lead): RXJS and Signals',
            url: 'https://www.reddit.com/r/angular/comments/1d6r9bh/deleted_by_user/l6uis7b/',
        },
        {
            display: 'Major things since v7/v8',
            url: 'https://www.reddit.com/r/angular/comments/1jf0brv/getting_back_into_angular_after_3_years/mipn67r/',
        },
        {
            display: 'Favorite Angular creators links + summary',
            url: 'https://www.reddit.com/r/Angular2/comments/1e36dxs/which_angular_resources_do_you_refer_while/ld7dpvs/',
        },
        {
            display: 'Handling version updates + deps',
            url: 'https://reddit.com/r/Angular2/comments/1ddxr4j/ng_version_and_packagejson_show_different/l8akbfo/',
        },
        {
            display: 'More handling updates + deps',
            url: 'https://www.reddit.com/r/Angular2/comments/1i77vc5/any_advice_on_how_to_update_a_project_from/m8jbogi/',
        },
        {
            display: 'async pipe/switchMap/catchError example',
            url: 'https://www.reddit.com/r/Angular2/comments/1gech86/review_my_angular_ecommerce_project/lu9af7b/',
        },
        {
            display:
                "My RXJS/Signals/Mix overview, which is in JeanMeche's signals choice flowchart",
            url: 'https://www.reddit.com/r/Angular2/comments/1hce7wc/which_reactive_primitive_to_use/m1rs0fq/',
        },
        {
            display: 'Why I like Signal Store vs vanilla services',
            url: 'https://www.reddit.com/r/Angular2/comments/1fq7mhd/best_practices_with_state_managment/lp5bcy7/',
        },
        {
            display: 'Angular and function based code',
            url: 'https://www.reddit.com/r/Angular2/comments/1i3lte3/getting_back_to_angular_anecdotally_ive_seen_a/m7q0nzc/',
        },
        {
            display:
                'Material 3 reasoning + example SB project with a lot of overrides',
            url: 'https://www.reddit.com/r/Angular2/comments/1i0g78f/using_angular_material_3_what_is_the_proper_way/m70nclk/',
        },
        {
            display: 'How standalone apps do global configs',
            url: 'https://www.reddit.com/r/Angular2/comments/1cnt731/why_choose_ngmodule_components_over_standalone/l3av5rh/',
        },
        {
            display: 'Why I prefer Webstorm/InteliJ over VSC',
            url: 'https://www.reddit.com/r/Angular2/comments/1j94u0s/angular_language_service_is_very_slow_in_vs_code/mhi3raa/',
        },
        {
            display:
                'Declarative + reactive content creators guide and why I like the approach',
            url: 'https://www.reddit.com/r/Angular2/comments/1ijsd5k/where_to_initialize_formgroup_in_angular/mbyeyhw/',
        },
        {
            display:
                'Explorations in making form array controls passed to child components bearable',
            url: 'https://www.reddit.com/r/Angular2/comments/1i7qosj/the_latest_patches_today_to_angular_cli_fixed/m8qajdq/',
        },
        {
            display: 'Why form.value can be undefined',
            url: 'https://www.reddit.com/r/Angular2/comments/1gghdgd/formgroup_submission_data_angularfire/lusevlg/',
        },
        {
            display:
                'Why declarative/reactive values much easier than online may make it look like',
            url: 'https://www.reddit.com/r/Angular2/comments/1ecxwhr/evolving_to_become_a_declarative_frontend/lf3y651/',
        },
        {
            display:
                'The handful of signal/rxjs operators I use for async 80% of the time',
            url: 'https://www.reddit.com/r/angular/comments/1ea4edd/help_needed/lejkg2d/',
        },
        {
            display: 'My form to signals util + signalSlice',
            url: 'https://www.reddit.com/r/Angular2/comments/1e9dx78/setting_a_forms_values_using_signals/ledte81/',
        },
        {
            display:
                'How to adapt something with only module docs to finding real world standalone equivalents',
            url: 'https://www.reddit.com/r/Angular2/comments/1bbf8a5/convert_from_standalone/ku9agan/',
        },
        {
            display: 'Big things for code reviews',
            url: 'https://www.reddit.com/r/Angular2/comments/1j7u3kn/angular_code_review_based_interview/mh3zpse/',
        },
    ]
}
