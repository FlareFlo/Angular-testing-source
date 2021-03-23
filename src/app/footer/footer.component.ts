import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="container content has-text-centered is-size-7 has-text-centered">
            Made by FlareFlo using Angular
            <p>Click this duck :D</p>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="/assets/duck_header.jpg" style="width: 10%;" alt="image">
            </a>
        </div>
    `,
    styles: []
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
