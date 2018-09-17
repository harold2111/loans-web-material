import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/Client';
import { Observable, of as observableOf, throwError } from 'rxjs';
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

  private clientsUrl = 'http://localhost:1323/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl + '/clients')
      .pipe(
        tap(clients => this.log('fetched clients')),
        catchError(this.handleError('getClients', []))
      );
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl + '/clients', client)
      .pipe(
        tap(createClientResponse => console.log(`created client id=${createClientResponse.id}`)),
        catchError(this.handleError('createClient', client))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (errorReponse: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(errorReponse); // log to console instead

      const errrorMessage = `${operation} failed: ${errorReponse.error.message}`;

      // TODO: better job of transforming error for user consumption
      this.log(errrorMessage);

      // Let the app keep running by returning an empty result.
      // return observableOf(result as T);
       return throwError(errrorMessage);
    };
  }

  /** Log a ClientService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ClientService: ' + message);
  }

}
