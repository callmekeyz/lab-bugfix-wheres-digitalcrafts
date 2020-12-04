const db = require('./db');

function main() {

    const statesWithAnAtlanta = db.statesWithCity('atlanta');
    console.log('\n\nThere is an Atlanta in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    };

    console.log('\n\n============================');
};
    
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let ht of statesWithAHouston) {
        console.log(ht);
    };
    
    console.log('\n\n============================');
    
    const statesWithATampa = db.statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (let ta of statesWithATampa) {
        console.log(ta);
    };


main();
