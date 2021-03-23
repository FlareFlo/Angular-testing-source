import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-info',
    template: `
        <section class="section">
            <div class="container is-size-4">
                This website is for testing and learning purposes, to learn and improve Angular and Typescript skills.
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
