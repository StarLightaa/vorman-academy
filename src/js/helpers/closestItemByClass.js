export default (item, className) => {
  let node = item;

  while(node) {
    if(node.classList.contains(className)) {
        return node;
    }

    node = node.parentElement;
  }
  return null;
};
