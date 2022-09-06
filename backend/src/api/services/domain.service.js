const httpStatus = require("http-status");
const domain = require("../models/skills/domains.model.js");
const ApiError = require("../helpers/ApiError");


const createDomains = async (domainData)=>{

    const domainInDB = await domain.findOne({name:{'$regex': domainData.name,$options:'i'}});
    
    if (domainInDB) {
		throw new ApiError(httpStatus.UNAUTHORIZED, "Domain Already Exists");
	}
    
    const newDomain = await domain.create({domainData});

    return newDomain;

};


const updateDomain = async (domainData) =>{

    const domainInDB = await domain.findOne({name:{'$regex': domainData.name,$options:'i'}});
  
    if (!domainInDB) {
		throw new ApiError(httpStatus.UNAUTHORIZED, "Domain does not exists");
	}

    //help required here


};


const readDomainData = async (domainReq) =>{

    const domainInDB = await domain.findOne({name:{'$regex':domainReq,$options:'i'}});

    if (!domainInDB) {
		throw new ApiError(httpStatus.UNAUTHORIZED, "Domain does not exists");
	}
    
    return domainInDB;
    

};


module.exports ={ createDomains, updateDomain, readDomainData}
