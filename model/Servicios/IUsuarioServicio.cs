using model.entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace model.Servicios
{
    public interface IUsuarioServicio
    {
        Task<IEnumerable<Usuario>> Usuarios();
        Task<Usuario> Usuario(int id);
    }
}
