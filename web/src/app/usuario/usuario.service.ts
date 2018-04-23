import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from './model/usuario';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UsuarioService {



  constructor(private http: HttpClient) { }
  
  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:58242/api/usuarios');
  }
}
