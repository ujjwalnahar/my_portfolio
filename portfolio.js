 AOS.init({
            duration: 1200,
            })

            $("#about").click(function() {
                $(".full").css("display", "block");
            });

            function show()
            {
                $(".full").css("display", "none");
            }

            $("#emoji").click(function() {
                $(".detail").css("display", "block");
                alert("jiji")
            });

            function show1()
            {
                $(".detail").css("display", "none");
            }

            $("#emojy").click(function() {
                $("#details-emojy").css("display", "block");
            });

            $("#closeemojy").click(function() {
                $("#details-emojy").css("display", "none");
            });

            $("#music").click(function() {
                $("#details-music").css("display", "block");
            });

            $("#closemusic").click(function() {
                $("#details-music").css("display", "none");
            });
            
            $("#image").click(function() {
                $("#details-image").css("display", "block");
            });

            $("#closeimage").click(function() {
                $("#details-image").css("display", "none");
            });
            
            $("#cogni").click(function() {
                $("#details-cogni").css("display", "block");
            });

            $("#closecogni").click(function() {
                $("#details-cogni").css("display", "none");
            });

            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
            
                    console.log(scrollTop);
                    if ($(window).scrollTop() < window.innerHeight) {
                        
                        $("#fi").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#se").css({ 'color': 'white', 'font-size': '100%' });
                        $("#th").css({ 'color': 'white', 'font-size': '100%' });
                        $("#fo").css({ 'color': 'white', 'font-size': '100%' });

                    }
                    else if (($(window).scrollTop() >= (window.innerHeight-190))&&($(window).scrollTop() < (window.innerHeight+window.innerHeight-190))) {
                        $("#se").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#th").css({ 'color': 'white', 'font-size': '100%' });
                        $("#fo").css({ 'color': 'white', 'font-size': '100%' });
                        $("#fi").css({ 'color': 'white', 'font-size': '100%' });

                    }
                    else if (($(window).scrollTop() >= (window.innerHeight+window.innerHeight-190))&&($(window).scrollTop() < (window.innerHeight+window.innerHeight+window.innerHeight-190))) {
                        $("#se").css({ 'color': 'white', 'font-size': '100%' });
                        $("#th").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#fo").css({ 'color': 'white', 'font-size': '100%' });
                        $("#fi").css({ 'color': 'white', 'font-size': '100%' });

                    } else {
                        $("#th").css({ 'color': 'white', 'font-size': '100%' });
                        $("#fo").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#fi").css({ 'color': 'white', 'font-size': '100%' });
                        $("#se").css({ 'color': 'white', 'font-size': '100%', });
                    } 

                });

                 $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
            
                    console.log(scrollTop);
                    if ($(window).scrollTop() < window.innerHeight) {
                        
                        $("#fi").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#se").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#th").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#fo").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });

                    }
                    else if (($(window).scrollTop() >= (window.innerHeight-190))&&($(window).scrollTop() < (window.innerHeight+window.innerHeight-190))) {
                        $("#se").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#th").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#fo").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#fi").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });

                    }
                    else if (($(window).scrollTop() >= (window.innerHeight+window.innerHeight-190))&&($(window).scrollTop() < (window.innerHeight+window.innerHeight+window.innerHeight-190))) {
                        $("#se").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#th").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#fo").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#fi").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });

                    } else {
                        $("#th").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#fo").css({ 'color': '#5e0f53', 'font-size': '110%','text-decoration-line' : 'line-through' });
                        $("#fi").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none' });
                        $("#se").css({ 'color': 'white', 'font-size': '100%','text-decoration-line' : 'none', });
                    } 

                });