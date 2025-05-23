import { Routes } from '@angular/router'
import { UnsortedComponent } from './unsorted/unsorted.component'
import { RxjsComponent } from './rxjs/rxjs.component'
import { LinksComponent } from './links/links.component'
import { Base64Component } from './base-64.component'
import { LetComponent } from './let/let.component'
import { MySocialsComponent } from './my-socials/my-socials.component'

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'unsorted',
                component: UnsortedComponent,
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
            },
            {
                path: 'links',
                component: LinksComponent,
            },
            {
                path: 'base-64',
                component: Base64Component,
            },
            {
                path: 'let',
                component: LetComponent,
            },
            {
                path: 'my-socials',
                component: MySocialsComponent,
            },
        ],
    },
]
