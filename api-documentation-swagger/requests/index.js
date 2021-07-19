const postNewUser = require('../auth/post-new-user');
const postExistUser =require('../auth/post-user')
const postLogoutUser = require('../auth/delete-logout')
const postNewJob = require('../job/post-new-job');
const getAllJobs = require('../job/get-all-jobs')
const getAllMyJobs = require('../job/get-all-my-jobs')
const getSpecifiJobs = require('../job/get-specific-jobs')
const delJob = require('../job/del-my-job')
const updateJob = require('../job/updateJob')
const postGoogleUser = require('../google-auth/get-google-user')
const getLogoutUser = require('../google-auth/get-logout')
const putUserStatus = require('../auth/update-status')
module.exports = {
    paths:{
        '/api/user/login':{
            ...postExistUser,
        },
        '/api/user/register':{
            ...postNewUser,
        },
        '/api/user/logout':{
            ...postLogoutUser,
        },
        '/api/jobs/new/job':{
            ...postNewJob,
        },
        '/api/jobs/':{
            ...getAllJobs,
        },
        '/api/jobs/my-jobs/all':{
            ...getAllMyJobs,
        },
        '/api/jobs/specific' : {
           ...getSpecifiJobs 
        },
        '/api/jobs/my-jobs/delete/{id}' : {
            ...delJob
        },
        '/api/jobs/my-jobs/edit/{job_id}' : {
            ...updateJob
        },
        '/auth/google' : {
            ...postGoogleUser
        },
        '/auth/google/logout' : {
            ...getLogoutUser
        },
        '/auth/google/user/status' : {
            ...putUserStatus
        }
    }
}