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
    <?php
    if (isset($_GET['num'])) {
        $index = intval($_GET['num']);

        for ($x = 1; $x <= $index; $x++) {
            if ($x % 2 == 0) {
                echo "$x" . " ";
            }
        }
    }
    ?>
</body>
</html>