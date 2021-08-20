<?php 
    session_start();
    if(isset($_SESSION['unique_id'])){
        header('location: users.php');
    }
?>
<?php
    include "header.php";
?>
<body>
    <div class="wrapper">
        <section class="form signup">
            <header>Realtime chat app</header>
            <form action="#" enctype="multipart/form-data">
                <div class="error-text"></div>
                <div class="name-details">
                    <div class="field input">
                        <label>First Name</label>
                        <input type="text" name="fname" autocomplete="off" placeholder="First Name" required>
                    </div>
                    <div class="field input">
                        <label>Last Name</label>
                        <input type="text" name="lname" autocomplete="off" placeholder="Last Name" required>
                    </div>
                </div>
                    <div class="field input">
                        <label>Email Adress</label>
                        <input type="email" name="email" autocomplete="off" placeholder="Enter your email" required>
                    </div>
                    <div class="field input">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter new password" required>
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="field image">
                        <label>Select Image</label>
                        <input type="file" name="image" required>
                    </div>
                    <div class="field button">
                        <input type="submit" value="Resgister">
                    </div>
            </form>
            <div class="link">Already signed up? <a href="login.php">Login now</a></div>
        </section>
    </div>
    <script src="javascript/pass-show-hide.js"></script>
    <script src='javascript/signup.js'></script>
</body>
</html>