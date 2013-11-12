using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KateMetroka.MainWebsite.Models
{
	public class ContactViewModel
	{
		public string Name { get; set; }
		public string EmailAddress { get; set; }
		public string PhoneNumber { get; set; }
		public string Message { get; set; }
	}
}