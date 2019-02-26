const db = require('./core/db');
const Family = require('./models/family');
const familySvc = require('./services/family');
const VacationDestinations = require('./models/vacation-destinations');
const vacancyDestSvc = require('./services/vacation-destinations');

db.connect();

familySvc.getAll();

// const family = new Family({
//     lastName: "Volum",
//     parents: [{
//             firstName: "Thomas"
//         },
//         {
//             firstName: "Mary Kay"
//         }
//     ],
//     children: [{
//             firstName: "Ryan",
//             gender: "male",
//             grade: 8
//         },
//         {
//             firstName: "Patrick",
//             gender: "male",
//             grade: 7
//         }
//     ],
//     pets: [{
//         givenName: "Blackie"
//     }],
//     address: {
//         country: "USA",
//         state: "WA",
//         city: "Seattle"
//     }
// });

// familySvc.post(family);

// const vacaySpot = new VacationDestinations({
//     name: "Honolulu",
//     country: "USA"
// });

// vacancyDestSvc.post(vacaySpot);