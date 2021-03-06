import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { IDestination } from '../app.interfaces';

@Injectable()
export class MapMarkerService {
    constructor(private database: AngularFireDatabase) {}

    public getMapMarkers(): Observable<Array<IDestination>> {
        return this.database
            .list('markers', ref => ref.orderByChild('year'))
            .valueChanges()
            .pipe(
                map((result: any) => {
                    return result.map(marker => {
                        return {
                            displayTitle: marker.displayTitle,
                            completeTitle: marker.completeTitle,
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                            month: marker.month,
                            year: marker.year,
                            notes: marker.notes,
                            description: marker.description,
                            milesDriven: marker.milesDriven,
                            milesFlown: marker.milesFlown
                        };
                    });
                })
            );
    }

    public queryTest(): any {
        return this.database.list('markers', ref => ref.orderByChild('year')).valueChanges();
    }
}
