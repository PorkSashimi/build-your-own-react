const Didact = {
  createElement: (element, props, ...children) => {
    return {
      type: element,
      props: {
        ...props,
        children: children.map(function (item) {
          if (typeof item === 'object') {
            return item;
          }
          return {
            type: 'TEXT_ELEMENT',
            props: {
              children: [],
              nodeValue: item,
            }
          };
        })
      }
    };
  }
};

const element = Didact.createElement(
  'h1', { title: 'tips' }, 'hello world'
);

console.log(element);