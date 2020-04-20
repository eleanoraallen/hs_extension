$('.o_chat-log span').each(function(index) {
    var current_text = $( this ).text();
    var text = current_text;

    if (/^ARADIA:/.test(text) || /^[FP]?AA:/.test(text)) {
        text = text.replace(/0(?=[A-Z0])/g, 'O');
        text = text.replace(/([A-Z0])0/g, '$1O');
        // avoid affecting 0_0
        text = text.replace(/0(?=[a-z])/g, 'o');
        text = text.replace(/([a-z])0/g, '$1o');
    }

    if (/^TAVROS:/.test(text) || /^[FP]?AT:/.test(text)) {
        text = text.toUpperCase();
    }

    if (/^SOLLUX:/.test(text) || /^[FP]?TA:/.test(text)) {
        text = text.replace(/2(?=[A-Z])/g, 'S');
        text = text.replace(/([A-Z])2/g, '$1S');
        text = text.replace(/2/g, 's');
        text = text.replace(/(i)i/gi, '$1');
        text = text.replace(/two/g, 'to');
        text = text.replace(/TWO/g, 'TO');
        // for halfdead & blind sollux
        text = text.replace(/0(?=[A-Z0])/g, 'O');
        text = text.replace(/([A-Z0])0/g, '$1O');
        text = text.replace(/0(?=[a-z])/g, 'o');
        text = text.replace(/([a-z])0/g, '$1o');
    }

    if (/^NEPETA:/.test(text) || /^[FP]?AC:/.test(text)) {
        text = text.replace(/33(?=[A-Z])/g, 'EE');
        text = text.replace(/([A-Z])33/g, '$1EE');
        text = text.replace(/33/g, 'ee');
    }


    if (/^TEREZI:/.test(text) || /^[FP]?GC:/.test(text)) {
        text = text.replace(/4/g, 'A');
        text = text.replace(/1/g, 'I');
        text = text.replace(/3/g, 'E');
    }

    if (/^EQUIUS:/.test(text) || /^[FP]?CT:/.test(text)) {
        text = text.replace(/100/g, 'loo');
        text = text.replace(/001/g, 'ool');
        text = text.replace(/%/g, 'x');
    }

    if (/^GAMZEE:/.test(text) || /^[FP]?TC:/.test(text)) {
        if (/[A-Z][a-z]/.test(text)) {
            text = text.toLowerCase()
        }
    }

    if (/^ERIDAN:/.test(text) || /^[FP]?CA:/.test(text)) {
        text = text.replace(/(w|v)\1/gi, '$1');
        text = text.replace(/([a-z])in\b/g, '$1ing');
        text = text.replace(/([A-Z])IN\b/g, '$1ING');
    }

    if (/^FEFERI:/.test(text) || /^[FP]?CC:/.test(text)) {
        text = text.replace(/-+E/g, 'E');
        text = text.replace(/\)\((?=[A-Z])/g, 'H');
        text = text.replace(/([A-Z])\)\(/g, '$1H');
        text = text.replace(/\)\(/g, 'h');
    }


    if (/^ERISOLSPRITE:/.test(text)) {
        text = text.replace(/2(?=[A-Z])/g, 'S');
        text = text.replace(/([A-Z])2/g, '$1S');
        text = text.replace(/2/g, 's');
        text = text.replace(/(i|w|v)\1/gi, '$1');
        text = text.replace(/two/g, 'to');
        text = text.replace(/TWO/g, 'TO');
        text = text.replace(/([a-z])in\b/g, '$1ing');
        text = text.replace(/([A-Z])IN\b/g, '$1ING');
    }

    if (text != current_text) {
        $( this ).data('original-text', current_text);
        $( this ).text(text);
        $( this ).click(function() {
            var text = $( this ).text()
            $( this ).text( $( this ).data('original-text') );
            $( this ).data('original-text', text);
        });
    }
});