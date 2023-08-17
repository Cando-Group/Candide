<?php

    ?>
    <html>
        <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </head>
    </html>
    <?php

    if (isset($_GET['submit'])){

        if (!empty($_GET['name']) && !empty($_GET['email']) && !empty($_GET['subject']) && !empty($_GET['message'])){

            $name = $_GET['name'];
            $email = $_GET['email'];
            $subject = $_GET['subject'];
            $message = $_GET['message'];


            if (filter_var($email, FILTER_VALIDATE_EMAIL)){

				// Envoi de mail, PENSEZ A CHANGER LE MAIL LORSQUE LE PRO SERA DISPONIBLE
				$to = "candidesodokinpro@gmail.com";

				$from = "From: $email \r\n Nom : $name";
				
				mail($to, $subject, $message, $from);
				
				$successMsg = "Message envoyé avec succès";
				
			}else{
				$errorMsg = "Format de l'email incorrect, veuillez réessayer";
			}

        }else{
            $errorMsg = "Veuillez remplir tous les champs svp";
        }

    }


    if (isset($errorMsg)){
        ?>
        <script>
            Swal.fire({
                title : "Erreur ! ",
                text : "<?=$errorMsg?>",
                icon : "error",
            }).then(function() {
                window.location = "contact.html"
            })
        </script>
        <?php
    }elseif (isset($successMsg)){
        ?>
        <script>
            Swal.fire({
                title : "Succès ! ",
                text : "<?=$errorMsg?>",
                icon : "success",
            }).then(function() {
                window.location = "contact.html"
            })
        </script>
        <?php
    }