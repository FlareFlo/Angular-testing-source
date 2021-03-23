import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div class="navbar is-dark is-bold">
            <div class="navbar-brand">
                Duccsite 1.0
            </div>
            <!-- menu -->
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" routerLink="/">Home</a>
                    <a class="navbar-item" routerLink="/info">Info</a>
                </div>
            </div>
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
