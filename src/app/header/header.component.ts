import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <!-- menu -->
        <div class="navbar is-dark">
            <div class="navbar-brand">
                <div class="navbar-menu is-active is-dark">
                    <div class="navbar-start">
                        <a class="navbar-item" routerLink="/">Home</a>
                        <a class="navbar-item" routerLink="/info">Info</a>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>
                        <div class="navbar-dropdown is-dark">
                            <a class="navbar-item" routerLink="/github">Github</a>
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
