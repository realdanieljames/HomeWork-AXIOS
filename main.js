/********************************************************************
 * AFTER YOU GET YOUR DATA, LIMIT THE DATA TO THE FIRST 20 CHOICES: *
 *                 IF CORS IS 'YES' LOG DESCRIPTION                 *
 *                  IF CORS IS 'UNKNOWN' LOG LINK                   *
 ********************************************************************/
/*********************
 * ASYNC AWAIT AXIOS *
 *********************/



const axios = require('axios')
let url = 'https://api.publicapis.org/entries';


async function axiosGet(url) {

    const { data: { entries } } = await axios.get(url)


    entries.map((value, index, array) => {

        //change array length to 20 to show only the first 20 results
        array.length = 20
        if (value.Cors === 'yes') {
            console.log(value.Description)
        }
        if (value.Cors === 'unknown') {

            console.log(value.Link)
        }



    })

}

console.log(axiosGet(url))

//========================================================================================//
//========================================================================================//
/********************************************************************
 * AFTER YOU GET YOUR DATA, LIMIT THE DATA TO THE FIRST 20 CHOICES: *
 *                 IF CORS IS 'YES' LOG DESCRIPTION                 *
 *                  IF CORS IS 'UNKNOWN' LOG LINK                   *
 ********************************************************************/





let url = 'https://api.publicapis.org/entries';

function axiosPromise(url) {
    axios
        .get(url)
        .then(({ data: { entries } }) => {

            entries.map((value, index, array) => {
                array.length = 20
                if (value.Cors === 'yes') {
                    console.log(value.Description)
                }
                else if (value.Cors === 'unknown') {

                    console.log(value.Link)
                }
            })
            // console.log(entries)
        })


}

axiosPromise(url)



