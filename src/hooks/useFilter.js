import { useState } from 'react';

const useFilter = (defaultItems = [], defaultItemsView) => {
  const [items, setItems] = useState(defaultItems);
  const [itemsView, setItemsView] = useState(defaultItemsView);

  const filterItems = (event) => {
    const {
      target: { value = '' },
    } = event;
    const sanitizedValue = value.trim().toLowerCase();
    let filteredItems = [];
    if (sanitizedValue === '') {
      filteredItems = items.map((_, idx) => idx);
    } else {
      items.forEach((item, idx) => {
        if (item.toLowerCase().includes(sanitizedValue)) {
          filteredItems.push(idx);
        }
      });
    }

    setItemsView(filteredItems);
  };

  return [items, setItems, itemsView, setItemsView, filterItems];
};

export default useFilter;
