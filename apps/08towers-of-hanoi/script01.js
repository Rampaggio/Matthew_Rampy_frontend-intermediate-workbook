'use strict';

$(document).ready(function() {
  // Put app logic here
  
     var block = null;
     
     //function checkForWin() {
         
     
    $('[data-stack]').click(function() {
        
        if(block === null) {
            block = $(this).children().last().detach();
        } 
        else{
           
            var blockSize = block.attr('data-block');
            var endSize = $(this).children().last().attr('data-block');
            
            //$('div')
            //.attr()
            //.addClass()
            
            console.log(block, $(this).children().last());
            console.log(blockSize, endSize);
            
            if (blockSize < endSize || endSize === undefined) {
                $(this).append(block);
                block = null;
            }
            else {
                $('#announce-game-won').text('Move Not Allowed');
                block = null;
            }
        }
            
        
       // var stackSize = $(this).children()('[data-block]');
        
       // var stack
    })    
});
         