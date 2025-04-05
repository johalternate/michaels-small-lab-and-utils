import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule],
    template: `
        <button routerLink="rxjs">RXJS</button>
        <button routerLink="links">Links</button>
        <button routerLink="unsorted">Unsorted</button>
        <button routerLink="base-64">Base 64</button>

        <section>
            <h1>Michael's Lab/Devtools</h1>
            <a
                href="https://github.com/msmallest/michaels-small-lab-and-utils"
                target="_blank"
                >Repo</a
            >
        </section>

        <router-outlet />
    `,
    styles: ``,
})
export class AppComponent {}
