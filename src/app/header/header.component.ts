import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <!-- menu -->
        <div class="navbar is-dark">
            <nav class="navbar-brand">
                <div class="navbar-menu is-active">
                    <div class="navbar-end">
                        <a class="navbar-item" routerLink="/">Home</a>
                        <a class="navbar-item" routerLink="/github">Github</a>
                        <a class="navbar-item" routerLink="/info">Info</a>
                    </div>
                </div>
            </nav>
        </div>
    `,
    styles: []
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
