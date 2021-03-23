import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <p class="title">
                    Welcome to the duccsite
                </p>
            </div>
        </section>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
