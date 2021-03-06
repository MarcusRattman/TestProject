import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../Models/models';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  @Input() resource!: Resource;

  constructor() { }

  ngOnInit(): void {
  }

}
