using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(GPSEvents.Startup))]

namespace GPSEvents
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
