import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-github',
    template: `
        <section class="hero">
            <div class="hero-foot">
                <p class="title">
                    <a href="https://github.com/FlareFlo/Angular-testing-source">Source code</a>
                </p>
            </div>
        </section>
    `,
    styles: []
})
export class GithubComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
