using System;
using System.Collections.Generic;
using System.Text;

namespace model.entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public virtual ICollection<UsuarioRol> UsuariosRoles { get; set; }

     
    }
}



