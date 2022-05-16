# CLASE 01 | INTRO TO CS

**********************************************************************

# **INTRO TO CS**

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

    # CLASE 02 | JS AVANZADO I

**********************************************************************

# **JAVASCRIPT AVANZADO I**

- **SINGLE THREADED Y SINCRÓNICO**
    
    Un **thread** (o hilo de ejecución) es la secuencia de instrucciones más pequeña que puede ser manejada por un *planificador de recursos* (se encarga de repartir el tiempo disponible de los recursos del sistema entre todos los procesos).
    
    JavaScript es **Single Threaded** y **Sincrónico**, es decir que sólo puede hacer un sólo comando o instrucción en cada momento y que lo hace en orden, empieza la instrucción siguiente cuando termina la anterior.
    
- **SYNTAX PARSER**
    
    Lee el código línea por línea y determina lo que hace cada parte. También chequea si la gramática es correcta o no. El ***Syntax Parser*** es el intérprete entre tu código y la computadora. Traduce tu código a un lenguaje que la máquina puede entender.
    
- **LEXICAL ENVIROMENT**
    
    El ***Lexical Environment*** tiene que ver con *dónde* están declarados ciertos statements o expresiones en tu código. No será lo mismo hacerlo en un lugar que en otro.
    
    ```jsx
    function hola() {
    	var foo = "Hola!";
    }
    var bar = "chao!";
    ```
    
    Por ejemplo, para el interprete las dos declaraciones de variable del arriba tendrán signicados muy distintos. Si bien la operación es igual en los dos (asignación) al estar en lugares distintos (una dentro de una función y la otra no) el interprete las parseará de forma distinta.
    
    - **GLOBAL ENVIROMENT**
        
        El **Global Enviroment** es la ventana “padre” del código. El la parte más externa, la que envuelve a todo el código. Dentro de este contexto podremos encontrar otros contextos.
        
- **EXECUTION CONTEXT**
    
    El contexto de ejecución contiene información sobre **QUÉ** código se está ejecutando en cada momento. Esto se da en las *functions*.
    
    ```jsx
    var sayHello = "Hola Mundo!";           //GLOBAL CONTEXT
    
    function persona() {                    //EXECUTION CONTEXT
    	var first = "Maico";
    	var last = "Rosa";
    
    	function firstName() {                //EXECUTION CONTEXT
    		return first;
    	}
    
    	function lastName() {                 //EXECUTION CONTEXT
    		return last;
    	}
    }
    ```
    
    Dentro del ***Execution Context*** existen distintos elementos. Estos son
    
          **Código  |  Global Object  |  ‘This’  |  Outer Enviroment**
    
- **HOISTING**
    
    ***Hoisting*** es un comportamiento de JavaScript en el que “mueve las declaraciones al principio”.
    
    Lo que sucede aquí es que antes de ejecutar el código, JavaScript le da una primera lectura para “tomar nota” de todas las variables (**var, —let y const NO—**) y todas las functiones (**function**) que tenga el código en su contexto global. Así podrá tener una referencia de la memoria a utilizar.
    
    ```jsx
    bar();
    console.log(foo);
    
    var foo = "Hola, me declaro";
    function bar() {
    	console.log("Soy una función");
    }
    ```
    
    En el ejemplo de arriba, estamos ejecutando una función y una línea de texto antes de declarar cualquiera de las dos. Cuando se realiza la etapa de ***hoisting*** se distingue una variable (foo) y una función (bar). Aquí las moverá al principio.
    
    ```jsx
    //var foo = undefined;
    //function bar() {
    //	console.log("Soy una función");
    //}
    
    bar();
    console.log(foo);
    
    var foo = "Hola, me declaro";
    function bar() {
    	console.log("Soy una función");
    }
    ```
    
    Todas las variables declaradas no estarán definidas en el hoisting. Las funciones declaradas como variables tampoco. Solo las funciones declaradas como *statement* serán reconocidas como una función completa.
    
- **CREACIÓN Y EJECUCIÓN**
    
    Cuando el intérprete inicia el corrido del código entra en *execution context* e inicia dos etapas. La primera (**creation phase**) y la segunda (**execution phase**). En la ***creation phase*** suceden varios procesos. Los dos más importantes son el *hoisting* y la creación del nuevo entorno. En la ***execution phase*** se ejecuta el código.
    
    - **EXECUTION STACK**
        
        El ***execution stack***, se produce el fenómeno de “pila” o “last in first out”. 
        
        - **GLOBAL OBJECT**
            
            El ***Objeto Global*** es creado en la primera fase de creación del **global enviroment**. A este objeto le asigna la variable **This.** En Google Chrome, la palabra *window* es el objeto global, y *this* es su referencia. Este objeto proporciona variables y funciones que están disponibles en cualquier lugar.
            
        
        En el primer recorrido del código se crea un **Global Execution Context**. Aquí se comenzaran a hacer la etapa de creación y la de ejecución.
        
        ```jsx
        function b() {
        	console.log("B!");
        }
        
        function a() {
        	b();
        }
        
        a();
        ```
        
        En este ejemplo vemos que primero entramos en fase de creación. Cuando se produce el *hoisting* se encuentran dos funciones definidas. Luego se crea el primer entorno que es el global. Aquí entramos a la segunda etapa que es de ejecución. Se ejecutará el código, y su primera movilización es la ejecución de la función A.
        
        Como el intérprete se encuentra con una función que se quiere ejecutar, inicia el ***execution context*** de A(). Comienza la etapa de creación y *hoisting*. Como dentro de la función no hay variables u otras funciones, el hoisting queda nulo. Aquí crea el entorno de A(). Posteriormente, se ejecuta el código, ejecutando a su vez la función B().
        
        Aquí se repite el proceso. Primero se hace un *hoisting* que queda nulo, luego se crea el entorno, y finalmente se ejecuta la función.
        
        Es importante señalar que el entorno de A() se cerrará sólo cuando se finalize el entorno y ejecución de la función B(). Posteriormente que finaliza el entorno de A() se finaliza el código y termina con el contexto global.
        
- **COMENTARIOS SOBRE LOS CONTEXTOS**
    
    Los contextos o *enviroments* del bloque global y de cada función mantienen una relación unilateral, donde las *inner functions* podrán tomar variables externas, pero no así al revez.
    
    ```jsx
    var foo = "Hola amigos";
    
    function persona() {
    	var saludo = "Qué tal muchachos";
    }
    
    function otraPersona() {
    	var saludo = "Qué tal muchachos";
    ```
    
    En este caso, nosotros podremos utilizar la variable **foo** en el contexto global y en las funciones. Pero las variables **saludo** solo pueden utilizarse en su función propia. Cabe destacar que, aunque ambas variables se llamen igual y tengan el mismo valor, no se pisaran y ambas son completamente diferentes, ya que están en contextos distintos. Es decir, si yo cambiara la variable **saludo** de alguna de las dos funciones, esta no cambiaría en la otra.
    
- **RECORRIDO POR ENTORNOS**
    
    Si recorremos el siguiente código la terminal mostraría lo siguiente.
    
    ```jsx
    var global = 'Hola!';
     
    function a() {
      console.log(global); 
      global = 'Hello!';
    }
     
    function b(){
      var global = 'Chao'; 
      console.log(global);
    }
     
    a();                          // 'Hola!'
    b();                          // 'Chao'
    console.log(global);          // 'Hello'
    ```
    
- **SCOPE**
    
    El **Scope** de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que **Scope** es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.
    
    Cada contexto maneja sus propias variables, y son independientes de los demás. Justamente por eso, podemos usar los mismos nombres de variables dentro de funciones que creamos sin que *pisen* las demás.
    
    También sabemos que podemos acceder a una variable declarada en el contexto global dentro de una función. Esto se debe a que JavaScript primero busca una variable dentro del contexto que se está ejecutando, si no la encuentra ahí, usa la referencia al `outer context` para buscarla dentro de ese contexto.
    
    ```jsx
    var global = 'Hola!';
     
    function b(){
      var global = 'Chao'; 
      console.log(global); // Chao
      function a() {
        // como no hay una variable llamada global en este contexto,
        // busca en el outer que es scope de b;
        console.log(global); //Chao 
        global = 'Hello!'; // cambia la variable del contexto de b()
      }   
      a();
    }
     
    //a(); Ya no puedo llamar a a desde el scope global, acá no existe.
    b();
    console.log(global); // 'Hola!
    ```
    
    La variable `global` está definida en dos `scopes` distintos, uno es el `scope global` y el otro es el `scope` de la función `b`, esto quiere decir que, a pesar de tener el mismo nombre, estas dos variables son distintas.
    
    Si el intérprete llega el scope Global sin encontrar la variable, entonces va a tirar un error.
    
- **TIPOS DE DATOS**
    
    Existen dos tipos de lenguajes en programación. Los de tipado **dinámico** y los de tipado **estático**. JavaScript es de tipado dinámico. En este lenguaje no es necesario declarar el tipo de dato cuando creamos una variable. En el tipado estático, como en JAVA, cuando creamos una variable tendremos que definir qué tipo de dato será, y eso no se podrá cambiar.
    
    **DATOS PRIMITIVOS: *string***, ***boolean***, ***null***, ***undefined***, ***number***, ***objeto***.
    
    - **OPERADORES**
        
        Todos los operadores son funciones simples. El intérprete tomará el miembro de la izquierda y el de la derecha, y realizara la operación.
        
        El operador **+** tiene una exclusión. Para que opere como una suma, los datos de los lados deben ser ambos números. En el caso de que alguno sea otro tipo de dato (**string**, por ejemplo), el operador concatenará ambas variables.
        
    - **PRECEDENCIA Y ASOCIACIÓN**
        
        La ***precedencia de operadores*** es el orden en que se van a llamar las funciones de los operadores. O sea que si tenemos más de un operador, el intérprete va a llamar al operador de mayor precedencia primero y después va a seguir con los demás.
        
        La ***asociatividad de operadores*** es el orden en el que se ejecutan los operadores cuando tienen la misma precedencia, es decir, de izquierda a derecha o de derecha a izquierda.
        
        ```jsx
        3 + 4 * 5
        //23
        ```
        
        Para resolver esa expresión y saber qué resultado nos va a mostrar el intérprete deberíamos conocer en qué orden ejecuta las operaciones. La multiplicación tiene mayor precedencia que la suma. Por lo tanto el intérprete primero va a ejecutar la multiplicación y luego la suma con el resultado de lo anterior
        
        ```jsx
        	 let a = 1;
        	 let b = 2;
         	 let c = 3;
        	
        	 a = b = c
        // 3 = 3 = 3
        ```
        
        Aquí la precedencia es la misma, por lo que recurrimos a la asociación. En este caso ocurre de derecha a izquierda(←). Por lo que primero **b** obtendrá el valor de **c**, y luego **a** obtendrá el valor de **b**.
        
        [**Tabla de igualdades**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#a_model_for_understanding_equality_comparisons)
        
        ```jsx
        6 / "3"                                     //2
        "2" * "3"                                   //6
        4 + 5 + "px"                                //9px
        "$" + 4 + 5                                 //$45
        "4" - 2                                     //2
        "4px" - 2                                   //NaN
        7 / 0                                       //Infinity
        {}[0]                                       //undefined
        parseInt("09")                              //9
        5 && 2                                      //2
        2 && 5                                      //5
        5 || 0                                      //5
        0 || 5                                      //5
        [3]+[3]-[10]                                //23
        3>2>1                                       //false
        [] == ![]                                   //true
        true                                        //1
        false                                       //0
        ```
        
    - **FUNCIONES**
        
        En JavaScript, las funciones son de tipo `first class`. Esto quiere decir que las funciones pueden ser tratadas igual que cualquier otro tipo de valor. Es decir, que podemos pasar una función como argumento, podemos asignar una función a una variable, podemos guardarla en un arreglo, etc..
        
        Las funciones en JavaScript son un tipo especial de objetos. Este objeto, además de poder tener cualquier propiedades adentro (como cualquier objeto) tiene dos propiedades especiales: la primera es el nombre (`**name**`), que contiene el nombre de la función, esta propiedad es opcional ( funciones anónimas ). La segunda propiedad se llama `**code`** (código) y en ella se guarda el código que escribiste para la función.
        
    - **EXPRESIÓN Y STATEMENT**
        
        Una ***Expresión*** es una unidad de código que evalúa a un valor. Por ejemplo, `a = 3`, es una expresión que devuelve el número `3`. `1 + 2` también es una expresión que retorna `3`.
        
        Los ***Statements***, no producen un valor directamente, si no que *hacen algo*, generalmente tienen adentro expresiones. Según el statement que usemos vamos a tener un comportamiento distinto, ejemplos de statements son `if`, `while`, `for`, etc...
        
        Respecto a las ***funciones***, también existen de dos tipos.
        
        ```jsx
        // FUNCTION STATEMENT
        function saludo(){
          console.log('hola');
        }
         
        // FUNCTION EXPRESSION
        var saludo = function(){
          console.log('Hola!');
        }
        ```
        
- **VALOR Y REFERENCIA**
    
    ```jsx
    var a = 3;
    var b = 5;
    		a = b
    //  5 = 5
    
    b = 324
    a = 5
    ```
    
    En este caso estamos pasando variables por **valor**. Al comienzo **a** y **b** son distintas. Luego **a** se hace “***fotocopia***” de **b** y adquiere su valor. Si luego cambiamos el valor de **b**, el valor de **a** se seguirá manteniendo igual, ya que mantiene independencia. Las variables que se pasan por valor son los *datos primitivos*.
    
    ```jsx
    var obj = {Nombre: "Alejo", Apellido: "Bengo"};
    var newObj = obj;
    
    obj.Edad = 21;
    //obj = {Nombre: "Alejo", Apellido: "Bengo", Edad: 21}
    
    <newObj>
    {Nombre: "Alejo", Apellido: "Bengo", Edad: 21};
    ```
    
    Cuando pasamos objetos, arreglos o funciones en variables lo haremos por **referencia**. En ese caso hay un “***reflejo***” de los cambios que hagamos en cualquiera de las variables. En el ejemplo primero creamos un objeto, y luego definimos un nuevo objeto que es igual al primero. Cuando al primero le agregamos la propiedad *Edad*, esta se agregará automáticamente a la segunda.
    
- **THIS**
    
    Cuando se crea el `execution context`, el interprete reserva el espacio de memoria para las variables (hoisting), guarda la referencia al `outer enviroment` y además “setea” la variable `this`. Esta variable va a apuntar a distintos objetos dependiendo en cómo fue invocada la función.
    
    - **GLOBAL CONTEXT**
        
        Este es el caso cuando ejecutamos código en el contexto global (afuera de cualquier función). En este caso `this` hace referencia al objeto `global`, en el caso del browser hace referencia a `window`.
        
    - **FUNTION CONTEXT**
        
        Cuando estamos dentro de una función, el valor de `this` va a depender de cómo sea invocada la función.
        
        - **SIMPLE CALL**
            
            En este caso, el interprete le da a `this` una referencia al objeto `global`.
            
            ```jsx
            function a() {
            	function b() {
            		return this;
            	}
            	return b();
            }
            console.log(a());
            ```
            
        - **MÉTODO DE UN OBJETO**
            
            Si tenemos una función como propiedad de un objeto, la palabra clave **this** va a hacer referencia al objeto.
            
            ```jsx
            //--------------EJEMPLO 1---------------
            var o = {  prop: 37, f: function() {return this.prop;}  };
            console.log(o.f()); // logs 37
            // this hace referencia a `o`
            
            //--------------EJEMPLO 2---------------
            var o = {prop: 37};
            // declaramos la función
            function loguea() {return this.prop;}
            //agregamos la función como método del objeto `o`
            o.f = loguea;
            console.log(o.f()); // logs 37
            // el resultado es le mismo!
            ```
            
- **EVENT LOOP**
    
    **setTimeout()** es una función integrada en Javascript que nos permitirá retrasar el proceso de una función. Existe un espacio llamado “***Web Apis***” en el que es enviado el proceso de esta función. De esta forma JavaScript puede seguir procesando el código sin perder el tiempo en esa función.
    
    Hay que destacar que, una vez enviado el **setTimeout** al **Web Apis**, JavaScript procesará el resto del código, y sólo recibirá el proceso terminado del Web Apis una vez terminada la lectura del código.
    
    Una vez que el **setTimeout** se terminó de procesar en el Web Apis, pasará al **Callback Queue**. Aquí serán enviados todos los procesos que JavaScript deriva, y como dijimos, una vez que el intérprete termina de leer el código, recién ahí serán reintegrados al **Call Stack**.
    
    ```jsx
    function saludarMasTarde(){
    var saludo = 'Hola';
    setTimeout( function(){
    console.log(saludo);
    },3000)
    };
    saludarMasTarde();
    ```
    
    En este **[ejemplo](http://latentflip.com/loupe/?code=CgpmdW5jdGlvbiBzYWx1ZGFyTWFzVGFyZGUoKXsKCXZhciBzYWx1ZG8gPSAnSG9sYSc7CgoJc2V0VGltZW91dCggZnVuY3Rpb24oKXsKCQljb25zb2xlLmxvZyhzYWx1ZG8pOwoJfSwzMDAwKQp9OwoKc2FsdWRhck1hc1RhcmRlKCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)**, el proceso es el siguiente. Primero se ejecuta la función **saludarMasTarde**, y luego, cuando se ejecuta el **setTimeout**, se lo envía al Web Apis. Cuando termina de procesarse y de transcurrirse el tiempo, se lo envía a el **Callback Queue**. Durante todo este tiempo, JavaScript sigue ejecutando el código hasta terminarlo. Una vez terminado, recibe la función del Callback Queue.


    # CLASE 03 | JS AVANZADO II

**********************************************************************

# **JAVASCRIPT AVANZADO II**

- **CLOSURES**
    
    Un ***Closure*** es una función que retorna otra función.
    
    ```jsx
    function saludar( saludo ){
    	return function( nombre ){
    		console.log(saludo + ' ' + nombre);
    	}
    }
    var saludarHola = saludar('Hola'); // Esto devuelve una función
    saludarHola('Toni'); // 'Hola Toni'
    ```
    
    En este ejemplo podemos ver que hay una función “*padre*” y una función “*hija*”. El parámetro de la función padre la definimos en una variable que ejecuta a la función padre.
    
    Luego de terminar de ejecutar y retornar una función (la que estamos guardando en `saludarHola`), ese contexto es destruido. ¿Pero qué pasa con la variable **saludo**?. Bueno, el interprete saca el contexto del stack, pero deja en algún lugar de memoria las variables que se usaron adentro (hay un proceso dentro de JavaScript que se llama `garbage collection` que eventualmente las va limpiando si no las usamos. ). Por lo tanto, esa variable todavía va a estar en la memoria.
    
    ```jsx
    var creaFuncion = function(){
    	var arreglo = [];
    	for ( var i = 0; i < 3; i++){
    		arreglo.push(function(){console.log(i);})
    	}
    	return arreglo;
    }
    
    var arr = creaFuncion();
    arr[0]() // 3
    arr[1]() // 3
    ```
    
    En este ejemplo, se crea una función **creaFuncion** en la cual se declara un *arreglo* vacío y un *bucle for*. En cada iteración del bucle se pushea una nueva función al arreglo que consologea el índice **i** de esa iteración. Finalmente retorna el arreglo. Luego se crea una variable **arr** que ejecuta la función padre.
    
    Entonces, cuando imprimimos **arr[0]()** se ejecutará la primera función del arreglo, lo que debería mostrar el índice **0**. En este caso no lo hace porque la variable **i** en el *bucle for* fue definida con **var**.
    
    ```jsx
    var creaFuncion = function(){
    	var arreglo = [];
    	for ( let i=0; i < 3; i++){
    		arreglo.push(function(){console.log(i);})
    	}
    	return arreglo;
    }
    
    var arr = creaFuncion();
    arr[0]() // 0
    arr[1]() // 1
    ```
    
    En este caso si se imprimen los índices correspondientes porque declaramos la variable **i** con **let**.
    
    A continuación veremos otra forma de hacer lo mismo.
    
    ```jsx
    var creaFuncion = function(){
    	var arreglo = [];
    	for ( var i=0; i < 3; i++){
    		// IIFE
    		arreglo.push((function(j){return function() {console.log(j);}}(i)))
    	}
    	return arreglo;
    }
    
    var arr = creaFuncion();
    arr[0]() // 0
    arr[1]() // 1
    arr[2]() // 2
    ```
    
    Si queremos que cada función guardase el valor de `i`, deberíamos crear un *execution content* donde se cree una variable nueva en cada iteración. Para eso vamos a usar una IIFE a la cuál le vamos a pasar como parámetro `i`. Como estamos ejecutando la función, se va a a crear un contexto nuevo por cada ejecución, y por ende van a existir tres variables `j` (cada una en un contexto distinto) que contendrán los valores recibidos por parámetro.
    
    ```jsx
    function hacerSaludo( lenguaje ){
    	if ( lenguaje === 'en'){
    		return function(){console.log('Hi!');}
    	}
    
    	if ( lenguaje === 'es'){
    		return function(){console.log('Hola!');}
    	}
    }
    
    var saludoIngles = hacerSaludo('en');
    var saludoEspaniol = hacerSaludo('es');
    
    saludoIngles()
    saludoEspaniol()
    ```
    
    Este caso es igual al anterior, solo que se agrega un condicional dentro de la función padre. Por lo que ahora puede ejecutar, la misma función, una u otra función hija, dependiendo del parámetro.
    
- **BIND, CALL & APPLY**
    
    Estos son métodos nativos de JavaScript.
    
    - **.BIND()**
        
        Este método sirve para direccionar la palabra clave **this**. Crea una nueva función, que cuando es llamada, asigna a su operador *this* el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.
        
        ```jsx
        var persona = {nombre: 'Guille', apellido: 'Aszyn',}
        
        var logNombre = function(){console.log(this.nombre);}
        
        var logNombrePersona = logNombre.bind(persona);
        // el primer parametro de bind es el this!
        logNombrePersona();
        // BIND DEVUELVE UNA FUNCION!
        ```
        
        Si nosotros queremos ejecutar directamente la función **logNombre()** la terminal nos arrojaría *undefined*. Esto es porque esta función está declarada en el contexto global, y allí no hay ninguna variable llamada *nombre*. Por lo tanto, creamos una nueva variable que contiene una copia de esa función y le agregamos el método **.bind()** con el nombre del objeto al que queremos hacer referencia (*persona*). Así, **this** sabrá que tiene que ir a ese objeto.
        
        ```jsx
        function multiplica(a, b){
        	return a * b;
        }
        var multiplicaPorDos = multiplica.bind(this, 2);
        
        console.log(multiplica(5));
        // 2 * 5 ---> 10
        ```
        
        En este caso, también se puede utilizar el método **.bind()** pero con la diferencia que **this** no tendrá ningún uso. Para hardcodear los parámetros de la función **multiplica**, hay que crear una nueva variable, la cual también contenga una copia de la función original. A esta se le agrega el método, y en el argumento ***siempre*** se pone primero el **this**, porque el método funciona así. Los siguientes parámetros del método son los que reemplazaran a los parámetros de la función. Es importante destacar que se reemplazarán en orden de sucesión.
        
    - **.CALL()**
        
        El método **call** es muy parecido al **bind** con la diferencia que este directamente invoca a la función y le pasa el valor de **this**.
        
        ```jsx
        var persona = {nombre: 'Guille', apellido: 'Aszyn',}
        var logNombre = function(){console.log(this.nombre);}
        
        logNombre.call(persona);
        ```
        
        Aquí, el método **call** se asegura de que la palabra **this** sea reemplazada por la palabra *persona *****que es el nombre del objeto al que queremos hacer referencia.
        
        ```jsx
        var persona = {nombre: 'Guille', apellido: 'Aszyn',}
        
        var logNombre = function(arg1, arg2){
        	console.log(arg1 +' '+ this.nombre +' '+ arg2);}
        
        logNombre.call(persona, 'Hola', ', Cómo estas?');
        ```
        
        De la misma forma que en *bind*, podemos hardcodear parámetros cuando se trata de funciones. Por ejemplo, aquí el método **call** recibe primero (***siempre***) el nombre del objeto al que queremos que **this** refiera. Luego, podremos agregar parámetros que reemplazarán a los de la función.
        
    - **.APPLY()**
        
        **Call** y **Apply** son iguales. La única diferencia es en cómo reciben sus parámetros. 
        
        ```jsx
        var logNombre = function(arg1, arg2){
        	console.log(arg1 +' '+ this.nombre +' '+ arg2);
        }
        logNombre.apply(persona, ['Hola', 'Cómo estas?']);
        ```
        
        El primer parámetro es el objeto al que **this** debe referirse. El segundo parámetro siempre es una arreglo, dentro del cuál pondremos los valores que queramos que la función tome como parámetros.


        # CLASE 04 | ESTRUCTURA DE DATOS I

**********************************************************************

# **ESTRUCTURA DE DATOS I**

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
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f792df2-323b-48fb-8f61-aa406a1a810d/Untitled.png)
    
    - **ARRAY**
        
        Los **arreglos** son una estructura nativa de JavaScript en la que se ordena una serie de elementos entre corchetes y separados por comas
        
        ```jsx
        ARRAY = ["Hola", 245, false, 325, "Ejemplos"]
        ```
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da3054e0-bb28-4ba2-a801-60fab254c9ea/Untitled.png)
        
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


        # CLASE 05 | **ESTRUCTURA DE DATOS II**

**********************************************************************

# **ESTRUCTURA DE DATOS II**

- **LISTAS ENLAZADAS**
    
    Las ***listas enlazadas*** son otro tipo de estructura de datos. Son una secuencia de *nodos* enlazados que contienen información. Cada *nodo*, además de tener datos, también tiene *links* con otros *nodos*. Según la cantidad de restricciones que tengan los links, estas pueden ser ***simplemente enlazadas***, ***dobles*** o ***múltiples***. Hay que destacar que estas listas no son estructuras nativas de JavaScript.
    
    A diferencia de los *arrays*, en lo que podemos acceder a cualquiera de los valores por separado, en las listas enlazadas tendremos que recorrer toda la lista para llegar a la información que queremos.
    
    ```jsx
    function Node(data) {
    	this.data = data;
    	this.next = null;
    }
    
    function List() {
    	this._length = 0;
    	this.head = null;
    }
    ```
    
    - **UNDERSCORE (dato curioso)**
        
        > **._length:** se utiliza el underscore como convensión social para señalar como privado el atributo de una clase. Es decir, que no se pueda acceder desde afuera de la clase.
        > 
    
    Como base crearemos dos clases. Una clase **Node**, con los atributos **data** y **next**, y otra clase **List**, con los atributos **length** y **head**.
    
    En las listas podremos iterar, y agregar y eliminar elementos al comienzo, al medio y al final.
    
    ```jsx
    /*function Node(data) {
    		this.data = data;
    		this.next = null;
    	}
    
    	function List() {
    		this._length = 0;
    		this.head = null;
    	}*/                     
    
    //MÉTODO PARA AGREGAR ELEMENTOS AL FINAL DE LA LISTA
    List.prototype.add = function(data) {
    	var node = new Node(data);     //node = {data: data, next: null}
    	var current = this.head;
    	if (!current) {
    		this.head = node;
    		this._length++;
    		return node;
    	}
    	while (current.next) {
    		current = current.next;
    	}
    	current.next = node;
    	this._length++;
    	return node;
    };
    ```
    
    Luego de crear las clases **Node** y **List**, haremos un método para la clase ***List*** a partir de su *prototype*. En este caso, como buscamos agregar elementos al final de la lista, el método se llamará **add**.
    
    Al comienzo establecemos dos variables; **node**, que creará un nuevo nodo con datos, y **current**, que será una referencia al primer nodo de la lista.
    
    Luego hacemos un condicional que, en caso de que no exista ningún nodo en nuestra lista, se encargará de crear el primero.
    
    Después del condicional hay un ciclio *while*. En su argumento encontramos la variable **current**, que apunta al primer nodo. Utilizamos su propiedad **.next** para saber si existe un nodo luego del primero. De esta forma podremos recorrer toda la lista. Cuando el ciclo *while* termine, será porque estamos parados en un nodo que no tiene otro posterior.
    
    Es aquí cuando se crea un nodo posterior al que estamos parados.
    
    ```jsx
    //MÉTODO PARA IMPRIMIR LA DATA DE CADA NODO
    List.prototype.getAll = function(){
    	var current = this.head;
    	if(!current){
    		console.log('La lista esta vacia!');
    		return;
    	}
    
    	while(current){
    		console.log(current.data);
    		current = current.next;
    	}
    
    	return;
    };
    ```
    
    Aquí le creamos un nuevo método a nuestra lista; **getAll**.
    
    En primera instancia, en el método se declara la variable **current = this.head**. Aquí entramos a un condicional que, en caso de no existir ningún elemento en nuestra lista, nos imprimirá “*La lista está vacía!*”. 
    
    En caso de que no esté vacía, hará un recorrido con el ciclo *while*. Cada vez que pase por un nodo, imprimirá la data que este tenga adentro. Cuando lleguemos al último nodo, el ciclo *while* se terminará.
    
- **HASH TABLE**
    
    Las **Hash Tables** son estructuras de datos que te permiten crear una lista de valores en par-clave. De este modo podremos retornar un valor a partir de su “contraseña” que tendremos de antemano. En otras palabras, una **Hash Function** le asignará un valor único a una variable, para que podamos obtenerla más tarde. (Esto está asociado a la encriptación).


    # CLASE 06 | **ESTRUCTURA DE DATOS III**

**********************************************************************

# **ESTRUCTURA DE DATOS III**

- **ÁRBOLES**
    
    Existen muchos tipos de árboles. Nos vamos a detener en los **Árboles Binarios**.
    
    Los **Árboles** son listas simplemente enlazadas, con la diferencia que pueden conectar con ningún, 1 o 2 nodos.
    
    **Nodo padre/Nodo raíz:** es el primer nodo que se crea.
    
    **Nodo hijo:** hace referencia a los nodos que descienden de otros.
    
    **Nodos hermanos:** son aquellos que están en el mismo nivel.
    
    **Nodo hoja:** son los nodos que no tienen hijos.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/124f5721-b21f-4878-8192-385add401eaa/Untitled.png)
    
    Dentro de los *árboles binarios* también existen muchos otros tipos de árboles. Nosotros vamos a ver los **Árboles Binarios de Búsqueda**.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/348ef353-d020-4f08-aee5-d9298683160e/Untitled.png)
    
    Este tipo de árbol tiene una diferencia con los árboles binarios normales. Esa diferencia es que estos están ordenados.
    
    La forma de orden de un *árbol binario de búsqueda* es que, del lado izquierdo van a tener siempre un valor de referencia menor, y del lado derecho un valor mayor. En la imagen, por ejemplo, vemos que empieza con el número **15**. A su izquierda hay un número menor, y a su derecha uno mayor. A su vez, los *nodos hijos* cumplen con la misma regla. Y así sucesivamente.
    
    - **AVL**
        
        A su vez, dentro de los *árboles binarios de búsqueda*, existen los **árboles avl**. Estos árboles son auto-balanceados.
        
        Que un árbol sea balanceado quiere decir que, entre los nodos de mayor nivel, difieren entre 0 y 1 nivel con otras ramificaciones.
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84ae635d-ae49-4c6e-bad7-ce167cd9ecf6/Untitled.gif)
        
        El de la izquierda es **no balanceado**. El de la derecha es **balanceado**.
        
    - **MAX HEAP**
        
        Estos árboles tienen la particularidad de que los valores se distribuyen de arriba (mayores) hacia abajo (menores).
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/95c73869-725c-4958-adff-c7baf6e7da6a/Untitled.png)
        
        En el caso de que esto fuera al revez (que los números menores van de arriba hacia abajo), este árbol se llamaría **MIN HEAP**.
        
- **RECORRIDOS**
    
    Estos recorridos se aplican para cualquier tipo de árbol.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7970072-f6a8-4cf8-beea-5cccacc9e245/Untitled.png)
    
    - **BREADTH FIRST SEARCH (BFS)**
        
        En este recorrido se imprime de izquierda a derecha y de arriba a abajo.
        
    - **DEPTH FIRST SEARCH Inorder (DFS)**
        
        En este caso, el algoritmo buscará el nodo que esté más a la izquierda de todos. Luego, busca a su padre, y posteriormente al hermano de la derecha.
        
    - **DEPTH FIRST SEARCH Preorder (DFS)**
        
        En este caso, el algoritmo imprimirá cada nodo por el que pase. El recorrido es de arriba-abajo, priorizando la ramificación izquierda. Una vez que no hay un nodo hijo a la izquierda, vuelve un nodo y va para la derecha.
        
    - **DEPTH FIRST SEARCH  Postorder (DFS)**
    
    Este algoritmo recorre de abajo-arriba. Primero imprimirá el nodo izquierdo, luego el derecho, y finalmente al padre.


    # CLASE 07 | ALGORTIMOS I

# **ALGORITMOS I**

- **ALGORITMO**
    
    Un ***algoritmo*** es un conjunto prescrito de instrucciones o reglas bien definidas, ordenadas y finitas que permite realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad. O sea, una serie de pasos a seguir para completar una tarea.
    
    Los ***algoritmos*** deben tener una serie de características:
    
    **Resuelve un problema**: este es el objetivo principal del algoritmo, fue diseñado para eso. Si no cumple el objetivo, no sirve para nada.
    
    **Debe ser comprensible:** el mejor algoritmo del mundo no te va a servir si es demasiado complicado de implementar.
    
    **Hacerlo eficientemente:** no sólo queremos tener la respuesta perfecta (o la más cercana), si no que también queremos que lo haga usando la menor cantidad de recursos posibles.
    
- **¿CÓMO MEDIMOS LA EFICIENCIA?**
    
    **Tiempo:** no depende solamente de que el algoritmo sea eficiente. También depende de la computadora que usemos, el procesador, la consola, etc.
    
    **Espacio:** espacio de memoria que requiere.
    
    **Otros Recursos:** red, gráficos, hardware, etc.
    
- **COMPLEJIDAD**
    
    **¿Por qué es importante medir la complejidad de un algoritmo?**
    
    Primero, porque nos permite ***predecir su comportamiento***. Si estamos en frente de un algoritmo muy complejo, puede que ocupe todo el procesador de nuestra PC y esta se rompa.
    
    Segundo, porque nos permite ***compararlo***. Si podemos saber objetivamente qué tan complejo es, cuando lo comparemos con otros podremos ver cuál es más eficiente.
    
    ```jsx
    [1, 2, 3, 4, 5, 6, 7, 8, **9**, 10]
    				                ^^^
    
    E1 O(N)        E2 LOG(N)
    1              5 //es + o - que 5? -----------  +
    2              8 //es + o - que 8? -----------  +
    3              9 :D
    4
    5
    6
    7
    8
    9:D
    ```
    
    Este es un ejemplo de dos algoritmos (uno eficiente y otro ineficiente) que buscan un número entre muchos.
    
    ```jsx
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    function sumArray(array, n) {
    	for(let i = 0; i < array.length; i++) {
    		for(let j = 0; j < array.length; j++) {
    			if(array[i] + array[j] === n) {return true;}    // 100 operaciones
    		}
    	}
    console.log("No existe");                             // 1 operación
    return false;                                         // 1 operación
    }
    ```
    
    En este ejemplo vemos que se hace un *ciclo for* anidado a partir de un arreglo de 10 elementos. Si vamos al peor de los casos (en el que ninguna suma de dos elementos sea igual a **n**), el algoritmo tendrá que hacer 100 operaciones. Y, además, tendrá que hacer dos más, por las otras ejecuciones.
    
    Cuando medimos la eficiencia tenemos que tener en cuenta siempre el peor de los casos (en el que el algoritmo haga la mayor cantidad de operaciones. En este caso, el algoritmo haría **102 operaciones**, es decir, **O(n^2) + 2**. Pero cuando hacemos mediciones de eficiencia, no tendremos en cuenta los valores constantes, ya que a la hora del resultado, **100 operaciones** o **102** no será una diferencia significativa. Por lo que quedaría **O(n^2)**.
    
    ```jsx
    function(arr) {
    	console.log("Hola");   // 1 operación
    	console.log("Chau");   // 1 operación
    	let acu = 2 + 3;       // 1 operación
    	return array[0];       // 1 operación
    }
    ```
    
    En este caso, indistintamente de la longitud del arreglo que pasemos por parámetro, este algoritmo siempre hará 4 operaciones. Ni más ni menos. A esto se lo conoce como **O(1)**, que es el mejor de los casos en el rendimiento de un algoritmo.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd89fd0d-d355-4cca-8b3d-4e0421c77de8/Untitled.png)
    
- **ALGORITMOS DE ORDENAMIENTO I**
    - **BUBBLE SORT**
        
        Este algoritmo se encarga de ordenar los elementos de una lista.
        
        [1.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a078980c-ae23-4c4b-9e5c-b1eb74ebe82b/1.mp4)
        
    - **INSERTION SORT**
        
        [2.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1591d161-b75c-42ff-a893-610b88ef6335/2.mp4)
        
    - **SELECTION SORT**
        
        [3.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de556d5d-93b9-4417-a9c1-e943e9081d7e/3.mp4)


# CLASE 08 | ALGORITMOS II

**********************************************************************

# **ALGORITMOS II**

- **ALGORITMOS DE ORDENAMIENTO II**
    - **QUICK SORT**
        
        Elegir un elemento de la lista de elementos a ordenar, al que llamaremos pivot.
        
        Mover los demás elementos de la lista a cada lado del pivot, de manera que a un lado queden todos los menores que él, y al otro los mayores. Los elementos iguales al pivot pueden ser colocados tanto a su derecha como a su izquierda, dependiendo de la implementación deseada. En este momento, el pivot ocupa exactamente el lugar que le corresponderá en la lista ordenada.
        
        La lista queda separada en dos sub-listas, una formada por los elementos a la izquierda del pivot, y otra por los elementos a su derecha.
        
        Repetir este proceso de forma recursiva para cada sub-lista mientras éstas contengan más de un elemento. Una vez terminado este proceso todos los elementos estarán ordenados.
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e0ddc88-9efa-4ee5-8e47-31002e4eb687/Untitled.png)
        
    - **MERGE SORT**
        
        Divide el conjunto en dos grupos iguales. Ordena recursivamente los dos grupos. Junta los grupos ordenados.
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72006d84-a5a2-4e25-9460-c4be013754a9/Untitled.png)