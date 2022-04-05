function formatDate() {
    var date = new Date();
    var day = String(date.getDay()).padStart(2,0);
    var month = String(date.getMonth() + 1).padStart(2,0);
    var year = date.getFullYear();
    
    return `${day}.${month}.${year}`
} 


console.log(formatDate());