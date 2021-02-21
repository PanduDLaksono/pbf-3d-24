function helloDeclaration() { 
    return "Hello from a function declaration";
    }
    
    var helloExpression;
    
    console.log(helloDeclaration());
    //helloDeclaration function is hoisted
    console.log(helloDeclaration());
    
    // Can't call function expression before its defined
    // Raises TypeError: helloExpression is not a function
    console.log(helloExpression());
    helloExpression = function() {
      return "Hello from a function expression";
    }
    console.log(helloExpression());