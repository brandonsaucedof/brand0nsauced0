        // Función para obtener el nombre del navegador
        function getBrowserName() {
            const userAgent = navigator.userAgent;
            if (userAgent.includes("Chrome")) {
                return "Google Chrome";
            } else if (userAgent.includes("Firefox")) {
                return "Mozilla Firefox";
            } else if (userAgent.includes("Edge")) {
                return "Microsoft Edge";
            } else {
                return "Navegador desconocido";
            }
        }

        // Función para imprimir el mensaje de bienvenida y el navegador
        function printWelcomeMessage() {
            console.log("¡Bienvenido a mi programa en JavaScript!");
            console.log("Estás utilizando el navegador: " + getBrowserName());
        }

        // Llamar a la función para imprimir el mensaje de bienvenida y el navegador
        printWelcomeMessage();