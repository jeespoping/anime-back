"use strict";

/**
 * A set of functions called "actions" for `video`
 */

module.exports = {
  videoUrl: async (ctx, next) => {
    const { url } = ctx.params;
    const entry = await strapi.entityService.findMany("api::chapter.chapter", {
      fields: ["video"],
      filters: { url },
    });

    return entry[0];
  },
};
