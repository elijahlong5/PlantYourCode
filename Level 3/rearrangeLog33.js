/**
 * You've been recording logs of your plants speaking in
 * the following format grid location, message, count.
 * Write a function that takes in a string from your log
 * and properly rearranges so that the count is first,
 * followed by the message, then the grid location.
 *
 * @param {string} log - A string of a log in your journal
 * @return {string} - New rearranged string
 */

function rearrangeLog(log) {
    /* Enter your solution here! */
    let logArr = log.split(" ");
    let gridLoc = logArr[0];
    let message = logArr.splice(1, (logArr.length-2)).join(' ');
    let count = logArr.splice(logArr.length-1, logArr.length);
    let rearranged = [count, message, gridLoc];
    return rearranged.join(' ');
}

console.log(rearrangeLog("3-2 tomato: hungry i am [43]"));
