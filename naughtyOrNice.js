var i, y;
function getNiceNames(people){
    var nicePeople = [];
    for(i = 0, y = people.length; i < y; i++ ){
        if(people[i].wasNice === true){
            nicePeople.push(people[i].name);
        }
    }
  return nicePeople;
}

function getNaughtyNames(people){
  var nicePeople = [];
  for(i = 0, y = people.length; i < y; i++ ){
        if(people[i].wasNice === false){
            naughtyPeople.push(people[i].name);
        }
    }
  return naughtyPeople;
}

alert(getNiceNames([
    {name:'Jonathan', wasNice:true},
    {name: 'Bayan', wasNice:false},
    {name: 'Barak', wasNice:true},
    {name: 'Mdr', wasNice:true},
    {name:'Arvin', wasNice:false}
             ]));

alert(getNaughtyNames([
    {name:'Jonathan', wasNice:true},
    {name: 'Bayan', wasNice:false},
    {name: 'Barak', wasNice:true},
    {name: 'Mdr', wasNice:true},
    {name:'Arvin', wasNice:false}
             ]));

alert(getNiceNames([]));

 