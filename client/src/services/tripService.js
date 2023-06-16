// const url = "http://localhost:3333"

// export async function getUserTrips() {
//     try {
//         const res = await fetch(url + '/trips')
//         const json = await res.json()
//         console.log('GET REQUEST SUCCESSFUL')
//         return json
//     } catch (error) {
//         console.log(error, 'GET REQUEST NOT SUCCESSFUL')
//         return error
//     }
// }

// export async function postUserTrip(newUserTrip) {
//     try {
//         const response = await fetch(url + '/trips', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newUserTrip)
//         });
//         const res = await response.json()
//         console.log(res)
//         return res
//     } catch (error) {
//         console.log(error, 'NOT POSTED')
//         return error
//     }
// }

// export async function editUserTrip() {

// }
