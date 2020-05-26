import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css'],
})
export class DescComponent implements OnInit {
  @Input() highlightedSteps;

  constructor() {}

  ngOnInit(): void {}
}
