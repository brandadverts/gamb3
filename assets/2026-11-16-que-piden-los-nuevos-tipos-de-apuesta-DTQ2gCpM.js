var e=`---
title: Qué le piden los nuevos tipos de apuesta a tu plataforma
description: Bet builder, apuestas a jugadores, microapuestas. Cada tipo nuevo es un botón delante y una carga muy distinta detrás.
date: 2026-11-16
slug: que-piden-los-nuevos-tipos-de-apuesta
key: new-bet-types
tags: sportsbook, tipos de apuesta, riesgo
---

El gran cambio del sportsbook en estos años no es un deporte nuevo ni una liga nueva. Es la forma
de la apuesta. Ya no se apuesta solo a quién gana, sino a si un jugador pasa de 20 puntos, quién
saca el primer córner o cómo llega el siguiente punto.

Delante, es un botón más. Detrás, trabajo nuevo para cuotas, riesgo y liquidación.

## Bet builder y combinadas del mismo partido

Varias selecciones del mismo partido en un boleto ya se dan por hechas en muchos mercados. El
problema es sencillo: las selecciones no son independientes. «Gana el equipo» y «marca el
delantero» empujan en la misma dirección. Si multiplicas las cuotas sin tenerlo en cuenta, vendes
un precio equivocado en tu contra.

- **Cuotas con correlación.** O el proveedor del feed calcula la correlación, o defines por regla
  qué no se puede combinar. Sin ninguna de las dos, no se lanza.
- **Límites por boleto.** El riesgo se mide sobre la combinación entera.
- **Liquidación parcial.** Una selección se decide pronto y otra al final; pantalla y monedero
  tienen que reflejarlo bien.

## Apuestas a jugadores

Puntos, asistencias, tiros, tarjetas: mercados numerosos, con poca liquidez y sensibles a la
información. Una lesión a veces corre por redes antes de llegar a las cuotas.

- **Suspensión rápida.** Si un jugador sale de la alineación, todos sus mercados se cierran a la vez.
- **Margen y límites por mercado.** Usar los límites del mercado principal es dejar la puerta abierta.
- **Detección de patrones.** Boletos parecidos en el mismo mercado pequeño van a revisión.

## Microapuestas

Siguiente punto, siguiente tiro, siguiente jugada: el mercado vive segundos. Todo depende de la
latencia de los datos: la cuota debe estar en pantalla antes del hecho y no aceptarse después.

- **Presupuesto de latencia**, paso a paso, del feed a la aceptación, en milisegundos.
- **Liquidación automática**: nadie liquida a mano mercados de un segundo.
- **Volumen**: más boletos, importes menores; el reporting debe separarlo.

## La mecánica del casino llega al deporte

En ICE Barcelona 2026 varios proveedores mostraron productos que llevan la mecánica de los juegos
crash a la apuesta deportiva: sube un multiplicador y el jugador cobra cuando quiere. No está claro
que se queden. Lo que sí está claro es que compartir monedero, vista de jugador y reglas de riesgo
entre sportsbook y casino pesa cada año más.

## Cuáles activar

No hace falta lanzarlo todo el primer día. Tres preguntas:

1. ¿Veo el riesgo de este mercado **en tiempo real**?
2. Si está mal cotizado, ¿**en cuántos minutos** me entero?
3. ¿La liquidación es **automática** o le añade un turno a mi equipo?

Lanza lo que tenga tres respuestas claras. Cómo lo resuelve el módulo de sportsbook está en la
[página de productos](page:products).
`;export{e as default};