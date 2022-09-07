const AdminBro = require("admin-bro");
const { ACTIONS } = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");

const express = require("express");
const router = express.Router();
const httpStatus = require("http-status");

const skillUser = require("../models/skills/skills.user.model");
const User = require("../models/user.model");
const domains = require("../models/skills/domains.model");
const domainRegistration = require("../models/skills/domainRegistration.model");

const admin = require("../helpers/firebase");
const validateUser = require("../middlewares/skills/validateUser.middleware");
const ApiError = require("../helpers/ApiError");
const { mongoose } = require("../../config/config");

// const creatLog = async()

// if (process.env.NODE_ENV == "production") {
//     ACTIONS.edit.after = createLog;
//     ACTIONS.delete.after = createLog;
//     ACTIONS.new.after = createLog;
//   }

 
  router.use(validateUser, (req, res, next) => {
    if (req.user.role == "admin") {
      return next();
    } else {
      next(new ApiError(httpStatus.FORBIDDEN, "Admin role required"));
    }
  });

// use mongoose in AdminBro

  const adminBro = (app, mongooseConnection) => {
    AdminBro.registerAdapter(AdminBroMongoose);
    const adminBroOptions = new AdminBro({
    database: [mongooseConnection],
    resources: [
      {
        resource: skillUser,
        options: {
            /*listProperties: [ "name", "role", "newsletterSubscription"],
            actions: {
                role: { isVisible: { list: false, filter: true, show: true, edit: true } */ 
                
                properties: {
                  role: { isVisible: { list: false, filter: true, show: true, edit: true }
                }
                
            },
      },
      domains, domainRegistration
    }],
    rootPath: "/admin",
    branding: {
        companyName: "Zairza",
        // logo: "",  URL
        softwareBrothers: false,
    }
});

    router = AdminBroExpress.buildRouter(adminBroOptions, router);
    app.use(adminBroOptions.options.rootPath, router);
}

module.exports = adminBro;
    //RUN App

