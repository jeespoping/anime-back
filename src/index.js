"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/video/:video", async (req, res) => {
  try {
    const { video } = req.params;
    const entries = await strapi.entityService.findMany(
      "api::chapter.chapter",
      {
        fields: ["video"],
        filters: { url: video },
      }
    );
    res.sendFile(entries[0].video, { root: "" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
