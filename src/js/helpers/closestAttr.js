export default (item, attr) => {
  let node = item;

  while(node) {
    let attrValue = node.getAttribute(attr);
    if(attrValue) {
        return attrValue;
    }

    node = node.parentElement;
  }
  return null;
};
