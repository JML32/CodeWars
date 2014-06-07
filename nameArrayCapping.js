/** 
Create a method that accepts an array of names, and returns an array of each name capitalized

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

**/

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function capMe(names) {
    var name;
    for(var i = 0, y = names.length; i < y; i++){
        name = names[i];
        name = capitalise(name);
        names[i] = name;
    }
    return names;
}