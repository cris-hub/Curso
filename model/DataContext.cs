
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using model.entities;
using System.IO;

namespace model
{
    public partial class DataContext : DbContext
    {
        //el espejo de la base de datos reflejado en DbSets
        #region entidades
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Rol> Rol { get; set; }
        public DbSet<UsuarioRol> UsuarioRol { get; set; }
        #endregion

        //configuracion del conexion a base de datos
        public DataContext(DbContextOptions<DataContext> options)
        : base(options)
        {
        }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UsuarioRol>().HasKey(k => new { k.FKrol, k.FKusuario });

            builder.Entity<UsuarioRol>()
                .HasOne(ur => ur.Usuario)
                .WithMany(u => u.UsuariosRoles)
                .HasForeignKey(ur => ur.FKusuario);
            builder.Entity<UsuarioRol>()
                .HasOne(ur => ur.Rol)
                .WithMany(r => r.UsuariosRoles)
                .HasForeignKey(ur => ur.FKrol); ;

        }

    }

    public class TemporaryDbContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        //////// 
        public DataContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<DataContext>();
            IConfigurationRoot configuration = new ConfigurationBuilder()

              .Build();

            builder.UseSqlServer("Server=DESKTOP-M3UD78L\\SQLEXPRESS;Database=curso;Trusted_Connection=True;");
            return new DataContext(builder.Options);
        }
    }

}