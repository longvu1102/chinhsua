function gethah(cousre){
    return {
        id : cousre.id,
        name: `Khoa hoc : ${cousre.name}`

    }
}

var cousre = [
    {
        id : 1,
        name : 'javahaha'
    },
    {
        id :2 ,
        name : 'java'
    }
]
var newCousre = cousre.map(gethah);


console.log(newCousre);

