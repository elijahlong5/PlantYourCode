/**
 * We have a root structure in the form of a binary tree where
* a value of 0 is unhealthy and 1 is healthy. A null value
* indicates that the node position is empty. A subtree of a
* node n is n, plus every node that is a descendant of n.
*
*
*  Definition for a binary tree node.
*  @param {integer} data - 0 or 1
*  @param {Node} left - subtree or null for no left branch
*  @param {Node} right - subtree or null for no right branch
*  function Node(data, left, right) {
*      this.data = data === undefined ? 0 : data;
*      this.left = left === undefined ? null : left;
*      this.right = right === undefined ? null : right;
*  }
*
* Complete the following that determines which nodes to prune in
* order to prune all unhealthy nodes that don't have healthy nodes
* as children and return the result. Set pruned nodes to null.
*
* @param {Node} root - binary tree data representing the root system of the plant
* @return {Node} - binary tree data representing the pruned root system of the plant
*/

function Node(data, left, right) {
      this.data = data === undefined ? 0 : data;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
}


function pruneRootsFunctional(root) {
    /* Enter your solution here! */

    if (root.left){
        console.log('pruning left')
        root.left = pruneRoots(root.left);
        console.log('root.left is now: ' + root.left);
    }
    if (root.right){
        console.log('pruning right')
        root.right = pruneRoots(root.right);
        console.log('root.right is now: ' + root.right);
    }

    // base case: endpoint found
    if( root.left === null && root.right === null) {
        console.log('endpoint found.')
        console.log(' returning',root.data ? root : null);
        return root.data ? root : null;
    }
    // case: at least one child node is a healthy path
    if (root.right || root.left){
        return root;
    }
}

// more efficient version
function pruneRoots(root){
    // prune roots if not null.
    root.left = (root.left) ? pruneRoots(root.left) : null;
    root.right = (root.right) ? pruneRoots(root.right) : null;
    // return if there is one healthy child path, or data is 1.
    return (root.left || root.right || root.data) ? root : null;
}
