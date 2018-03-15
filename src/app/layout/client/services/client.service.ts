import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../shared/services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' 
    })
};


@Injectable()
export class ClientService {

  private clientsUrl = 'http://localhost:1323/api/clients'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(clients => this.log(`fetched clients`)),
        catchError(this.handleError('getClients', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ClientService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ClientService: ' + message);
  }

}
