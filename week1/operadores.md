| Tipo              | Operador        | Descripción                                | Ejemplo                          |
|-------------------|-----------------|--------------------------------------------|----------------------------------|
| **Aritmético**    | `+`             | Suma                                       | `2 + 3` → `5`                    |
|                   | `-`             | Resta                                      | `5 - 2` → `3`                    |
|                   | `*`             | Multiplicación                             | `4 * 3` → `12`                   |
|                   | `/`             | División                                   | `10 / 2` → `5`                   |
|                   | `%`             | Módulo (resto)                             | `7 % 2` → `1`                    |
|                   | `**`            | Potencia                                   | `2 ** 3` → `8`                   |
|                   | `++`            | Incremento                                 | `x++` o `++x`                    |
|                   | `--`            | Decremento                                 | `x--` o `--x`                    |
| **Asignación**    | `=`             | Asignación                                 | `x = 10`                         |
|                   | `+=`            | Suma y asigna                              | `x += 5` → `x = x + 5`           |
|                   | `-=`            | Resta y asigna                             | `x -= 3` → `x = x - 3`           |
|                   | `*=`            | Multiplica y asigna                        | `x *= 2` → `x = x * 2`           |
|                   | `/=`            | Divide y asigna                            | `x /= 4` → `x = x / 4`           |
|                   | `%=`            | Módulo y asigna                            | `x %= 2`                         |
| **Comparación**   | `==`            | Igual (sin comparar tipo)                  | `5 == '5'` → `true`              |
|                   | `===`           | Igual (comparando tipo)                    | `5 === '5'` → `false`            |
|                   | `!=`            | Distinto (sin comparar tipo)               | `5 != '5'` → `false`             |
|                   | `!==`           | Distinto (comparando tipo)                 | `5 !== '5'` → `true`             |
|                   | `>`             | Mayor que                                  | `6 > 3` → `true`                 |
|                   | `<`             | Menor que                                  | `2 < 4` → `true`                 |
|                   | `>=`            | Mayor o igual                              | `4 >= 4` → `true`                |
|                   | `<=`            | Menor o igual                              | `3 <= 2` → `false`               |
| **Lógicos**       | `&&`            | AND (y lógico)                             | `true && false` → `false`        |
|                   | `\|\|`          | OR (o lógico)                              | `true \|\| false` → `true`       |
|                   | `!`             | NOT (negación)                             | `!true` → `false`                |
|                   | `??`            | Nullish coalescing (null o undefined)      | `null ?? 'default'` → `'default'`|
| **Ternario**      | `? :`           | Condición en una línea                     | `edad >= 18 ? 'Sí' : 'No'`       |

