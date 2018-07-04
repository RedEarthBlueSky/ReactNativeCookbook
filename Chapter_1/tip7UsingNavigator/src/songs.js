const Songs = {
  forYou: {
    title: 'Just for you',
    root: 'https://s3.amazonaws.com/crysfel/public/book/01/07',
    songs: [
      {title:'Some nice song', image: '1.jpg'},
      {title:'One more nice song', image: '2.jpg'},
      {title:'Here\'s one more song', image: '3.jpg'},
      {title:'Really nice song', image: '4.jpg'},
      {title:'I love this song', image: '5.jpg'},
      {title:'This is a song', image: '6.jpg'},
    ],
  },
  played: {
    title: 'Recently played',
    root: 'https://s3.amazonaws.com/crysfel/public/book/01/07',
    songs: [
      {title:'This is a song', image: '6.jpg'},
      {title:'Really nice song', image: '4.jpg'},
      {title:'Some nice song', image: '1.jpg'},
      {title:'Here\'s one more song', image: '3.jpg'},
      {title:'I love this song', image: '5.jpg'},
      {title:'One more nice song', image: '2.jpg'},
    ],
  },
  popular: {
    title: 'Popular music',
    root: 'https://s3.amazonaws.com/crysfel/public/book/01/07',
    songs: [
      {title:'I love this song', image: '5.jpg'},
      {title:'Here\'s one more song', image: '3.jpg'},
      {title:'One more nice song', image: '2.jpg'},
      {title:'This is a song', image: '6.jpg'},
      {title:'Really nice song', image: '4.jpg'},
      {title:'Some nice song', image: '1.jpg'},
    ],
  }
};

export default Songs;
