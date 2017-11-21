<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit" />
</form>
<!--Write your PHP Script here-->
<?php
if (isset($_GET['num'])) {
    $index = intval($_GET['num']);

    for ($x = 1; $x <= $index; $x++) {
        echo "$x" . " ";
    }
}
?>
</body>
</html>