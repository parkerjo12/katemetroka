using System.Web;
using System.Web.Optimization;

namespace KateMetroka.MainWebsite
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/reset.css",
                      "~/Content/grid.css",
                      "~/Content/colors.css",
                      "~/Content/style.css",
					  "~/Content/prettyPhoto.css"));

			bundles.Add(new ScriptBundle("~/bundles/templatejs").Include(
					"~/scripts/jquery-1.6.js",
					"~/scripts/cufon-yui.js",
					"~/scripts/cufon-replace.js",
					"~/scripts/Kozuka_Gothic_Pro_OpenType_400.font.js",
					"~/scripts/Kozuka_Gothic_Pro_OpenType_500.font.js",
					"~/scripts/Kozuka_Gothic_Pro_OpenType_700.font.js",
					"~/scripts/jquery.nivo.slider.pack.js",
					"~/scripts/jquery.easing.1.3.js",
					"~/scripts/script.js",
					"~/scripts/jquery.mousewheel.js",
					"~/scripts/scroll.js",
					"~/scripts/jquery.prettyPhoto.js",
					"~/scripts/hover-image.js",
					"~/scripts/content_switch.js",
					"~/scripts/contact-form.js"
				));
        }
    }
}
