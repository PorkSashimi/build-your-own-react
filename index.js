const Didact = {
  render: (element, container) => {
    return createElement(element, container);
  },
  createElement: (element, props, ...children) => {
    return {
      type: element,
      props: {
        ...props,
        children: children.map((item) => {
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
      nodeValue: element,
    }
  };
}

function createElement(element, container) {
  let htmlNode;
  if (element.type === 'TEXT_ELEMENT') {
    htmlNode = document.createTextNode(element.props.nodeValue);
  } else {
    htmlNode = document.createElement(element.type);
    Object.keys(element.props).forEach(attr => {
      if (attr === 'children') {
        return;
      }
      htmlNode.setAttribute(attr, element.props[attr]);
    });
  }
  element.props.children.forEach(item => createElement(item, htmlNode))
  container.appendChild(htmlNode);
}

// ------

const element = Didact.createElement(
  'h1',
  {
    title: 'tips',
  },
  'hello  h1',
  Didact.createElement(
    'h2',
    null,
    'hello h2'
  )
);

console.log(element);

Didact.render(element, document.getElementById('root'));