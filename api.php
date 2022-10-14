<?php
header('Content-type: application/json');

if ($_POST['test']) {
    echo json_encode( array(
        'status' => true,
        'message' => 'Successfully test!',
    ));

    die();
}

$post_data = $_POST['dataInfo'];

if (!isset($post_data)) {
    echo json_encode( array(
        'status' => false,
        'message' => 'Error. Illegal data',
    ));

    die();
}

$post_data = json_decode($post_data, true);

if (!$post_data['user-phone']) {
    echo json_encode( array(
        'status' => false,
        'message' => 'Error. Enter phone number',
    ));

    die();
}

echo json_encode(array(
    'status' => true,
    'message' => 'Thanks for request! We\'ll recall you by ' . $post_data['user-phone'] . 'as quick as possible',
));

exit;