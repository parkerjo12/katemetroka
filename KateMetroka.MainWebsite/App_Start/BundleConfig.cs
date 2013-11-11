using System.Web;
using System.Web.Optimization;

namespace KateMetroka.MainWebsite
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/reset.css",
                      "~/Content/grid.css",
                      "~/Content/colors.css",
                      "~/Content/style.css",
					  "~/Content/prettyPhoto.css"));

			bundles.Add(new ScriptBundle("~/bundles/templatejs").Include(
					"~/scripts/js/jquery-1.6.js",
					"~/scripts/js/cufon-yui.js",
					"~/scripts/js/cufon-replace.js",
					"~/scripts/js/Kozuka_Gothic_Pro_OpenType_400.font.js",
					"~/scripts/js/Kozuka_Gothic_Pro_OpenType_500.font.js",
					"~/scripts/js/Kozuka_Gothic_Pro_OpenType_700.font.js",
					"~/scripts/js/jquery.nivo.slider.pack.js",
					"~/scripts/js/jquery.easing.1.3.js",
					"~/scripts/js/script.js",
					"~/scripts/js/jquery.mousewheel.js",
					"~/scripts/js/scroll.js",
					"~/scripts/js/jquery.prettyPhoto.js",
					"~/scripts/js/hover-image.js",
					"~/scripts/js/content_switch.js",
					"~/scripts/js/contact-form.js"
				));
        }
    }
}
