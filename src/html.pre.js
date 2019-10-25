/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * The 'pre' function that is executed before the HTML is rendered
 * @param context The current payload (aka context) of processing pipeline
 * @param context.content The content
 */
function pre(context) {
  // eslint-disable-next-line no-param-reassign
  context.content.time = `${new Date()}`;
}

module.exports.pre = pre;
/*
module.exports.before = {
  esi: async (context, action) => {
    context.response.headers['Link'] = '</helix_logo.png>; rel=preload; as=image';
  }
};
*/
