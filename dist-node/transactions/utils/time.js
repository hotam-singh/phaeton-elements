'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeWithOffset = exports.getTimeFromBlockchainEpoch = undefined;

var _phaetonConstants = require('../../phaeton-constants');

var getTimeFromBlockchainEpoch = exports.getTimeFromBlockchainEpoch = function getTimeFromBlockchainEpoch(givenTimestamp) {
  var startingPoint = givenTimestamp || new Date().getTime();
  var blockchainInitialTime = _phaetonConstants.EPOCH_TIME_MILLISECONDS;
  return Math.floor((startingPoint - blockchainInitialTime) / 1000);
}; /*
    * Copyright © 2018 Phaeton Foundation
    *
    * See the LICENSE file at the top-level directory of this distribution
    * for licensing information.
    *
    * Unless otherwise agreed in a custom licensing agreement with the Phaeton Foundation,
    * no part of this software, including this file, may be copied, modified,
    * propagated, or distributed except according to the terms contained in the
    * LICENSE file.
    *
    * Removal or modification of this copyright notice is prohibited.
    *
    */

var getTimeWithOffset = exports.getTimeWithOffset = function getTimeWithOffset(offset) {
  var now = new Date().getTime();
  var timeWithOffset = offset ? now + offset * 1000 : now;
  return getTimeFromBlockchainEpoch(timeWithOffset);
};
