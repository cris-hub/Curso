import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  usuarios = []

  constructor(private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
    
  }

  getUsuarios() {
    this.usuarioServicio.getUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
        console.log(
          this.usuarios

        )
      });

  }


}
