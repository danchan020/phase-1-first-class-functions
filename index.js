function receivesAFunction(cb){
    return cb();
}

const returnsANamedFunction = () => {
     const callback = function(){
     }
     return callback;
   // return receivesAFunction
}
    

const returnsAnAnonymousFunction = () => function(){};



