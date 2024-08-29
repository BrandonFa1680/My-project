# Nueva nota en diagrama de aplicación de una sola pagina

```mermaid
sequenceDiagram
    participant Navegador
    participant Server

    Navegador->>Server: Envía solicitud POST a /new_note con el contenido de la nota
    Server-->>Navegador: Responde con la nueva nota y un código de estado
    Navegador->>Navegador: Actualiza la lista de notas con la nueva nota
    Navegador->>Navegador: Muestra la nueva nota en la interfaz
```