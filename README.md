# Freelan Apollo Onboarding

Primera base del portal interno para guiar implementaciones de Apollo.

## Decisiones de esta versión

- Portal interno para consultores de Freelan.
- HubSpot como referencia ejecutiva mediante una cuenta global.
- El detalle operativo vive en el portal.
- Los DOCX se generan y descargan para que el usuario los cargue manualmente en HubSpot.
- La integración real de HubSpot y persistencia se implementarán detrás de esta interfaz, sin introducir sincronización bidireccional en la primera versión.

## Siguiente implementación

1. Autenticación y roles.
2. Persistencia de proyectos, etapas, pilares y decisiones.
3. Selector de Company mediante API de HubSpot.
4. Formularios guiados por etapa.
5. Generación DOCX y registro de enlaces/estado en HubSpot.
