'use strict';

$(document).ready(function () {
            // Put app logic here

            var block = null;

            function checkForWin(num) {
                
                var stack2 = $('[data-stack="2"]').children().length;
                var stack3 = $('[data-stack="3"]').children().length;
                
                if (stack2 === 4 || stack3 === 4) {
                    $('#announce-game-won').text('You Win!');
                }
            }

                $('[data-stack]').click(function () {
                        $('#announce-game-won').empty();

                        if (block === null) {
                            block = $(this).children().last();
                        } else {

                            var blockSize = Number(block.attr('data-block'));
                            var endSize = Number($(this).children().last().attr('data-block'));

                            console.log(block, $(this).children().last());
                            console.log(blockSize, endSize);

                            if (blockSize < endSize || !endSize) {
                                block.detach();
                                $(this).append(block);
                            } else {
                                $('#announce-game-won').text('Move Not Allowed');
                            }
                            block = null;
                            checkForWin();
                        }

                    })
                });
          
    
