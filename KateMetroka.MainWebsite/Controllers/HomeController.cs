using KateMetroka.MainWebsite.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace KateMetroka.MainWebsite.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult TestEndPoint()
		{
			return new HttpStatusCodeResult(200);
		}

		[HttpPost]
		public ActionResult Contact(ContactViewModel contact)
		{
			try
			{
				var emailMessage = new MailMessage
				{
					BodyEncoding = Encoding.Default,
					From = new MailAddress(ConfigurationManager.AppSettings["SenderAddress"]),
					Subject = "Website Contact From " + contact.Name,
					IsBodyHtml = true,
					Body = "Name: " + contact.Name + "<br /> Phone Number: " + contact.PhoneNumber + "<br /> Email: " + contact.EmailAddress + "<br /> Message: " + contact.Message,
				};

				emailMessage.To.Add(new MailAddress(ConfigurationManager.AppSettings["RecipientAddress"]));
				emailMessage.Bcc.Add(new MailAddress(ConfigurationManager.AppSettings["RecipientBccAddress"]));
				using (SmtpClient client = new SmtpClient(ConfigurationManager.AppSettings["SMTPHost"]))
				{
					client.UseDefaultCredentials = false;
					client.Credentials = new NetworkCredential(ConfigurationManager.AppSettings["SMTPUser"], ConfigurationManager.AppSettings["SMTPPassword"]);
					client.Send(emailMessage);
				}

				return new HttpStatusCodeResult(200);
			}
			catch (Exception error) { return new HttpStatusCodeResult(500, error.Message); }
		}
	}
}