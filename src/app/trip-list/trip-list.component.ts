import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  displayedColumns = ['place', 'date'];
  dataSource = new MapMarkerDataSource(this.data.trips);

  ngOnInit() {
  }

}

export class MapMarkerDataSource extends DataSource<any> {
  constructor(private data: any) {
    super();
  }

  connect(): Observable<Array<any>> {
    return Observable.of(this.data);
  }

  disconnect() { }
}
