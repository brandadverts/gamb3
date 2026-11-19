var e=`---
title: Los primeros 30 días de una migración de plataforma
description: La mayoría de las migraciones se retrasan por motivos que no son técnicos: el orden del trabajo.
date: 2026-11-16
slug: los-primeros-30-dias-de-una-migracion
key: migration-first-30-days
tags: migración, datos, operación
---

Llevar una operación en marcha a una infraestructura nueva es más difícil que montarla desde
cero. Montando desde cero solo se mira hacia delante. En una migración hay que mirar también
hacia atrás: a los saldos, a los boletos abiertos y a las retiradas a medio tramitar que se
llevan consigo.

Los treinta días que siguen no son un compromiso de calendario, sino un marco sobre el orden del
trabajo. La duración real depende del número de integraciones, del volumen de datos y de lo que
exija la licencia.

## Semana 1 — Inventario

En la primera semana no se escribe código. Se escribe qué se mueve.

- ¿Cuántas fichas de jugador hay, cuántas verificadas del todo, cuántas restringidas?
- Boletos abiertos, retiradas pendientes, bonos con apuesta en curso: ¿qué pasa con cada cosa en
  el momento del cambio?
- ¿Qué contratos de proveedor existen y cuáles siguen en la plataforma nueva?
- ¿Qué informes van a quién? La mayoría no los lee nadie. Una migración es buen momento para
  retirarlos.

El resultado cabe en una sola tabla: se mueve, se rehace, se deja.

## Semana 2 — Ensayo de datos

Los datos se ensayan al menos dos veces antes de salir. Un ensayo no es "hemos copiado": es
comparar la copia con el sistema antiguo registro a registro.

Tres cosas:

1. **Suma de saldos.** ¿El total del sistema antiguo cuadra al céntimo con el nuevo?
2. **Número de registros.** ¿Cuadran jugadores, transacciones y registros de auditoría?
3. **Casos límite.** Saldos negativos, cuentas cerradas, duplicados, verificaciones a medias:
   ¿qué les pasa al moverse?

Encontrar un descuadre en el ensayo es una buena noticia. La mala sería encontrarlo en
producción.

## Semana 3 — Marcha en paralelo

La plataforma nueva se levanta mientras la antigua sigue sirviendo. El equipo de operación ensaya
casos reales en las pantallas nuevas: aprobar una retirada, montar un bono, cerrar un expediente.
No es una semana de formación; la formación es el subproducto del ensayo.

Esa misma semana se escriben los pasos de vuelta atrás. "Si algo sale mal, volvemos" no es un
plan. El plan es: a partir de qué umbral, quién decide, qué se apaga y en qué orden, de dónde
vuelven los datos. Un plan de vuelta atrás que no está escrito no existe.

## Semana 4 — Abrir tráfico

El tráfico no se abre de golpe. Primero el equipo interno, luego un grupo pequeño de jugadores,
luego un mercado, luego el resto. En cada paso se miran los mismos cuatro números: descuadre de
saldo, tasa de error, volumen de tickets y tasa de aprobación de pagos.

El error más común el día de la apertura es cambiar de plataforma y enchufar un proveedor nuevo
a la vez. Cuando algo se rompe no se sabe cuál de los dos fue. Los cambios de proveedor esperan
al menos dos semanas después de la migración.

## Día treinta

Lo que debe tener al final del día treinta es más que una plataforma en producción: una
conciliación cerrada, un equipo formado, un plan de vuelta atrás por escrito y la lista de lo
que queda en el sistema antiguo. El sistema antiguo no se apaga enseguida: los registros de
auditoría y los plazos de conservación lo mantienen legible un tiempo.

La pregunta más útil al planificar es esta: *si este paso sale mal, ¿en cuántos minutos nos
enteramos?* Todo paso sin respuesta vuelve al plan.

Si quiere levantar el inventario de su propia migración,
[montamos una sesión con el equipo técnico](page:demo).
`;export{e as default};