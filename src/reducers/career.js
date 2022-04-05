import { JOB_LISTING, UPDATE_JOB } from "../actions/types"


const initialState = {
    jobListing: []
}

export default function(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case JOB_LISTING:
            return{...state,jobListing: payload}

        case UPDATE_JOB:
            const index = state.jobListing.findIndex(x => x.id === payload.id);
          
            // return { ...state, jobListing: [ ...state.jobListing.filter(p => p.id !== payload.id)] };
            return {
                ...state, 
                // ...payload,
                jobListing: state.jobListing.map(job => (job.id === payload.id) ? payload.res : job)
            }

            default:
                return state;  
    }
}


// export default function(state = initialState, action){
//     const {type, payload} = action

//     switch (type){
//         case JOB_DATA_FETCHED : 
//             localStorage.setItem("item", item)
//             return
//                 {    
//                     ...state,
//                     ...payload,
//                     // Salary: payload.Salary;
//                     // application_deadline: payload.application_deadline;
//                     // category: payload.category;
//                     // company_name: payload.company_name;
//                     // description: payload.description;
//                     // employment_status: payload.employment_status;
//                     // experience: payload.experience;
//                     // gender: payload.gender;
//                     // id: payload.id;
//                     // job_location: payload.job_location; 
//                     // published_on: payload.published_on;
//                     // payloadponsibilities: payload.responsibilities;
//                     // title: payload.title;
//                     // user: payload.user;
//                     // vacancy: payload.vacancy;
                  
                
//                 }

//         default:
//             return state;  

//     } 

// }

