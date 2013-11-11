using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KateMetroka.MainWebsite.Startup))]
namespace KateMetroka.MainWebsite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
