import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-feature2',
  template: `
    <p>
      feature2 works!
    </p>

    <button mat-raised-button color="primary">lib-feature2</button>
  `,
  styles: [
  ]
})
export class Feature2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
