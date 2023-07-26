function GetRandom(arr)
{
    var selected = []

    var index = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
    
    selected.push(arr[index]);
    
    do
    {
        var index = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
    }
    while(selected.includes(arr[index]))
    
    selected.push(arr[index]);
    
    document.writeln("[" + selected + "]");
}

var arr = ["Ahmed" , "Sara" , "Mohamed" , "Ali", "Fatma" , "Islam" , "Sandra"]

GetRandom(arr);