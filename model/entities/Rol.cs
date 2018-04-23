using System;
using System.Collections.Generic;
using System.Text;

namespace model.entities
{
    public class Rol
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripción { get; set; }
        public virtual ICollection<UsuarioRol> UsuariosRoles { get; set; }

  
    }
}
