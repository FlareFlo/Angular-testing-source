import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container content has-text-centered">
      Quackium text
      <p>Made with ducc(3)</p>
      <img src="/assets/duck_header.jpg" style="width: 10vw; min-width: 100px" alt="image">
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
