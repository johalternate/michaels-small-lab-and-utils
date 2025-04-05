import { Routes } from '@angular/router';
import { UnsortedComponent } from './unsorted/unsorted.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LinksComponent } from './links/links.component';
import { Base64Component } from './base-64.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'unsorted',
                component: UnsortedComponent
            },
            {
                path: 'rxjs',
                component: RxjsComponent
            },
            {
                path: 'links',
                component: LinksComponent
            },
            {
                path: 'base-64',
                component: Base64Component
            }
        ]
    }
];
