import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <section class="hero is-primary is-bold" >
            <div class="hero-body">
                <p class="title is-size-1 has-text-centered">
                    Welcome to YAP - Yet Another Planner
                </p>
            </div>
        </section>
    `,
    styles: [
    ]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
