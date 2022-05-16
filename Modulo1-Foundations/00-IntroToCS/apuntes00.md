<h1 align="center">INTRO TO CS</h1>   
<h4 align="left">Por Daniel Calderon</h4>

----

# **Operadores Lógicos**

```jsx
  A    B            AND         OR        XOR
  0    0             0          0          0
  1    0             0          1          1
  0    1             0          1          1
  1    1             1          1          0
```

AND es un aditivo. Es decir, necesita que todas las condiciones sean true para ser true.

OR es diferenciador. Con tal que una sola de las condiciones sea true, este será true.

XOR es un “or” pero exclusivo, en el que si todas las condiciones son true, entonces este será false.

---

- **SUMA DE NÚMEROS BINARIOS**
    
    ```jsx
    19 + 24 = 43           
                            
    19 --> 10011              
    24 --> 11000     
    43 --> ¿?     
    ```
    
    Para sumar números binarios tendremos que hacer dos preguntas con operadores lógicos. Primero con **AND** y luego con **XOR**. Posicionaremos los números que se quieren sumar uno arriba del otro. 
    
    ```jsx
      110011               Se recorre de derecha a izquierda, con el número superior y el 
      011000           inferior.
    -----------            Primero se opera con AND. Esto nos dirá si nos tenemos que llevar
      101011           una o no. Si el resultado es 1, nos llevamos una. Si es 0 no.  
                           Luego se opera con XOR. El número que nos de (1 o 0) será el que 
    43 --> 101011      va debajo como resultado.
    ```
    

---

- **DE BINARIO A DECIMAL**
    
    Supongamos que tenemos el número 43 (101011). Para pasarlo de binario a decimal seguiremos los siguientes pasos.
    
    ```jsx
    Primero, enumeraremos las posiciones de los números, empezando desde el 0, y de derecha
    a izquierda.
    
    **Número Binario** ----------> 101011
    **Posición** ----------------> 543210
    ```
    
    Luego haremos la siguiente operación. Elevaremos el número 2 a cada posición. Luego lo multiplicaremos por el número binario de la posición. Finalmente sumaremos todos.
    
    ```jsx
    (2^0)*1 + (2^1)*1 + (2^2)*0 + (2^3)*1 + (2^4)*0 + (2^5)*1
       1    +    2    +    0    +    8    +    0    +   32  -------> 43
    ```
    

---

- **DE DECIMAL A BINARIO**
    
    Para pasar de decimal a binario haremos el proceso inverso.
    
    Iremos dividiendo nuestro número por 2, y anotaremos el resto a un costado. Esto se repite hasta que el número se reduzca a 1/2.
    
    ```jsx
    43 / 2 = 21     | 1
    21 / 2 = 10     | 1
    10 / 2 = 5      | 0
    5 / 2 = 2       | 1
    2 / 2 = 1       | 0
    1 / 2 = 0       | 1
    
    En el siguiente paso anotaremos el listado de los restos, pero en reverso.
    101011 -------> 43
    ```