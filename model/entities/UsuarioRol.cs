using System;
using System.Collections.Generic;
using System.Text;

namespace model.entities
{
    public class UsuarioRol
    {
        public int FKrol { get; set; }
        public virtual Rol Rol { get; set; }
        public int FKusuario { get; set; }
        public virtual Usuario Usuario { get; set; }

    }
}
