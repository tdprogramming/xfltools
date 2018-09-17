/**
 * Generated by Apache Royale Compiler from org\apache\royale\debugging\throwError.as
 * org.apache.royale.debugging.throwError
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.debugging.throwError');
/* Royale Dependency List: goog.DEBUG*/




/**
 * assert throws an error if the condition is not met.
 * @export
 * @param {string} errorMessage
 */
org.apache.royale.debugging.throwError = function(errorMessage) {
  
  if (goog.DEBUG) {
    throw new Error(errorMessage);
  }
}