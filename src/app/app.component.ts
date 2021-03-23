import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- headers below -->
        <app-header></app-header>
        <!-- routes here -->
        <router-outlet></router-outlet>
        <!-- anything foot here -->
        <app-footer></app-footer>
    `,
    styles: []
})
export class AppComponent {
    title = 'new-site';
}