<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

function clean_header($value) {
    return str_replace(["\r", "\n"], '', trim((string)$value));
}

$TO_EMAIL = 'youssef7200143@gmail.com';

$name    = clean_header($_POST['name'] ?? '');
$email   = trim((string)($_POST['email'] ?? ''));
$phone   = trim((string)($_POST['phone'] ?? ''));
$service = trim((string)($_POST['service'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$lang    = trim((string)($_POST['lang'] ?? 'ar'));
$subject = clean_header($_POST['_subject'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Missing fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email']);
    exit;
}

if ($subject === '') {
    $subject = 'طلب حجز جديد - ' . $name;
}

$body  = "الاسم: {$name}\nالبريد: {$email}\nالهاتف: {$phone}\nالخدمة: {$service}\nالرسالة:\n{$message}\n";
$host = clean_header($_SERVER['HTTP_HOST'] ?? 'drmohamedyousef.com');
$headers = "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nFrom: Website <noreply@{$host}>\r\nReply-To: {$name} <{$email}>\r\n";

$ok = @mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

echo json_encode(['success' => (bool)$ok]);
