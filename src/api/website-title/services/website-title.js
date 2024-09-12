'use strict';

/**
 * website-title service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-title.website-title');
