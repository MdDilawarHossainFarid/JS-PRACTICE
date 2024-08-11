    function genRandonString() {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()1234567890';
        var charLength = chars.length;
        var result = '';
        for ( var i = 0; i < 8; i++ ) {
           result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
     }

     var result = genRandonString();
     console.log(result)