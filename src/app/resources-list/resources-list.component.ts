import { Component, OnInit } from '@angular/core';
import { Resource } from '../Models/models';
import { FetcherService } from '../InfoFetcher/fetcher.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  Resources!: Resource[];

  constructor(private fs: FetcherService) { }

  ngOnInit(): void {
    let subscribtion = this.fs.GetResources().subscribe(
      data => {
        this.Resources = data.data;
        subscribtion.unsubscribe();
      }
    );
  }
}
