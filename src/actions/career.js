import { JOB_POSTED, JOB_LISTING, UPDATE_JOB } from "./types";

// Salary: "",
// application_deadline: "",
// category: null,
// company_name: "",
// description: "",
// employment_status: "",
// experience: "",
// gender: "",
// id: null,
// job_location: "",
// published_on: "",
// responsibilities: "",
// title: "",
// user: null,
// vacancy: "",

export const setJobList = (res) => dispatch => {
    dispatch({
        type: JOB_LISTING,
        payload: res
    })
}

export const updateIndividualJob = (res, id) => dispatch => {
    dispatch({
        type: UPDATE_JOB,
        payload: 
        {
            res,
            id
        }
    })
}



// export const setJobData = (res) => dispatch => {
//     dispatch({
//         type: JOB_DATA_FETCHED,
//         payload : {
//             title:res,
//             Salary: res.Salary, 
//             application_deadline: res.application_deadline,
//             category: res.category,
//             company_name: res.company_name,
//             description: res.description,
//             employment_status: res.employment_status,
//             experience: res.experience,
//             gender: res.gender,
//             id: res.id,
//             job_location: res.job_location, 
//             published_on: res.published_on,
//             responsibilities: res.responsibilities,
//             title: res.title,
//             user: res.user,
//             vacancy: res.vacancy
//         }
//     })
// }