
const data = ['cup','spoon','plate','saucer','caserole','napkin'];
data.forEach(console.log);

// cup 0 [ 'cup', 'spoon', 'plate', 'saucer', 'caserole', 'napkin' ]
// spoon 1 [ 'cup', 'spoon', 'plate', 'saucer', 'caserole', 'napkin' ]
// plate 2 [ 'cup', 'spoon', 'plate', 'saucer', 'caserole', 'napkin' ]
// saucer 3 [ 'cup', 'spoon', 'plate', 'saucer', 'caserole', 'napkin' ]
// caserole 4 [ 'cup', 'spoon', 'plate', 'saucer', 'caserole', 'napkin' ]
// napkin 5 [ 'cup', 'spoon', 'plate', 'saucer', 'caserole', 'napkin' ]

for(const item of data){
    console.log(item);
}

// cup
// spoon
// plate
// saucer
// caserole
// napkin

data.map(item =>{
     console.table(item.length);
});

// 3
// 5
// 5
// 6
// 8
// 6

for(const e in data){
    console.log(e);
}
//index position
// 0
// 1
// 2
// 3
// 4
// 5

const fruits = [
    { fruit : 'mangoes', cost : 30},
    { fruit : 'oranges', cost : 20},
    { fruit : 'bananas', cost : 40},
    { fruit : 'apples', cost : 100},
    { fruit : 'watermelons', cost : 120}
];

const cost = fruits.reduce( (acc, cur) =>{
    return acc + cur.cost;
},0);
console.log(cost);//310