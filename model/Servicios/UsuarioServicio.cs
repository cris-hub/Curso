using Microsoft.EntityFrameworkCore;
using model.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace model.Servicios
{
    public class UsuarioServicio : IUsuarioServicio
    {
        private readonly DataContext _context;

        public UsuarioServicio(DataContext context)
        {
            _context = context;
        }

        public async Task<Usuario> Usuario(int id)
        {
            return await _context.Usuario
                .Where(u => u.Id == id)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Usuario>> Usuarios()
        {
            return await _context.Usuario.ToListAsync();
        }

        //public async Task<IEnumerable<Usuario>> Usuarios()
        //{
        //    return await _context.Usuario
        //        .ToArrayAsync();
        //}

    }
}
