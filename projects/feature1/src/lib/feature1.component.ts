import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-feature1',
  template: `
    <p class="bg-info">
      feature1 works! {{data}}
    </p>

    <button mat-raised-button color="primary">lib-feature1</button>
  `,
  styles: [
  ]
})
export class Feature1Component implements OnInit {


  @Input() data:string; 


  constructor() { }

  ngOnInit(): void {
  }

}
