<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set response header to JSON
header('Content-Type: application/json');

// Function to validate input
function validateInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and validate form data
    $name = validateInput($_POST['name']);
    $phone = validateInput($_POST['phone']);
    $email = validateInput($_POST['email']);
    $service = validateInput($_POST['service']);
    $message = validateInput($_POST['message']);
    
    // Validate required fields
    if (empty($name) || empty($phone) || empty($email) || empty($service) || empty($message)) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required. Please fill in all the information.'
        ]);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid email address.'
        ]);
        exit;
    }
    
    // Validate phone number (basic validation)
    if (!preg_match('/^[0-9\s\+\-\(\)]{10,}$/', $phone)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid phone number.'
        ]);
        exit;
    }
    
    // Your email address
    $to = "leratonama8@gmail.com";
    
    // Subject
    $subject = "New Driving School Inquiry - " . $name;
    
    // Email headers
    $headers = "From: Vuwa Driving School <noreply@vuwadrivingschool.co.za>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // HTML Email template
    $email_body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Driving School Inquiry</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background: linear-gradient(135deg, #73a9c2 0%, #5c879b 100%);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
            }
            .content {
                background: #f8fafc;
                padding: 30px;
                border: 1px solid #e2e8f0;
                border-top: none;
                border-radius: 0 0 10px 10px;
            }
            .info-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            .info-table td {
                padding: 12px 15px;
                border-bottom: 1px solid #e2e8f0;
            }
            .info-table td:first-child {
                font-weight: bold;
                width: 30%;
                color: #1e2f3a;
            }
            .highlight {
                background-color: #e0f2fe;
                padding: 10px;
                border-radius: 5px;
                border-left: 4px solid #73a9c2;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #64748b;
                font-size: 14px;
            }
            .logo {
                font-size: 24px;
                font-weight: bold;
                color: white;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo">Vuwa Driving School</div>
            <h1>New Student Inquiry</h1>
        </div>
        <div class="content">
            <p>You have received a new inquiry from your website:</p>
            
            <table class="info-table">
                <tr>
                    <td>Full Name:</td>
                    <td>' . htmlspecialchars($name) . '</td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td>' . htmlspecialchars($phone) . '</td>
                </tr>
                <tr>
                    <td>Email Address:</td>
                    <td>' . htmlspecialchars($email) . '</td>
                </tr>
                <tr>
                    <td>Service Interested:</td>
                    <td>' . htmlspecialchars($service) . '</td>
                </tr>
                <tr>
                    <td>Inquiry Date:</td>
                    <td>' . date('F j, Y, g:i a') . '</td>
                </tr>
            </table>
            
            <div class="highlight">
                <strong>Message:</strong><br>
                ' . nl2br(htmlspecialchars($message)) . '
            </div>
            
            <p><strong>Action Required:</strong> Please contact the student as soon as possible to discuss their driving lesson requirements.</p>
            
            <p>You can reply directly to this email or contact the student at:<br>
            Phone: ' . htmlspecialchars($phone) . '<br>
            Email: ' . htmlspecialchars($email) . '</p>
            
            <div class="footer">
                <p>This email was sent from your website contact form.<br>
                Vuwa Driving School &copy; ' . date('Y') . '</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        // Also send a confirmation email to the user
        $user_subject = "Thank you for contacting Vuwa Driving School";
        
        $user_headers = "From: Vuwa Driving School <noreply@vuwadrivingschool.co.za>\r\n";
        $user_headers .= "Reply-To: leratonama8@gmail.com\r\n";
        $user_headers .= "MIME-Version: 1.0\r\n";
        $user_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        $user_email_body = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Thank you for your inquiry</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: linear-gradient(135deg, #73a9c2 0%, #5c879b 100%);
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }
                .content {
                    background: #f8fafc;
                    padding: 30px;
                    border: 1px solid #e2e8f0;
                    border-top: none;
                    border-radius: 0 0 10px 10px;
                }
                .contact-info {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                    border-left: 4px solid #73a9c2;
                }
                .whatsapp-button {
                    display: inline-block;
                    background: #25D366;
                    color: white;
                    padding: 12px 24px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin: 10px 0;
                    font-weight: bold;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #e2e8f0;
                    color: #64748b;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Thank You for Your Inquiry!</h1>
            </div>
            <div class="content">
                <p>Dear ' . htmlspecialchars($name) . ',</p>
                
                <p>Thank you for contacting <strong>Vuwa Driving School</strong>. We have received your inquiry regarding our <strong>' . htmlspecialchars($service) . '</strong> service.</p>
                
                <div class="contact-info">
                    <p><strong>Our team will contact you shortly at:</strong><br>
                    Phone: ' . htmlspecialchars($phone) . '<br>
                    Email: ' . htmlspecialchars($email) . '</p>
                </div>
                
                <p><strong>What happens next:</strong></p>
                <ul>
                    <li>Our instructor will call you within 24 hours</li>
                    <li>We will discuss your specific requirements</li>
                    <li>We will schedule your first driving lesson</li>
                    <li>We will provide all necessary information</li>
                </ul>
                
                <p><strong>Need immediate assistance?</strong><br>
                You can also reach us directly:</p>
                
                <p><strong>Call:</strong> 079 065 9736<br>
                <strong>WhatsApp:</strong> <a href="https://wa.me/27790659736" class="whatsapp-button">Chat on WhatsApp</a></p>
                
                <p><strong>Service Areas:</strong> Secunda, Devon, Embalenhle</p>
                
                <p>We look forward to helping you become a confident, skilled driver!</p>
                
                <p>Best regards,<br>
                <strong>The Vuwa Driving School Team</strong></p>
                
                <div class="footer">
                    <p>This is an automated confirmation email.<br>
                    Vuwa Driving School &copy; ' . date('Y') . '<br>
                    Learn. Drive. Succeed.</p>
                </div>
            </div>
        </body>
        </html>';
        
        // Send confirmation email to user
        mail($email, $user_subject, $user_email_body, $user_headers);
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Your message has been sent successfully! We will contact you soon.'
        ]);
    } else {
        // Return error response
        echo json_encode([
            'success' => false,
            'message' => 'Sorry, there was an error sending your message. Please try again later.'
        ]);
    }
} else {
    // Return error if not POST request
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
}
?>