using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Net.Mail;
using System.Threading.Tasks;
using todo.Models;

namespace todo.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase {
        private readonly IMemoryCache _cache;
        private readonly SmtpClient _smtpClient;
        private readonly MemoryCacheEntryOptions _cacheEntryOptions;

        public UserController(SmtpClient smtpClient, IMemoryCache cache) {
            _cache = cache;
            _smtpClient = smtpClient;

            // Set cache options.
            _cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed.
                    .SetSlidingExpiration(TimeSpan.FromSeconds(300));
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> SendOTP(string to) {
            Random rand = new Random();
            var rnd = rand.Next(1000000, 9999999);
            var mailMessage = new MailMessage(
                from: "vijaya.laxmi502-no-reply@gmail.com",
                to: to,
                subject: "Resume Builder App",
                body: "Welcome to Resume Builder App!<br />" +
                      "Your security code is <b>" + rnd + "</b>" +
                      "<hr />" + "This code will expire in <b>5 minutes</b>"
                );
            mailMessage.IsBodyHtml = true;

            // Save data in cache.
            _cache.Set(to, rnd, _cacheEntryOptions);
            try {
                await _smtpClient.SendMailAsync(mailMessage);
            } catch (Exception e) {
                // TODO: Handle the exception
                Console.Write(e.Message);
            }
            return Ok("OK");
        }

        [HttpPost("[action]")]
        public ActionResult<bool> ValidateSecurityCode([FromBody] SecurityCodeViewModel userInfo) {
            if (_cache.TryGetValue(userInfo.Email, out int cacheEntry)) {
                if (cacheEntry == userInfo.Code) {
                    return Ok("OK");
                } else {
                    return NotFound();
                }
            } else {
                return NotFound();
            }
        }
    }
}
