const initialState = {
  articles: [
    {
      id: 1,
      cardType: 'article',
      title: 'No nieźle',
      created: '3 days ago',
      content: 'Something...',
      articleURL: 'https://github.com/Paaka',
    },
  ],
  notes: [
    {
      id: '1',
      title: 'No nieźle',
      created: '3 days ago',
      content: 'Something...',
    },
  ],
  twitters: [
    {
      id: 1,
      cardType: 'twitter',
      title: 'No nieźle',
      created: '3 days ago',
      content: 'Something...',
      twitterName: 'https://avatars.io/static/default_128.jpg',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
