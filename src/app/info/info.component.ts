import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-info',
    template: `
        <section class="hero is-primary is-bold">
            <div class="hero body">
                <h1 class="title">
                    This website is for testing and learning purposes
                </h1>
            </div>
        </section>

        <section class="section">
            <div class="container">
                test
            </div>
        </section>
    `,
    styles: []
})
export class InfoComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
