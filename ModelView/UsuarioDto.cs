﻿using System;

namespace ModelView
{
    public class UsuarioDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public UsuarioDto(int Id, string Nombre)
        {
            this.Id = Id;
            this.Nombre = Nombre;
        }
    }
}
