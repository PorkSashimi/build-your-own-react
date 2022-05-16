const Didact = {
  render: (element, container) => {
    let rootElement = document.createElement(element.type);
    rootElement.children.forEach(child => {

    })
    container.appendChild(rootElement);
  },
  createElement: (element, props, ...children) => {
    return {
      type: element,
      props: {
        ...props,
        children: children.map(function (item) {
          if (typeof item === 'object') {
            return item;
          }
          return createPureElement(item);
        })
      }
    };
  }
};

// ------

function createPureElement(element) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      children: [],
      nodeValue: item,
    }
  };
}

function createElement (element) {
  let htmlNode = document.createElement(element.type);
  element.props.forEach(attr => {
    if (attr === 'children') {
      return;
    }
    htmlNode.setAttribute('');
  })
}

// ------

const element = Didact.createElement(
  'h1', { title: 'tips' }, 'hello world'
);

console.log(element);