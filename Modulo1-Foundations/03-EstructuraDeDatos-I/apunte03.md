<h1 align="center">ESTRUCTURA DE DATOS I</h1>   
<h4 align="left">Por Daniel Calderon</h4>

----

- **RECURSIVIDAD**
    
    La ***Recursión*** consiste en una función que se llamará a sí misma.
    
    Las características de una función recursiva son:
    
    **Primero:** la función debe tener una (o más) sentencia base.
    **Segundo:** que la función se llame a sí misma.
    **Tercero:** el argumento cuando la función se vuelve a invocar debe ser distinto del argumento de la función padre.
    
    ```jsx
    /*Consideremos que los números naturales son todos aquellos números positivos
    incluido el 0*/
    
    function esNatural(num) {
    	if(num === 0) {return true;}
    	if(num < 0) {return false;}
    	return esNatural(num - 1);
    }
    ```
    
    En este ejemplo podemos tomar como primer valor de **num** al número 2 (**num = 2**).
    
    Como **2** es mayor y distinto de 0, la función se retornará a sí misma, pero con un valor de *num* un número más bajo.
    
    Ahora, se volverá a ejecutar la función pero con **num = 1**. Como este sigue siendo mayor y distinto de 0, la función se volverá a ejecutar.
    
    Ahora, **num = 0**. Cómo ahora se cumple el primer condicional (sentencia base), se ejecutará el **return true** y la función terminará ahí.
    
    ```jsx
    /*El factorial de un número (x!) es la multiplicación de el mismo con sus precedentes
    hasta el 1.
    !4 = 4 * 3 * 2 * 1*/
    
    function factorial(x) {
    	if(x > -1 && x < 2) {return 1;}
    	if(x < 0) {return 0;}
    	return x * factorial(x - 1);
    }
    ```
    
    En esta situación sucede algo similar a lo anterior. Vemos que aquí tenemos dos sentencias base, y luego la recursión. Supongamos que **x = 3**. Como ninguna de las sentencias se cumple se cumplirá con la recursión. En este caso será **3 * factorial(2)**. Cuando se vuelva a ejecutar la función con **num = 2**, ninguna de las sentencias se cumplirá, por lo que volverá la recursión. Quedará **3 * 2 * factorial(1)**. Aquí la función terminará ya que se cumple con una de las sentencias base y retornará el número **1**. Por lo que, en definitiva, el resultado de la función será: **3 * 2 * 1** o **3!**.
    
- **ESTRUCTURA DE DATOS**
    
    Tenemos distintos tipos de estructuras de datos.
    
    ![Untitled](/Modulo1-Foundations/_src/apuntes/EstructurasDeDatosI.png)
    
    - **ARRAY**
        
        Los **arreglos** son una estructura nativa de JavaScript en la que se ordena una serie de elementos entre corchetes y separados por comas
        
        ```jsx
        ARRAY = ["Hola", 245, false, 325, "Ejemplos"]
        ```
        
        ![Untitled](/Modulo1-Foundations/_src/apuntes/EstructurasDeDatosI-arrays.png)
        
        Cada elemento de un arreglo tiene una dirección a al que el intérprete accede directamente. Se pueden agregar y sacar elementos al comienzo y al final del arreglo.
        
    - **SET**
        
        Los **Sets** son similares a los arreglos con la diferencia que no tienen elementos repetidos.
        
        ```jsx
        var arr = [1, 2, 5, 4, 7, 7, 2, 4, 6];
        
        var comp = new set(arr);
        //[1, 2, 5, 4, 7, 6]
        ```
        
        Al ser una estructura de datos distinta a los *arrays* también tiene métodos distintos. Por ejemplo:
        
        ```jsx
        var arr = [1, 2, 5, 4, 7, 7, 2, 4, 6];
        
        var comp = new set(arr);
        //[1, 2, 5, 4, 7, 6]
        
        comp.add("Hola");
        //[1, 2, 5, 4, 7, 6, "Hola"]
        
        //Para agregar un elemento en los *arrays* se usa el método **.push()**.
        ```
        
    - **STACKS (PILAS)**
        
        Dentro del ***Stack*** se cumple **Last in - First Out**. Es decir, el último en entrar es el primero en salir, como en una pila de platos. Podemos ver esto en el *Stack Execution* o en el *Stack Queue*, por ejemplo.
        
        Los ***Stacks*** no son estructuras nativas de JavaScript. Es decir, no existe una sintaxis específica para declararlos. Es por esto que manipulamos *arrays* para poder crear un stack.
        
        ```jsx
        var stack = ["Plato 1", "Plato 2", "Plato 3"];
        
        stack.push("Plato 4");
        stack.pop()   //"Plato 4"
        ```
        
        En este ejemplo vemos que el único uso que se le da a ese array es el de agregar o sacar elementos del final. Es por esto que se comporta como un ***Stack***.
        
        Si queremos crear una *clase* para iniciar stacks, tendría la siguiente disposición:
        
        ```jsx
        class Stack {
        	constructor() {
        		this.stack = [];
        	}
        
        	add(element) {
        		this.stack.push(element);
        		return this.stack;
        	}
        
        	remove() {this.stack.pop();}
        
        	size() {return this.stack.length;}
        }
        ```
        
    - **QUEUE**
        
        Las filas cumplen con la condición **First in - First Out**, como en una fila para entrar a un lugar. Las ***Queue*** tampoco son nativas de JavaScript, por lo que también tendremos que simularlas con los *arrays*.
        
        ```jsx
        var queue = ["Persona 1", "Persona 2", "Persona 3"];
        
        queue.push("Persona 4");
        queue.shift()  //"Persona 1"
        ```
        
        En este ejemplo vemos que el elemento se agrega al final de la cola, pero los elementos se retiran por el comienzo.
        
        Si queremos crear una clase de ***Queue***, se dispondría de la siguiente manera.
        
        ```jsx
        class Queue {
        	constructor() {
        		this.queue = [];
        	}
        
        	enqueue(element) {
        		this.queue.push(element);
        		return this.queue;
        	}
        
        	dequeue() {this.queue.shift();}
        	
        	size() {return this.queue.length;}
        }
        ```