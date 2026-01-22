📝 Task Manager - Práctica de Manipulación del DOM

Este proyecto es una aplicación web de gestión de tareas (To-Do List) desarrollada como proyecto final para consolidar conocimientos avanzados sobre la manipulación del DOM, manejo de eventos y persistencia de datos en el navegador.

La aplicación permite a los usuarios crear, editar, eliminar y guardar tareas, manteniendo la información incluso después de recargar la página gracias al uso de LocalStorage.
🚀 Funcionalidades

    Agregar Tareas: Interfaz dinámica para añadir nuevos elementos a la lista.

    Persistencia de Datos: Las tareas no se pierden al recargar la página (CRUD con LocalStorage).

    Edición y Eliminación: Modificación de texto y borrado de tareas con confirmación.

    Event Delegation: Optimización del manejo de eventos click en listas dinámicas.

    Modo Oscuro/Claro: Cambio de tema visual con persistencia de la preferencia del usuario.

🛠️ Tecnologías Utilizadas

    HTML5: Estructura semántica.

    CSS3: Estilos personalizados y variables para el manejo de temas.

    JavaScript (ES6+): Lógica de interacción y manipulación del DOM.

📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular separando responsabilidades:

- index.html           # Estructura principal y carga de scripts
- style.css            # Estilos base y variables de modo oscuro
- app.js               # Lógica del DOM, eventos y renderizado
- appStorage.js        # Persistencia de datos (lectura/escritura en LocalStorage)
- appChangeTheme.js    # Lógica independiente para el cambio de tema

Lo que aprendí (Conceptos Clave)

Durante el desarrollo de este proyecto, puse en práctica conceptos intermedios de JavaScript:

    Manipulación del DOM:

        Uso de createElement, appendChild y remove para gestionar nodos dinámicamente sin recargar la página.

        Diferenciación entre modificar el DOM directamente vs actualizar el estado.

    Event Delegation (Delegación de Eventos):

        En lugar de asignar un listener a cada botón de borrar/editar (lo cual es ineficiente), asigné un único listener al elemento padre (ul#task-list) para detectar clicks en los elementos hijos dinámicos usando e.target.classList.contains().

    Persistencia con LocalStorage:

        Uso de JSON.parse() y JSON.stringify() para almacenar arrays de tareas y preferencias de usuario en el navegador.

        Sincronización del estado visual (DOM) con el almacenamiento local.

    Lógica Modular:

        Separación de la lógica de almacenamiento y la lógica de interfaz para mantener un código más limpio y escalable.

Desarrollado por Julio Manuel Martinez (J - Soft Solutions) - Proyecto de Práctica JS