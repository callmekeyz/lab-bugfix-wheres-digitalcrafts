# Where's DigitalCrafts?

This program displays the states which have cities named "Atlanta", "Houston", "Tampa".

# Bugs to fix

- [ ] After lots of debugging, code stopped running. `node index.js` does nothing
- [ ] Started crashing after adding "tampa" search
- [ ] Prints "Atlanta" locations twice (instead of Houston)

For each bug you fix, add documentation to this README about how you fixed it (include before/after code samples).

 const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }

    I changed the const because all three were the same. Also this code called Atlanta instead of Houston.

    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let ht of statesWithAHouston) {
        console.log(ht);
    };

     const statesWithATampa = statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (st of statesWithATampa) {
        console.log(st);
    }

}
The const for Tampa was missing a db before stateswithcity and the let on line 29.

const statesWithATampa = db.statesWithCity('tampa');
    console.log('\n\nThere is a Tampa in these states:')
    for (let ta of statesWithATampa) {
        console.log(ta);
    };

    
// main();
Main was commented out so I uncommented it.
# For the more curious:

`db.js` includes more functions that you can try out. In `index.js`, try to `console.log()` the results of the following function calls:

- `getByAbbreviation('ak')`
- `searchByName('dakota')`
  - Why does this only return results for North Dakota (and not South Dakota)?

