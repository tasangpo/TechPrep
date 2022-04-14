const locations = [
    {
        id: 3,
        name: 'Space A',
        type: "Space",
        parentId: 2
    },
    {
        id: 1,
        name: '14 E 47st',
        type: "Building",
        parentId: null
    },
    {
        id: 2,
        name: 'Floor 3',
        type: "Floor",
        parentId: 1
    },
    {
        id: 4,
        name: 'Space B',
        type: "Space",
        parentId: 2
    },
];



// Print out full names of each location in array. Result should look like :
// 14 E 47st, Floor 3, Space A
// 14 E 47st
// 14 E 47st, Floor 3
// 14 E 47st, Floor 3, Space B


const fullLocationNames = locations => {
    let locationObj = {};
    for (let location of locations) locationObj[location.id] = location;
    // console.log(locationObj);

    for (let location of locations) {
        let current = location;
        let sub = []
        while (current.parentId !== null) {
            sub.unshift(current.name);
            current = locationObj[current.parentId];
        }
        sub.unshift(current.name);
        console.log(sub.join(', '))
    }
};

console.log(fullLocationNames(locations))


// function locationFinder(locations) {
//     //for each record, we'll have to explore the parent until the parent ID === null
//     // along the way, we'll take the name from each of the nodes we pass through, and add it to a temp string.
//     //once parentId === null, we will return the tempString and push it into an array of strings;

//     const fullLocations = [];

//     for (const location of locations) {
//         // let tempString = "";
//         if (location.parentId !== null) {
//             fullLocations.push(location.name + ',' + locationHelper(locations, location.parentId))
//         } else {
//             fullLocations.push(location.name);
//         }

//     }

//     const reversed = fullLocations.map(strings => strings.split(",").reverse().join(", "))
//     return reversed;

// };

// function locationHelper(locations, nextId) {
//     if (nextId === null) return;;

//     for (const location of locations) {

//         if (location.id === nextId) {
//             if (location.parentId !== null) {
//                 return location.name + ', ' + locationHelper(locations, location.parentId)
//             } else if (location.parentId === null) {
//                 return [location.name]
//             }
//         }
//     }
// }

