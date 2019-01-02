// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode = document.body) {
  var result = [];
  var classes = currentNode.classList;
  var children = currentNode.childNodes;

  if (classes !== undefined && classes.contains(className)) {
    result.push(currentNode);
  }

  if (children !== undefined && children.length > 0) {
    for (var i = 0; i < children.length; i++) {
      result = result.concat(getElementsByClassName(className, children[i]));
    }
  }

  return result;
};