const capitalize = (str) => {
    str = str.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const setFilter = (query) => {
    const location = query.location
    const jobTitle = query.job_title
    
    const filter = {}
    if(location) {filter["location"] = capitalize(location)}
    if(jobTitle) {filter["job_title"] = capitalize(jobTitle)}

    return filter
}

module.exports = {
    setFilter
}