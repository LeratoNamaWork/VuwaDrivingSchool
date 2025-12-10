VUWA DRIVING SCHOOL - CONTACT FORM SETUP
=========================================

1. FILE STRUCTURE:
   - index.html (main website file)
   - send_email.php (PHP email handler)
   - .htaccess (Apache configuration - optional)
   - /public folder with your images (logo.jpg, image1.jpeg)

2. SERVER REQUIREMENTS:
   - PHP 7.0 or higher
   - Apache web server (recommended)
   - Email functionality enabled on server

3. HOW TO SET UP:

   A. LOCAL TESTING (XAMPP/WAMP/MAMP):
      - Place all files in your htdocs/www folder
      - Start Apache server
      - Access via http://localhost/your-folder/

   B. LIVE WEB HOSTING:
      - Upload all files to your web server via FTP/cPanel
      - Make sure PHP is enabled on your hosting
      - Test the contact form works

4. TROUBLESHOOTING:

   If emails are not sending:
   1. Check if your hosting provider allows PHP mail()
   2. Contact your hosting support to enable mail function
   3. Check spam folder for test emails
   4. Enable error reporting in send_email.php (line 2-3)

   If you see a 500 error:
   1. Check PHP version compatibility
   2. Check file permissions (PHP files should be 644)
   3. Check for syntax errors in PHP code

5. CUSTOMIZATION:

   To change the recipient email:
   - Open send_email.php
   - Find line: $to = "leratonama8@gmail.com";
   - Change to your desired email

   To add more form fields:
   - Add fields in index.html form
   - Update validation in send_email.php
   - Update email template in send_email.php

6. SECURITY NOTES:
   - Form includes basic validation and sanitization
   - Consider adding CAPTCHA for production use
   - Regularly check email delivery

7. TEST THE FORM:
   - Fill out the contact form
   - Check your email (leratonama8@gmail.com)
   - Check the user's email for confirmation
   - Test on mobile and desktop

8. SUPPORT:
   If you need help, ensure:
   - PHP is installed and running
   - Server can send emails
   - File permissions are correct
   - No firewall blocking emails