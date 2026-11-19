var e=`---
title: Diez preguntas para un proveedor de plataforma
description: En la demo todos funcionan bien. La diferencia aparece en la primera jornada cargada.
date: 2026-11-10
slug: diez-preguntas-para-un-proveedor-de-plataforma
key: provider-selection-questions
tags: elección de plataforma, integración, operación
---

La búsqueda de plataforma empieza igual en casi todos los equipos: tres o cuatro demos, pantallas
que se parecen, presentaciones que siguen el mismo orden. En la demo todo funciona. La diferencia
aparece en la primera jornada cargada después de salir a producción.

Las preguntas de abajo sirven para adelantar ese día. Ninguna tiene una única respuesta correcta;
lo que importa es que la respuesta sea concreta y pueda escribirse en un contrato.

## Lo que la demo no enseña

**1. ¿Cuánta gente usa esta pantalla a la vez?** Una demo va fina con un solo usuario. Pregunte
qué pasa cuando cuatro personas trabajan juntas la cola de aprobaciones y qué ve cada una cuando
dos abren el mismo registro.

**2. ¿Qué enseña la pantalla cuando algo falla?** Si un proveedor deja de responder: qué ve el
jugador, qué aviso sale en el back office, a quién se avisa. "Eso no pasa" no es una respuesta.

**3. ¿Qué caídas han tenido en los últimos seis meses?** Pida fechas, duración y qué se hizo. No
existe infraestructura sin caídas; existen proveedores que no saben contarlas.

## Dónde está el dinero

**4. ¿El saldo se guarda en un solo sitio?** Si el sportsbook y el casino van con monederos
separados, el jugador espera transferencias al cambiar de producto y usted cierra dos
conciliaciones cada noche. Un monedero común no es una frase de marketing: es una decisión
contable.

**5. ¿Cuánto tarda la conciliación de cierre y qué pasa si no cuadra?** No busca un sistema que
prometa que nunca habrá descuadre, sino uno que le enseñe el descuadre en minutos.

**6. ¿Quién puede ajustar un saldo a mano?** Quién da ese permiso, cuántas personas lo aprueban
y dónde queda el registro — por escrito.

## Quién aprueba qué

**7. ¿Los flujos de aprobación se configuran?** ¿Decide usted si una retirada por encima de un
umbral necesita segunda aprobación, o el umbral está fijo en el proveedor?

**8. ¿Un usuario puede aprobar su propia solicitud?** Si la respuesta es sí, será usted quien
tenga que explicarlo en una revisión de licencia.

## No un contrato: contratos

**9. ¿Puedo ver hoy la documentación de la API?** La documentación que se guarda en mitad del
proceso comercial también llegará tarde después de firmar. Mire cinco cosas: lista de endpoints,
códigos de error, seguridad ante reintentos (la misma petición nunca se procesa dos veces), firma
de webhooks y política de versiones.

Lo que marca la duración de una integración no es el número de endpoints, sino lo claros que
estén esos cinco puntos. [El montaje técnico está aquí](page:technology).

## La puerta de salida

**10. Si me voy, ¿cómo recupero mis datos?** Fichas de jugador, libro de transacciones y
registros de auditoría: en qué formato, en cuántos días, a qué coste. Preguntarlo en la primera
reunión parece feo. Firmar sin preguntarlo sale caro dos años después.

## Cómo usar la lista

No la convierta en una tabla de puntos. El objetivo no es ordenar proveedores, sino ver dónde no
obtuvo una respuesta clara. Si tres proveedores esquivan la misma pregunta, el problema no son
ellos: usted todavía no ha decidido dentro de casa qué riesgo está dispuesto a asumir.

Con las respuestas en la mano, ponga los dos temas que más le hicieron dudar al principio del
análisis técnico. Ahí es exactamente donde empieza el nuestro —
[con gusto sobre su propio montaje](page:demo).
`;export{e as default};