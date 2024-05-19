// 1st Group 

function bold(){
    document.execCommand(`bold`, false, null);
    
}
function italic(){
    document.execCommand(`italic`, false, null);
    
}
function strikethrough(){
    document.execCommand(`strikethrough`, false, null);
    
}
function underline(){
    document.execCommand(`underline`, false, null);
    
}
function subscript(){
    document.execCommand(`subscript`, false, null);
    
}
function superscript(){
    document.execCommand(`superscript`, false, null);
}
// 2nd Group

function alignLeft(){
    document.execCommand(`justifyLeft`, false, null);
}

function alignCenter(){
    document.execCommand(`justifyCenter`, false, null);
}

function alignRight(){
    document.execCommand(`justifyRight`, false, null);
}

function alignJustify(){
    document.execCommand(`justifyFull`, false, null);
}

// 3rd Group 

function insertOrderedList(){
    document.execCommand(`insertOrderedList`, false, `OL`);
}

function insertUnorderedList(){
    document.execCommand(`insertUnorderedList`, false, `UL`);
}

function increase(){
    document.execCommand(`indent`, false, null);
}
function decrease(){
    document.execCommand(`outdent`, false, null);
}
function image(){
    document.execCommand(`insertImage`, false, 'https://source.unsplash.com/300x310?planet');
}