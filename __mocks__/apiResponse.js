module.exports = {
  site: {
    siteMetadata: {
      author: 'Florian',
      titleTemplate: 'Title Template',
      defaultDescription: 'Default Description',
      siteUrl: 'localhost:8000',
      defaultImage: 'https://google.com',
      twitterUsername: 'Twitter Name',
    },
  },
  allAirtable: {
    nodes: [
      {
        data: {
          sLocalPluck: null,
          priceInCents: '300',
          stripePriceId: 'sku_squash,squash76',
        },
      },
    ],
  },
  images: {
    edges: [
      {
        node: {
          relativePath: 'cart_icon_green.png',
          extension: 'png',
          publicURL: '/static/05e4869366e5789a0483f10629d1dc93/cart_icon_green.png',
          childImageSharp: {
            fluid: {
              base64:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpklEQVQ4y3WU6U+UVxTG5z8wMSa1No2KqEjZRJBlFIYdyiaWTZZhWBQYlmH2fRhnQERQK27UujRag6hIK7ZWC7ZKGq2UEFtNrdFobO2SJsYmTfvF5Nf7voBLbT/c+9573nOfe557znkUtg4TVr8R+xYLzq12nN0OeS3ZZv/93/q/bAoZrNOCzlxLRVEiFSUpGByNOLqszxxnh73T/NJeBvMZpr+STQK0CSeTp5U81Vusy46jpDiN9DVB6CwbccqgBhnI4tNj8LRg2tz2PEJhlxi9eLnC0WWjuU3NuvSVgqqV9p1eahvLSFVFYO2yYxU2vbsZb4+bvoO76OrrwNjeKsAsWDzN1G8qoMVYjX0GVCGhtxo05KRGYvRbRSQGvJ0tlGSGoq/LpNulZmRkkO/v3ufu/R8Z+/IrDhw7gtlaS37SCjKSI1GuWkJ9c7nIgU28obipxaZFUxDDLr+agb4mLhzzMTbUz4nDu7l6ZYxffn/ChbFxDn4wwJlzo4xfnUCdH4+uOofdvXqqK9LIz0vAtc2BwtVp5PQBAwc9RQwf3cujR4/47fGfPPz1MU/+esoffz/l3sOfmbp1h/MC9LPL1/F7jFSVZPPR6ASDp8/i15VSvl6Ju9uOwuuq4+L2Qj7dr2XiysdM3viWyVv3uPz1DUYufMHUzR+Y/O4249cmxfo2dx78REN5JvsPHGH8+hTDx/fi2pSNJicCT7cVhUU8sLZgJX3atZzpzGe0v55zh5ycPrqb4ydOMDB8nk8uXWX8m5tM3X7AyVODFGdEcmmwm8/3beSwWUXu6gWi5FQi4yJCh0h7WaGKzPB5aFKW0FEVJZxSGPTmMtxTyaldLZw97GP05E6uDXXS3pBJSdJStlaFU6GcT8KKucQGzZMrxSElxSbKwmarpSRhMWWpQeIbiCY1EEthOJsro9hZH0t/61r2NMXjKApGFTafmMA55EW/QU7Mm8Qtm0uucjE2b6sobjMKk8/Etq2t+GuV+Gpi6W1Koj4nBFNxhDxKEwMoTQgQAAuIXz6XsEVzSAx9DZdGiTY/TPiGUlcYJwreMF3YFjE5/TqOeXLxa6Lp3hSHoTCCuqwQtHmheKvj8NaspbkgnHfWLCJt5QKZTWVyABuzVuBVR9FYrpIbYLr1xGTptOLXr8OniaEmM4Qd2gQG/IX0NiezXauktyEeZ3kkjeICV5WSmqxg1gua6rRlFKx+HU1FhtyCUl8/A9zi1jDUkctQzwbeN6cxcUjNxR1F6ArCKEkMFAALcVdGC3AlrQWhuKtiUWcECybB1GtLZaWS+l4GlJTC6dPRIyI65cngkC0da+kqbKWRbG9KZJ85G1tZNNXpyyhVBVL7dhCVKQE0ZC3FWJ2Ceeb9ZuRrWnakFjQ4tegqk0V2V/Fhey7vtqXznjGZPbpEnGUS5RDsG6IoXrOQ9YnLqd2QhNHdIsvfM7WxvaBlsrCKtcVcxRFfESO9xXg08TLl8tTlWESUbZUJaBuLsG7WYxc0JQl7RWD/rcJSbRq8ekyuJkzuJgyWOjl6o5Axi98sCtg+4294RbkVtpnoXgKdBZYUWgxJJyVa8r7jBZX2Pz87e/4f+Dqsy3OwgigAAAAASUVORK5CYII=',
              aspectRatio: 1,
              src: '/static/05e4869366e5789a0483f10629d1dc93/65e33/cart_icon_green.png',
              srcSet: '/static/05e4869366e5789a0483f10629d1dc93/65e33/cart_icon_green.png 100w',
              srcWebp: '/static/05e4869366e5789a0483f10629d1dc93/d1f52/cart_icon_green.webp',
              srcSetWebp: '/static/05e4869366e5789a0483f10629d1dc93/d1f52/cart_icon_green.webp 100w',
              sizes: '(max-width: 100px) 100vw, 100px',
            },
          },
        },
      },
    ],
  },
  subcategories: {
    nodes: [
      {
        data: {
          name: 'Apples & Pears',
          category: ['Fruits'],
          department: ['Produce'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Berries',
          category: ['Fruits'],
          department: ['Produce'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Stone Fruit',
          category: ['Fruits'],
          department: ['Produce'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Broccoli & Cauliflower',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Cabbages & Brussel Sprouts',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Carrots & Celery',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Fresh Beans',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Melons, Cucumbers & Squashes',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'More Vegetables',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Onions, Shallots & Leeks',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Potatoes, yams and beets',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Radishes, Turnips & Roots',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Tomatoes, Peppers & Eggplants',
          category: ['Vegetables'],
          department: ['Produce'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Microgreens',
          category: ['Greens'],
          department: ['Produce'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'More Greens',
          category: ['Greens'],
          department: ['Produce'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Salad Greens',
          category: ['Greens'],
          department: ['Produce'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Frozen Fruit',
          category: ['Frozen Produce'],
          department: ['Produce'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Frozen Veggies',
          category: ['Frozen Produce'],
          department: ['Produce'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Aromatics',
          category: ['Herbs & Spices'],
          department: ['Produce'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Dry Herbs',
          category: ['Herbs & Spices'],
          department: ['Produce'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Fresh Herbs',
          category: ['Herbs & Spices'],
          department: ['Produce'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Fresh Mushrooms',
          category: ['Mushrooms'],
          department: ['Produce'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Raw Honey',
          category: ['Honey'],
          department: ['Produce'],
          sortOrderCategories: [7],
          sortOrderDepartments: ['1'],
        },
      },
      {
        data: {
          name: 'Local Chicken Eggs',
          category: ['Chicken Eggs'],
          department: ['Eggs'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['3'],
        },
      },
      {
        data: {
          name: 'Fresh Milk',
          category: ['Milk'],
          department: ['Dairy'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['4'],
        },
      },
      {
        data: {
          name: 'All Yogurt',
          category: ['Yogurt'],
          department: ['Dairy'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['4'],
        },
      },
      {
        data: {
          name: 'Goat Milk Cheeses',
          category: ['Cheese'],
          department: ['Dairy'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['4'],
        },
      },
      {
        data: {
          name: 'Apple Cider',
          category: ['Cider'],
          department: ['Beverages'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['6'],
        },
      },
    ]
  },
  productGroups: {
    nodes: [
      {
        data: {
          name: 'Rainbow Micro Mix',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Rainbow Micro Mix',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_microgreen94',
                unitLabel: 'oz',
                unitQuantity: 3,
                mainImage: {
                  id: '5dc6d8e3-3fdb-52c2-ae7e-f425c12f34bd',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/06efe6c4d83745ca008362996489a2f1/0623f93b/ScreenShot2020-11-11at20_39_33.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJUlEQVQ4y22U2U8TYRTF+x+Z+EQ0BuMDxCipRIgQIjskiBIgqAkBWTSEmBBcYvok2wNGREwJZelGWzZZjFtYIgalZWunpYCIdKbleL9vZtop9OGkvdPOb849c2Z0UmAcXLsOhHedJBfCwQlFk6eU6BjTFGkG4b1Z6KSAjYB2Dg1HoSpYA2fzGU0ompSBwY8MaFeAjgTACc1JWufyMWlXnRWHJMWhTV47DuqKg0j0PZH4xYJxDlWgHdE8CSwRVJYLIs0h/ziXGHDyKOKg/KLTlCED+i2Q/NaoS9FvI8UyjbAcAy4gaAf2aCbg8Q773cnhMegUhxLQTAALyarIggibt0Zx6DFhfbED3748hnG8GZ/mDPB8H4C4QVsE5XVVqOpSJ3KgmVyOQRLGIO4YIaz2YMnZgtc95aisz0BG7jkUNaYiqy4ZjS9vYWOtH8e+UexuDPKcpSh0khwyCMFE9ukbQcQ7gClzIxrqk5Ffch4XU5OQVZuFzCY9UrKT8ORVEebmn8K9bMDScgdOgk6esbz6BHRhupIkyAp5h3HiN+HHzDNU3L+Gwju3cenCFehL05H5IAXVVTfxor0Gw8ZaOCdb4HMPyLlHgS4CEohJYmDfMK1sQsTTiy5DAUrycpB2+Tpu5OhR35qL5w3laH9UCffXbvz9RetSM0S/AlTW5g7DikMGlMhlaLMPxq48PMxNQ/rVbBRW5KKmtRjVZcWY7u6D8LmX/menGjGgQ74xAcWhuq4MHOEKe4cwb2/CwpsG1GTno6CU4G13UV9WgRWLEUebZl6tGMwZcxgPG6WVB7G//g4hTx/cs21421KMe9V6NDcUYLGzHwdrVuqhJQZTC670UiepN8U3qgCHsL3SiT+/+7D/s5PqU4f3w1UwjZRjdaEDksdKN48BY3XRSqeCVKdhqs8JK7Ywxud/2x+wumTAwWY/DrdGcLRhpuwc3GEcLODSOPRpc1RnykmwICTYeOElLz0dgiNaE1GT29mVfbEMZfAYh4mCjT/bDBoSlJcDd+dMCJTigZocOdAafVHwrqkKOBJCxZhDcuZVxCrjO+3QrpHqMB6q1X9jFmj/BHY3OwAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/ffa96a22cf4b54bd1719d2e919943746/71eb7/ScreenShot2020-11-11at20_39_33.png',
                          srcSet:
                            '/static/ffa96a22cf4b54bd1719d2e919943746/b5811/ScreenShot2020-11-11at20_39_33.png 25w,\n/static/ffa96a22cf4b54bd1719d2e919943746/8ba1e/ScreenShot2020-11-11at20_39_33.png 50w,\n/static/ffa96a22cf4b54bd1719d2e919943746/71eb7/ScreenShot2020-11-11at20_39_33.png 100w,\n/static/ffa96a22cf4b54bd1719d2e919943746/92ab1/ScreenShot2020-11-11at20_39_33.png 150w,\n/static/ffa96a22cf4b54bd1719d2e919943746/b3a76/ScreenShot2020-11-11at20_39_33.png 200w,\n/static/ffa96a22cf4b54bd1719d2e919943746/3057e/ScreenShot2020-11-11at20_39_33.png 465w',
                          srcWebp: '/static/ffa96a22cf4b54bd1719d2e919943746/ff02b/ScreenShot2020-11-11at20_39_33.webp',
                          srcSetWebp:
                            '/static/ffa96a22cf4b54bd1719d2e919943746/8d998/ScreenShot2020-11-11at20_39_33.webp 25w,\n/static/ffa96a22cf4b54bd1719d2e919943746/48562/ScreenShot2020-11-11at20_39_33.webp 50w,\n/static/ffa96a22cf4b54bd1719d2e919943746/ff02b/ScreenShot2020-11-11at20_39_33.webp 100w,\n/static/ffa96a22cf4b54bd1719d2e919943746/1c591/ScreenShot2020-11-11at20_39_33.webp 150w,\n/static/ffa96a22cf4b54bd1719d2e919943746/a4d7d/ScreenShot2020-11-11at20_39_33.webp 200w,\n/static/ffa96a22cf4b54bd1719d2e919943746/d9d17/ScreenShot2020-11-11at20_39_33.webp 465w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Collard Greens',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['More Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: true,
                name: 'Collard Greens, Organic',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_collard27',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: 'c5c0b798-6bbe-5b91-9b8e-dbe947949e42',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/efc507d93b152505c32ccf79cc0ec24f/65eb3a09/IMG_20200724_120651.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDAv/EABcBAQADAAAAAAAAAAAAAAAAAAEAAgT/2gAMAwEAAhADEAAAAc7JV2dDTlqDAz//xAAcEAEAAQQDAAAAAAAAAAAAAAABAAIQESESMTL/2gAIAQEAAQUC1yUlHlJiBgOjVv/EABkRAAEFAAAAAAAAAAAAAAAAAAEAAhAhMf/aAAgBAwEBPwFwtDJ//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8BY//EABcQAAMBAAAAAAAAAAAAAAAAAAAhMDH/2gAIAQEABj8CZkP/xAAaEAEBAAMBAQAAAAAAAAAAAAABABEhMVGh/9oACAEBAAE/ITZDF+cWRe22+2onkZC8DEt//9oADAMBAAIAAwAAABBf0Hz/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxDW4oBgO4//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EE8Lv//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWFxgcH/2gAIAQEAAT8QSRo8BtxFgUjEF7JC57KlXHqFmlO/kPmN2zPB5IQIVt1Fuf/Z',
                          aspectRatio: 1,
                          src: '/static/5d7cd861d4b50a1c322ec5799f0d969e/b315d/IMG_20200724_120651.jpg',
                          srcSet:
                            '/static/5d7cd861d4b50a1c322ec5799f0d969e/d0f88/IMG_20200724_120651.jpg 25w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/99438/IMG_20200724_120651.jpg 50w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/b315d/IMG_20200724_120651.jpg 100w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/dcd9a/IMG_20200724_120651.jpg 150w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/8295c/IMG_20200724_120651.jpg 200w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/b003e/IMG_20200724_120651.jpg 4032w',
                          srcWebp: '/static/5d7cd861d4b50a1c322ec5799f0d969e/ff02b/IMG_20200724_120651.webp',
                          srcSetWebp:
                            '/static/5d7cd861d4b50a1c322ec5799f0d969e/8d998/IMG_20200724_120651.webp 25w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/48562/IMG_20200724_120651.webp 50w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/ff02b/IMG_20200724_120651.webp 100w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/1c591/IMG_20200724_120651.webp 150w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/a4d7d/IMG_20200724_120651.webp 200w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/32718/IMG_20200724_120651.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Collard Greens',
                oneLiner: 'wants to be added to your grilled cheese',
                priceInCents: '250',
                stripePriceId: 'sku_collard217',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '8f6e7193-415d-5d5b-8c44-d57e2c7709a6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c188c64f11e5f6eabecf9955c9ca8df7/3ff66286/IMG_20200724_120651.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDAv/EABcBAQADAAAAAAAAAAAAAAAAAAEAAgT/2gAMAwEAAhADEAAAAc7JV2dDTlqDAz//xAAcEAEAAQQDAAAAAAAAAAAAAAABAAIQESESMTL/2gAIAQEAAQUC1yUlHlJiBgOjVv/EABkRAAEFAAAAAAAAAAAAAAAAAAEAAhAhMf/aAAgBAwEBPwFwtDJ//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8BY//EABcQAAMBAAAAAAAAAAAAAAAAAAAhMDH/2gAIAQEABj8CZkP/xAAaEAEBAAMBAQAAAAAAAAAAAAABABEhMVGh/9oACAEBAAE/ITZDF+cWRe22+2onkZC8DEt//9oADAMBAAIAAwAAABBf0Hz/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxDW4oBgO4//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EE8Lv//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWFxgcH/2gAIAQEAAT8QSRo8BtxFgUjEF7JC57KlXHqFmlO/kPmN2zPB5IQIVt1Fuf/Z',
                          aspectRatio: 1,
                          src: '/static/5d7cd861d4b50a1c322ec5799f0d969e/b315d/IMG_20200724_120651.jpg',
                          srcSet:
                            '/static/5d7cd861d4b50a1c322ec5799f0d969e/d0f88/IMG_20200724_120651.jpg 25w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/99438/IMG_20200724_120651.jpg 50w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/b315d/IMG_20200724_120651.jpg 100w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/dcd9a/IMG_20200724_120651.jpg 150w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/8295c/IMG_20200724_120651.jpg 200w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/b003e/IMG_20200724_120651.jpg 4032w',
                          srcWebp: '/static/5d7cd861d4b50a1c322ec5799f0d969e/ff02b/IMG_20200724_120651.webp',
                          srcSetWebp:
                            '/static/5d7cd861d4b50a1c322ec5799f0d969e/8d998/IMG_20200724_120651.webp 25w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/48562/IMG_20200724_120651.webp 50w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/ff02b/IMG_20200724_120651.webp 100w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/1c591/IMG_20200724_120651.webp 150w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/a4d7d/IMG_20200724_120651.webp 200w,\n/static/5d7cd861d4b50a1c322ec5799f0d969e/32718/IMG_20200724_120651.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Collard Greens',
                oneLiner: null,
                priceInCents: '1000',
                stripePriceId: 'sku_collard218',
                unitLabel: 'bunches',
                unitQuantity: 6,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jerusalem Artichoke',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Jerusalem Artichoke',
                oneLiner: 'roast me: the tuber of a native sunflower',
                priceInCents: '500',
                stripePriceId: 'sku_jerusalemartichoke295',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: 'f14c6f39-bc2a-5fa2-b5df-03c3a24cf160',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/f14268e4944fd3cfd3bb55feadc9bbfb/4c2aed57/Jerusalem_artichoke.jpeg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwD/2gAMAwEAAhADEAAAAed4tpUteUSfMS4G/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAIRESE//aAAgBAQABBQK8qDAFM25tmmUrOr6NURQV/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgAGAwEAAAAAAAAAAAAAAAIBESEiMTISQUJh/9oACAEBAAY/AmZl5EY+c/TY7oLdtktclMgVP//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVFx/9oACAEBAAE/IT0hzcaIbxuIBZIwOPCpXCra6xgASu4eSSoqVncH2f/aAAwDAQACAAMAAAAQWMd//8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxBq8R//xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EGVOq//EAB0QAQACAwEAAwAAAAAAAAAAAAERMQAhQWFxkeH/2gAIAQEAAT8QJFRCmIEWA+XkZeosFs2feB4wnYcSIBomQ7PcmmRbIAlHprWdehR21qOaxB6R8T+Y6tFXBKFze2f/2Q==',
                          aspectRatio: 1,
                          src: '/static/0b879421f513f95ee8be23eccb24008a/b315d/Jerusalem_artichoke.jpg',
                          srcSet:
                            '/static/0b879421f513f95ee8be23eccb24008a/d0f88/Jerusalem_artichoke.jpg 25w,\n/static/0b879421f513f95ee8be23eccb24008a/99438/Jerusalem_artichoke.jpg 50w,\n/static/0b879421f513f95ee8be23eccb24008a/b315d/Jerusalem_artichoke.jpg 100w,\n/static/0b879421f513f95ee8be23eccb24008a/dcd9a/Jerusalem_artichoke.jpg 150w,\n/static/0b879421f513f95ee8be23eccb24008a/8295c/Jerusalem_artichoke.jpg 200w,\n/static/0b879421f513f95ee8be23eccb24008a/2280e/Jerusalem_artichoke.jpg 822w',
                          srcWebp: '/static/0b879421f513f95ee8be23eccb24008a/ff02b/Jerusalem_artichoke.webp',
                          srcSetWebp:
                            '/static/0b879421f513f95ee8be23eccb24008a/8d998/Jerusalem_artichoke.webp 25w,\n/static/0b879421f513f95ee8be23eccb24008a/48562/Jerusalem_artichoke.webp 50w,\n/static/0b879421f513f95ee8be23eccb24008a/ff02b/Jerusalem_artichoke.webp 100w,\n/static/0b879421f513f95ee8be23eccb24008a/1c591/Jerusalem_artichoke.webp 150w,\n/static/0b879421f513f95ee8be23eccb24008a/a4d7d/Jerusalem_artichoke.webp 200w,\n/static/0b879421f513f95ee8be23eccb24008a/c6592/Jerusalem_artichoke.webp 822w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Local 2% Milk',
          department: ['Dairy'],
          category: ['Milk'],
          subcategory: ['Fresh Milk'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local 2% Milk',
                oneLiner: null,
                priceInCents: '349',
                stripePriceId: 'sku_milk69',
                unitLabel: 'gal',
                unitQuantity: 0.5,
                mainImage: {
                  id: '98c3c60c-2ebc-5109-b71f-67ca8278df23',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/15f44e3759320214c4f8bb6fecaf9411/a8912cf3/G_2-Milk.jpeg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAMBAgQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB96eIVl3CddZgrAf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERIz/9oACAEBAAEFAicCtpl3nWR3CNC1opn/xAAXEQEAAwAAAAAAAAAAAAAAAAABAhIg/9oACAEDAQE/AZLYx//EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAgEBPwERP//EABcQAQEBAQAAAAAAAAAAAAAAAAEQEQD/2gAIAQEABj8Crce0J//EABsQAQACAgMAAAAAAAAAAAAAAAEAERAhMVFh/9oACAEBAAE/Ibli06xo/kZqnHeAYLGUpjj/2gAMAwEAAgADAAAAEDgPwP/EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQMBAT8QMBxiGz//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxACmP/EABwQAQEAAgIDAAAAAAAAAAAAAAERABAhMVFhgf/aAAgBAQABPxD1TlVIj03SRmSr9MMFCuIdSgKJ5zjLcpr/2Q==',
                          aspectRatio: 1,
                          src: '/static/c8825c4db518b75bdc61650af08264e7/b315d/G_2-Milk.jpg',
                          srcSet:
                            '/static/c8825c4db518b75bdc61650af08264e7/d0f88/G_2-Milk.jpg 25w,\n/static/c8825c4db518b75bdc61650af08264e7/99438/G_2-Milk.jpg 50w,\n/static/c8825c4db518b75bdc61650af08264e7/b315d/G_2-Milk.jpg 100w,\n/static/c8825c4db518b75bdc61650af08264e7/dcd9a/G_2-Milk.jpg 150w,\n/static/c8825c4db518b75bdc61650af08264e7/8295c/G_2-Milk.jpg 200w,\n/static/c8825c4db518b75bdc61650af08264e7/1dd11/G_2-Milk.jpg 2400w',
                          srcWebp: '/static/c8825c4db518b75bdc61650af08264e7/ff02b/G_2-Milk.webp',
                          srcSetWebp:
                            '/static/c8825c4db518b75bdc61650af08264e7/8d998/G_2-Milk.webp 25w,\n/static/c8825c4db518b75bdc61650af08264e7/48562/G_2-Milk.webp 50w,\n/static/c8825c4db518b75bdc61650af08264e7/ff02b/G_2-Milk.webp 100w,\n/static/c8825c4db518b75bdc61650af08264e7/1c591/G_2-Milk.webp 150w,\n/static/c8825c4db518b75bdc61650af08264e7/a4d7d/G_2-Milk.webp 200w,\n/static/c8825c4db518b75bdc61650af08264e7/b831a/G_2-Milk.webp 2400w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local 2% Milk',
                oneLiner: null,
                priceInCents: '649',
                stripePriceId: 'sku_milk68',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: {
                  id: '869cc0f3-8d47-5318-b137-d3d818690d3a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/15f44e3759320214c4f8bb6fecaf9411/a8912cf3/G_2-Milk.jpeg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAMBAgQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB96eIVl3CddZgrAf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERIz/9oACAEBAAEFAicCtpl3nWR3CNC1opn/xAAXEQEAAwAAAAAAAAAAAAAAAAABAhIg/9oACAEDAQE/AZLYx//EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAgEBPwERP//EABcQAQEBAQAAAAAAAAAAAAAAAAEQEQD/2gAIAQEABj8Crce0J//EABsQAQACAgMAAAAAAAAAAAAAAAEAERAhMVFh/9oACAEBAAE/Ibli06xo/kZqnHeAYLGUpjj/2gAMAwEAAgADAAAAEDgPwP/EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQMBAT8QMBxiGz//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxACmP/EABwQAQEAAgIDAAAAAAAAAAAAAAERABAhMVFhgf/aAAgBAQABPxD1TlVIj03SRmSr9MMFCuIdSgKJ5zjLcpr/2Q==',
                          aspectRatio: 1,
                          src: '/static/c8825c4db518b75bdc61650af08264e7/b315d/G_2-Milk.jpg',
                          srcSet:
                            '/static/c8825c4db518b75bdc61650af08264e7/d0f88/G_2-Milk.jpg 25w,\n/static/c8825c4db518b75bdc61650af08264e7/99438/G_2-Milk.jpg 50w,\n/static/c8825c4db518b75bdc61650af08264e7/b315d/G_2-Milk.jpg 100w,\n/static/c8825c4db518b75bdc61650af08264e7/dcd9a/G_2-Milk.jpg 150w,\n/static/c8825c4db518b75bdc61650af08264e7/8295c/G_2-Milk.jpg 200w,\n/static/c8825c4db518b75bdc61650af08264e7/1dd11/G_2-Milk.jpg 2400w',
                          srcWebp: '/static/c8825c4db518b75bdc61650af08264e7/ff02b/G_2-Milk.webp',
                          srcSetWebp:
                            '/static/c8825c4db518b75bdc61650af08264e7/8d998/G_2-Milk.webp 25w,\n/static/c8825c4db518b75bdc61650af08264e7/48562/G_2-Milk.webp 50w,\n/static/c8825c4db518b75bdc61650af08264e7/ff02b/G_2-Milk.webp 100w,\n/static/c8825c4db518b75bdc61650af08264e7/1c591/G_2-Milk.webp 150w,\n/static/c8825c4db518b75bdc61650af08264e7/a4d7d/G_2-Milk.webp 200w,\n/static/c8825c4db518b75bdc61650af08264e7/b831a/G_2-Milk.webp 2400w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Broccoli Bits, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Broccoli Bits, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenveg15',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: 'd032f7fa-e933-5612-bbfb-4a743c2f9fca',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/03cadac04f6cdf5e07ac34d912fe9002/fc601ae8/ScreenShot2020-11-11at19_13_01.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADY0lEQVQ4y2VUaU8TURTtD3JhBxFlkbUbUCily3RfKZRCKUuRRYQaiRFN1Ggi+olEoh/ADxpNSIyJiYk/6njPbacO+OHmzbyZd++555z7bO5QG9xGG1yhVl3NZ2ewBb7UXcSLDiSKTsQK9tq6aMdsule/m2caq4TNZbTqg/XjeLhdDjqQLXsQKYwiv+bF4v0A8uteZMqTCM8PI7Hk1P9coZbGOU1oorJW4s+ZlUksbYWw8iCK5W0DhU0/Vh8mUH2+gs1HWUXKf2pJLQitCWtJW2Dkh3H0ZgfZ1SkEsv0Y8V3DmP+GtjkZ7dQCB0clBHIDuArIplAt/DklIVvSdudHsL6fws7hvCI7fFnB4YsNBHP3UKjMIpQfusy9cnhFDLYQyA6IIL1KfmhuUNuLiyBhKZAoujAjYs2m+zTcRvsllDarqjXlWrSldeErVRoXhEnl7OBZCZVqGmuyv3+0jN0nBXlOwhFospytt0xUU/FuDU/sFmYzfapyMDcoCIcQWRhVAdKlCV2Ty24VjvvTiR54k3cwI8E8mnBaEpl+Y5A7Q/gJ11cmJW8Mf6ZfxaBwDPozWhhTWjyxrn8tOwLN9WgSJbswFetWRU3UROEVNETEPYo3HunQ/82zjZaZlHAZDuHi248z/PpzgZ+/v+Ps6wm+XHzE6fkxPpy/xennd/L+Ca/eV/H09ZZaaiLS+b8orOAMNovfbirxtEtpJ4zVvQTKYu6V3Yi8R3SvvBvFZjWL3KoHo77rKsglhKzgE4v41A69NfcbVn/WhDM7mZBW3bKSCr8IyHO0UkMUckIBwkIyV6pX3Arq2C2JhZZ3DJkaD4rbIcxXfCpAVGacYhgyBJGFER0GAmtwOBHu0BiXoCgeCVqBxTh+fjG7ty7I1dtJJ8zqw+n4ba0ak4pER5tEZTXmhnRSTPvQNrRUrG4TItT/5FtU3umKhiicEBJLfnx63zUjvzGjbS7I3Jb34iKM3DwiCo1tF/FmUjVDJ5dc2pUiNEmnCCZ8RSvhTfYIlyGsH4jiovLW4znEZADoxZQk5cxz//jkSK83FrHZ/U3KGy9QfiyJEFSP05CQymwrLTPNApxtUsJ9ImOCnFxxlWoGc2vT4uFm2Jz1G5d20ZkU+alWrVC7zjW/+UUY01rWy4C3ja9+hrT9BcyQMVQVrss3AAAAAElFTkSuQmCC',
                          aspectRatio: 1,
                          src: '/static/f4dc04debd2a98b211d089dd86e4f77d/71eb7/ScreenShot2020-11-11at19_13_01.png',
                          srcSet:
                            '/static/f4dc04debd2a98b211d089dd86e4f77d/b5811/ScreenShot2020-11-11at19_13_01.png 25w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/8ba1e/ScreenShot2020-11-11at19_13_01.png 50w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/71eb7/ScreenShot2020-11-11at19_13_01.png 100w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/92ab1/ScreenShot2020-11-11at19_13_01.png 150w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/b3a76/ScreenShot2020-11-11at19_13_01.png 200w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/d282b/ScreenShot2020-11-11at19_13_01.png 539w',
                          srcWebp: '/static/f4dc04debd2a98b211d089dd86e4f77d/ff02b/ScreenShot2020-11-11at19_13_01.webp',
                          srcSetWebp:
                            '/static/f4dc04debd2a98b211d089dd86e4f77d/8d998/ScreenShot2020-11-11at19_13_01.webp 25w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/48562/ScreenShot2020-11-11at19_13_01.webp 50w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/ff02b/ScreenShot2020-11-11at19_13_01.webp 100w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/1c591/ScreenShot2020-11-11at19_13_01.webp 150w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/a4d7d/ScreenShot2020-11-11at19_13_01.webp 200w,\n/static/f4dc04debd2a98b211d089dd86e4f77d/14fae/ScreenShot2020-11-11at19_13_01.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Fresh Cranberries',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Berries'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Fresh Cranberries',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_berry204',
                unitLabel: 'small box',
                unitQuantity: 1,
                mainImage: {
                  id: 'be2d7368-3c2e-52b9-9555-9518a083e83f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/19f85a5c9f5b157bb42f0f4cf1e93ca8/3553b6c0/burdasberries.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZmYitLKd5dHSC//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDEiEQE//aAAgBAQABBQJjsMjl6lRyVVtsOE4v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQIVH/2gAIAQMBAT8BjRKj/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgIDAAAAAAAAAAAAAAAAADEBIQIQEf/aAAgBAQAGPwKsR8GWIUEb/8QAHBABAQEBAAIDAAAAAAAAAAAAAREAITFRcYHR/9oACAEBAAE/Ifbvh3gn16f6DQs257KfPLlOtsvcolmtBd//2gAMAwEAAgADAAAAEEgPvf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIRFB/9oACAEDAQE/ELkZeiSwKxD/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxBC6lifJe3/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMVFhQbH/2gAIAQEAAT8QpwEnVglo35lnfuMQuzdD+YBFMRCYbRVMPcVazvHC012pziHKDWuN4IgVM//Z',
                          aspectRatio: 1,
                          src: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg',
                          srcSet:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/d0f88/burdasberries.jpg 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/99438/burdasberries.jpg 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/dcd9a/burdasberries.jpg 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/8295c/burdasberries.jpg 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/7b2a1/burdasberries.jpg 600w',
                          srcWebp: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp',
                          srcSetWebp:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/8d998/burdasberries.webp 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/48562/burdasberries.webp 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/1c591/burdasberries.webp 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/a4d7d/burdasberries.webp 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ab687/burdasberries.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Fresh Cranberries',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_berry205',
                unitLabel: 'large box',
                unitQuantity: 1,
                mainImage: {
                  id: 'f08f6709-2adf-5472-8acd-61536eed0732',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/19f85a5c9f5b157bb42f0f4cf1e93ca8/3553b6c0/burdasberries.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZmYitLKd5dHSC//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDEiEQE//aAAgBAQABBQJjsMjl6lRyVVtsOE4v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQIVH/2gAIAQMBAT8BjRKj/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgIDAAAAAAAAAAAAAAAAADEBIQIQEf/aAAgBAQAGPwKsR8GWIUEb/8QAHBABAQEBAAIDAAAAAAAAAAAAAREAITFRcYHR/9oACAEBAAE/Ifbvh3gn16f6DQs257KfPLlOtsvcolmtBd//2gAMAwEAAgADAAAAEEgPvf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIRFB/9oACAEDAQE/ELkZeiSwKxD/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxBC6lifJe3/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMVFhQbH/2gAIAQEAAT8QpwEnVglo35lnfuMQuzdD+YBFMRCYbRVMPcVazvHC012pziHKDWuN4IgVM//Z',
                          aspectRatio: 1,
                          src: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg',
                          srcSet:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/d0f88/burdasberries.jpg 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/99438/burdasberries.jpg 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/dcd9a/burdasberries.jpg 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/8295c/burdasberries.jpg 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/7b2a1/burdasberries.jpg 600w',
                          srcWebp: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp',
                          srcSetWebp:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/8d998/burdasberries.webp 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/48562/burdasberries.webp 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/1c591/burdasberries.webp 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/a4d7d/burdasberries.webp 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ab687/burdasberries.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Broccoli',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Broccoli & Cauliflower'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Huge Broccoli',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_hugebroccoli186',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Broccoli',
                oneLiner: 'usually picked the day before delivery',
                priceInCents: '300',
                stripePriceId: 'sku_hugebroccoli185',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '69a2dd48-722f-5d41-92ef-c64fd7fb5726',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/d2c9f0c88ec84380dcd3f9394a0ffa34/492a234c/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABcBAQEBAQAAAAAAAAAAAAAAAAIAAQP/2gAMAwEAAhADEAAAAYZXCquPTnVFaG3/xAAaEAEAAgMBAAAAAAAAAAAAAAABAhEAAyEQ/9oACAEBAAEFAuRTY3G0pZx1mAAcwXz/xAAYEQACAwAAAAAAAAAAAAAAAAAAEgECEP/aAAgBAwEBPwFrDzv/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAADAQEAAAAAAAAAAAAAAAAAEBExIf/aAAgBAQAGPwJUpkq4av/EABsQAAMBAQADAAAAAAAAAAAAAAABESFRMUFx/9oACAEBAAE/Iagm94huFkGnFpUnShzsFpLBfY18OuS+dP/aAAwDAQACAAMAAAAQhADB/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARIRD/2gAIAQMBAT8QUwhRso5//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxBxE3//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhQVFxMWGx/9oACAEBAAE/EFBr6LruLcFVVXBQGfcDuKJbjEYtiiNCcQywEpX2KeB8YHJK5Wf/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/9296f85d647d5d0788fdbe61ba2ca039/b315d/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg',
                          srcSet:
                            '/static/9296f85d647d5d0788fdbe61ba2ca039/d0f88/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg 25w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/99438/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg 50w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/b315d/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg 100w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/dcd9a/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg 150w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/8295c/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg 200w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/e4183/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.jpg 1067w',
                          srcWebp:
                            '/static/9296f85d647d5d0788fdbe61ba2ca039/ff02b/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp',
                          srcSetWebp:
                            '/static/9296f85d647d5d0788fdbe61ba2ca039/8d998/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp 25w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/48562/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp 50w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/ff02b/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp 100w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/1c591/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp 150w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/a4d7d/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp 200w,\n/static/9296f85d647d5d0788fdbe61ba2ca039/50867/00100lrPORTRAIT_00100_BURST20200725144228939_COVER.webp 1067w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Garlic',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Aromatics'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Garlic',
                oneLiner: null,
                priceInCents: '599',
                stripePriceId: 'sku_garlic47',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Garlic',
                oneLiner: null,
                priceInCents: '1000',
                stripePriceId: 'sku_garlic46',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Garlic',
                oneLiner: 'smaller bulbs, than the summer variety',
                priceInCents: '100',
                stripePriceId: 'sku_garlic210',
                unitLabel: 'bulb',
                unitQuantity: 1,
                mainImage: {
                  id: '4633ef2f-c6d2-5003-9aad-c7fadd8a1501',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/a0ff2eda1f55a6d091fcf58538074d1a/281da315/120002147_380793299758977_3993829527229343330_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAd0yStF5lUD/xAAbEAADAAIDAAAAAAAAAAAAAAAAAQIDERIhMf/aAAgBAQABBQLtHhc1yJSQ7iRk23ktLf8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAgICAwEAAAAAAAAAAAAAAAERIQIxMkFhsf/aAAgBAQAGPwJrl2VG6HA4dv0xnf0jK2N+Eavo0f/EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFRMUFhgcH/2gAIAQEAAT8huhbpgTsu3oTU054IBgmAUymuBjMoUmyEXuI4lHylAoVO5//aAAwDAQACAAMAAAAQIyi8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8QK//EACAQAQEAAwEAAAcAAAAAAAAAAAERACExQVFhcYGRwfD/2gAIAQEAAT8QNKggd74r8s5p+0GrtWa/WcgK5+Tr8cWrQ1E1z364RUVwpFZQOeee4Qg9XS/3Ptjp0aJqyYmgEiIneOEJVF3n/9k=',
                          aspectRatio: 1,
                          src:
                            '/static/e1f6d004343ecc9437bd5ed404929e59/b315d/120002147_380793299758977_3993829527229343330_n.jpg',
                          srcSet:
                            '/static/e1f6d004343ecc9437bd5ed404929e59/d0f88/120002147_380793299758977_3993829527229343330_n.jpg 25w,\n/static/e1f6d004343ecc9437bd5ed404929e59/99438/120002147_380793299758977_3993829527229343330_n.jpg 50w,\n/static/e1f6d004343ecc9437bd5ed404929e59/b315d/120002147_380793299758977_3993829527229343330_n.jpg 100w,\n/static/e1f6d004343ecc9437bd5ed404929e59/dcd9a/120002147_380793299758977_3993829527229343330_n.jpg 150w,\n/static/e1f6d004343ecc9437bd5ed404929e59/8295c/120002147_380793299758977_3993829527229343330_n.jpg 200w,\n/static/e1f6d004343ecc9437bd5ed404929e59/d1f84/120002147_380793299758977_3993829527229343330_n.jpg 800w',
                          srcWebp:
                            '/static/e1f6d004343ecc9437bd5ed404929e59/ff02b/120002147_380793299758977_3993829527229343330_n.webp',
                          srcSetWebp:
                            '/static/e1f6d004343ecc9437bd5ed404929e59/8d998/120002147_380793299758977_3993829527229343330_n.webp 25w,\n/static/e1f6d004343ecc9437bd5ed404929e59/48562/120002147_380793299758977_3993829527229343330_n.webp 50w,\n/static/e1f6d004343ecc9437bd5ed404929e59/ff02b/120002147_380793299758977_3993829527229343330_n.webp 100w,\n/static/e1f6d004343ecc9437bd5ed404929e59/1c591/120002147_380793299758977_3993829527229343330_n.webp 150w,\n/static/e1f6d004343ecc9437bd5ed404929e59/a4d7d/120002147_380793299758977_3993829527229343330_n.webp 200w,\n/static/e1f6d004343ecc9437bd5ed404929e59/88bdf/120002147_380793299758977_3993829527229343330_n.webp 800w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jumbo Purple Bell Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jumbo Purple Bell Peppers',
                oneLiner: null,
                priceInCents: '150',
                stripePriceId: 'sku_bellpepper243',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Skin Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Skin Potatoes',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_potato279',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: {
                  id: '52808b99-fbd3-5b80-b1da-f0d8ebe79665',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/e3caee807d02dba21c80de784d299999/cc2a2462/ScreenShot2020-11-30at18.32.22.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFK0lEQVQ4yxWVzXMbdxnHdWQYhuEGzNTjpqpsWVK0eluttFpJu5JW0q7e3yxZsmJbcm05jS3j2Gle7MaQ2LRMjJu0oW1KhhDCMNDC9EBnuNCQAj0E/gJunPgLOH/4cdjLc9nn+b58fo64vYCR8RILvo6kOvH5ncjpi1h1GasXQDX9BEIu5MUQspiFCxKBsgdv5gLBkptYO0jUWiCXDWIVozjUfJCk6aFci2O1FLSol3QuQr4VIaLMkDGjlEYasj5LKLKAkpJIJT1E8m785jzaQEHNSzQ6GsXORRxGPo7aDFC5WqA5alCxMmTSMtVmEttS6DYNBusZDMWPKnnw6S4i+jx2K4HZT6KXwiRzPqpXuyjDGI6I4SXRCRFeCjDeafPJ/SmtdoZiMU69YNDsGRTNMMVUFD0SQFbdlAc61qUUhWyYqmXQmXaYfHyMumPjmFNnuRh1EpRc6Gk/Nd1Ha5ClWIhhyEFOTkc8ff+QXDyEqcqYcZnecop6V0c3gowOyjR3EvT3C1i7HRyu4AyK30Mi5qdgxsjFVGrZNMOKkEDX2WqXuHm5i50U5xcLlJMqrXKOyV6bZkP89P/6rwUY7ttCBmFKPODDTqlU9SSWGhMb6nSzGSpplYohZkoMMyZTyWlYYruGmDUsU8hSQldCpMI+6r0kXXGu0QvhWDSzTNp9mvk+WlhhIDb78f4ed1a3+MsHP2e62KJVMumVClTNDCklTElNkAnL6LpKykygi1R4PbNEysLlo86Irw8fcVzZ4Li6zSdH1znbf5cXJw/4euuUw0uXeXzjnC8PfsE/b3zG28N1ykac0XiJzdNdxj9cY+3WJfRslIW4C8dGa8Djw3s86u/z/PpDPlrZ5snB2/zmsM97bx7w8Y37vLzzlOdbP+Vze5fz5THZnIhVKcX4aIPR7aHIn8LqZoF0x8CRTYi1c2l+MBzw4NqUdztd/npwl7PKgI3FCedLEz4f73Gv1ufp0h7n4zfo5NNkKwpmWUOzJTzSa/gCTsa3xjgq6SRK0MNi3mAln0NxznJSrXIqpEhJChM5yTv5Bh/11vnTyREv7v+ML/bvsd6uYbYMQto8wdgcr746g2kncLR7FtN2ncN6Hd8rFygmS3x2dpOtSl64XyflibPuknlWGfG3x2/x8otnPLlyl2ltkZQ4W7MDSNYcPreLsGCAo1hLMjLT/LY7IO+a43g64d9fPePawKIaVEm7IhyECnxoL3Gl6Ge3e5U3W2ccrB/Q2esRLftxzn4PyTtH8+pQxEbEIZeKkHQ7efJgl9+/t83DaZ2B5OXPRyd8ee+MD0sDno/v8KOlKotmVwR+m53BDpN+idDAxC3qmF+0WD+9hmOlUWG5ViUn6nT5Zo1//f1XvPzjQ3ZsjaerK7y4fYvDmM6nrV2uiUvSQT8RX56dtT5v3VziYi9DoJkmKb7GtI/DrqcplEXRd/JobZndKxV+cqXF7042eGeQY/nC61S/68L9re9wZ9Lm1+/vo0Uk1OgM2prA2sAQlGmzIPsovFEXLtsZSpaOKeqjNRQUWZAlEeTR2Ra/vLsm8OQl1w2L+nn56g8P+e9//sF0vcQ3v/0N1BUb83qX5FRo2SoSELx0VEo6K5sNCkkBhmqK9qBETvRWqoaxBe8C/SAr21k+vbvJ9dUi58dDMpqE1+lkQZpHEdSxbm+R2xwy75rFUShomJdUci0R1uU0ka5MtBdDW00TLkm4pBlqhkCa5iVQE1QSz0I04hFGRgm754SebuyNLqluhdde+T7/AwJdC8FXwil7AAAAAElFTkSuQmCC',
                          aspectRatio: 1,
                          src: '/static/c0fa9d9d293975806c98ae39c1dfe28a/71eb7/ScreenShot2020-11-30at18.32.22.png',
                          srcSet:
                            '/static/c0fa9d9d293975806c98ae39c1dfe28a/b5811/ScreenShot2020-11-30at18.32.22.png 25w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/8ba1e/ScreenShot2020-11-30at18.32.22.png 50w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/71eb7/ScreenShot2020-11-30at18.32.22.png 100w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/92ab1/ScreenShot2020-11-30at18.32.22.png 150w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/b3a76/ScreenShot2020-11-30at18.32.22.png 200w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/7b881/ScreenShot2020-11-30at18.32.22.png 1022w',
                          srcWebp: '/static/c0fa9d9d293975806c98ae39c1dfe28a/ff02b/ScreenShot2020-11-30at18.32.22.webp',
                          srcSetWebp:
                            '/static/c0fa9d9d293975806c98ae39c1dfe28a/8d998/ScreenShot2020-11-30at18.32.22.webp 25w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/48562/ScreenShot2020-11-30at18.32.22.webp 50w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/ff02b/ScreenShot2020-11-30at18.32.22.webp 100w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/1c591/ScreenShot2020-11-30at18.32.22.webp 150w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/a4d7d/ScreenShot2020-11-30at18.32.22.webp 200w,\n/static/c0fa9d9d293975806c98ae39c1dfe28a/b50d1/ScreenShot2020-11-30at18.32.22.webp 1022w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Carrots',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Carrots & Celery'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Carrots',
                oneLiner: null,
                priceInCents: '3300',
                stripePriceId: 'sku_carrots20',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: {
                  id: '45b4fd18-a961-59b0-b9f5-4c8869dac722',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/95fd74b9efdf43657f04a0bc35ce3ba3/fbd5c693/carrotref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAwDAQACEAMQAAABuoyaKhHGhy4xVf/EAB0QAAICAQUAAAAAAAAAAAAAAAECABESAxATIUH/2gAIAQEAAQUCKmlFRtPMk9+5Lss5Wv8A/8QAGREAAwADAAAAAAAAAAAAAAAAAAECESIx/9oACAEDAQE/AVEo0L6YP//EABkRAAIDAQAAAAAAAAAAAAAAAAABAhAhIv/aAAgBAgEBPwHWjojX/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERAjEQUXH/2gAIAQEABj8CqS4tgio0Y+jfRuH/xAAcEAACAwADAQAAAAAAAAAAAAABEQAhMUFRYZH/2gAIAQEAAT8hcAFOR86hUD8KKs2oAVJtrvyIAslTgJJ4MsgaWrEJSWmAT//aAAwDAQACAAMAAAAQhxCC/8QAGxEAAgEFAAAAAAAAAAAAAAAAAAERIUFRYfD/2gAIAQMBAT8QYSToO6OsQwf/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREhgfD/2gAIAQIBAT8QbzBSoIu2Q//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQVFxkf/aAAgBAQABPxDYWeTpN795qMHI98DpyIhJpcc4nv6Wsv2PyYUChafqPgfmBakIFQ9Yq3onlcJC0FHzvH8BWkGf/9k=',
                          aspectRatio: 1,
                          src: '/static/93d0cc2616eb44f163ec8182eaa964e4/b315d/carrotref.jpg',
                          srcSet:
                            '/static/93d0cc2616eb44f163ec8182eaa964e4/d0f88/carrotref.jpg 25w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/99438/carrotref.jpg 50w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/b315d/carrotref.jpg 100w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/dcd9a/carrotref.jpg 150w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/8295c/carrotref.jpg 200w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/67566/carrotref.jpg 581w',
                          srcWebp: '/static/93d0cc2616eb44f163ec8182eaa964e4/ff02b/carrotref.webp',
                          srcSetWebp:
                            '/static/93d0cc2616eb44f163ec8182eaa964e4/8d998/carrotref.webp 25w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/48562/carrotref.webp 50w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/ff02b/carrotref.webp 100w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/1c591/carrotref.webp 150w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/a4d7d/carrotref.webp 200w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/050c0/carrotref.webp 581w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Carrots',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_carrots191',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: 'ddc3100c-019d-58d4-8922-e4d681a7bf36',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/95fd74b9efdf43657f04a0bc35ce3ba3/fbd5c693/carrotref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAwDAQACEAMQAAABuoyaKhHGhy4xVf/EAB0QAAICAQUAAAAAAAAAAAAAAAECABESAxATIUH/2gAIAQEAAQUCKmlFRtPMk9+5Lss5Wv8A/8QAGREAAwADAAAAAAAAAAAAAAAAAAECESIx/9oACAEDAQE/AVEo0L6YP//EABkRAAIDAQAAAAAAAAAAAAAAAAABAhAhIv/aAAgBAgEBPwHWjojX/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERAjEQUXH/2gAIAQEABj8CqS4tgio0Y+jfRuH/xAAcEAACAwADAQAAAAAAAAAAAAABEQAhMUFRYZH/2gAIAQEAAT8hcAFOR86hUD8KKs2oAVJtrvyIAslTgJJ4MsgaWrEJSWmAT//aAAwDAQACAAMAAAAQhxCC/8QAGxEAAgEFAAAAAAAAAAAAAAAAAAERIUFRYfD/2gAIAQMBAT8QYSToO6OsQwf/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREhgfD/2gAIAQIBAT8QbzBSoIu2Q//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQVFxkf/aAAgBAQABPxDYWeTpN795qMHI98DpyIhJpcc4nv6Wsv2PyYUChafqPgfmBakIFQ9Yq3onlcJC0FHzvH8BWkGf/9k=',
                          aspectRatio: 1,
                          src: '/static/93d0cc2616eb44f163ec8182eaa964e4/b315d/carrotref.jpg',
                          srcSet:
                            '/static/93d0cc2616eb44f163ec8182eaa964e4/d0f88/carrotref.jpg 25w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/99438/carrotref.jpg 50w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/b315d/carrotref.jpg 100w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/dcd9a/carrotref.jpg 150w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/8295c/carrotref.jpg 200w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/67566/carrotref.jpg 581w',
                          srcWebp: '/static/93d0cc2616eb44f163ec8182eaa964e4/ff02b/carrotref.webp',
                          srcSetWebp:
                            '/static/93d0cc2616eb44f163ec8182eaa964e4/8d998/carrotref.webp 25w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/48562/carrotref.webp 50w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/ff02b/carrotref.webp 100w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/1c591/carrotref.webp 150w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/a4d7d/carrotref.webp 200w,\n/static/93d0cc2616eb44f163ec8182eaa964e4/050c0/carrotref.webp 581w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Multicolor Carrots',
                oneLiner: 'purples and oranges',
                priceInCents: '300',
                stripePriceId: 'sku_carrots267',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: 'e7d5a657-92ca-5811-9616-f762807118c2',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/71628cc10c162d66b38ee6061666e74c/f81b9d85/00000IMG_00000_BURST20200725143923369_COVER.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABzzrLasqbCagT/8QAHRAAAQIHAAAAAAAAAAAAAAAAAAERAgMQIiMxQf/aAAgBAQABBQLq2xGicmUUd6f/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwFj/8QAFREBAQAAAAAAAAAAAAAAAAAAIEH/2gAIAQIBAT8Bo//EABgQAAMBAQAAAAAAAAAAAAAAAAABEBGB/9oACAEBAAY/AjI2cuuf/8QAHBAAAwABBQAAAAAAAAAAAAAAAAERECExcYGR/9oACAEBAAE/IbpRxVKbOlHkTJs1Kxn/2gAMAwEAAgADAAAAEK/fQv/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/EEeFDj//xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/EB2Ds//EABwQAQEBAQADAQEAAAAAAAAAAAERACExcYFRsf/aAAgBAQABPxC0X6r6mp6iTPfccZHorwvtcqZPAfnf5h5vFKy2ZvQErk3f/9k=',
                          aspectRatio: 1,
                          src:
                            '/static/5d6f062a66eba64eff3371adbc6e11a6/b315d/00000IMG_00000_BURST20200725143923369_COVER.jpg',
                          srcSet:
                            '/static/5d6f062a66eba64eff3371adbc6e11a6/d0f88/00000IMG_00000_BURST20200725143923369_COVER.jpg 25w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/99438/00000IMG_00000_BURST20200725143923369_COVER.jpg 50w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/b315d/00000IMG_00000_BURST20200725143923369_COVER.jpg 100w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/dcd9a/00000IMG_00000_BURST20200725143923369_COVER.jpg 150w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/8295c/00000IMG_00000_BURST20200725143923369_COVER.jpg 200w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/b003e/00000IMG_00000_BURST20200725143923369_COVER.jpg 4032w',
                          srcWebp:
                            '/static/5d6f062a66eba64eff3371adbc6e11a6/ff02b/00000IMG_00000_BURST20200725143923369_COVER.webp',
                          srcSetWebp:
                            '/static/5d6f062a66eba64eff3371adbc6e11a6/8d998/00000IMG_00000_BURST20200725143923369_COVER.webp 25w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/48562/00000IMG_00000_BURST20200725143923369_COVER.webp 50w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/ff02b/00000IMG_00000_BURST20200725143923369_COVER.webp 100w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/1c591/00000IMG_00000_BURST20200725143923369_COVER.webp 150w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/a4d7d/00000IMG_00000_BURST20200725143923369_COVER.webp 200w,\n/static/5d6f062a66eba64eff3371adbc6e11a6/32718/00000IMG_00000_BURST20200725143923369_COVER.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sunshine Kabocha Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Sunshine Kabocha Squash',
                oneLiner: null,
                priceInCents: '499',
                stripePriceId: 'sku_squash,squash118',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '9be86475-e748-5bb3-8f97-7c35a26ac57f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/05fb5f5c539b8677e5828b4b9a16df5e/1a4442e7/14733162_1728208787503857_2505322687967002624_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAIBAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwQBAv/aAAwDAQACEAMQAAAB5W6prvNUYawacDo//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAxIi/9oACAEBAAEFAkTYZGA1EbMNkNbOWPFPdljkt//EABoRAAICAwAAAAAAAAAAAAAAAAERAAMQEiH/2gAIAQMBAT8BW3YbEYysf//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQIBAT8B1GBf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAEAISMSL/2gAIAQEABj8C8iJcrWniDAYsuJ1//8QAHRAAAgMAAgMAAAAAAAAAAAAAAAERIVFBYTGR8f/aAAgBAQABPyGa9h5Icux6I8EklZV2P7pPlDtCqTcI0NLL8P/aAAwDAQACAAMAAAAQgxdD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREP/aAAgBAwEBPxAyFOhAYHn/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QXSFNsIv/xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhMUFRcWGRof/aAAgBAQABPxAaqvdQfcMXp2jXpMro9hu0KVix7Asm22MPKsAL3czL+wZ39Q5pQA1gXT8RQowAAUDwHCf/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/339a9b92e9531687c779f2594af001f9/b315d/14733162_1728208787503857_2505322687967002624_n.jpg',
                          srcSet:
                            '/static/339a9b92e9531687c779f2594af001f9/d0f88/14733162_1728208787503857_2505322687967002624_n.jpg 25w,\n/static/339a9b92e9531687c779f2594af001f9/99438/14733162_1728208787503857_2505322687967002624_n.jpg 50w,\n/static/339a9b92e9531687c779f2594af001f9/b315d/14733162_1728208787503857_2505322687967002624_n.jpg 100w,\n/static/339a9b92e9531687c779f2594af001f9/dcd9a/14733162_1728208787503857_2505322687967002624_n.jpg 150w,\n/static/339a9b92e9531687c779f2594af001f9/8295c/14733162_1728208787503857_2505322687967002624_n.jpg 200w,\n/static/339a9b92e9531687c779f2594af001f9/29667/14733162_1728208787503857_2505322687967002624_n.jpg 1080w',
                          srcWebp:
                            '/static/339a9b92e9531687c779f2594af001f9/ff02b/14733162_1728208787503857_2505322687967002624_n.webp',
                          srcSetWebp:
                            '/static/339a9b92e9531687c779f2594af001f9/8d998/14733162_1728208787503857_2505322687967002624_n.webp 25w,\n/static/339a9b92e9531687c779f2594af001f9/48562/14733162_1728208787503857_2505322687967002624_n.webp 50w,\n/static/339a9b92e9531687c779f2594af001f9/ff02b/14733162_1728208787503857_2505322687967002624_n.webp 100w,\n/static/339a9b92e9531687c779f2594af001f9/1c591/14733162_1728208787503857_2505322687967002624_n.webp 150w,\n/static/339a9b92e9531687c779f2594af001f9/a4d7d/14733162_1728208787503857_2505322687967002624_n.webp 200w,\n/static/339a9b92e9531687c779f2594af001f9/78754/14733162_1728208787503857_2505322687967002624_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sunshine Kabocha Squash, Organic',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash,squash262',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Unpasteurized Apple Cider',
          department: ['Beverages'],
          category: ['Cider'],
          subcategory: ['Apple Cider'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['6'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Unpasteurized Apple  Cider',
                oneLiner: null,
                priceInCents: '849',
                stripePriceId: 'sku_cider167',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Unpasteurized Apple  Cider',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_cider168',
                unitLabel: 'gal',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Butternut Squash, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenveg19',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Beets',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Beets',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_beets9',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Beets',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_beets187',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Beets',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_beets197',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Golden Beets',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Golden Beets',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_beets8',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Golden Beets',
                oneLiner: "great in salads, won't stain your tablecloths",
                priceInCents: '200',
                stripePriceId: 'sku_beets228',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: 'c11e3822-4746-57d4-b5d9-be7f9712f575',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/4dad5535bfd4f2c7cedab1f7c6294ec3/e7f72bb6/123860144_4045838002097505_6235833355390438796_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB187ukKSNVBNUFSig/8QAGxABAAICAwAAAAAAAAAAAAAAAQACAxEQEiL/2gAIAQEAAQUCcnZyO+MBLaJZFrKeyf/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8BMIcn/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAJC/9oACAECAQE/AdFH/8QAHBAAAgICAwAAAAAAAAAAAAAAASEAEAIRMVFh/9oACAEBAAY/Agxjud+0xAlejxX/xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMUFRYf/aAAgBAQABPyFwCEBchTRAEdWZQTUZiPHqXDDJKhH53tiEQlRlHU1MEj2f/9oADAMBAAIAAwAAABCzx/3/xAAYEQEBAAMAAAAAAAAAAAAAAAABEBEhMf/aAAgBAwEBPxAZVOzdT//EABkRAQADAQEAAAAAAAAAAAAAAAEAETEQIf/aAAgBAgEBPxBas+sFTJm+f//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESExQVGBYdH/2gAIAQEAAT8QuClA344hW9JQiRCsKlo4T5HetLTOHTGVIlULnkP2E3orZv2OvqWOZhukh00xo4wIJ//Z',
                          aspectRatio: 1,
                          src:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/b315d/123860144_4045838002097505_6235833355390438796_n.jpg',
                          srcSet:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/d0f88/123860144_4045838002097505_6235833355390438796_n.jpg 25w,\n/static/d8c92c36d2a89e189091fe33fec422ea/99438/123860144_4045838002097505_6235833355390438796_n.jpg 50w,\n/static/d8c92c36d2a89e189091fe33fec422ea/b315d/123860144_4045838002097505_6235833355390438796_n.jpg 100w,\n/static/d8c92c36d2a89e189091fe33fec422ea/dcd9a/123860144_4045838002097505_6235833355390438796_n.jpg 150w,\n/static/d8c92c36d2a89e189091fe33fec422ea/8295c/123860144_4045838002097505_6235833355390438796_n.jpg 200w,\n/static/d8c92c36d2a89e189091fe33fec422ea/d1f84/123860144_4045838002097505_6235833355390438796_n.jpg 800w',
                          srcWebp:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/ff02b/123860144_4045838002097505_6235833355390438796_n.webp',
                          srcSetWebp:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/8d998/123860144_4045838002097505_6235833355390438796_n.webp 25w,\n/static/d8c92c36d2a89e189091fe33fec422ea/48562/123860144_4045838002097505_6235833355390438796_n.webp 50w,\n/static/d8c92c36d2a89e189091fe33fec422ea/ff02b/123860144_4045838002097505_6235833355390438796_n.webp 100w,\n/static/d8c92c36d2a89e189091fe33fec422ea/1c591/123860144_4045838002097505_6235833355390438796_n.webp 150w,\n/static/d8c92c36d2a89e189091fe33fec422ea/a4d7d/123860144_4045838002097505_6235833355390438796_n.webp 200w,\n/static/d8c92c36d2a89e189091fe33fec422ea/88bdf/123860144_4045838002097505_6235833355390438796_n.webp 800w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Golden Beets',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_beets253',
                unitLabel: 'lbs',
                unitQuantity: 3,
                mainImage: {
                  id: '5eb6a914-8d26-53fd-bbd0-6f3d78963a18',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/4add1e9021749657949c4a5ea8574e7d/f6726f31/123860144_4045838002097505_6235833355390438796_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB187ukKSNVBNUFSig/8QAGxABAAICAwAAAAAAAAAAAAAAAQACAxEQEiL/2gAIAQEAAQUCcnZyO+MBLaJZFrKeyf/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8BMIcn/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAJC/9oACAECAQE/AdFH/8QAHBAAAgICAwAAAAAAAAAAAAAAASEAEAIRMVFh/9oACAEBAAY/Agxjud+0xAlejxX/xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMUFRYf/aAAgBAQABPyFwCEBchTRAEdWZQTUZiPHqXDDJKhH53tiEQlRlHU1MEj2f/9oADAMBAAIAAwAAABCzx/3/xAAYEQEBAAMAAAAAAAAAAAAAAAABEBEhMf/aAAgBAwEBPxAZVOzdT//EABkRAQADAQEAAAAAAAAAAAAAAAEAETEQIf/aAAgBAgEBPxBas+sFTJm+f//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESExQVGBYdH/2gAIAQEAAT8QuClA344hW9JQiRCsKlo4T5HetLTOHTGVIlULnkP2E3orZv2OvqWOZhukh00xo4wIJ//Z',
                          aspectRatio: 1,
                          src:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/b315d/123860144_4045838002097505_6235833355390438796_n.jpg',
                          srcSet:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/d0f88/123860144_4045838002097505_6235833355390438796_n.jpg 25w,\n/static/d8c92c36d2a89e189091fe33fec422ea/99438/123860144_4045838002097505_6235833355390438796_n.jpg 50w,\n/static/d8c92c36d2a89e189091fe33fec422ea/b315d/123860144_4045838002097505_6235833355390438796_n.jpg 100w,\n/static/d8c92c36d2a89e189091fe33fec422ea/dcd9a/123860144_4045838002097505_6235833355390438796_n.jpg 150w,\n/static/d8c92c36d2a89e189091fe33fec422ea/8295c/123860144_4045838002097505_6235833355390438796_n.jpg 200w,\n/static/d8c92c36d2a89e189091fe33fec422ea/d1f84/123860144_4045838002097505_6235833355390438796_n.jpg 800w',
                          srcWebp:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/ff02b/123860144_4045838002097505_6235833355390438796_n.webp',
                          srcSetWebp:
                            '/static/d8c92c36d2a89e189091fe33fec422ea/8d998/123860144_4045838002097505_6235833355390438796_n.webp 25w,\n/static/d8c92c36d2a89e189091fe33fec422ea/48562/123860144_4045838002097505_6235833355390438796_n.webp 50w,\n/static/d8c92c36d2a89e189091fe33fec422ea/ff02b/123860144_4045838002097505_6235833355390438796_n.webp 100w,\n/static/d8c92c36d2a89e189091fe33fec422ea/1c591/123860144_4045838002097505_6235833355390438796_n.webp 150w,\n/static/d8c92c36d2a89e189091fe33fec422ea/a4d7d/123860144_4045838002097505_6235833355390438796_n.webp 200w,\n/static/d8c92c36d2a89e189091fe33fec422ea/88bdf/123860144_4045838002097505_6235833355390438796_n.webp 800w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sunshine Kabocha Squash Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Sunshine Kabocha Squash',
                oneLiner: null,
                priceInCents: '499',
                stripePriceId: 'sku_squash,squash118',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '9be86475-e748-5bb3-8f97-7c35a26ac57f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/05fb5f5c539b8677e5828b4b9a16df5e/1a4442e7/14733162_1728208787503857_2505322687967002624_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAIBAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwQBAv/aAAwDAQACEAMQAAAB5W6prvNUYawacDo//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAxIi/9oACAEBAAEFAkTYZGA1EbMNkNbOWPFPdljkt//EABoRAAICAwAAAAAAAAAAAAAAAAERAAMQEiH/2gAIAQMBAT8BW3YbEYysf//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQIBAT8B1GBf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAEAISMSL/2gAIAQEABj8C8iJcrWniDAYsuJ1//8QAHRAAAgMAAgMAAAAAAAAAAAAAAAERIVFBYTGR8f/aAAgBAQABPyGa9h5Icux6I8EklZV2P7pPlDtCqTcI0NLL8P/aAAwDAQACAAMAAAAQgxdD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREP/aAAgBAwEBPxAyFOhAYHn/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QXSFNsIv/xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhMUFRcWGRof/aAAgBAQABPxAaqvdQfcMXp2jXpMro9hu0KVix7Asm22MPKsAL3czL+wZ39Q5pQA1gXT8RQowAAUDwHCf/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/339a9b92e9531687c779f2594af001f9/b315d/14733162_1728208787503857_2505322687967002624_n.jpg',
                          srcSet:
                            '/static/339a9b92e9531687c779f2594af001f9/d0f88/14733162_1728208787503857_2505322687967002624_n.jpg 25w,\n/static/339a9b92e9531687c779f2594af001f9/99438/14733162_1728208787503857_2505322687967002624_n.jpg 50w,\n/static/339a9b92e9531687c779f2594af001f9/b315d/14733162_1728208787503857_2505322687967002624_n.jpg 100w,\n/static/339a9b92e9531687c779f2594af001f9/dcd9a/14733162_1728208787503857_2505322687967002624_n.jpg 150w,\n/static/339a9b92e9531687c779f2594af001f9/8295c/14733162_1728208787503857_2505322687967002624_n.jpg 200w,\n/static/339a9b92e9531687c779f2594af001f9/29667/14733162_1728208787503857_2505322687967002624_n.jpg 1080w',
                          srcWebp:
                            '/static/339a9b92e9531687c779f2594af001f9/ff02b/14733162_1728208787503857_2505322687967002624_n.webp',
                          srcSetWebp:
                            '/static/339a9b92e9531687c779f2594af001f9/8d998/14733162_1728208787503857_2505322687967002624_n.webp 25w,\n/static/339a9b92e9531687c779f2594af001f9/48562/14733162_1728208787503857_2505322687967002624_n.webp 50w,\n/static/339a9b92e9531687c779f2594af001f9/ff02b/14733162_1728208787503857_2505322687967002624_n.webp 100w,\n/static/339a9b92e9531687c779f2594af001f9/1c591/14733162_1728208787503857_2505322687967002624_n.webp 150w,\n/static/339a9b92e9531687c779f2594af001f9/a4d7d/14733162_1728208787503857_2505322687967002624_n.webp 200w,\n/static/339a9b92e9531687c779f2594af001f9/78754/14733162_1728208787503857_2505322687967002624_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sunshine Kabocha Squash, Organic',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash,squash262',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Miatake',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Miatake "Hen of the woods"',
                oneLiner: null,
                priceInCents: '1200',
                stripePriceId: 'sku_mushroom230',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Flat Leaf Parsley',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Flat Leaf Parsley',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_parsley43',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Flat Leaf Parsley',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_parsley42',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Basil',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Basil',
                oneLiner: null,
                priceInCents: '499',
                stripePriceId: 'sku_basil95',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Basil',
                oneLiner: null,
                priceInCents: '850',
                stripePriceId: 'sku_basil96',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Radish Trio Micro Mix',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Radish Trio Micro Mix',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_microgreen93',
                unitLabel: 'oz',
                unitQuantity: 3,
                mainImage: {
                  id: '292fa863-7c15-592d-a050-e9bb9ed7aa77',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/cf72d5692fdd40af14c6d18bb240f5f5/d615d63c/ScreenShot2020-11-11at20_39_53.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVQ4y3WU208cZRjG5y/xygu9NTTGciGJ4iEhxlhrsJEg1QYKLbXb0JbCAtbV3aVsFxFTCMdlT9M9sBwkjRUqtClFMcS2CCVFd5k9sRIvSlpg51t4fGfm2+kU68WTbzKT/OZ53vf9XoFlJqBq/QfSOFh6jDRKGgFLRSAnh8FIciJM534N/+ed8CxwjANHIHOYnAhxBdWTJUPPAYd0CRqIu1vn7lRYGNl4kBSAHBfBVF0FIzBL7IeF9wPHedxRQ8ww9lLDJHImebGzNoTsmleDq26DGjwZfAYqPIVpUbP0QYn2+K8BrPzSiAdzLXjysAu70hCQ9hLEp/6AJfw6XINqEp7WbVSvGdJh/L38Hbp7SmBuLsC49zAy95342W3G+nw75Ggf/aQXuwnFsVKGgA4WdBhFzVHErZgbiXuXMTNlQr31dRyvfxMmSxHM9mKcqStGf1sFbviqEOiqwubSFXLrIaifgFp9BZl3dJegGys9GPJ/jK8cRbBdfhullS+gqqEQH1YW4OiJV3D8VCGOflCAs7XFsJjew/K1M9hd68UOmWAJUYUK+XnboY5mFjsx2F8KW2sJak8dQM3JV1FnPYiaswdQUfEa3j34EopefhFNNZUwl7+F8Y4KbK90qNGZ6lIkhwRjqRFsUwdX5i0IDpTDankH9i8PwdlQCmvbEdg7j+BkfSHKSt5A7eEydDR+gYtl78PT/AlGHZ8iM38JuaRPHSshRw6VuLGFDvw+eR6/jpzDgucCQu3H4Ko7gbHvHbg+5STXVbCdboLf2YjJ/gbc7DNBmjJjzl2J2I0LYDQFyqwKSmdz5PBJ1IvYb3Zs3O/GxuQVzNqaMNc0iB97ezA7G4G1wYRWkwWO6mo8nDiHzbt2bC5+i63VboK5+CgRMD/Ie+RySxLxaLUf2SUvlnsHMWNrx+Lta5i//RO6Ln6NtvP1sH12DH9EPsejew6wNZdaO5nXjwMNS0AZHZr2vZQI6Y6Iu5E+SAtjWL7pxnSoGZfqPoKzthyt1YcwPXgaSA7QDfJoDeHSupzfLCkNqlyrrDSBxw9E/LPQifT0N8jcMSN2vRFLE2bc8rUgOtMCFu2hqD4O83Gg0mUDlPGuMwVOEbZX3chGXcjFPcj+OYC9uAtI0XOUShNzcZioS9AheWiaP6fyivB9GFQHV5aoZpKoz52quGiInHdkhOlQXltlXakK8fUV4FctwCXqsXnkiCGuUcN8K/PNrEKDBtBVg4wO/w+YfB4wtA8mGqL78S/xtCSVocUJqQAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/e2880b51403e176d3b347ffa339cbdee/71eb7/ScreenShot2020-11-11at20_39_53.png',
                          srcSet:
                            '/static/e2880b51403e176d3b347ffa339cbdee/b5811/ScreenShot2020-11-11at20_39_53.png 25w,\n/static/e2880b51403e176d3b347ffa339cbdee/8ba1e/ScreenShot2020-11-11at20_39_53.png 50w,\n/static/e2880b51403e176d3b347ffa339cbdee/71eb7/ScreenShot2020-11-11at20_39_53.png 100w,\n/static/e2880b51403e176d3b347ffa339cbdee/92ab1/ScreenShot2020-11-11at20_39_53.png 150w,\n/static/e2880b51403e176d3b347ffa339cbdee/b3a76/ScreenShot2020-11-11at20_39_53.png 200w,\n/static/e2880b51403e176d3b347ffa339cbdee/73cb8/ScreenShot2020-11-11at20_39_53.png 604w',
                          srcWebp: '/static/e2880b51403e176d3b347ffa339cbdee/ff02b/ScreenShot2020-11-11at20_39_53.webp',
                          srcSetWebp:
                            '/static/e2880b51403e176d3b347ffa339cbdee/8d998/ScreenShot2020-11-11at20_39_53.webp 25w,\n/static/e2880b51403e176d3b347ffa339cbdee/48562/ScreenShot2020-11-11at20_39_53.webp 50w,\n/static/e2880b51403e176d3b347ffa339cbdee/ff02b/ScreenShot2020-11-11at20_39_53.webp 100w,\n/static/e2880b51403e176d3b347ffa339cbdee/1c591/ScreenShot2020-11-11at20_39_53.webp 150w,\n/static/e2880b51403e176d3b347ffa339cbdee/a4d7d/ScreenShot2020-11-11at20_39_53.webp 200w,\n/static/e2880b51403e176d3b347ffa339cbdee/c08b7/ScreenShot2020-11-11at20_39_53.webp 604w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweet Shepherd Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet Shepherd Peppers',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_bellpepper242',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'White Eggplant',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'White Eggplant',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_eggplant131',
                unitLabel: null,
                unitQuantity: 3,
                mainImage: {
                  id: '85f64216-c41e-5481-a591-cc39da3e9ed6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/1de20eea31b7a6fb85627b1f4b1011b6/d8ab5d0a/IMG_20200912_135602.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABT7Eq1Wsx2BusI//EABsQAAEFAQEAAAAAAAAAAAAAAAEAAgMRIRAi/9oACAEBAAEFAsar0EVEfEpFgY5Ri+f/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwEh/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8BKf/EABoQAQABBQAAAAAAAAAAAAAAAAFBABASIFH/2gAIAQEABj8Clur2sZNf/8QAGxABAQEAAgMAAAAAAAAAAAAAAQARITFBUWH/2gAIAQEAAT8hAFdPOEgx0+mRAE8KcYe4fk2e4ZE9YeL/2gAMAwEAAgADAAAAEIMow//EABcRAAMBAAAAAAAAAAAAAAAAAAAQEUH/2gAIAQMBAT8Q2Eb/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARQf/aAAgBAgEBPxDLFL//xAAcEAEBAQACAwEAAAAAAAAAAAABEQAhMUFRgbH/2gAIAQEAAT8Q4gyUyF5mkAzvsMUafXCphFXroP3cwxAyV2OanD6YQvdXhyg7IzxmAG//2Q==',
                          aspectRatio: 1,
                          src: '/static/f9bd1d38a59d8ede43338fcd3a667191/b315d/IMG_20200912_135602.jpg',
                          srcSet:
                            '/static/f9bd1d38a59d8ede43338fcd3a667191/d0f88/IMG_20200912_135602.jpg 25w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/99438/IMG_20200912_135602.jpg 50w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/b315d/IMG_20200912_135602.jpg 100w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/dcd9a/IMG_20200912_135602.jpg 150w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/8295c/IMG_20200912_135602.jpg 200w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/b003e/IMG_20200912_135602.jpg 4032w',
                          srcWebp: '/static/f9bd1d38a59d8ede43338fcd3a667191/ff02b/IMG_20200912_135602.webp',
                          srcSetWebp:
                            '/static/f9bd1d38a59d8ede43338fcd3a667191/8d998/IMG_20200912_135602.webp 25w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/48562/IMG_20200912_135602.webp 50w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/ff02b/IMG_20200912_135602.webp 100w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/1c591/IMG_20200912_135602.webp 150w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/a4d7d/IMG_20200912_135602.webp 200w,\n/static/f9bd1d38a59d8ede43338fcd3a667191/32718/IMG_20200912_135602.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Blue Oyster Mushroom',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Blue Oyster Mushroom',
                oneLiner: 'a complex yet mild flavor ',
                priceInCents: '350',
                stripePriceId: 'sku_mushroom11',
                unitLabel: 'oz',
                unitQuantity: 6,
                mainImage: {
                  id: '39deaa69-9677-5ffd-9ae9-653c28e08f29',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/9d8f074f97543a236c61d5a283c31e85/54c3bc9c/IMG_20200724_115055.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAaIFpR0jTnClgD//xAAaEAACAgMAAAAAAAAAAAAAAAACEQABEiAh/9oACAEBAAEFAhTLhqXBvLX/xAAWEQADAAAAAAAAAAAAAAAAAAARICH/2gAIAQMBAT8BpT//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAWEAEBAQAAAAAAAAAAAAAAAAARADD/2gAIAQEABj8CIw//xAAcEAEAAgEFAAAAAAAAAAAAAAABABExECFRgZH/2gAIAQEAAT8hSu5ncFkZthLmYmHzRhtFn//aAAwDAQACAAMAAAAQsz/9/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQIf/aAAgBAwEBPxAI5Gf/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/EEus5//EAB0QAQEBAQABBQAAAAAAAAAAAAERACEQMVFxgfD/2gAIAQEAAT8QJQAhfqmFnA9Q/e+FbTIvCGiaSw4At4ynhA4B8ZLv/9k=',
                          aspectRatio: 1,
                          src: '/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/b315d/IMG_20200724_115055.jpg',
                          srcSet:
                            '/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/d0f88/IMG_20200724_115055.jpg 25w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/99438/IMG_20200724_115055.jpg 50w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/b315d/IMG_20200724_115055.jpg 100w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/dcd9a/IMG_20200724_115055.jpg 150w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/8295c/IMG_20200724_115055.jpg 200w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/b003e/IMG_20200724_115055.jpg 4032w',
                          srcWebp: '/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/ff02b/IMG_20200724_115055.webp',
                          srcSetWebp:
                            '/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/8d998/IMG_20200724_115055.webp 25w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/48562/IMG_20200724_115055.webp 50w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/ff02b/IMG_20200724_115055.webp 100w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/1c591/IMG_20200724_115055.webp 150w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/a4d7d/IMG_20200724_115055.webp 200w,\n/static/ff9ea7dcd0cd34ebc2bc0e1a54e07721/32718/IMG_20200724_115055.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Blue Oyster Mushroom',
                oneLiner: null,
                priceInCents: '2535',
                stripePriceId: 'sku_mushroom12',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Shiitake Mushrooms',
                oneLiner: null,
                priceInCents: '600',
                stripePriceId: 'sku_mushroom278',
                unitLabel: 'oz',
                unitQuantity: 6,
                mainImage: {
                  id: '8231cbb7-eaf5-54b7-bfd4-2ac8159f7b3e',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/743c34d69f89b5183a648b3f2a2d1aca/28c4df39/ScreenShot2020-11-30at18.35.46.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFg0lEQVQ4yx2U+VeTZxqG8xfMmU6ny8zY1ipVVARE9k0KskMCCZsEZAkgezQmEFDABCJhC5FSIOwSlqiDoKEISCsUHXamRevWjqfnOLY/zB9xzTvzw3fe73zne5/3eu/nfm7JyMUELsa6ITv5J1oy3JnSy7hxpYT5oRZ+cJhYalPxTVcN3zsG2Lo/wY7Tzu7fbbx6NMPbp+ssWnXsztjYu9PD85luJJ2FEVTLfVGGHmGkKoVH/bXsOYf411I/q5Z8JvWpzPU0sTrZJ4ra2Jiy8lAc8N2QiZ8fzzKsSWa5p5q5DjWPe7VI7lvUrI0Y2Bg3sTdh4Ps+DQstuXQXh1McewpjoQJ7o5rFATPLNiNzrWXMNF+gMfsMsy1F6JK8qFV4oZV5opF6IVn5qoz55vOCREpLtg/1qZ6URLsS4fkZ4adckAa6kRsXSEtZOg+tam5eUWLTplKb4sP1nDM0ZIVRmeBFabQb54M+R3KjJAZjVjDa5NOoEzxQBBzG3+VDQlw/JiXoC9TyQIz58bQVxWMtCqc+3Ze6dG+spXFYyqT061KZqM9mQKx6hQ+SKrk3/3sKo04Qe+oAAS5/JtDlfXIi3BmsyROa3WD/bi+vlyb4aXGS5b4G+jUKjLnh2GtSWWxXMVUtZcZ4DpMqCkmS7+eC6AOOH/gjngffJ/joh+jTQnix6uTt5oLoXC8vF+z85/Uev28/4N3mPG8e3cLZVsx0nZx5oxyHNprVrlLmOzRIjv3lD7gdeA9fcU3vwx9QKfXlzUM7v7/c5dWSnY1eHe9+/I7d21a2h+vE+wq/7S3yy/0uViwq7l1N4HZVHK+nO3i3OIQk0uMT4k8fJNbrUzKCXXEa8nnptPHb/io7Nxt4NnODn5dG+GXlNr9uPWDHYeUnRxMvplt50l1BjfQYBoUnL6eM7PTrkcj9DpEZepQM4UOz0GVzsI5VWy3rw9d4OtPFkz4t964p2eyt5Ne1WzwX1D+M6gV5OevWQgwZASSeeI97V+Q8sZQiyQh1JffsSSpkPkxezWLf0cKL+QFWhVmfz1hZsZaw1lfNtk3Dm+URvu27ykK9jK2eEja/usCtKhnRHh9TGOaCrSgCSW6MN0XSAHQpgdwU3dscNbI/IfAHtOyNNbBtb2J75AqvZzv595M77M92szF6jbnGLJaa0lhoTKM83p2CGA8uRLgiMeTF0FaWjCk/msfjHbwSdBs2Het2M1vjZp7daefNYr8oaOEfww2sD1Txz9mvefpgmPuNSuwXI6lND6A2KwJdeoiY5co0enVZ9GjSxbSk8cw5wPZ4M2vDRqHXOGN6JXtChndb9xi7nMRYcRCz+ni+aVLysL2QUVGw7UICDlMJU9eFhtYK4XRDsXB7Hp25weIHGftzgyI9LOzcauXtzgJPp9tEczQ8+9bBXZOKO2JMJy7Hsixs017wJZXyL/n68jkczeVICuJDKEmOoEJ8rEvzpzn9tCCRs3m3j7When68bWb3Zh2Tl6KZ67zE85W7jGmTmdQJqro0apRnUckiyYtwwyZuIOm6mENHZTYt5dmok4JRx5zAnOlHZ1Hc/zXdsjfiNOXgFHp15/mzIALi0aiZYXU0ppwwLBoV2sxEEny+wFwUK8JBnSVwcxiszsOoSiI37Bj6ZHeuZ/rTkObHdNslZhtzGL8cz2BFFC3nTovcTKW18CwNBclYtAUYilJJD/PE/8hHSCwVSizq8xgKUihXnEUacJwYj79SHneS5uwA2sXGNlU45mw/WnMDuZ7lhyb+GNGnDhHr54Eq8QxlinDKkkPIjxV52FyqxFyWSc35RAoSQ1GEuhN8/DMRGB+R4PU3soIOURLlSnHkEUqjjpAZdJBI90+I8TqM1O8oMgEgCzxJnK8rMd4u/BfNYsvy0clAngAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/f85ec2d0610e0bdf552ec0ce17463a0a/71eb7/ScreenShot2020-11-30at18.35.46.png',
                          srcSet:
                            '/static/f85ec2d0610e0bdf552ec0ce17463a0a/b5811/ScreenShot2020-11-30at18.35.46.png 25w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/8ba1e/ScreenShot2020-11-30at18.35.46.png 50w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/71eb7/ScreenShot2020-11-30at18.35.46.png 100w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/92ab1/ScreenShot2020-11-30at18.35.46.png 150w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/b3a76/ScreenShot2020-11-30at18.35.46.png 200w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/d7ed8/ScreenShot2020-11-30at18.35.46.png 1136w',
                          srcWebp: '/static/f85ec2d0610e0bdf552ec0ce17463a0a/ff02b/ScreenShot2020-11-30at18.35.46.webp',
                          srcSetWebp:
                            '/static/f85ec2d0610e0bdf552ec0ce17463a0a/8d998/ScreenShot2020-11-30at18.35.46.webp 25w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/48562/ScreenShot2020-11-30at18.35.46.webp 50w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/ff02b/ScreenShot2020-11-30at18.35.46.webp 100w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/1c591/ScreenShot2020-11-30at18.35.46.webp 150w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/a4d7d/ScreenShot2020-11-30at18.35.46.webp 200w,\n/static/f85ec2d0610e0bdf552ec0ce17463a0a/a2a8c/ScreenShot2020-11-30at18.35.46.webp 1136w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweet Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Sweet Potatoes',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_potato255',
                unitLabel: 'lb',
                unitQuantity: 3,
                mainImage: {
                  id: '789e2063-a3eb-5fff-9861-d916159bf940',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c02cf21598889857ed1e4f73c1cbd40e/cdab2750/23735019_498746470508743_7799482767825174528_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCAf/aAAwDAQACEAMQAAABz5q6BblKkim8K4id/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDIQAEERL/2gAIAQEAAQUCsgpbL5NvgHUzXHZWNxRq6//EABgRAQADAQAAAAAAAAAAAAAAAAABAjER/9oACAEDAQE/AdcVxD//xAAZEQADAAMAAAAAAAAAAAAAAAAAARECEDH/2gAIAQIBAT8Bs1l0bdP/xAAbEAADAQEAAwAAAAAAAAAAAAAAARECEiFxgf/aAAgBAQAGPwKNrNONOeyMbsOd/GeSGi6P/8QAHBAAAgMBAAMAAAAAAAAAAAAAAREAITFRQYHw/9oACAEBAAE/IQHqdDZZYj6oesgOJCqhQE8eo9jIokRVxAWaoUs7FmZc/9oADAMBAAIAAwAAABD3GP3/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAEDAQE/EEmeQMv/xAAXEQEBAQEAAAAAAAAAAAAAAAABACGx/9oACAECAQE/EGBuMRbf/8QAHRABAAMAAgMBAAAAAAAAAAAAAQARITFBUYGRsf/aAAgBAQABPxArczbPZ6WOIBctp8WP2JmtViPJDcC6N+x2aLH5OA9j5Cy9agDVQm670y5nxrOeMidCs5rJ/9k=',
                          aspectRatio: 1,
                          src:
                            '/static/b220dffddfc76490df22d96daffd11cb/b315d/23735019_498746470508743_7799482767825174528_n.jpg',
                          srcSet:
                            '/static/b220dffddfc76490df22d96daffd11cb/d0f88/23735019_498746470508743_7799482767825174528_n.jpg 25w,\n/static/b220dffddfc76490df22d96daffd11cb/99438/23735019_498746470508743_7799482767825174528_n.jpg 50w,\n/static/b220dffddfc76490df22d96daffd11cb/b315d/23735019_498746470508743_7799482767825174528_n.jpg 100w,\n/static/b220dffddfc76490df22d96daffd11cb/dcd9a/23735019_498746470508743_7799482767825174528_n.jpg 150w,\n/static/b220dffddfc76490df22d96daffd11cb/8295c/23735019_498746470508743_7799482767825174528_n.jpg 200w,\n/static/b220dffddfc76490df22d96daffd11cb/29667/23735019_498746470508743_7799482767825174528_n.jpg 1080w',
                          srcWebp:
                            '/static/b220dffddfc76490df22d96daffd11cb/ff02b/23735019_498746470508743_7799482767825174528_n.webp',
                          srcSetWebp:
                            '/static/b220dffddfc76490df22d96daffd11cb/8d998/23735019_498746470508743_7799482767825174528_n.webp 25w,\n/static/b220dffddfc76490df22d96daffd11cb/48562/23735019_498746470508743_7799482767825174528_n.webp 50w,\n/static/b220dffddfc76490df22d96daffd11cb/ff02b/23735019_498746470508743_7799482767825174528_n.webp 100w,\n/static/b220dffddfc76490df22d96daffd11cb/1c591/23735019_498746470508743_7799482767825174528_n.webp 150w,\n/static/b220dffddfc76490df22d96daffd11cb/a4d7d/23735019_498746470508743_7799482767825174528_n.webp 200w,\n/static/b220dffddfc76490df22d96daffd11cb/78754/23735019_498746470508743_7799482767825174528_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Onions',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Onions, Shallots & Leeks'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Onions',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_onion200',
                unitLabel: null,
                unitQuantity: 4,
                mainImage: {
                  id: '63487c1b-60f4-5365-8c06-c61002953ad4',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/7ba011f5ee1acbf26b9f310da7282e34/6a108e6b/124194331_3549733745094494_9184526110696144697_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgEE/9oADAMBAAIQAxAAAAHyVzR0wgq8hkBP/8QAGxABAAICAwAAAAAAAAAAAAAAAQIREiEAAzH/2gAIAQEAAQUCvU6wITpcOZimgiT7kucvf//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQMBAT8BhcZ//8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQIBAT8BIf/EAB4QAQACAQQDAAAAAAAAAAAAAAEAMRECEBIhIjJh/9oACAEBAAY/AtPHtvEyWk8VT5PWyUjitg1Tvb//xAAdEAEBAQEAAQUAAAAAAAAAAAABEQBBITFRcYHB/9oACAEBAAE/ISWMPU3jqlDpEZ3POWCIdDMqBOBIk+5ruJPzdJ1wnu+d/9oADAMBAAIAAwAAABBs0Pz/xAAZEQACAwEAAAAAAAAAAAAAAAAAEQEhMUH/2gAIAQMBAT8QhOjCo0f/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARYf/aAAgBAgEBPxBaVL//xAAdEAEAAgIDAQEAAAAAAAAAAAABESEAMUFRYeFx/9oACAEBAAE/EJSnxRQ7E4D7gSSjkys6xBGwFhrHjFkb2p91gHqw3Vn5iuNJ+Wbch3dSMG4vTmMCNWpbl1n/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/624ab8889e5848ffe8baed9ee8244704/b315d/124194331_3549733745094494_9184526110696144697_n.jpg',
                          srcSet:
                            '/static/624ab8889e5848ffe8baed9ee8244704/d0f88/124194331_3549733745094494_9184526110696144697_n.jpg 25w,\n/static/624ab8889e5848ffe8baed9ee8244704/99438/124194331_3549733745094494_9184526110696144697_n.jpg 50w,\n/static/624ab8889e5848ffe8baed9ee8244704/b315d/124194331_3549733745094494_9184526110696144697_n.jpg 100w,\n/static/624ab8889e5848ffe8baed9ee8244704/dcd9a/124194331_3549733745094494_9184526110696144697_n.jpg 150w,\n/static/624ab8889e5848ffe8baed9ee8244704/8295c/124194331_3549733745094494_9184526110696144697_n.jpg 200w,\n/static/624ab8889e5848ffe8baed9ee8244704/5926f/124194331_3549733745094494_9184526110696144697_n.jpg 1000w',
                          srcWebp:
                            '/static/624ab8889e5848ffe8baed9ee8244704/ff02b/124194331_3549733745094494_9184526110696144697_n.webp',
                          srcSetWebp:
                            '/static/624ab8889e5848ffe8baed9ee8244704/8d998/124194331_3549733745094494_9184526110696144697_n.webp 25w,\n/static/624ab8889e5848ffe8baed9ee8244704/48562/124194331_3549733745094494_9184526110696144697_n.webp 50w,\n/static/624ab8889e5848ffe8baed9ee8244704/ff02b/124194331_3549733745094494_9184526110696144697_n.webp 100w,\n/static/624ab8889e5848ffe8baed9ee8244704/1c591/124194331_3549733745094494_9184526110696144697_n.webp 150w,\n/static/624ab8889e5848ffe8baed9ee8244704/a4d7d/124194331_3549733745094494_9184526110696144697_n.webp 200w,\n/static/624ab8889e5848ffe8baed9ee8244704/08b8c/124194331_3549733745094494_9184526110696144697_n.webp 1000w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Black Beauty Eggplant',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Black Beauty Eggplant',
                oneLiner: null,
                priceInCents: '99',
                stripePriceId: 'sku_eggplant38',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '03029b55-97b9-550c-9a48-f7283830eb28',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/d82e46f83a02f614543615e66bdcc6e0/fdbb4f25/Fat_Eggplant_DEM.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAaeOXeHVTR0S4n//xAAdEAEAAgEFAQAAAAAAAAAAAAABAgMAERITISIx/9oACAEBAAEFAmaSl0mrkrd2CWJExPFNZyP3/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBEh/9oACAECAQE/AUsOkq//xAAbEAACAgMBAAAAAAAAAAAAAAAAARExITJhcf/aAAgBAQAGPwJq+lqSZRizVFDPBn//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhQTFRcYGR/9oACAEBAAE/IUSq1GaoU9kA7fZNY5ZDqXPk7gTJvxBu2bgU5blDH9p//9oADAMBAAIAAwAAABAf5/z/xAAZEQEAAgMAAAAAAAAAAAAAAAABABARITH/2gAIAQMBAT8QXM0Q7X//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EIythH//xAAdEAEAAgIDAQEAAAAAAAAAAAABESEAMUFRcWHR/9oACAEBAAE/ELlOnCO6OL5cCsSiWG9d+Zp3uKP5k0spEnS/s44ScKrWHYKtAmJhQxA2Sw48toFXiLUWo9z/2Q==',
                          aspectRatio: 1,
                          src: '/static/5bc9c833590e8728053e28efe618a596/b315d/Fat_Eggplant_DEM.jpg',
                          srcSet:
                            '/static/5bc9c833590e8728053e28efe618a596/d0f88/Fat_Eggplant_DEM.jpg 25w,\n/static/5bc9c833590e8728053e28efe618a596/99438/Fat_Eggplant_DEM.jpg 50w,\n/static/5bc9c833590e8728053e28efe618a596/b315d/Fat_Eggplant_DEM.jpg 100w,\n/static/5bc9c833590e8728053e28efe618a596/dcd9a/Fat_Eggplant_DEM.jpg 150w,\n/static/5bc9c833590e8728053e28efe618a596/8295c/Fat_Eggplant_DEM.jpg 200w,\n/static/5bc9c833590e8728053e28efe618a596/43e91/Fat_Eggplant_DEM.jpg 3024w',
                          srcWebp: '/static/5bc9c833590e8728053e28efe618a596/ff02b/Fat_Eggplant_DEM.webp',
                          srcSetWebp:
                            '/static/5bc9c833590e8728053e28efe618a596/8d998/Fat_Eggplant_DEM.webp 25w,\n/static/5bc9c833590e8728053e28efe618a596/48562/Fat_Eggplant_DEM.webp 50w,\n/static/5bc9c833590e8728053e28efe618a596/ff02b/Fat_Eggplant_DEM.webp 100w,\n/static/5bc9c833590e8728053e28efe618a596/1c591/Fat_Eggplant_DEM.webp 150w,\n/static/5bc9c833590e8728053e28efe618a596/a4d7d/Fat_Eggplant_DEM.webp 200w,\n/static/5bc9c833590e8728053e28efe618a596/e800b/Fat_Eggplant_DEM.webp 3024w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Black Beauty Eggplant',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_eggplant37',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Cabbage',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Cabbages & Brussel Sprouts'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Cabbage',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cabbage223',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '9b13e5d2-c468-511d-a5ed-412ed8520eec',
                  localFiles: [
                    {
                      url: 'https://dl.airtable.com/.attachments/da185fac52b187e56e959eecc1c9ada0/7a36aa2e/cabbage.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMBBAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAFLaRnzNE3gKPSD6P/EABoQAQEBAAMBAAAAAAAAAAAAAAECAAMREyH/2gAIAQEAAQUCinzQ3oG+08ZLV0FCzu+tMCf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAVEQEBAAAAAAAAAAAAAAAAAAAgMf/aAAgBAgEBPwGD/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAEBKBAiIx/9oACAEBAAY/AkOLM76E8UeRhzhQeqBr/8QAGxAAAgMBAQEAAAAAAAAAAAAAAREAITFBgWH/2gAIAQEAAT8hemM3kskgV0T+xheIhVIgeYId6KhUHS0EEDTaMJp6o835P//aAAwDAQACAAMAAAAQ7ADD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxA7YxLf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREAEP/aAAgBAgEBPxCguGlnDf/EABsQAQEAAgMBAAAAAAAAAAAAAAERACFBUWGB/9oACAEBAAE/ECCQwBtecCjigm/KfXFj6bWAligtDqGOzAFdDs8xehuko+YIemGwqhcSTDV724faV3FDP//Z',
                          aspectRatio: 1,
                          src: '/static/bbdae0cba036e7479f9e77f4351b4005/b315d/cabbage.jpg',
                          srcSet:
                            '/static/bbdae0cba036e7479f9e77f4351b4005/d0f88/cabbage.jpg 25w,\n/static/bbdae0cba036e7479f9e77f4351b4005/99438/cabbage.jpg 50w,\n/static/bbdae0cba036e7479f9e77f4351b4005/b315d/cabbage.jpg 100w,\n/static/bbdae0cba036e7479f9e77f4351b4005/dcd9a/cabbage.jpg 150w,\n/static/bbdae0cba036e7479f9e77f4351b4005/8295c/cabbage.jpg 200w,\n/static/bbdae0cba036e7479f9e77f4351b4005/29667/cabbage.jpg 1080w',
                          srcWebp: '/static/bbdae0cba036e7479f9e77f4351b4005/ff02b/cabbage.webp',
                          srcSetWebp:
                            '/static/bbdae0cba036e7479f9e77f4351b4005/8d998/cabbage.webp 25w,\n/static/bbdae0cba036e7479f9e77f4351b4005/48562/cabbage.webp 50w,\n/static/bbdae0cba036e7479f9e77f4351b4005/ff02b/cabbage.webp 100w,\n/static/bbdae0cba036e7479f9e77f4351b4005/1c591/cabbage.webp 150w,\n/static/bbdae0cba036e7479f9e77f4351b4005/a4d7d/cabbage.webp 200w,\n/static/bbdae0cba036e7479f9e77f4351b4005/78754/cabbage.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Red Cabbage',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cabbage224',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Large Green Cabbage',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cabbage227',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Potatoes',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_potato92',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: 'cd391263-f7ed-58bd-8dbc-6dd79366b8ee',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/89bbf9cd5306964be0c14874287ed0cc/563290dd/potatoesref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQD/2gAMAwEAAhADEAAAAdzxMku503sSzjDH/8QAGhABAAIDAQAAAAAAAAAAAAAAAQACAxESIf/aAAgBAQABBQJyk6bSuUrVCs62jofK5LvM/8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQMBAT8BKf/EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8BpBZ//8QAHxAAAgEDBQEAAAAAAAAAAAAAAAEREBKRAiEiMUFx/9oACAEBAAY/AtjlkhSPqC67Koo+i1e0/8QAHRABAQEBAAEFAAAAAAAAAAAAAREAIUExUWFxgf/aAAgBAQABPyFa0rrnmBggGe53RE7QPV+9dseDHMk/ZcIOF6fLmMnUPjVevXf/2gAMAwEAAgADAAAAEFPIfP/EABkRAAMAAwAAAAAAAAAAAAAAAAABERAxYf/aAAgBAwEBPxCJF6aY/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQITER/9oACAECAQE/EH1Y7YaUf//EAB4QAQACAgIDAQAAAAAAAAAAAAERIQBRMUFhgaFx/9oACAEBAAE/ECpmbgj3lB1cmB8Bv8zmEyVD8+YCXIhtOu9hhETkVCHZ7y6FytAW5isIiEglgbxOEEiVTowkopatrn//2Q==',
                          aspectRatio: 1,
                          src: '/static/2d866e23b0c670169ddea967f44a953f/b315d/potatoesref.jpg',
                          srcSet:
                            '/static/2d866e23b0c670169ddea967f44a953f/d0f88/potatoesref.jpg 25w,\n/static/2d866e23b0c670169ddea967f44a953f/99438/potatoesref.jpg 50w,\n/static/2d866e23b0c670169ddea967f44a953f/b315d/potatoesref.jpg 100w,\n/static/2d866e23b0c670169ddea967f44a953f/dcd9a/potatoesref.jpg 150w,\n/static/2d866e23b0c670169ddea967f44a953f/8295c/potatoesref.jpg 200w,\n/static/2d866e23b0c670169ddea967f44a953f/29667/potatoesref.jpg 1080w',
                          srcWebp: '/static/2d866e23b0c670169ddea967f44a953f/ff02b/potatoesref.webp',
                          srcSetWebp:
                            '/static/2d866e23b0c670169ddea967f44a953f/8d998/potatoesref.webp 25w,\n/static/2d866e23b0c670169ddea967f44a953f/48562/potatoesref.webp 50w,\n/static/2d866e23b0c670169ddea967f44a953f/ff02b/potatoesref.webp 100w,\n/static/2d866e23b0c670169ddea967f44a953f/1c591/potatoesref.webp 150w,\n/static/2d866e23b0c670169ddea967f44a953f/a4d7d/potatoesref.webp 200w,\n/static/2d866e23b0c670169ddea967f44a953f/78754/potatoesref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Fingerling Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: true,
                name: 'Fingerling Potatoes',
                oneLiner: null,
                priceInCents: '350',
                stripePriceId: 'sku_potato294',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: {
                  id: 'a2ca30a0-21bd-5030-b585-a842044e619b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/36d019d42c776583bec247309b8ea177/401cb488/fingerling_potatoes.jpeg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAdac2mO27mReCyAf/8QAGhAAAwADAQAAAAAAAAAAAAAAAAECESAhMf/aAAgBAQABBQKujJaSj3I6vT//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BI//EAB0QAAICAQUAAAAAAAAAAAAAAAERADFRAhIgIkH/2gAIAQEABj8CCe2BEDXURNR+YiZGTOtcP//EABwQAQEAAgIDAAAAAAAAAAAAAAERACEQQTFRYf/aAAgBAQABPyF3fRv7m6KSx7wSBdHKLRiR6waWFPBblO86XXNz/9oADAMBAAIAAwAAABAzH4L/xAAXEQEAAwAAAAAAAAAAAAAAAAABABAR/9oACAEDAQE/EBml/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAARIDH/2gAIAQIBAT8QDI//xAAeEAEAAgIDAAMAAAAAAAAAAAABABEhMUFRcWGR4f/aAAgBAQABPxB7A5QFsU9+zA0WXGGPnybUlBpONQY30dTpNL3UpVVfsYBRAot9SgaADqO6lp//2Q==',
                          aspectRatio: 1,
                          src: '/static/dd03f04c5f8716b78eeb512195e6262a/b315d/fingerling_potatoes.jpg',
                          srcSet:
                            '/static/dd03f04c5f8716b78eeb512195e6262a/d0f88/fingerling_potatoes.jpg 25w,\n/static/dd03f04c5f8716b78eeb512195e6262a/99438/fingerling_potatoes.jpg 50w,\n/static/dd03f04c5f8716b78eeb512195e6262a/b315d/fingerling_potatoes.jpg 100w,\n/static/dd03f04c5f8716b78eeb512195e6262a/dcd9a/fingerling_potatoes.jpg 150w,\n/static/dd03f04c5f8716b78eeb512195e6262a/8295c/fingerling_potatoes.jpg 200w,\n/static/dd03f04c5f8716b78eeb512195e6262a/e4ea1/fingerling_potatoes.jpg 616w',
                          srcWebp: '/static/dd03f04c5f8716b78eeb512195e6262a/ff02b/fingerling_potatoes.webp',
                          srcSetWebp:
                            '/static/dd03f04c5f8716b78eeb512195e6262a/8d998/fingerling_potatoes.webp 25w,\n/static/dd03f04c5f8716b78eeb512195e6262a/48562/fingerling_potatoes.webp 50w,\n/static/dd03f04c5f8716b78eeb512195e6262a/ff02b/fingerling_potatoes.webp 100w,\n/static/dd03f04c5f8716b78eeb512195e6262a/1c591/fingerling_potatoes.webp 150w,\n/static/dd03f04c5f8716b78eeb512195e6262a/a4d7d/fingerling_potatoes.webp 200w,\n/static/dd03f04c5f8716b78eeb512195e6262a/f6e4a/fingerling_potatoes.webp 616w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Raw Honey',
          department: ['Produce'],
          category: ['Honey'],
          subcategory: ['Raw Honey'],
          sortOrderCategories: [7],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Raw Honey',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_rawhoney150',
                unitLabel: 'pint',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Lemon Balm',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Lemon Balm',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_mint62',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '46322007-5fc9-5359-bf42-7563cc094f95',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/1c8ae4d31dd0b0114c4437a36ae1dfab/e9fefc2f/124851256_307143553585712_1164292250971058554_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//aAAwDAQACEAMQAAABpnqRLFaRBa9YQ//EABsQAQACAwEBAAAAAAAAAAAAAAEAEwIDERIi/9oACAEBAAEFAqvnwcqjuBdhyxJZlPeUxVP/xAAYEQEAAwEAAAAAAAAAAAAAAAAAAQISEf/aAAgBAwEBPwHTNpS6/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/AWd//8QAGhAAAwADAQAAAAAAAAAAAAAAABExARAyEv/aAAgBAQAGPwKiZRenkuqdHWT/xAAcEAEAAgIDAQAAAAAAAAAAAAABABExQSFxkYH/2gAIAQEAAT8hqI7rDEa6nHc+Twg6li0GlrcxrJplz2hVfWf/2gAMAwEAAgADAAAAEBAHwP/EABgRAAMBAQAAAAAAAAAAAAAAAAABETFR/9oACAEDAQE/EK4JCqDDa6f/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Q20iP/8QAHxABAAMAAgEFAAAAAAAAAAAAAQARITFBUWGRscHR/9oACAEBAAE/EChaOAP3iOYYbYPmdB6Wj9SgXcBSwHInbNbjgcHvkawCg8vUrQIN4Ag10+ci0yx//9k=',
                          aspectRatio: 1,
                          src:
                            '/static/96154f2e63559c8d22d8688b5a87f466/b315d/124851256_307143553585712_1164292250971058554_n.jpg',
                          srcSet:
                            '/static/96154f2e63559c8d22d8688b5a87f466/d0f88/124851256_307143553585712_1164292250971058554_n.jpg 25w,\n/static/96154f2e63559c8d22d8688b5a87f466/99438/124851256_307143553585712_1164292250971058554_n.jpg 50w,\n/static/96154f2e63559c8d22d8688b5a87f466/b315d/124851256_307143553585712_1164292250971058554_n.jpg 100w,\n/static/96154f2e63559c8d22d8688b5a87f466/dcd9a/124851256_307143553585712_1164292250971058554_n.jpg 150w,\n/static/96154f2e63559c8d22d8688b5a87f466/8295c/124851256_307143553585712_1164292250971058554_n.jpg 200w,\n/static/96154f2e63559c8d22d8688b5a87f466/29667/124851256_307143553585712_1164292250971058554_n.jpg 1080w',
                          srcWebp:
                            '/static/96154f2e63559c8d22d8688b5a87f466/ff02b/124851256_307143553585712_1164292250971058554_n.webp',
                          srcSetWebp:
                            '/static/96154f2e63559c8d22d8688b5a87f466/8d998/124851256_307143553585712_1164292250971058554_n.webp 25w,\n/static/96154f2e63559c8d22d8688b5a87f466/48562/124851256_307143553585712_1164292250971058554_n.webp 50w,\n/static/96154f2e63559c8d22d8688b5a87f466/ff02b/124851256_307143553585712_1164292250971058554_n.webp 100w,\n/static/96154f2e63559c8d22d8688b5a87f466/1c591/124851256_307143553585712_1164292250971058554_n.webp 150w,\n/static/96154f2e63559c8d22d8688b5a87f466/a4d7d/124851256_307143553585712_1164292250971058554_n.webp 200w,\n/static/96154f2e63559c8d22d8688b5a87f466/78754/124851256_307143553585712_1164292250971058554_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Lemon Balm',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_mint61',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Wolf River Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Wolf River Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple161',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Wolf River Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple162',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Organic Sweet Pepper, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Organic Sweet Pepper, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenveg84',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Honeynut Squash, Organic copy',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_squash,squash,squash18',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: {
                  id: '987a15e0-8872-5544-bcf8-7ba831b2be5f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash,squash,squash17',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: {
                  id: 'be033d02-fb9e-559d-9580-8e62ddc6dbeb',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: true,
                name: 'Honeynut Squash, Organic',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_squash260',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Honeynut Squash, Organic copy',
                oneLiner: null,
                priceInCents: '2601',
                stripePriceId: 'sku_squash263',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: {
                  id: 'f928d9bb-a781-5022-80d3-98d146076a38',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Organic Blueberries, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Organic Blueberries, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit83',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: '4e904ed5-b6a5-545c-81f6-0744208a1e7b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/35fdf66a61829ec15600c3fc88d65acf/35c3738d/ScreenShot2020-11-11at19_11_27.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADR0lEQVQ4y11VWU9TYRDt/zNxKW3pvu8tLWUppdvtSukGBYEiBZTFhMQnE+wTCRqIxogSo9EHf8w4Zy63Cw+T+XrvneXMOfNVZ7IUCWY0F2jybJjNk9NTo0i8Q1G2cLSt+lib3N66vNdiRrHsdfhhNBenXs5aFYrEOpRM9SgUbdLC0jalM7vik6lNCoTWKTbXke9GcVpCrSs1mepjc11KcGAmu0e5wr745ZUdKigH1Om+pUrtSDpNzG9y0kcdTibUOkQHO3vvKLmwRR7/Gj3TZ0hvyApMi12hTK5Prc45efnd49gHyOP5GWY5YbgpyYLslfIh1RtvpLPe9gX1ti7IF2zQcnqX/MH1qdjRDCcrYC6o7GJC3N6aBEdiKiHBsDo7p6dKLn4Hm0KoQVZZVQ1nQCqWBhRPbojHzNrcYblyxL8PqNU+p7X1EznPmHJTsTq1qyLZnGXVHCXpLBxrkS+wJrBCkZYQMMcF4OOJrnQaijTJ4a6KOdmQRxLanBWBBKlAb0gQDLdkloFQU5ICui/QEJK87PEMhjkjBqxb7aUxZL0xJxWs3KHJUhDTurY6VG8XBKrhO7urIs9nTHkxozZDs61ET56maX/wnu7v/9LxySWdng3p290f+jC8pV+//9HV1Ve6/nhHn7/8FLv+9J2Gwxu6uf1BadboC5aVQNYYgtYSqS0m4LVIBQSUq8dyrjVOqFQ5ZJG/Esvm9ymvDISwGksKo3jOCYFKZmi2KbKfmAGSa+rX9hUekjA9SMzM0sI3mrczB5DZmBSeCYYLC0VbQsrK6q50g7VbZRnNL/T43KfF9EvRJb4LP3h8DwLR2EjYELRaUeH1KolBDlAAmPX46yoJXBzQpjbEMkYjCdEyqoW5WpCr+XmXURkeckHnOHtZl5pMIDHpjg3SQrzFNiEbGKhH21gpVFxc3qYVhrzEMPNFJoNvntV8X4QNmWEFIWjcTkBkHK+edgWpg0c1zMnBEDFLpTxgZvtUrR/zhdsW6PHEhuw8np+eXcr1hiI6vSknc0tn9kQOWSbCwqIFPFTGGLByKIDdBgFyQXBnSACyytVDSvHla2CEI1JcLBvZSaYfQtc2x+2ry2572MsN41HHMfkXoMUY+dl/RuKmChiVXIgAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/ad9cb1195e1396173cf8166890e1f85d/71eb7/ScreenShot2020-11-11at19_11_27.png',
                          srcSet:
                            '/static/ad9cb1195e1396173cf8166890e1f85d/b5811/ScreenShot2020-11-11at19_11_27.png 25w,\n/static/ad9cb1195e1396173cf8166890e1f85d/8ba1e/ScreenShot2020-11-11at19_11_27.png 50w,\n/static/ad9cb1195e1396173cf8166890e1f85d/71eb7/ScreenShot2020-11-11at19_11_27.png 100w,\n/static/ad9cb1195e1396173cf8166890e1f85d/92ab1/ScreenShot2020-11-11at19_11_27.png 150w,\n/static/ad9cb1195e1396173cf8166890e1f85d/b3a76/ScreenShot2020-11-11at19_11_27.png 200w,\n/static/ad9cb1195e1396173cf8166890e1f85d/d282b/ScreenShot2020-11-11at19_11_27.png 539w',
                          srcWebp: '/static/ad9cb1195e1396173cf8166890e1f85d/ff02b/ScreenShot2020-11-11at19_11_27.webp',
                          srcSetWebp:
                            '/static/ad9cb1195e1396173cf8166890e1f85d/8d998/ScreenShot2020-11-11at19_11_27.webp 25w,\n/static/ad9cb1195e1396173cf8166890e1f85d/48562/ScreenShot2020-11-11at19_11_27.webp 50w,\n/static/ad9cb1195e1396173cf8166890e1f85d/ff02b/ScreenShot2020-11-11at19_11_27.webp 100w,\n/static/ad9cb1195e1396173cf8166890e1f85d/1c591/ScreenShot2020-11-11at19_11_27.webp 150w,\n/static/ad9cb1195e1396173cf8166890e1f85d/a4d7d/ScreenShot2020-11-11at19_11_27.webp 200w,\n/static/ad9cb1195e1396173cf8166890e1f85d/14fae/ScreenShot2020-11-11at19_11_27.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Bosc Pear',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Bosc Pear',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_pear147',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '860f3560-2cc9-56fb-b972-19565c344963',
                  localFiles: [
                    {
                      url: 'https://dl.airtable.com/.attachments/986a14acf2524551ed617aef2233d62d/a9285c5d/bosc.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABgBAAIDAAAAAAAAAAAAAAAAAAEDAAIE/9oADAMBAAIQAxAAAAHKWVmyAMt1lM3GIP/EABsQAAICAwEAAAAAAAAAAAAAAAECABIDESET/9oACAEBAAEFAm7MuhA41kMO/Jb1Ki7KK8E//8QAFxEBAQEBAAAAAAAAAAAAAAAAEQEAEP/aAAgBAwEBPwGrxpc3f//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAgEBPwEZk//EAB0QAQACAQUBAAAAAAAAAAAAAAEAEQIQEiExQWH/2gAIAQEABj8CwrpblnnOgEbXdCgmJ5H7Oif/xAAaEAADAQEBAQAAAAAAAAAAAAABESEAQVEx/9oACAEBAAE/IaJNJ4ACzMD3KBFx5V6IiwERZ9fmA2UD06Bxuo5NxEMf/9oADAMBAAIAAwAAABBc8H3/xAAZEQADAAMAAAAAAAAAAAAAAAAAARExQVH/2gAIAQMBAT8QSz0UeSF2P//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAECAQE/EMTpWu2Cz//EAB4QAQEAAwACAwEAAAAAAAAAAAERACFBMWFxgZHw/9oACAEBAAE/ECAVY6JdP96wVRJWt+W8w9gGtknr1gyCCkbdePjORggWtPMKCKdsOVR0V19515NFLJzJIbRVNv5n/9k=',
                          aspectRatio: 1,
                          src: '/static/cdc5e13173ea7dd058309f1185bc1d29/b315d/bosc.jpg',
                          srcSet:
                            '/static/cdc5e13173ea7dd058309f1185bc1d29/d0f88/bosc.jpg 25w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/99438/bosc.jpg 50w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/b315d/bosc.jpg 100w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/dcd9a/bosc.jpg 150w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/8295c/bosc.jpg 200w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/491b7/bosc.jpg 2354w',
                          srcWebp: '/static/cdc5e13173ea7dd058309f1185bc1d29/ff02b/bosc.webp',
                          srcSetWebp:
                            '/static/cdc5e13173ea7dd058309f1185bc1d29/8d998/bosc.webp 25w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/48562/bosc.webp 50w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/ff02b/bosc.webp 100w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/1c591/bosc.webp 150w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/a4d7d/bosc.webp 200w,\n/static/cdc5e13173ea7dd058309f1185bc1d29/77431/bosc.webp 2354w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Bose Pear',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_pear148',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'French Breakfast Radish',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'French Breakfast Radish',
                oneLiner: null,
                priceInCents: '2200',
                stripePriceId: 'sku_radish45',
                unitLabel: 'bunch',
                unitQuantity: 6,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jonathan Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jonathan Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple170',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jonathan Apples',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_apple174',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Apple Slices, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Apple Slices, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit1',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: 'd00c49c8-f319-5e34-a3b4-daf9b04f8672',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/74bc552a7ba58e5ab8eef79561ddbc75/59c90179/ScreenShot2020-11-11at19_12_16.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSklEQVQ4y21UWU+aURDlv7VRQUEQkEU2d9zBDZeqXaypNmmNC7IJfCgqAko1mi5pTV/60qQ+9udM58y3CEkfJnNz7531nBlTstNGRyxJi5W11TgnzV2UdXlICfdTKTJAxZCqlVCEcm6vvKs2NkPD3iTGfGh57OqmEjs6GxklJRim8+g4VaZm6HxsnMp8V+gLUql/UP4lzbqd5vBIy1BEc3rCn8vDo3Q5E6fa7LzoysQU1RcW6f7tFjWWVznziPwRp80ZtjhEJI6IDL59+MjZROnY46P95+100GaWMlM2O1Vjcbp7s0nHXr/hSK9OLdmIYBOjYl+Iy41SMRCiq8Ulul1bp/vNLfqyvUOf321TwdcnGRd8gRZbNcNmZ1r/jj1+yro93HwP5dkIwCgMSIEDKNyOjKuX370irRVqJauoWg3kqtyzq8UEnQ4O09VCQnqGEq+XVriPCbp7vUm36y/lfNhhUe00W5OeVcreQ6luiEOyKzI90CNkWAyE6XRohE44gOiBIZVKnHGmx8XipqzTzX5sqsO03SlGKAmfAErBHzB0nnsGwRkgoSX6O2hVDLId6zQnY5R82NFpCNIHqhBEVanBd+0WSlntBniQFjv+Y2pFySYGe8/a6HbjFf2p1+l3tU5/H37Qr1KJHvb26fHmhh4bDckQThDsv6A0ZweHtfg8fd/dlQmpxmaF4F933tOntQ0hd46R1rn5lKEGCsgKimB2cy6VLilrt3ySEgEaa4wo7nHOMhA5jVpwDjFAyQgoKhggNXRlappqc3M8djGhUXk4yjpGF+OTwkuAqLDgv64RyOihGpn7wZdpm0OlD1Mh43BqyPqEImBEUucutC7CQw2UjMOlTgNzD5Hz3HDQIe8PCl0ke5yZlzjjnxJmHgYjIkIfXm9o3dOkaMAgbfQFEc/HJqTki4lJqs0vMDDcgvisEPuQKZR19opglaEqyVDfZcY+5MZjNSEiJqAyPUP1xBI7mqPG6guZEFQEp8i4ykF+ZnN0MTnNPDWTCZFSjOIlQODodf6Q5hHEZ+xFlFfmcStxAMy2wiXiHpkdtFmoPBql6+UVOuMlnOQKTfrGFdowCIAfZSOQbJ5er6x8gJLTaNW8DMSW71Jayf8AyWafJOaKj+8AAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/7e6ed4aa9cd0763ad8c916176700aa85/71eb7/ScreenShot2020-11-11at19_12_16.png',
                          srcSet:
                            '/static/7e6ed4aa9cd0763ad8c916176700aa85/b5811/ScreenShot2020-11-11at19_12_16.png 25w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/8ba1e/ScreenShot2020-11-11at19_12_16.png 50w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/71eb7/ScreenShot2020-11-11at19_12_16.png 100w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/92ab1/ScreenShot2020-11-11at19_12_16.png 150w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/b3a76/ScreenShot2020-11-11at19_12_16.png 200w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/d282b/ScreenShot2020-11-11at19_12_16.png 539w',
                          srcWebp: '/static/7e6ed4aa9cd0763ad8c916176700aa85/ff02b/ScreenShot2020-11-11at19_12_16.webp',
                          srcSetWebp:
                            '/static/7e6ed4aa9cd0763ad8c916176700aa85/8d998/ScreenShot2020-11-11at19_12_16.webp 25w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/48562/ScreenShot2020-11-11at19_12_16.webp 50w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/ff02b/ScreenShot2020-11-11at19_12_16.webp 100w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/1c591/ScreenShot2020-11-11at19_12_16.webp 150w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/a4d7d/ScreenShot2020-11-11at19_12_16.webp 200w,\n/static/7e6ed4aa9cd0763ad8c916176700aa85/14fae/ScreenShot2020-11-11at19_12_16.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Plums',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Stone Fruit'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Plums',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_plum91',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '7ce664ea-e51c-5104-bfa4-b5d2cfa57fce',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/78ff1faef1d673f85b911e2e15e4b7bc/0f623c73/IMG_20200912_140430.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABs9rxS6bPRZkAE//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMSEBET/9oACAEBAAEFAi+YtqudiOm1rqKt49xef//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhEhECBBcf/aAAgBAQAGPwKXIgcVuGJJVuvzT//EABwQAQEAAgIDAAAAAAAAAAAAAAERACFBURBhgf/aAAgBAQABPyElaF4y5F7ZHQH24ihw3Zk9TUmIdZ7YWvvgz//aAAwDAQACAAMAAAAQezi//8QAFxEAAwEAAAAAAAAAAAAAAAAAABARUf/aAAgBAwEBPxCYR//EABcRAAMBAAAAAAAAAAAAAAAAAAEgITH/2gAIAQIBAT8QOVP/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFhUXGx/9oACAEBAAE/EA6cLlb4jtncCrlvoYBjViiCjjP2OEjiF5rc4l0jaMrtQdTR9z//2Q==',
                          aspectRatio: 1,
                          src: '/static/082015dc2bd71fb9aec57f15ae735610/b315d/IMG_20200912_140430.jpg',
                          srcSet:
                            '/static/082015dc2bd71fb9aec57f15ae735610/d0f88/IMG_20200912_140430.jpg 25w,\n/static/082015dc2bd71fb9aec57f15ae735610/99438/IMG_20200912_140430.jpg 50w,\n/static/082015dc2bd71fb9aec57f15ae735610/b315d/IMG_20200912_140430.jpg 100w,\n/static/082015dc2bd71fb9aec57f15ae735610/dcd9a/IMG_20200912_140430.jpg 150w,\n/static/082015dc2bd71fb9aec57f15ae735610/8295c/IMG_20200912_140430.jpg 200w,\n/static/082015dc2bd71fb9aec57f15ae735610/a6e07/IMG_20200912_140430.jpg 1280w',
                          srcWebp: '/static/082015dc2bd71fb9aec57f15ae735610/ff02b/IMG_20200912_140430.webp',
                          srcSetWebp:
                            '/static/082015dc2bd71fb9aec57f15ae735610/8d998/IMG_20200912_140430.webp 25w,\n/static/082015dc2bd71fb9aec57f15ae735610/48562/IMG_20200912_140430.webp 50w,\n/static/082015dc2bd71fb9aec57f15ae735610/ff02b/IMG_20200912_140430.webp 100w,\n/static/082015dc2bd71fb9aec57f15ae735610/1c591/IMG_20200912_140430.webp 150w,\n/static/082015dc2bd71fb9aec57f15ae735610/a4d7d/IMG_20200912_140430.webp 200w,\n/static/082015dc2bd71fb9aec57f15ae735610/d09b4/IMG_20200912_140430.webp 1280w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Plums',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_plum152',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: '9000c3eb-213a-5943-a8bf-eb2bc5a0dda6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/78ff1faef1d673f85b911e2e15e4b7bc/0f623c73/IMG_20200912_140430.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABs9rxS6bPRZkAE//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMSEBET/9oACAEBAAEFAi+YtqudiOm1rqKt49xef//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhEhECBBcf/aAAgBAQAGPwKXIgcVuGJJVuvzT//EABwQAQEAAgIDAAAAAAAAAAAAAAERACFBURBhgf/aAAgBAQABPyElaF4y5F7ZHQH24ihw3Zk9TUmIdZ7YWvvgz//aAAwDAQACAAMAAAAQezi//8QAFxEAAwEAAAAAAAAAAAAAAAAAABARUf/aAAgBAwEBPxCYR//EABcRAAMBAAAAAAAAAAAAAAAAAAEgITH/2gAIAQIBAT8QOVP/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFhUXGx/9oACAEBAAE/EA6cLlb4jtncCrlvoYBjViiCjjP2OEjiF5rc4l0jaMrtQdTR9z//2Q==',
                          aspectRatio: 1,
                          src: '/static/082015dc2bd71fb9aec57f15ae735610/b315d/IMG_20200912_140430.jpg',
                          srcSet:
                            '/static/082015dc2bd71fb9aec57f15ae735610/d0f88/IMG_20200912_140430.jpg 25w,\n/static/082015dc2bd71fb9aec57f15ae735610/99438/IMG_20200912_140430.jpg 50w,\n/static/082015dc2bd71fb9aec57f15ae735610/b315d/IMG_20200912_140430.jpg 100w,\n/static/082015dc2bd71fb9aec57f15ae735610/dcd9a/IMG_20200912_140430.jpg 150w,\n/static/082015dc2bd71fb9aec57f15ae735610/8295c/IMG_20200912_140430.jpg 200w,\n/static/082015dc2bd71fb9aec57f15ae735610/a6e07/IMG_20200912_140430.jpg 1280w',
                          srcWebp: '/static/082015dc2bd71fb9aec57f15ae735610/ff02b/IMG_20200912_140430.webp',
                          srcSetWebp:
                            '/static/082015dc2bd71fb9aec57f15ae735610/8d998/IMG_20200912_140430.webp 25w,\n/static/082015dc2bd71fb9aec57f15ae735610/48562/IMG_20200912_140430.webp 50w,\n/static/082015dc2bd71fb9aec57f15ae735610/ff02b/IMG_20200912_140430.webp 100w,\n/static/082015dc2bd71fb9aec57f15ae735610/1c591/IMG_20200912_140430.webp 150w,\n/static/082015dc2bd71fb9aec57f15ae735610/a4d7d/IMG_20200912_140430.webp 200w,\n/static/082015dc2bd71fb9aec57f15ae735610/d09b4/IMG_20200912_140430.webp 1280w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Crimini (Baby Bella)',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Crimini (Baby Bella) ',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_mushroom232',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Crimini (Baby Bella)  copy',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_mushroom290',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Salad Greens',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Mild Salad Greens',
                oneLiner: 'picked weekly so it stays crispy',
                priceInCents: '500',
                stripePriceId: 'sku_saladgreens248',
                unitLabel: 'oz',
                unitQuantity: 3,
                mainImage: {
                  id: 'a65efe98-6fa3-5b99-b452-066f365a3d37',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/18b6689d328e84c8b78fe6bcaddf14a5/d5804aa8/brother_nature_greens_mix.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/2gAMAwEAAhADEAAAAfOnjtmE2TkNlcw1/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAEQMSMSL/2gAIAQEAAQUCx6k+bYLYaoWJhLCILReN3//EABcRAQADAAAAAAAAAAAAAAAAAAABEBL/2gAIAQMBAT8BZTX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAASEx/9oACAECAQE/Aa1U4//EAB4QAAIABgMAAAAAAAAAAAAAAAABAhAREjFxI2GB/9oACAEBAAY/Aq2+ywZoNOhx2xLsi2h7l//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExQVGBof/aAAgBAQABPyGwSb8biagE54Tqq5AXzvyfiASmDRyrNwbl4ho8gnM//9oADAMBAAIAAwAAABDAz0H/xAAXEQADAQAAAAAAAAAAAAAAAAAAASFB/9oACAEDAQE/EGqUaEof/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQAxEaH/2gAIAQIBAT8QEcm+2WIi/8QAHhABAQACAgIDAAAAAAAAAAAAAREAIUGBMaFhcbH/2gAIAQEAAT8QoHicg5+MODWsapt7mGWhbAmjNwdg6opfrF0MguggRb17zygwBHIfWVfUCd5QtVAR5rv8ytp4z//Z',
                          aspectRatio: 1,
                          src: '/static/fd2e2e69afd001c99b99cd4ba375a00b/b315d/brother_nature_greens_mix.jpg',
                          srcSet:
                            '/static/fd2e2e69afd001c99b99cd4ba375a00b/d0f88/brother_nature_greens_mix.jpg 25w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/99438/brother_nature_greens_mix.jpg 50w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/b315d/brother_nature_greens_mix.jpg 100w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/dcd9a/brother_nature_greens_mix.jpg 150w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/8295c/brother_nature_greens_mix.jpg 200w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/44395/brother_nature_greens_mix.jpg 453w',
                          srcWebp: '/static/fd2e2e69afd001c99b99cd4ba375a00b/ff02b/brother_nature_greens_mix.webp',
                          srcSetWebp:
                            '/static/fd2e2e69afd001c99b99cd4ba375a00b/8d998/brother_nature_greens_mix.webp 25w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/48562/brother_nature_greens_mix.webp 50w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/ff02b/brother_nature_greens_mix.webp 100w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/1c591/brother_nature_greens_mix.webp 150w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/a4d7d/brother_nature_greens_mix.webp 200w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/0c470/brother_nature_greens_mix.webp 453w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Spicy Salad Mix',
                oneLiner: 'usually picked a day before delivery',
                priceInCents: '550',
                stripePriceId: 'sku_saladgreens277',
                unitLabel: 'oz',
                unitQuantity: 3,
                mainImage: {
                  id: 'ec66e0c1-04cf-5c4b-8395-ae63c1b23f33',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/18b6689d328e84c8b78fe6bcaddf14a5/d5804aa8/brother_nature_greens_mix.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/2gAMAwEAAhADEAAAAfOnjtmE2TkNlcw1/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAEQMSMSL/2gAIAQEAAQUCx6k+bYLYaoWJhLCILReN3//EABcRAQADAAAAAAAAAAAAAAAAAAABEBL/2gAIAQMBAT8BZTX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAASEx/9oACAECAQE/Aa1U4//EAB4QAAIABgMAAAAAAAAAAAAAAAABAhAREjFxI2GB/9oACAEBAAY/Aq2+ywZoNOhx2xLsi2h7l//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExQVGBof/aAAgBAQABPyGwSb8biagE54Tqq5AXzvyfiASmDRyrNwbl4ho8gnM//9oADAMBAAIAAwAAABDAz0H/xAAXEQADAQAAAAAAAAAAAAAAAAAAASFB/9oACAEDAQE/EGqUaEof/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQAxEaH/2gAIAQIBAT8QEcm+2WIi/8QAHhABAQACAgIDAAAAAAAAAAAAAREAIUGBMaFhcbH/2gAIAQEAAT8QoHicg5+MODWsapt7mGWhbAmjNwdg6opfrF0MguggRb17zygwBHIfWVfUCd5QtVAR5rv8ytp4z//Z',
                          aspectRatio: 1,
                          src: '/static/fd2e2e69afd001c99b99cd4ba375a00b/b315d/brother_nature_greens_mix.jpg',
                          srcSet:
                            '/static/fd2e2e69afd001c99b99cd4ba375a00b/d0f88/brother_nature_greens_mix.jpg 25w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/99438/brother_nature_greens_mix.jpg 50w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/b315d/brother_nature_greens_mix.jpg 100w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/dcd9a/brother_nature_greens_mix.jpg 150w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/8295c/brother_nature_greens_mix.jpg 200w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/44395/brother_nature_greens_mix.jpg 453w',
                          srcWebp: '/static/fd2e2e69afd001c99b99cd4ba375a00b/ff02b/brother_nature_greens_mix.webp',
                          srcSetWebp:
                            '/static/fd2e2e69afd001c99b99cd4ba375a00b/8d998/brother_nature_greens_mix.webp 25w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/48562/brother_nature_greens_mix.webp 50w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/ff02b/brother_nature_greens_mix.webp 100w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/1c591/brother_nature_greens_mix.webp 150w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/a4d7d/brother_nature_greens_mix.webp 200w,\n/static/fd2e2e69afd001c99b99cd4ba375a00b/0c470/brother_nature_greens_mix.webp 453w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Mixed Bell Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Mixed Bell Peppers',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_bellpepper10',
                unitLabel: 'peppers',
                unitQuantity: 5,
                mainImage: {
                  id: 'e19fee3d-7297-550f-ae1c-54eb6751b989',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b3d42d593bfbdc3d0a4033ada9123621/989dc3b2/IMG_20200912_141626.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwD/2gAMAwEAAhADEAAAAZ6ItoXscOT2Z5jD/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQIAAxESEyH/2gAIAQEAAQUC93ldvR1oF2IoFoPwVrucjJ//xAAWEQEBAQAAAAAAAAAAAAAAAAACESD/2gAIAQMBAT8BQmP/xAAWEQEBAQAAAAAAAAAAAAAAAAARICH/2gAIAQIBAT8BdI//xAAbEAACAgMBAAAAAAAAAAAAAAAAASExEBFBYf/aAAgBAQAGPwJemnZRFIRwoiMf/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFxQWH/2gAIAQEAAT8hlCC/jXymJvAz8Un0mgD13kiMYYkeZDyeDcrV3//aAAwDAQACAAMAAAAQSMB+/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EESmRn//xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPxAwf//EABwQAQEAAgMBAQAAAAAAAAAAAAERACExQVHRgf/aAAgBAQABPxAgMqQTBIp0nD8yQUfri5sCC1vmRRt6PU783jJboJXEsUDyTFjUDowuqr4fM//Z',
                          aspectRatio: 1,
                          src: '/static/c6720cce29dfc65d8eeb590b67f123c8/b315d/IMG_20200912_141626.jpg',
                          srcSet:
                            '/static/c6720cce29dfc65d8eeb590b67f123c8/d0f88/IMG_20200912_141626.jpg 25w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/99438/IMG_20200912_141626.jpg 50w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/b315d/IMG_20200912_141626.jpg 100w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/dcd9a/IMG_20200912_141626.jpg 150w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/8295c/IMG_20200912_141626.jpg 200w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/a6e07/IMG_20200912_141626.jpg 1280w',
                          srcWebp: '/static/c6720cce29dfc65d8eeb590b67f123c8/ff02b/IMG_20200912_141626.webp',
                          srcSetWebp:
                            '/static/c6720cce29dfc65d8eeb590b67f123c8/8d998/IMG_20200912_141626.webp 25w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/48562/IMG_20200912_141626.webp 50w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/ff02b/IMG_20200912_141626.webp 100w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/1c591/IMG_20200912_141626.webp 150w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/a4d7d/IMG_20200912_141626.webp 200w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/d09b4/IMG_20200912_141626.webp 1280w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Mixed Bell Peppers',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_bellpepper213',
                unitLabel: 'bucket',
                unitQuantity: 1,
                mainImage: {
                  id: '65d670d5-a060-5179-936a-0abe23f92b4c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b3d42d593bfbdc3d0a4033ada9123621/989dc3b2/IMG_20200912_141626.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwD/2gAMAwEAAhADEAAAAZ6ItoXscOT2Z5jD/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQIAAxESEyH/2gAIAQEAAQUC93ldvR1oF2IoFoPwVrucjJ//xAAWEQEBAQAAAAAAAAAAAAAAAAACESD/2gAIAQMBAT8BQmP/xAAWEQEBAQAAAAAAAAAAAAAAAAARICH/2gAIAQIBAT8BdI//xAAbEAACAgMBAAAAAAAAAAAAAAAAASExEBFBYf/aAAgBAQAGPwJemnZRFIRwoiMf/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFxQWH/2gAIAQEAAT8hlCC/jXymJvAz8Un0mgD13kiMYYkeZDyeDcrV3//aAAwDAQACAAMAAAAQSMB+/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EESmRn//xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPxAwf//EABwQAQEAAgMBAQAAAAAAAAAAAAERACExQVHRgf/aAAgBAQABPxAgMqQTBIp0nD8yQUfri5sCC1vmRRt6PU783jJboJXEsUDyTFjUDowuqr4fM//Z',
                          aspectRatio: 1,
                          src: '/static/c6720cce29dfc65d8eeb590b67f123c8/b315d/IMG_20200912_141626.jpg',
                          srcSet:
                            '/static/c6720cce29dfc65d8eeb590b67f123c8/d0f88/IMG_20200912_141626.jpg 25w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/99438/IMG_20200912_141626.jpg 50w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/b315d/IMG_20200912_141626.jpg 100w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/dcd9a/IMG_20200912_141626.jpg 150w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/8295c/IMG_20200912_141626.jpg 200w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/a6e07/IMG_20200912_141626.jpg 1280w',
                          srcWebp: '/static/c6720cce29dfc65d8eeb590b67f123c8/ff02b/IMG_20200912_141626.webp',
                          srcSetWebp:
                            '/static/c6720cce29dfc65d8eeb590b67f123c8/8d998/IMG_20200912_141626.webp 25w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/48562/IMG_20200912_141626.webp 50w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/ff02b/IMG_20200912_141626.webp 100w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/1c591/IMG_20200912_141626.webp 150w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/a4d7d/IMG_20200912_141626.webp 200w,\n/static/c6720cce29dfc65d8eeb590b67f123c8/d09b4/IMG_20200912_141626.webp 1280w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Shallots',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Onions, Shallots & Leeks'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Shallots',
                oneLiner: 'mild and delicate, the fancy onion',
                priceInCents: '400',
                stripePriceId: 'sku_onion293',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: {
                  id: '77f4b961-9045-5bda-9c72-7e5da091aa13',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/dbc8aa12fbee1a0a84d8733874b08978/d4673fb6/shallots.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAc/quGuWsbKqJLIIf//EABoQAQADAQEBAAAAAAAAAAAAAAIAAQMSESH/2gAIAQEAAQUCxJb1xHKzRs+aSkBTV9UrEX1z/8QAGBEAAgMAAAAAAAAAAAAAAAAAABASIUL/2gAIAQMBAT8BgUZX/8QAGBEAAgMAAAAAAAAAAAAAAAAAABASIUH/2gAIAQIBAT8BkWav/8QAHhAAAQQBBQAAAAAAAAAAAAAAAQACERIxECEiI3H/2gAIAQEABj8C5YXXn1QQnVgBVcG2Rhxhba//xAAdEAACAQQDAAAAAAAAAAAAAAABEQAhMUFhEHGh/9oACAEBAAE/IQUONYsNDJG6efEzbazCcgF9yohh1DyNA3hkzPH/2gAMAwEAAgADAAAAEHMnwv/EABcRAQEBAQAAAAAAAAAAAAAAAAERABD/2gAIAQMBAT8QAEcyzVjn/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQIBAT8Qb3gqVIs//8QAHRABAQACAwADAAAAAAAAAAAAAREAUSExQXGRsf/aAAgBAQABPxBCF7e6uDTYlQfbrLZqlFUTCo4HU/Iya8BpQbL1joBZfngyj6eGMjL1d4EDlfnP/9k=',
                          aspectRatio: 1,
                          src: '/static/9f0b97893e3df9b798e8a52e57f8e274/b315d/shallots.jpg',
                          srcSet:
                            '/static/9f0b97893e3df9b798e8a52e57f8e274/d0f88/shallots.jpg 25w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/99438/shallots.jpg 50w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/b315d/shallots.jpg 100w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/dcd9a/shallots.jpg 150w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/8295c/shallots.jpg 200w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/3c28c/shallots.jpg 350w',
                          srcWebp: '/static/9f0b97893e3df9b798e8a52e57f8e274/ff02b/shallots.webp',
                          srcSetWebp:
                            '/static/9f0b97893e3df9b798e8a52e57f8e274/8d998/shallots.webp 25w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/48562/shallots.webp 50w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/ff02b/shallots.webp 100w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/1c591/shallots.webp 150w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/a4d7d/shallots.webp 200w,\n/static/9f0b97893e3df9b798e8a52e57f8e274/1c688/shallots.webp 350w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Cherokee Purple Heirloom Slicing Tomato',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cherokee Purple Heirloom Slicing Tomato',
                oneLiner: null,
                priceInCents: '849',
                stripePriceId: 'sku_tomato22',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: {
                  id: 'e4bd39c3-21a7-51df-ab05-9c939d3c3d1a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/623e5523fd013498227db2230dd79861/32c27072/cherokee_purple_tomato_garden_fort.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AOLg29vWzuLe1OPf09/az+Le0s/MwdvVyN3Xy+DZydrPvdXJutXMv9fQxN/d0uHe1ODd1t/b097aztjTywDh39nb1c3h3tLi3tLi3NHDv7qOjIrRysDz69zo4M7i1sLe0b/b0MDc1MPf3M7g3NHf3NPe2s/d2c3X08sA3trO2tTI39zR4tvOubSrpqaDf35ydXR3k5KSZ2RoaGZpfXt/nZeWvrez6ePU4dvM2tbJ3drM3trP3drSAN3Zy9bPwNzWxtrVyLmmgOPDSu/oflpZREEzRHdrdj05QUpEKcvGhZaVdnNxc8rEu97XyNzXy93azeHf1QDc2MzQxrfe1sK5tKhsZV+RZCaXcx6TbFzHoLXm1NndxM+fckzXt0CpoVIQDhlDQ0i/vLXh28va1cXf3NEA2dPG08a0xr2uZ2ZnJCk4aFRha1JRXkVNaFNbdGFovZqnuYmSZD8ikl1Jhl1cpYxP4M6dy8Wx2dTD3dfKANjRwsm8qoWCgCkzRlRDT6eXrYuCiWRcWT05Nk5GRoBmcbSEkGovMLdgX8F0Z8iAM+yqYXJ0cKOim+TcywDY0L+kmYpMUmQZIDCCY3G2p7icl6RcXFM6UTxESD1dTVOukZyNXWCDNDGCODpkNyWZb0BESDZlZGfi28sAzMGsfXVyOD5USjcxk1VfdlNXiXV8eGtlTWJIUE5HQjo/kH+LnmlmvHFdy4qAYTctcVw1dGVAXVpf3NbHAL+xl1xbZT89TpFYNIBKT1Y4PYNkaaySmJl6faCTl2xdZD8oL4M1MdqIY+Wnisx8bq9yMODHd6uhjc/JvACun4dWV2YtNEVSMyN7RUiCSlh3Sk6AX2SMZmy4rrOYh4ozJiBvPDLLblbUdmGvVEeEUR/Pnjq7pIPHwbQAno1zT05bKDJDXkIvaUU4dTtIkVluZ0dUXzQzlV9eZjM0mXQy1sNeej4krFouy6xnjnpNakUjW1RTzsSyAHVpXVJQXDlEW1ZALkI6LyshIjgkKEQ8O6STS7uYTXlZOKRmLMCWPFFLJp5wMPK4TunHd2VVNGdkZs++pABqWkxnZHJNWX83LydHLCxmQEdiTVJNWVCxqkbm21nNsFRnTSY2JiFMOCNVSy9+X0F1WC08OjeimY7LuZkAaWBYc2ZgTVh+JSk3UC0uoV1pvX+NhV9drXs/pIU5bkgkk2A4WkUrlocvzMBVcnIzFBcjXVpaybuewrOWAHxxZmhbUlVVajI6UkkwNKdSXKdISaJMV65md5lmc1ssJ8hwRMeGL+LQNOzlauLgi1BQUaCTfsSwi72qjQChhF6JbVRlV1M8RFw0LjiZUV2lTlqnV2ezYnGiTk9fNC53Py92SiW/pjPbxy/XzVqOhni/qYi6o4G9ooMAnHpSnHtWiXNaUEpNLjRETTdCkFJlsIGfoHCFazI4dUgyc1s9LCYhSVlCfIximYlWtKGGuaGAu6J+vaKEAJd2UJyDY6CLbIFvWldRTyswPCwoMjosMy4lKh0cIVc1KFxTQys0NS8xMnR3aKmRfregg7Wcfrqhfr+niACjhl6ehWOahGagkHSbi3JvY1tGRkouNDwyN0U/RFk8Q1VAP0YxNT5APkOYfmeqjHCyl3q0mHm6o3+9o4MXJ2Bcpr+SGgAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/5e533b4165143f8ceee15899d4d2b8ca/71eb7/cherokee_purple_tomato_garden_fort.png',
                          srcSet:
                            '/static/5e533b4165143f8ceee15899d4d2b8ca/b5811/cherokee_purple_tomato_garden_fort.png 25w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/8ba1e/cherokee_purple_tomato_garden_fort.png 50w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/71eb7/cherokee_purple_tomato_garden_fort.png 100w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/92ab1/cherokee_purple_tomato_garden_fort.png 150w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/b3a76/cherokee_purple_tomato_garden_fort.png 200w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/b5e6b/cherokee_purple_tomato_garden_fort.png 450w',
                          srcWebp:
                            '/static/5e533b4165143f8ceee15899d4d2b8ca/ff02b/cherokee_purple_tomato_garden_fort.webp',
                          srcSetWebp:
                            '/static/5e533b4165143f8ceee15899d4d2b8ca/8d998/cherokee_purple_tomato_garden_fort.webp 25w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/48562/cherokee_purple_tomato_garden_fort.webp 50w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/ff02b/cherokee_purple_tomato_garden_fort.webp 100w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/1c591/cherokee_purple_tomato_garden_fort.webp 150w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/a4d7d/cherokee_purple_tomato_garden_fort.webp 200w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/27933/cherokee_purple_tomato_garden_fort.webp 450w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cherokee Purple Heirloom Slicing Tomato',
                oneLiner: null,
                priceInCents: '3200',
                stripePriceId: 'sku_tomato21',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: {
                  id: '78aec4e6-e802-5360-9041-9c0a41c252d2',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/623e5523fd013498227db2230dd79861/32c27072/cherokee_purple_tomato_garden_fort.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AOLg29vWzuLe1OPf09/az+Le0s/MwdvVyN3Xy+DZydrPvdXJutXMv9fQxN/d0uHe1ODd1t/b097aztjTywDh39nb1c3h3tLi3tLi3NHDv7qOjIrRysDz69zo4M7i1sLe0b/b0MDc1MPf3M7g3NHf3NPe2s/d2c3X08sA3trO2tTI39zR4tvOubSrpqaDf35ydXR3k5KSZ2RoaGZpfXt/nZeWvrez6ePU4dvM2tbJ3drM3trP3drSAN3Zy9bPwNzWxtrVyLmmgOPDSu/oflpZREEzRHdrdj05QUpEKcvGhZaVdnNxc8rEu97XyNzXy93azeHf1QDc2MzQxrfe1sK5tKhsZV+RZCaXcx6TbFzHoLXm1NndxM+fckzXt0CpoVIQDhlDQ0i/vLXh28va1cXf3NEA2dPG08a0xr2uZ2ZnJCk4aFRha1JRXkVNaFNbdGFovZqnuYmSZD8ikl1Jhl1cpYxP4M6dy8Wx2dTD3dfKANjRwsm8qoWCgCkzRlRDT6eXrYuCiWRcWT05Nk5GRoBmcbSEkGovMLdgX8F0Z8iAM+yqYXJ0cKOim+TcywDY0L+kmYpMUmQZIDCCY3G2p7icl6RcXFM6UTxESD1dTVOukZyNXWCDNDGCODpkNyWZb0BESDZlZGfi28sAzMGsfXVyOD5USjcxk1VfdlNXiXV8eGtlTWJIUE5HQjo/kH+LnmlmvHFdy4qAYTctcVw1dGVAXVpf3NbHAL+xl1xbZT89TpFYNIBKT1Y4PYNkaaySmJl6faCTl2xdZD8oL4M1MdqIY+Wnisx8bq9yMODHd6uhjc/JvACun4dWV2YtNEVSMyN7RUiCSlh3Sk6AX2SMZmy4rrOYh4ozJiBvPDLLblbUdmGvVEeEUR/Pnjq7pIPHwbQAno1zT05bKDJDXkIvaUU4dTtIkVluZ0dUXzQzlV9eZjM0mXQy1sNeej4krFouy6xnjnpNakUjW1RTzsSyAHVpXVJQXDlEW1ZALkI6LyshIjgkKEQ8O6STS7uYTXlZOKRmLMCWPFFLJp5wMPK4TunHd2VVNGdkZs++pABqWkxnZHJNWX83LydHLCxmQEdiTVJNWVCxqkbm21nNsFRnTSY2JiFMOCNVSy9+X0F1WC08OjeimY7LuZkAaWBYc2ZgTVh+JSk3UC0uoV1pvX+NhV9drXs/pIU5bkgkk2A4WkUrlocvzMBVcnIzFBcjXVpaybuewrOWAHxxZmhbUlVVajI6UkkwNKdSXKdISaJMV65md5lmc1ssJ8hwRMeGL+LQNOzlauLgi1BQUaCTfsSwi72qjQChhF6JbVRlV1M8RFw0LjiZUV2lTlqnV2ezYnGiTk9fNC53Py92SiW/pjPbxy/XzVqOhni/qYi6o4G9ooMAnHpSnHtWiXNaUEpNLjRETTdCkFJlsIGfoHCFazI4dUgyc1s9LCYhSVlCfIximYlWtKGGuaGAu6J+vaKEAJd2UJyDY6CLbIFvWldRTyswPCwoMjosMy4lKh0cIVc1KFxTQys0NS8xMnR3aKmRfregg7Wcfrqhfr+niACjhl6ehWOahGagkHSbi3JvY1tGRkouNDwyN0U/RFk8Q1VAP0YxNT5APkOYfmeqjHCyl3q0mHm6o3+9o4MXJ2Bcpr+SGgAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/5e533b4165143f8ceee15899d4d2b8ca/71eb7/cherokee_purple_tomato_garden_fort.png',
                          srcSet:
                            '/static/5e533b4165143f8ceee15899d4d2b8ca/b5811/cherokee_purple_tomato_garden_fort.png 25w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/8ba1e/cherokee_purple_tomato_garden_fort.png 50w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/71eb7/cherokee_purple_tomato_garden_fort.png 100w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/92ab1/cherokee_purple_tomato_garden_fort.png 150w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/b3a76/cherokee_purple_tomato_garden_fort.png 200w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/b5e6b/cherokee_purple_tomato_garden_fort.png 450w',
                          srcWebp:
                            '/static/5e533b4165143f8ceee15899d4d2b8ca/ff02b/cherokee_purple_tomato_garden_fort.webp',
                          srcSetWebp:
                            '/static/5e533b4165143f8ceee15899d4d2b8ca/8d998/cherokee_purple_tomato_garden_fort.webp 25w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/48562/cherokee_purple_tomato_garden_fort.webp 50w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/ff02b/cherokee_purple_tomato_garden_fort.webp 100w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/1c591/cherokee_purple_tomato_garden_fort.webp 150w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/a4d7d/cherokee_purple_tomato_garden_fort.webp 200w,\n/static/5e533b4165143f8ceee15899d4d2b8ca/27933/cherokee_purple_tomato_garden_fort.webp 450w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Holy Basil',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Holy Basil',
                oneLiner: null,
                priceInCents: '499',
                stripePriceId: 'sku_basil56',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Holy Basil',
                oneLiner: null,
                priceInCents: '850',
                stripePriceId: 'sku_basil55',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Emerald Beauty Plums',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Emerald Plums',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple155',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Kale, Organic',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Kale, Organic',
                oneLiner: null,
                priceInCents: '299',
                stripePriceId: 'sku_kale97',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Asian Eggplant',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Asian Eggplant',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_eggplant77',
                unitLabel: null,
                unitQuantity: 3,
                mainImage: {
                  id: '6d886947-ae0d-5276-9cc6-c01a52f139b0',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/68ec3351a21f79ad39cb810765dbbad5/c11df0a8/IMG_20200912_135514.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB65/RHxq6kJbWZGwP/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIAAwQTERIhMTP/2gAIAQEAAQUCOgD1cbJtdbgnG3ojMFPQprOBP//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/AWP/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEj/8QAGRABAAMBAQAAAAAAAAAAAAAAAAERMSFh/9oACAEBAAY/Au4rVpeOJVUMh//EABoQAQEBAQEBAQAAAAAAAAAAAAERACFhQXH/2gAIAQEAAT8hcinrHETKNzCR77ic/k3HXjTzhiNS83CmJ9MHAh+b/9oADAMBAAIAAwAAABAXB8D/xAAYEQEAAwEAAAAAAAAAAAAAAAABABAhMf/aAAgBAwEBPxDHICl//8QAGREAAQUAAAAAAAAAAAAAAAAAAQAQESEx/9oACAECAQE/ELaiYL//xAAfEAEAAwACAQUAAAAAAAAAAAABABEhMUGhUWFxgcH/2gAIAQEAAT8QLXp22RgRSTQdl/UCcOR0YoFF8jCbcN/YTPEvRs9e6D8hMQdDozKKKVL8WwWuHBWf/9k=',
                          aspectRatio: 1,
                          src: '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/b315d/IMG_20200912_135514.jpg',
                          srcSet:
                            '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/d0f88/IMG_20200912_135514.jpg 25w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/99438/IMG_20200912_135514.jpg 50w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/b315d/IMG_20200912_135514.jpg 100w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/dcd9a/IMG_20200912_135514.jpg 150w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/8295c/IMG_20200912_135514.jpg 200w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/f7372/IMG_20200912_135514.jpg 3094w',
                          srcWebp: '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/ff02b/IMG_20200912_135514.webp',
                          srcSetWebp:
                            '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/8d998/IMG_20200912_135514.webp 25w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/48562/IMG_20200912_135514.webp 50w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/ff02b/IMG_20200912_135514.webp 100w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/1c591/IMG_20200912_135514.webp 150w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/a4d7d/IMG_20200912_135514.webp 200w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/c1fa1/IMG_20200912_135514.webp 3094w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Asian Eggplant',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_eggplant211',
                unitLabel: 'bucket',
                unitQuantity: 1,
                mainImage: {
                  id: 'd6554045-0bc6-5e55-9a66-732fb6b1a06b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/68ec3351a21f79ad39cb810765dbbad5/c11df0a8/IMG_20200912_135514.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB65/RHxq6kJbWZGwP/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIAAwQTERIhMTP/2gAIAQEAAQUCOgD1cbJtdbgnG3ojMFPQprOBP//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/AWP/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEj/8QAGRABAAMBAQAAAAAAAAAAAAAAAAERMSFh/9oACAEBAAY/Au4rVpeOJVUMh//EABoQAQEBAQEBAQAAAAAAAAAAAAERACFhQXH/2gAIAQEAAT8hcinrHETKNzCR77ic/k3HXjTzhiNS83CmJ9MHAh+b/9oADAMBAAIAAwAAABAXB8D/xAAYEQEAAwEAAAAAAAAAAAAAAAABABAhMf/aAAgBAwEBPxDHICl//8QAGREAAQUAAAAAAAAAAAAAAAAAAQAQESEx/9oACAECAQE/ELaiYL//xAAfEAEAAwACAQUAAAAAAAAAAAABABEhMUGhUWFxgcH/2gAIAQEAAT8QLXp22RgRSTQdl/UCcOR0YoFF8jCbcN/YTPEvRs9e6D8hMQdDozKKKVL8WwWuHBWf/9k=',
                          aspectRatio: 1,
                          src: '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/b315d/IMG_20200912_135514.jpg',
                          srcSet:
                            '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/d0f88/IMG_20200912_135514.jpg 25w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/99438/IMG_20200912_135514.jpg 50w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/b315d/IMG_20200912_135514.jpg 100w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/dcd9a/IMG_20200912_135514.jpg 150w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/8295c/IMG_20200912_135514.jpg 200w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/f7372/IMG_20200912_135514.jpg 3094w',
                          srcWebp: '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/ff02b/IMG_20200912_135514.webp',
                          srcSetWebp:
                            '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/8d998/IMG_20200912_135514.webp 25w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/48562/IMG_20200912_135514.webp 50w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/ff02b/IMG_20200912_135514.webp 100w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/1c591/IMG_20200912_135514.webp 150w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/a4d7d/IMG_20200912_135514.webp 200w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/c1fa1/IMG_20200912_135514.webp 3094w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Asian Eggplant',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_eggplant212',
                unitLabel: 'bucket',
                unitQuantity: 1,
                mainImage: {
                  id: 'da774b5f-49aa-5aca-881c-835f96cfeae4',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/68ec3351a21f79ad39cb810765dbbad5/c11df0a8/IMG_20200912_135514.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB65/RHxq6kJbWZGwP/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIAAwQTERIhMTP/2gAIAQEAAQUCOgD1cbJtdbgnG3ojMFPQprOBP//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/AWP/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEj/8QAGRABAAMBAQAAAAAAAAAAAAAAAAERMSFh/9oACAEBAAY/Au4rVpeOJVUMh//EABoQAQEBAQEBAQAAAAAAAAAAAAERACFhQXH/2gAIAQEAAT8hcinrHETKNzCR77ic/k3HXjTzhiNS83CmJ9MHAh+b/9oADAMBAAIAAwAAABAXB8D/xAAYEQEAAwEAAAAAAAAAAAAAAAABABAhMf/aAAgBAwEBPxDHICl//8QAGREAAQUAAAAAAAAAAAAAAAAAAQAQESEx/9oACAECAQE/ELaiYL//xAAfEAEAAwACAQUAAAAAAAAAAAABABEhMUGhUWFxgcH/2gAIAQEAAT8QLXp22RgRSTQdl/UCcOR0YoFF8jCbcN/YTPEvRs9e6D8hMQdDozKKKVL8WwWuHBWf/9k=',
                          aspectRatio: 1,
                          src: '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/b315d/IMG_20200912_135514.jpg',
                          srcSet:
                            '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/d0f88/IMG_20200912_135514.jpg 25w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/99438/IMG_20200912_135514.jpg 50w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/b315d/IMG_20200912_135514.jpg 100w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/dcd9a/IMG_20200912_135514.jpg 150w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/8295c/IMG_20200912_135514.jpg 200w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/f7372/IMG_20200912_135514.jpg 3094w',
                          srcWebp: '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/ff02b/IMG_20200912_135514.webp',
                          srcSetWebp:
                            '/static/a84ea315fb62e43f96f5bbdacfd6f3ab/8d998/IMG_20200912_135514.webp 25w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/48562/IMG_20200912_135514.webp 50w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/ff02b/IMG_20200912_135514.webp 100w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/1c591/IMG_20200912_135514.webp 150w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/a4d7d/IMG_20200912_135514.webp 200w,\n/static/a84ea315fb62e43f96f5bbdacfd6f3ab/c1fa1/IMG_20200912_135514.webp 3094w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sandwich Duo Micro Mix',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sandwich Duo Micro Mix',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_microgreen107',
                unitLabel: 'oz',
                unitQuantity: 3,
                mainImage: {
                  id: 'fb66522b-fe98-5039-a84d-18ab207ea0b7',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b3993cfad32e709f2c4296ebcdea6e55/75439136/ScreenShot2020-11-11at20_39_13.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6ElEQVQ4y32U3U9ScRzG+bu67aKti1YXtZzldHnVaqtlNWdmL8uXQihn0xX5ktZqqDNEmbnUFC1BA2ygvKVwgOPhAAc4HLh8+v0OHDiIePFs52Xnc57n+/LTSEdpKMpztVK/l7iS4lQZ5PmKComsLE09WBXo+E/jVHWBwilA4QSpoPWBQg0ox6ZkiWwSYiwpX6vBRWitS00ljlACCuWPi9A0cjGBQBPIMHFI5L7AiXVdatTRZEfUDREfCIP3M4j5XOB8XoihJA5ddnjsS0iFQye6LEemIPoyQSCs249cJAH/lg3u1Q18nenC1OIT2H6aYfsxDaP5Jpx/DchEWPJNVu64GqrJsUo04izCIxWMIuLeQ8i5i2WLAT1D19A30girfQZvDDdgXLkPJvyHJOFVDcqUoRqJACVaMxo1moAQiGLDYoLFNIYJYyf0H+9AO3EV/aMtePmhCYub7+DaXUA2Ei/WWm6mCpincRUgcZj0MdheMkE32ILHry/j/bfbeGu+gHvasxg3tcFi1cO+M4V95yaiQQ8K8VxVLauAIuliOshhe3kWuoFWPO9uRWf/Jei/NOCB/hwGjXfxyfII5rkB0iwvBIZVzXDRZbXDKI/sQRz2tSlMjnZBp72Fh68uorn9DNr6GtA73ojeoWYsLA3jKOAmdUypZpgCSZfz9IGqhiLD48jtw9b3WQLtQXvPFTwdvI6O4fPQGpoITIdDjwvCISuPmAIsEGCh1mECUjRFOuyEe30VEYcHy+YxfJ5+gZGJbhjnn8G/u4M0gaUZrrwAZYfcMaBEtiFPYuyt/wLr8UH4x2Lf+huOjTnY1uZhXZkkg21F0OFA6iBWu98UWARVKxPmZNEBz4Y4cN4A+GCQ3JNNIpMg0tLI+62saeVQ0SjuqpyyxfXLEigFyKWQVzIhP8+VDgtFVcCTHMojREAxjxdZMkoUKKsEE2OVE4i6VGJT1QXWkxpacSic7rDSpFqYRJqWi6VqgIrD/9LfpD7XF7+CAAAAAElFTkSuQmCC',
                          aspectRatio: 1,
                          src: '/static/f2a70961e99fe02c21a8fa8e85b4e78b/71eb7/ScreenShot2020-11-11at20_39_13.png',
                          srcSet:
                            '/static/f2a70961e99fe02c21a8fa8e85b4e78b/b5811/ScreenShot2020-11-11at20_39_13.png 25w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/8ba1e/ScreenShot2020-11-11at20_39_13.png 50w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/71eb7/ScreenShot2020-11-11at20_39_13.png 100w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/92ab1/ScreenShot2020-11-11at20_39_13.png 150w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/b3a76/ScreenShot2020-11-11at20_39_13.png 200w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/9b6e3/ScreenShot2020-11-11at20_39_13.png 410w',
                          srcWebp: '/static/f2a70961e99fe02c21a8fa8e85b4e78b/ff02b/ScreenShot2020-11-11at20_39_13.webp',
                          srcSetWebp:
                            '/static/f2a70961e99fe02c21a8fa8e85b4e78b/8d998/ScreenShot2020-11-11at20_39_13.webp 25w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/48562/ScreenShot2020-11-11at20_39_13.webp 50w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/ff02b/ScreenShot2020-11-11at20_39_13.webp 100w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/1c591/ScreenShot2020-11-11at20_39_13.webp 150w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/a4d7d/ScreenShot2020-11-11at20_39_13.webp 200w,\n/static/f2a70961e99fe02c21a8fa8e85b4e78b/08a6b/ScreenShot2020-11-11at20_39_13.webp 410w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Butternut Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Smaller Butternut Squash',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_squash16',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: 'dcbe8a60-1ac5-51b1-83b1-841478f5a488',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_squash,squash,squash18',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: {
                  id: '987a15e0-8872-5544-bcf8-7ba831b2be5f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash,squash,squash17',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: {
                  id: 'be033d02-fb9e-559d-9580-8e62ddc6dbeb',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Northern Spy Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Northern Spy Apples',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_apple292',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '56ec789e-d61e-5e6b-a47b-e4ab0affbede',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/a848aa27cc07961a135169361ed445e5/3d229c09/northern_spy_apple.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHS1clps5Q0yE7Az//EABkQAAMBAQEAAAAAAAAAAAAAAAACEQEDMf/aAAgBAQABBQI9wXo2IjNixylKf//EABkRAAIDAQAAAAAAAAAAAAAAAAJRAAEQEv/aAAgBAwEBPwGhFzgHv//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPwFnf//EABgQAQADAQAAAAAAAAAAAAAAABEAEBIg/9oACAEBAAY/AnNhDn//xAAdEAADAAICAwAAAAAAAAAAAAAAAREhMRBRYZHw/9oACAEBAAE/IUrgPAfaGB0eInSgLPYo6XvhRUP/2gAMAwEAAgADAAAAEJQYv//EABkRAAEFAAAAAAAAAAAAAAAAAAEAEBEhMf/aAAgBAwEBPxArUEFv/8QAFxEAAwEAAAAAAAAAAAAAAAAAABFREP/aAAgBAgEBPxB4PN//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUFhcf/aAAgBAQABPxByZDhC4qRo+XAawz0RVAoFI2NigPMEBX2LeQw2Fbep/9k=',
                          aspectRatio: 1,
                          src: '/static/60d08330650064556c424cc63158ea81/b315d/northern_spy_apple.jpg',
                          srcSet:
                            '/static/60d08330650064556c424cc63158ea81/d0f88/northern_spy_apple.jpg 25w,\n/static/60d08330650064556c424cc63158ea81/99438/northern_spy_apple.jpg 50w,\n/static/60d08330650064556c424cc63158ea81/b315d/northern_spy_apple.jpg 100w,\n/static/60d08330650064556c424cc63158ea81/dcd9a/northern_spy_apple.jpg 150w,\n/static/60d08330650064556c424cc63158ea81/8295c/northern_spy_apple.jpg 200w,\n/static/60d08330650064556c424cc63158ea81/7b2a1/northern_spy_apple.jpg 600w',
                          srcWebp: '/static/60d08330650064556c424cc63158ea81/ff02b/northern_spy_apple.webp',
                          srcSetWebp:
                            '/static/60d08330650064556c424cc63158ea81/8d998/northern_spy_apple.webp 25w,\n/static/60d08330650064556c424cc63158ea81/48562/northern_spy_apple.webp 50w,\n/static/60d08330650064556c424cc63158ea81/ff02b/northern_spy_apple.webp 100w,\n/static/60d08330650064556c424cc63158ea81/1c591/northern_spy_apple.webp 150w,\n/static/60d08330650064556c424cc63158ea81/a4d7d/northern_spy_apple.webp 200w,\n/static/60d08330650064556c424cc63158ea81/ab687/northern_spy_apple.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Tetsukabuto Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Squash, Tetsukabuto',
                oneLiner: null,
                priceInCents: '1300',
                stripePriceId: 'sku_squash117',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '27a91e34-ed50-5bac-9ff3-f5812bef8d93',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b71f5c5247ff1e2d2a31e8690c946132/2ab8d453/115891282_1405473152980129_5208763949946567038_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAceZ6M3olWo7hlQk/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIDAAQSExQiIzH/2gAIAQEAAQUC08lbrJlqOTBtwWY8zVp64Bb/xAAWEQADAAAAAAAAAAAAAAAAAAARICH/2gAIAQMBAT8BgT//xAAYEQACAwAAAAAAAAAAAAAAAAABEBIiYf/aAAgBAgEBPwG0sRX/xAAfEAACAgEEAwAAAAAAAAAAAAAAAQIRMRASISJBYXH/2gAIAQEABj8Cwo/BJvqcSLFUUXF7fWl+TB//xAAbEAEBAQADAQEAAAAAAAAAAAABEQAhMWFBkf/aAAgBAQABPyFjACe3NPa7ZgOHnuWqyTjTXM4B0JNewfck636HeskXf//aAAwDAQACAAMAAAAQfxgD/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAGR/9oACAEDAQE/ENCH/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQEXH/2gAIAQIBAT8QUYzqNGf/xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMUFRYXGRocH/2gAIAQEAAT8QSx0CMhw+N7gyVeYKni/uKFJAxt+RLjtWFlL75xMybO9j2yxxNuUctQQqcQGvCnp1F98OLP2f/9k=',
                          aspectRatio: 1,
                          src:
                            '/static/d0c76386a8896fa74a7c36ac93e74806/b315d/115891282_1405473152980129_5208763949946567038_n.jpg',
                          srcSet:
                            '/static/d0c76386a8896fa74a7c36ac93e74806/d0f88/115891282_1405473152980129_5208763949946567038_n.jpg 25w,\n/static/d0c76386a8896fa74a7c36ac93e74806/99438/115891282_1405473152980129_5208763949946567038_n.jpg 50w,\n/static/d0c76386a8896fa74a7c36ac93e74806/b315d/115891282_1405473152980129_5208763949946567038_n.jpg 100w,\n/static/d0c76386a8896fa74a7c36ac93e74806/dcd9a/115891282_1405473152980129_5208763949946567038_n.jpg 150w,\n/static/d0c76386a8896fa74a7c36ac93e74806/8295c/115891282_1405473152980129_5208763949946567038_n.jpg 200w,\n/static/d0c76386a8896fa74a7c36ac93e74806/d78c5/115891282_1405473152980129_5208763949946567038_n.jpg 960w',
                          srcWebp:
                            '/static/d0c76386a8896fa74a7c36ac93e74806/ff02b/115891282_1405473152980129_5208763949946567038_n.webp',
                          srcSetWebp:
                            '/static/d0c76386a8896fa74a7c36ac93e74806/8d998/115891282_1405473152980129_5208763949946567038_n.webp 25w,\n/static/d0c76386a8896fa74a7c36ac93e74806/48562/115891282_1405473152980129_5208763949946567038_n.webp 50w,\n/static/d0c76386a8896fa74a7c36ac93e74806/ff02b/115891282_1405473152980129_5208763949946567038_n.webp 100w,\n/static/d0c76386a8896fa74a7c36ac93e74806/1c591/115891282_1405473152980129_5208763949946567038_n.webp 150w,\n/static/d0c76386a8896fa74a7c36ac93e74806/a4d7d/115891282_1405473152980129_5208763949946567038_n.webp 200w,\n/static/d0c76386a8896fa74a7c36ac93e74806/12535/115891282_1405473152980129_5208763949946567038_n.webp 960w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Carrots',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Carrots & Celery'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Orange Carrots',
                oneLiner: null,
                priceInCents: '260',
                stripePriceId: 'sku_carrots80',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Moskovich Heirloom General Purpose Tomato',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Moskovich Heirloom General Purpose Tomato',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_tomato79',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: 'a77b0eeb-9e46-506f-9879-42ce5241668f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/e7636fcd3737941a760bbf20b1c0676e/76760df2/TomatoesMoskvichgardenfort.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVQ4yxWUzW/TBhjGfeA0TaIt6WeaJm0+Gzt2/JE4ju3ESZw4cRw7ceLUaZOQNLQpTRsoFDHE+BhjTNMmBoUMujIYCJimDaZpSEPbNKFph16YmDY0ceA0adtl0k6bOHXmD3h+z/O+ep8XKMRDuQiR50g9SRU4QuWIWSFcSlB1KbaqiytlYUUXF9Rkp5w5vLewWskeqindOXm1WlipqoDIYGkalRh0JkEqLJql/fkoIUcCMwI7n0+0VX5JE/apqaaS6MwqHV08WJW71XynWmzrCpCmUJnFDEMtHsxHMJn1Z2lUjQXnxKgu0A2JqWeZVoFfLae6erqtCQuqsK+YXiiJrZIIJEkoFYSSpM/wFEiID0AR1MMHIclIwbwEyRHcYC0pkddryVmB1pJ0kQ8X4pSWYoAsg+ZYTOFwXWAKXEBm8UqaqWRYY+amEp9X+QVNaKr8jMTNq4nDVenkYvmN5cqbncrJtgYYmZUIrkQwLR5QObwYC9Sz0ZoYbUjcXpmr8WQXc1/ksPck6lQ90SoJa9Xckap0eE48tVACJBqRaVhhEZVDCxymRHExQuS44GyGqSWCy86xdfPQx+DkEx77Xee/n+HbGaacYlpyfKEgAGLIKwSmJQosRBAx7JMpcD4E6hQUDyNN1PUW4T0DOi95ph6g7j9a+s7Xn20fahysZM60taONHCAziETDuTBcSuESYV93jt5H7dsJ5DjhEIb63kHBCwH/Fchx22v/razsfHPvnzPdc3VpbU48NJcFijFcpn0ZCkpgE1VL3w2v+XEc/LspvTjROTAyeHBwcIsJfBiCbvm9T2LhneXyXwdmzy1qx5v5Yw0VSBIeDrEzoHUdc/Yg2z2/7Wkaf7H17s7zX7b3V0UAOGYe25i23/G4f40G/9X5+w355JL2dkc/29EB38SwZ2KItQ5d58M3E+SnqP2nBP7fRxd2nj1+/lorsGvX4m7T5qD1odXziCF6pdiBcnq1xK9VxPVaDnCZTVOje+hx0xXafy3J3g6CP7C+PxvSzrmVb7ng2fGJi6jnFuz70g//iGDXOHYxH19SYvtVvl3kAc+4CbQMQhZT2zF2HnZtgPYvQu6nGewJj254PZu477Lfs4WAnwTgrxD4mZfYFLiGElvO88bZA7BtxNC/RIwN5MYGWmMD65ODy47h2pT5PAFtkshtEr1LoXdR+HMCeURj27HoS2Uh2crFgBThCk9bCafZZxtxmk2O4T7PSN9Q3yu8ZbRHQFcJ6HIAvhnyXyd8dxDoIYr8TNHrSmq+KDSlGBDDXFHEwfqmAq5x2Fje6J7p0X7nSB8xsqcX9G+wcI/2b1HIFoPewKEHlP8RGarxYT1FGS0EhKA3HYISuCvis+OOcdAy5Brpdw33Twy82nTaejTyvt9ziYSuhH03Seg7EukJ0f262C2nj9QVoBTDtThR5FAtjosGBXWSbgtiG3aP9jtMu2dtE6fdUyemrach61XI/QETWtVS3XJmrSIdny8axfDlI6gawdQoVopiMzFUYWAe9zDgJOEchyaHI07LXhJus4EWZ3wItlMyPPNH6oWjTfV/0UVooOd0nPcAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/626e9e9f5815625e1e150de46284f952/71eb7/TomatoesMoskvichgardenfort.png',
                          srcSet:
                            '/static/626e9e9f5815625e1e150de46284f952/b5811/TomatoesMoskvichgardenfort.png 25w,\n/static/626e9e9f5815625e1e150de46284f952/8ba1e/TomatoesMoskvichgardenfort.png 50w,\n/static/626e9e9f5815625e1e150de46284f952/71eb7/TomatoesMoskvichgardenfort.png 100w,\n/static/626e9e9f5815625e1e150de46284f952/92ab1/TomatoesMoskvichgardenfort.png 150w,\n/static/626e9e9f5815625e1e150de46284f952/b3a76/TomatoesMoskvichgardenfort.png 200w,\n/static/626e9e9f5815625e1e150de46284f952/39bfd/TomatoesMoskvichgardenfort.png 449w',
                          srcWebp: '/static/626e9e9f5815625e1e150de46284f952/ff02b/TomatoesMoskvichgardenfort.webp',
                          srcSetWebp:
                            '/static/626e9e9f5815625e1e150de46284f952/8d998/TomatoesMoskvichgardenfort.webp 25w,\n/static/626e9e9f5815625e1e150de46284f952/48562/TomatoesMoskvichgardenfort.webp 50w,\n/static/626e9e9f5815625e1e150de46284f952/ff02b/TomatoesMoskvichgardenfort.webp 100w,\n/static/626e9e9f5815625e1e150de46284f952/1c591/TomatoesMoskvichgardenfort.webp 150w,\n/static/626e9e9f5815625e1e150de46284f952/a4d7d/TomatoesMoskvichgardenfort.webp 200w,\n/static/626e9e9f5815625e1e150de46284f952/23cb2/TomatoesMoskvichgardenfort.webp 449w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Moskovich Heirloom General Purpose Tomato',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_tomato78',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: {
                  id: '8b264bda-976e-5fe0-93eb-156b58346024',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/e7636fcd3737941a760bbf20b1c0676e/76760df2/TomatoesMoskvichgardenfort.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElElEQVQ4yxWUzW/TBhjGfeA0TaIt6WeaJm0+Gzt2/JE4ju3ESZw4cRw7ceLUaZOQNLQpTRsoFDHE+BhjTNMmBoUMujIYCJimDaZpSEPbNKFph16YmDY0ceA0adtl0k6bOHXmD3h+z/O+ep8XKMRDuQiR50g9SRU4QuWIWSFcSlB1KbaqiytlYUUXF9Rkp5w5vLewWskeqindOXm1WlipqoDIYGkalRh0JkEqLJql/fkoIUcCMwI7n0+0VX5JE/apqaaS6MwqHV08WJW71XynWmzrCpCmUJnFDEMtHsxHMJn1Z2lUjQXnxKgu0A2JqWeZVoFfLae6erqtCQuqsK+YXiiJrZIIJEkoFYSSpM/wFEiID0AR1MMHIclIwbwEyRHcYC0pkddryVmB1pJ0kQ8X4pSWYoAsg+ZYTOFwXWAKXEBm8UqaqWRYY+amEp9X+QVNaKr8jMTNq4nDVenkYvmN5cqbncrJtgYYmZUIrkQwLR5QObwYC9Sz0ZoYbUjcXpmr8WQXc1/ksPck6lQ90SoJa9Xckap0eE48tVACJBqRaVhhEZVDCxymRHExQuS44GyGqSWCy86xdfPQx+DkEx77Xee/n+HbGaacYlpyfKEgAGLIKwSmJQosRBAx7JMpcD4E6hQUDyNN1PUW4T0DOi95ph6g7j9a+s7Xn20fahysZM60taONHCAziETDuTBcSuESYV93jt5H7dsJ5DjhEIb63kHBCwH/Fchx22v/razsfHPvnzPdc3VpbU48NJcFijFcpn0ZCkpgE1VL3w2v+XEc/LspvTjROTAyeHBwcIsJfBiCbvm9T2LhneXyXwdmzy1qx5v5Yw0VSBIeDrEzoHUdc/Yg2z2/7Wkaf7H17s7zX7b3V0UAOGYe25i23/G4f40G/9X5+w355JL2dkc/29EB38SwZ2KItQ5d58M3E+SnqP2nBP7fRxd2nj1+/lorsGvX4m7T5qD1odXziCF6pdiBcnq1xK9VxPVaDnCZTVOje+hx0xXafy3J3g6CP7C+PxvSzrmVb7ng2fGJi6jnFuz70g//iGDXOHYxH19SYvtVvl3kAc+4CbQMQhZT2zF2HnZtgPYvQu6nGewJj254PZu477Lfs4WAnwTgrxD4mZfYFLiGElvO88bZA7BtxNC/RIwN5MYGWmMD65ODy47h2pT5PAFtkshtEr1LoXdR+HMCeURj27HoS2Uh2crFgBThCk9bCafZZxtxmk2O4T7PSN9Q3yu8ZbRHQFcJ6HIAvhnyXyd8dxDoIYr8TNHrSmq+KDSlGBDDXFHEwfqmAq5x2Fje6J7p0X7nSB8xsqcX9G+wcI/2b1HIFoPewKEHlP8RGarxYT1FGS0EhKA3HYISuCvis+OOcdAy5Brpdw33Twy82nTaejTyvt9ziYSuhH03Seg7EukJ0f262C2nj9QVoBTDtThR5FAtjosGBXWSbgtiG3aP9jtMu2dtE6fdUyemrach61XI/QETWtVS3XJmrSIdny8axfDlI6gawdQoVopiMzFUYWAe9zDgJOEchyaHI07LXhJus4EWZ3wItlMyPPNH6oWjTfV/0UVooOd0nPcAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/626e9e9f5815625e1e150de46284f952/71eb7/TomatoesMoskvichgardenfort.png',
                          srcSet:
                            '/static/626e9e9f5815625e1e150de46284f952/b5811/TomatoesMoskvichgardenfort.png 25w,\n/static/626e9e9f5815625e1e150de46284f952/8ba1e/TomatoesMoskvichgardenfort.png 50w,\n/static/626e9e9f5815625e1e150de46284f952/71eb7/TomatoesMoskvichgardenfort.png 100w,\n/static/626e9e9f5815625e1e150de46284f952/92ab1/TomatoesMoskvichgardenfort.png 150w,\n/static/626e9e9f5815625e1e150de46284f952/b3a76/TomatoesMoskvichgardenfort.png 200w,\n/static/626e9e9f5815625e1e150de46284f952/39bfd/TomatoesMoskvichgardenfort.png 449w',
                          srcWebp: '/static/626e9e9f5815625e1e150de46284f952/ff02b/TomatoesMoskvichgardenfort.webp',
                          srcSetWebp:
                            '/static/626e9e9f5815625e1e150de46284f952/8d998/TomatoesMoskvichgardenfort.webp 25w,\n/static/626e9e9f5815625e1e150de46284f952/48562/TomatoesMoskvichgardenfort.webp 50w,\n/static/626e9e9f5815625e1e150de46284f952/ff02b/TomatoesMoskvichgardenfort.webp 100w,\n/static/626e9e9f5815625e1e150de46284f952/1c591/TomatoesMoskvichgardenfort.webp 150w,\n/static/626e9e9f5815625e1e150de46284f952/a4d7d/TomatoesMoskvichgardenfort.webp 200w,\n/static/626e9e9f5815625e1e150de46284f952/23cb2/TomatoesMoskvichgardenfort.webp 449w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Skim Milk',
          department: ['Dairy'],
          category: ['Milk'],
          subcategory: ['Fresh Milk'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Skim Milk',
                oneLiner: null,
                priceInCents: '349',
                stripePriceId: 'sku_milk111',
                unitLabel: 'gal',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Skim Milk',
                oneLiner: null,
                priceInCents: '649',
                stripePriceId: 'sku_milk110',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Local 1/2% Milk',
          department: ['Dairy'],
          category: ['Milk'],
          subcategory: ['Fresh Milk'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local 1/2% Milk',
                oneLiner: null,
                priceInCents: '349',
                stripePriceId: 'sku_milk67',
                unitLabel: 'gal',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local 1/2% Milk',
                oneLiner: null,
                priceInCents: '649',
                stripePriceId: 'sku_milk66',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jumbo Red Bell Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jumbo Red Bell Peppers',
                oneLiner: null,
                priceInCents: '150',
                stripePriceId: 'sku_bellpepper239',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Local Whole Milk',
          department: ['Dairy'],
          category: ['Milk'],
          subcategory: ['Fresh Milk'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local Whole Milk',
                oneLiner: null,
                priceInCents: '349',
                stripePriceId: 'sku_milk73',
                unitLabel: 'gal',
                unitQuantity: 0.5,
                mainImage: {
                  id: '32601bce-ebc4-5de1-9874-705780846b49',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/5ac89af98656b7030a037694e0eaa1d5/e4967a15/G_Vitamin-D-Milk.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB7UWCdO2KznIHSE//xAAcEAEAAgIDAQAAAAAAAAAAAAACAAMBBBITMzT/2gAIAQEAAQUCtfWK7uam18+r6xHDIpIzP//EABcRAQADAAAAAAAAAAAAAAAAAAECEiD/2gAIAQMBAT8BiFXH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAQUBAAAAAAAAAAAAAAAAAQACEBESgf/aAAgBAQAGPwIuWckQ5ciirEf/xAAbEAABBQEBAAAAAAAAAAAAAAABABARITFhcf/aAAgBAQABPyHgivVBr+KERidscZlXZnpb/9oADAMBAAIAAwAAABAYD4D/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QQjsMn//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxBWmP/EABsQAQEAAwEBAQAAAAAAAAAAAAERABAhMVGh/9oACAEBAAE/EBVLzjXQpFOU90EB7D+4NujSk+aI5TjGOT/zlpzX/9k=',
                          aspectRatio: 1,
                          src: '/static/d4227c7e0e6fa406b41b146f75314b23/b315d/G_Vitamin-D-Milk.jpg',
                          srcSet:
                            '/static/d4227c7e0e6fa406b41b146f75314b23/d0f88/G_Vitamin-D-Milk.jpg 25w,\n/static/d4227c7e0e6fa406b41b146f75314b23/99438/G_Vitamin-D-Milk.jpg 50w,\n/static/d4227c7e0e6fa406b41b146f75314b23/b315d/G_Vitamin-D-Milk.jpg 100w,\n/static/d4227c7e0e6fa406b41b146f75314b23/dcd9a/G_Vitamin-D-Milk.jpg 150w,\n/static/d4227c7e0e6fa406b41b146f75314b23/8295c/G_Vitamin-D-Milk.jpg 200w,\n/static/d4227c7e0e6fa406b41b146f75314b23/5926f/G_Vitamin-D-Milk.jpg 1000w',
                          srcWebp: '/static/d4227c7e0e6fa406b41b146f75314b23/ff02b/G_Vitamin-D-Milk.webp',
                          srcSetWebp:
                            '/static/d4227c7e0e6fa406b41b146f75314b23/8d998/G_Vitamin-D-Milk.webp 25w,\n/static/d4227c7e0e6fa406b41b146f75314b23/48562/G_Vitamin-D-Milk.webp 50w,\n/static/d4227c7e0e6fa406b41b146f75314b23/ff02b/G_Vitamin-D-Milk.webp 100w,\n/static/d4227c7e0e6fa406b41b146f75314b23/1c591/G_Vitamin-D-Milk.webp 150w,\n/static/d4227c7e0e6fa406b41b146f75314b23/a4d7d/G_Vitamin-D-Milk.webp 200w,\n/static/d4227c7e0e6fa406b41b146f75314b23/08b8c/G_Vitamin-D-Milk.webp 1000w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local Whole Milk',
                oneLiner: null,
                priceInCents: '649',
                stripePriceId: 'sku_milk72',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: {
                  id: '1497989e-c8a8-59ce-9eb1-f2f758a777d8',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/5ac89af98656b7030a037694e0eaa1d5/e4967a15/G_Vitamin-D-Milk.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB7UWCdO2KznIHSE//xAAcEAEAAgIDAQAAAAAAAAAAAAACAAMBBBITMzT/2gAIAQEAAQUCtfWK7uam18+r6xHDIpIzP//EABcRAQADAAAAAAAAAAAAAAAAAAECEiD/2gAIAQMBAT8BiFXH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAQUBAAAAAAAAAAAAAAAAAQACEBESgf/aAAgBAQAGPwIuWckQ5ciirEf/xAAbEAABBQEBAAAAAAAAAAAAAAABABARITFhcf/aAAgBAQABPyHgivVBr+KERidscZlXZnpb/9oADAMBAAIAAwAAABAYD4D/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QQjsMn//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxBWmP/EABsQAQEAAwEBAQAAAAAAAAAAAAERABAhMVGh/9oACAEBAAE/EBVLzjXQpFOU90EB7D+4NujSk+aI5TjGOT/zlpzX/9k=',
                          aspectRatio: 1,
                          src: '/static/d4227c7e0e6fa406b41b146f75314b23/b315d/G_Vitamin-D-Milk.jpg',
                          srcSet:
                            '/static/d4227c7e0e6fa406b41b146f75314b23/d0f88/G_Vitamin-D-Milk.jpg 25w,\n/static/d4227c7e0e6fa406b41b146f75314b23/99438/G_Vitamin-D-Milk.jpg 50w,\n/static/d4227c7e0e6fa406b41b146f75314b23/b315d/G_Vitamin-D-Milk.jpg 100w,\n/static/d4227c7e0e6fa406b41b146f75314b23/dcd9a/G_Vitamin-D-Milk.jpg 150w,\n/static/d4227c7e0e6fa406b41b146f75314b23/8295c/G_Vitamin-D-Milk.jpg 200w,\n/static/d4227c7e0e6fa406b41b146f75314b23/5926f/G_Vitamin-D-Milk.jpg 1000w',
                          srcWebp: '/static/d4227c7e0e6fa406b41b146f75314b23/ff02b/G_Vitamin-D-Milk.webp',
                          srcSetWebp:
                            '/static/d4227c7e0e6fa406b41b146f75314b23/8d998/G_Vitamin-D-Milk.webp 25w,\n/static/d4227c7e0e6fa406b41b146f75314b23/48562/G_Vitamin-D-Milk.webp 50w,\n/static/d4227c7e0e6fa406b41b146f75314b23/ff02b/G_Vitamin-D-Milk.webp 100w,\n/static/d4227c7e0e6fa406b41b146f75314b23/1c591/G_Vitamin-D-Milk.webp 150w,\n/static/d4227c7e0e6fa406b41b146f75314b23/a4d7d/G_Vitamin-D-Milk.webp 200w,\n/static/d4227c7e0e6fa406b41b146f75314b23/08b8c/G_Vitamin-D-Milk.webp 1000w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'White Daikon Radish',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: null,
        },
      },
      {
        data: {
          name: 'Sweet & Juicy Red Tomatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet & Juicy Red Tomatoes',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_tomato128',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: '459a42de-4f93-5029-a122-b592e6541066',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/a5e260d12bc73b974e67579da1ce7873/846ae969/RedSweetJuicyTomatoes.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABgBAAIDAAAAAAAAAAAAAAAAAAACAQME/9oADAMBAAIQAxAAAAHnu8U1dKAVkLVuCP/EABsQAQACAgMAAAAAAAAAAAAAAAEAEQIhAxAS/9oACAEBAAEFAoahuLTkEON68l1P/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAABBQEAAAAAAAAAAAAAAAAAARARICEx/9oACAEBAAY/AngxdO0//8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBEGH/2gAIAQEAAT8hhgz0RpVB9vdeJR4n4N3aTGy4JD//2gAMAwEAAgADAAAAEMAvgP/EABgRAQEAAwAAAAAAAAAAAAAAAAEAESFx/9oACAEDAQE/EDd3C2W//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQIf/aAAgBAgEBPxAbs5//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAhMXGBQVFh/9oACAEBAAE/EFNgvrOLB8C84ykP7utAir6mve3BU4PGeeL9OjGR8sXBHyG9ulWVWqrzv//Z',
                          aspectRatio: 1,
                          src: '/static/1571353edfcf6e17f42d15517a3bd8c5/b315d/RedSweetJuicyTomatoes.jpg',
                          srcSet:
                            '/static/1571353edfcf6e17f42d15517a3bd8c5/d0f88/RedSweetJuicyTomatoes.jpg 25w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/99438/RedSweetJuicyTomatoes.jpg 50w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/b315d/RedSweetJuicyTomatoes.jpg 100w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/dcd9a/RedSweetJuicyTomatoes.jpg 150w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/8295c/RedSweetJuicyTomatoes.jpg 200w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/b003e/RedSweetJuicyTomatoes.jpg 4032w',
                          srcWebp: '/static/1571353edfcf6e17f42d15517a3bd8c5/ff02b/RedSweetJuicyTomatoes.webp',
                          srcSetWebp:
                            '/static/1571353edfcf6e17f42d15517a3bd8c5/8d998/RedSweetJuicyTomatoes.webp 25w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/48562/RedSweetJuicyTomatoes.webp 50w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/ff02b/RedSweetJuicyTomatoes.webp 100w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/1c591/RedSweetJuicyTomatoes.webp 150w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/a4d7d/RedSweetJuicyTomatoes.webp 200w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/32718/RedSweetJuicyTomatoes.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Tomatoes',
                oneLiner: null,
                priceInCents: '900',
                stripePriceId: 'sku_tomato129',
                unitLabel: 'box',
                unitQuantity: 2,
                mainImage: {
                  id: '5d73cff4-c104-590d-b938-a37ed597ab2b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/a5e260d12bc73b974e67579da1ce7873/846ae969/RedSweetJuicyTomatoes.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABgBAAIDAAAAAAAAAAAAAAAAAAACAQME/9oADAMBAAIQAxAAAAHnu8U1dKAVkLVuCP/EABsQAQACAgMAAAAAAAAAAAAAAAEAEQIhAxAS/9oACAEBAAEFAoahuLTkEON68l1P/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAABBQEAAAAAAAAAAAAAAAAAARARICEx/9oACAEBAAY/AngxdO0//8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBEGH/2gAIAQEAAT8hhgz0RpVB9vdeJR4n4N3aTGy4JD//2gAMAwEAAgADAAAAEMAvgP/EABgRAQEAAwAAAAAAAAAAAAAAAAEAESFx/9oACAEDAQE/EDd3C2W//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQIf/aAAgBAgEBPxAbs5//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAhMXGBQVFh/9oACAEBAAE/EFNgvrOLB8C84ykP7utAir6mve3BU4PGeeL9OjGR8sXBHyG9ulWVWqrzv//Z',
                          aspectRatio: 1,
                          src: '/static/1571353edfcf6e17f42d15517a3bd8c5/b315d/RedSweetJuicyTomatoes.jpg',
                          srcSet:
                            '/static/1571353edfcf6e17f42d15517a3bd8c5/d0f88/RedSweetJuicyTomatoes.jpg 25w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/99438/RedSweetJuicyTomatoes.jpg 50w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/b315d/RedSweetJuicyTomatoes.jpg 100w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/dcd9a/RedSweetJuicyTomatoes.jpg 150w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/8295c/RedSweetJuicyTomatoes.jpg 200w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/b003e/RedSweetJuicyTomatoes.jpg 4032w',
                          srcWebp: '/static/1571353edfcf6e17f42d15517a3bd8c5/ff02b/RedSweetJuicyTomatoes.webp',
                          srcSetWebp:
                            '/static/1571353edfcf6e17f42d15517a3bd8c5/8d998/RedSweetJuicyTomatoes.webp 25w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/48562/RedSweetJuicyTomatoes.webp 50w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/ff02b/RedSweetJuicyTomatoes.webp 100w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/1c591/RedSweetJuicyTomatoes.webp 150w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/a4d7d/RedSweetJuicyTomatoes.webp 200w,\n/static/1571353edfcf6e17f42d15517a3bd8c5/32718/RedSweetJuicyTomatoes.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Asparagus Cuts, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Asparagus Cuts, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenveg4',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: '1b8eaeab-abe4-5ba6-8d98-e602c1c9006c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/981b843f41f553d870bf63fbc3bbbf1e/ca58bb9c/ScreenShot2020-11-11at19_12_48.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZ0lEQVQ4y11UZ1NTURDNL7NiIKFK76BgoaVCCCEkIaFKCWkQAglNpEZQcGRkFMZhhtEBZyyD/pt1z76XR+DD5t53c3fvnj1nV2eJ5JFYOFdWq7o3h/TkjD8m31IDDS41ki9Vr61986VkDuvlXua+NcL+4TzS4ceiHSqrLWpgxwYaXm0lb7Kexl4/p4mNDl5fyNnAYg35l5rIFjHwfb34aQGtalbWrKB+zmR4tYWmNrtoZtsi66s37RTasVPqMECxt071wRa+b8hK5lZA5VAvGax/mqSRtVZyJcqpY/o+dc3kMMxcsscKaGrLRMkDP/UnKrN8Nci52guZgB4OiGCeZC1Fdnsovu+WzFY+jrGNUv9CJWfcxg9XZflmBcyGjPq5+GVnvIyLX0buhSqBB0I8i7VSO2e8lPri5Wxlt9CpkJUs9RpzqFl4106BlWZZUbPk4SBF0w4Kcx0XD3w0/84te1PokfgpvmqGtoiRemaLFIsVcWblkhVq5F6oZqbrhIChlSeyBpabJVOUxDFXQr2qIY4ERKBB1pt/uVFWb7KG61PNEKtpQN2jbqiZK1Eh5uY9yuFN1Yk2fbx2xwqvIZs5dVMoRyDYokZh0zFbLHtIA5cByx7NlwRw7pgrFl/4wR97jRRcbJu6Q5tfwnT26wN9uzqm8z9H9P3qM53+2KPLfyd0cpmm899HdPbzgI4vtuni7ynX00Pt03fZ3ygNostutc7gAxpff8kk9FLi/QDXqokmmaBouocibKEdG83tu2QfSXcLWUNMXMf0PSFVaz1kBylAKoAKiGaRkJGuVaCYWRAZFIsqZEJevdz31mtSCpmxGukQLzMHm9zspKC0nUk6Y2TtmchpnAXtY01myADTYuxr48S0GiKbjNlj+UxCAb9aIhlkmAUJ+M6IOFvUN3SIS9CdV30R8vCmajVpeDLS4aDYK6OsQbKE4T+coXQ3O0WVjBPzjkkaY4IAHX0LQlCC4KZZyDLxsEDdgAL6BSKRjQRUG9uqDltFqPXSBZMbnTIgglsWmt1z0WCqUaCjW5Axzve/JmiCxxsmkg6iRFYT7Di9babgjkVEjMt+zgRlGFp5KpM7wK2HNsQ5Wq1r5qGQFU330igPYaDSKRPXIDBxCWMftQAkTGRIAuaar1ClVXpjkABVxgff/wGfZ8/PGjpNUAAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/5127e4984fb7026d4cc5c24db0464089/71eb7/ScreenShot2020-11-11at19_12_48.png',
                          srcSet:
                            '/static/5127e4984fb7026d4cc5c24db0464089/b5811/ScreenShot2020-11-11at19_12_48.png 25w,\n/static/5127e4984fb7026d4cc5c24db0464089/8ba1e/ScreenShot2020-11-11at19_12_48.png 50w,\n/static/5127e4984fb7026d4cc5c24db0464089/71eb7/ScreenShot2020-11-11at19_12_48.png 100w,\n/static/5127e4984fb7026d4cc5c24db0464089/92ab1/ScreenShot2020-11-11at19_12_48.png 150w,\n/static/5127e4984fb7026d4cc5c24db0464089/b3a76/ScreenShot2020-11-11at19_12_48.png 200w,\n/static/5127e4984fb7026d4cc5c24db0464089/d282b/ScreenShot2020-11-11at19_12_48.png 539w',
                          srcWebp: '/static/5127e4984fb7026d4cc5c24db0464089/ff02b/ScreenShot2020-11-11at19_12_48.webp',
                          srcSetWebp:
                            '/static/5127e4984fb7026d4cc5c24db0464089/8d998/ScreenShot2020-11-11at19_12_48.webp 25w,\n/static/5127e4984fb7026d4cc5c24db0464089/48562/ScreenShot2020-11-11at19_12_48.webp 50w,\n/static/5127e4984fb7026d4cc5c24db0464089/ff02b/ScreenShot2020-11-11at19_12_48.webp 100w,\n/static/5127e4984fb7026d4cc5c24db0464089/1c591/ScreenShot2020-11-11at19_12_48.webp 150w,\n/static/5127e4984fb7026d4cc5c24db0464089/a4d7d/ScreenShot2020-11-11at19_12_48.webp 200w,\n/static/5127e4984fb7026d4cc5c24db0464089/14fae/ScreenShot2020-11-11at19_12_48.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Greek Yogurt',
          department: ['Dairy'],
          category: ['Yogurt'],
          subcategory: ['All Yogurt'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yogurt, Greek Style',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_yogurt135',
                unitLabel: 'oz',
                unitQuantity: 30,
                mainImage: {
                  id: '0ed31322-ebed-561c-ba11-603216059bb5',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/294ac7838482103ea076e2f9c8eca886/eefd6c12/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECAwUE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/aAAwDAQACEAMQAAAB7OMeSC9dVZpqaaAP/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAEQMhEBIT/9oACAEBAAEFAnep6QbGcQDailKidRx//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABYRAQEBAAAAAAAAAAAAAAAAAAECIP/aAAgBAgEBPwGqRx//xAAXEAADAQAAAAAAAAAAAAAAAAAAETAy/9oACAEBAAY/Akah/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFhEDH/2gAIAQEAAT8h+U12FNHkWSLd6jpxKgiG9+QAUT//2gAMAwEAAgADAAAAEBvnAP/EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPxBVx//EABgRAAIDAAAAAAAAAAAAAAAAAAERABAh/9oACAECAQE/ECkQNbf/xAAbEAEBAQADAQEAAAAAAAAAAAABEQAhMVFBcf/aAAgBAQABPxC8AkWvmvvp4d/mED0mWjVHM9xQNbZ6639hqPT0OHEiD3OLjQQN/9k=',
                          aspectRatio: 1,
                          src: '/static/c372e9fa27965f8e7781358db1b8924f/b315d/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg',
                          srcSet:
                            '/static/c372e9fa27965f8e7781358db1b8924f/d0f88/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 25w,\n/static/c372e9fa27965f8e7781358db1b8924f/99438/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 50w,\n/static/c372e9fa27965f8e7781358db1b8924f/b315d/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 100w,\n/static/c372e9fa27965f8e7781358db1b8924f/dcd9a/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 150w,\n/static/c372e9fa27965f8e7781358db1b8924f/8295c/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 200w,\n/static/c372e9fa27965f8e7781358db1b8924f/7b2a1/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 600w',
                          srcWebp:
                            '/static/c372e9fa27965f8e7781358db1b8924f/ff02b/FBF-Yogurt_Greek-Yogurt2x-600x600.webp',
                          srcSetWebp:
                            '/static/c372e9fa27965f8e7781358db1b8924f/8d998/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 25w,\n/static/c372e9fa27965f8e7781358db1b8924f/48562/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 50w,\n/static/c372e9fa27965f8e7781358db1b8924f/ff02b/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 100w,\n/static/c372e9fa27965f8e7781358db1b8924f/1c591/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 150w,\n/static/c372e9fa27965f8e7781358db1b8924f/a4d7d/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 200w,\n/static/c372e9fa27965f8e7781358db1b8924f/ab687/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yogurt, Greek Style',
                oneLiner: null,
                priceInCents: '2126',
                stripePriceId: 'sku_yogurt136',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: {
                  id: '110106fc-1aef-5eff-bb79-67d67623efab',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/294ac7838482103ea076e2f9c8eca886/eefd6c12/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECAwUE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/aAAwDAQACEAMQAAAB7OMeSC9dVZpqaaAP/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAEQMhEBIT/9oACAEBAAEFAnep6QbGcQDailKidRx//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABYRAQEBAAAAAAAAAAAAAAAAAAECIP/aAAgBAgEBPwGqRx//xAAXEAADAQAAAAAAAAAAAAAAAAAAETAy/9oACAEBAAY/Akah/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFhEDH/2gAIAQEAAT8h+U12FNHkWSLd6jpxKgiG9+QAUT//2gAMAwEAAgADAAAAEBvnAP/EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPxBVx//EABgRAAIDAAAAAAAAAAAAAAAAAAERABAh/9oACAECAQE/ECkQNbf/xAAbEAEBAQADAQEAAAAAAAAAAAABEQAhMVFBcf/aAAgBAQABPxC8AkWvmvvp4d/mED0mWjVHM9xQNbZ6639hqPT0OHEiD3OLjQQN/9k=',
                          aspectRatio: 1,
                          src: '/static/c372e9fa27965f8e7781358db1b8924f/b315d/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg',
                          srcSet:
                            '/static/c372e9fa27965f8e7781358db1b8924f/d0f88/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 25w,\n/static/c372e9fa27965f8e7781358db1b8924f/99438/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 50w,\n/static/c372e9fa27965f8e7781358db1b8924f/b315d/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 100w,\n/static/c372e9fa27965f8e7781358db1b8924f/dcd9a/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 150w,\n/static/c372e9fa27965f8e7781358db1b8924f/8295c/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 200w,\n/static/c372e9fa27965f8e7781358db1b8924f/7b2a1/FBF-Yogurt_Greek-Yogurt2x-600x600.jpg 600w',
                          srcWebp:
                            '/static/c372e9fa27965f8e7781358db1b8924f/ff02b/FBF-Yogurt_Greek-Yogurt2x-600x600.webp',
                          srcSetWebp:
                            '/static/c372e9fa27965f8e7781358db1b8924f/8d998/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 25w,\n/static/c372e9fa27965f8e7781358db1b8924f/48562/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 50w,\n/static/c372e9fa27965f8e7781358db1b8924f/ff02b/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 100w,\n/static/c372e9fa27965f8e7781358db1b8924f/1c591/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 150w,\n/static/c372e9fa27965f8e7781358db1b8924f/a4d7d/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 200w,\n/static/c372e9fa27965f8e7781358db1b8924f/ab687/FBF-Yogurt_Greek-Yogurt2x-600x600.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Salad Cucumber',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Salad Cucumber',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cucumber180',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Pumpkin, Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Long Pie Pumpkins',
                oneLiner: null,
                priceInCents: '600',
                stripePriceId: 'sku_pumpkin257',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Kale',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Kale',
                oneLiner: null,
                priceInCents: '2000',
                stripePriceId: 'sku_kale50',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Green Kale ',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_kale51',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '07980bf2-a889-5539-bcaf-c7e68c79ed2c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/73894aeea08908046cf44fdc17d6927b/5b8b0a08/121605646_346298346454689_3928526333753381317_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAc6iJz6XOJ1kVbA3/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAERIhEyJB/9oACAEBAAEFAvUCXuERF3xiL2cimVRj/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ASv/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AWpr/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECIRAxETJR/9oACAEBAAY/Am5FVjex26O8h8leY//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExUZFh/9oACAEBAAE/IQ5lArcmhoErpNqeDyBStb0g/AVkIAfIL9pqHbdZ/9oADAMBAAIAAwAAABB7P7z/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAEDAQE/ENRtzz//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EJ0Nn//EABwQAQEAAwEBAQEAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPxBVKANU8YeZApofr8v8xqra7pHE2HoBKnMFpBAvhlGUlHd4A5ID8t5ieJRRaMcc/wBJern/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/eaf9d2f72488cc5c676d2f9c26fb0097/b315d/121605646_346298346454689_3928526333753381317_n.jpg',
                          srcSet:
                            '/static/eaf9d2f72488cc5c676d2f9c26fb0097/d0f88/121605646_346298346454689_3928526333753381317_n.jpg 25w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/99438/121605646_346298346454689_3928526333753381317_n.jpg 50w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/b315d/121605646_346298346454689_3928526333753381317_n.jpg 100w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/dcd9a/121605646_346298346454689_3928526333753381317_n.jpg 150w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/8295c/121605646_346298346454689_3928526333753381317_n.jpg 200w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/29667/121605646_346298346454689_3928526333753381317_n.jpg 1080w',
                          srcWebp:
                            '/static/eaf9d2f72488cc5c676d2f9c26fb0097/ff02b/121605646_346298346454689_3928526333753381317_n.webp',
                          srcSetWebp:
                            '/static/eaf9d2f72488cc5c676d2f9c26fb0097/8d998/121605646_346298346454689_3928526333753381317_n.webp 25w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/48562/121605646_346298346454689_3928526333753381317_n.webp 50w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/ff02b/121605646_346298346454689_3928526333753381317_n.webp 100w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/1c591/121605646_346298346454689_3928526333753381317_n.webp 150w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/a4d7d/121605646_346298346454689_3928526333753381317_n.webp 200w,\n/static/eaf9d2f72488cc5c676d2f9c26fb0097/78754/121605646_346298346454689_3928526333753381317_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Green Kale, Organic',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_kale250',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Baby Kale, Organic',
                oneLiner: null,
                priceInCents: '299',
                stripePriceId: 'sku_kale252',
                unitLabel: 'ox',
                unitQuantity: 8,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Local Chocolate Milk',
          department: ['Dairy'],
          category: ['Milk'],
          subcategory: ['Fresh Milk'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local Chocolate Milk',
                oneLiner: null,
                priceInCents: '349',
                stripePriceId: 'sku_milk70',
                unitLabel: 'gal',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Local Chocolate Milk',
                oneLiner: null,
                priceInCents: '649',
                stripePriceId: 'sku_milk71',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jumbo Yellow Bell Pepper',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jumbo Yellow Bell Peppers',
                oneLiner: null,
                priceInCents: '150',
                stripePriceId: 'sku_bellpepper245',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Radish',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Radish',
                oneLiner: null,
                priceInCents: '3600',
                stripePriceId: 'sku_radish100',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'McIntosh Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'McIntosh Apples',
                oneLiner: 'sweet, juicy & tart. Great in deserts',
                priceInCents: '350',
                stripePriceId: 'sku_apple163',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: 'a39be47c-1a8e-5275-8ff3-83f60f5d6bb2',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/da2bc16cd6c0f1e0f0b93c5ba517b8e6/e4007ad0/122874224_229812205230219_6973481722252139768_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAQL/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAE/9oADAMBAAIQAxAAAAHK55PrzKqO9g1iL3//xAAbEAACAwADAAAAAAAAAAAAAAABAgMSIREiMf/aAAgBAQABBQLx9QsF5bGTTJQm5tP1Mkht/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQIf/aAAgBAwEBPwGJt//EABcRAQADAAAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8BrUP/xAAfEAABAwMFAAAAAAAAAAAAAAAAAQIRISIxAzJBYXH/2gAIAQEABj8CvdIqsqzs3lmnjJD3whVHIeqNg4P/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMVFB/9oACAEBAAE/IdoZSl5DGXRR9s7L1N9SniBQHCIq5UKxeMpKUB2EFGnJ/9oADAMBAAIAAwAAABCML7//xAAaEQACAgMAAAAAAAAAAAAAAAAAARExQZHB/9oACAEDAQE/EMwLlWxvoqP/xAAXEQEBAQEAAAAAAAAAAAAAAAABACEx/9oACAECAQE/EMTYZ4uL/8QAHxABAQACAgIDAQAAAAAAAAAAAREAITFBUXFhkbHR/9oACAEBAAE/EAKKBcq6nj3hZhbPhcl3PGGTaivTeMHRhrTIXyJC3WgvXWSZGIEPezCpCQQ08f3CiJHmXu/WFQiWbfuf/9k=',
                          aspectRatio: 1,
                          src:
                            '/static/bf6bb4ad3493415454c99aa4819a28e3/b315d/122874224_229812205230219_6973481722252139768_n.jpg',
                          srcSet:
                            '/static/bf6bb4ad3493415454c99aa4819a28e3/d0f88/122874224_229812205230219_6973481722252139768_n.jpg 25w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/99438/122874224_229812205230219_6973481722252139768_n.jpg 50w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/b315d/122874224_229812205230219_6973481722252139768_n.jpg 100w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/dcd9a/122874224_229812205230219_6973481722252139768_n.jpg 150w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/8295c/122874224_229812205230219_6973481722252139768_n.jpg 200w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/29667/122874224_229812205230219_6973481722252139768_n.jpg 1080w',
                          srcWebp:
                            '/static/bf6bb4ad3493415454c99aa4819a28e3/ff02b/122874224_229812205230219_6973481722252139768_n.webp',
                          srcSetWebp:
                            '/static/bf6bb4ad3493415454c99aa4819a28e3/8d998/122874224_229812205230219_6973481722252139768_n.webp 25w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/48562/122874224_229812205230219_6973481722252139768_n.webp 50w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/ff02b/122874224_229812205230219_6973481722252139768_n.webp 100w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/1c591/122874224_229812205230219_6973481722252139768_n.webp 150w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/a4d7d/122874224_229812205230219_6973481722252139768_n.webp 200w,\n/static/bf6bb4ad3493415454c99aa4819a28e3/78754/122874224_229812205230219_6973481722252139768_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Beans',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Fresh Beans'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Beans',
                oneLiner: null,
                priceInCents: '3000',
                stripePriceId: 'sku_greenbeans48',
                unitLabel: 'bushel',
                unitQuantity: 1,
                mainImage: {
                  id: '88aa34ca-3402-58a9-8482-11075a6112b6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/3dbc401f35443131cf069f8a1e0831e9/faf62192/greenbeansref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdCTiIZostO3wEYxb//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMSIhD/2gAIAQEAAQUCsfJNo8vPewG2Y/TWoFE//8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPwGlHV//xAAWEQEBAQAAAAAAAAAAAAAAAAAQATH/2gAIAQIBAT8BJh//xAAaEAACAgMAAAAAAAAAAAAAAAAAEAERITGx/9oACAEBAAY/Ans6skUv/8QAGxAAAgMBAQEAAAAAAAAAAAAAAAERIUExEFH/2gAIAQEAAT8hQqpcErl7fidE/g5m7oRVPBU1DTj1j6f/2gAMAwEAAgADAAAAEBvvgf/EABgRAAIDAAAAAAAAAAAAAAAAAAARARAh/9oACAEDAQE/EJZg7P/EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QZlP/xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhMUFRcZHB/9oACAEBAAE/ELiecFgd5eI1gKWijXz2WO3WIpVhaDVvf5iAcmYGDrV53zN0nSx3DbsLp5PIohbla2GlP//Z',
                          aspectRatio: 1,
                          src: '/static/93b5398b0e59e272a809a5b3dd48fb12/b315d/greenbeansref.jpg',
                          srcSet:
                            '/static/93b5398b0e59e272a809a5b3dd48fb12/d0f88/greenbeansref.jpg 25w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/99438/greenbeansref.jpg 50w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/b315d/greenbeansref.jpg 100w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/dcd9a/greenbeansref.jpg 150w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/8295c/greenbeansref.jpg 200w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/29667/greenbeansref.jpg 1080w',
                          srcWebp: '/static/93b5398b0e59e272a809a5b3dd48fb12/ff02b/greenbeansref.webp',
                          srcSetWebp:
                            '/static/93b5398b0e59e272a809a5b3dd48fb12/8d998/greenbeansref.webp 25w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/48562/greenbeansref.webp 50w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/ff02b/greenbeansref.webp 100w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/1c591/greenbeansref.webp 150w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/a4d7d/greenbeansref.webp 200w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/78754/greenbeansref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Beans',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_greenbeans203',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: '1305ceeb-af6e-58d2-a10c-2b20c5c7c642',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/3dbc401f35443131cf069f8a1e0831e9/faf62192/greenbeansref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdCTiIZostO3wEYxb//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMSIhD/2gAIAQEAAQUCsfJNo8vPewG2Y/TWoFE//8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPwGlHV//xAAWEQEBAQAAAAAAAAAAAAAAAAAQATH/2gAIAQIBAT8BJh//xAAaEAACAgMAAAAAAAAAAAAAAAAAEAERITGx/9oACAEBAAY/Ans6skUv/8QAGxAAAgMBAQEAAAAAAAAAAAAAAAERIUExEFH/2gAIAQEAAT8hQqpcErl7fidE/g5m7oRVPBU1DTj1j6f/2gAMAwEAAgADAAAAEBvvgf/EABgRAAIDAAAAAAAAAAAAAAAAAAARARAh/9oACAEDAQE/EJZg7P/EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QZlP/xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhMUFRcZHB/9oACAEBAAE/ELiecFgd5eI1gKWijXz2WO3WIpVhaDVvf5iAcmYGDrV53zN0nSx3DbsLp5PIohbla2GlP//Z',
                          aspectRatio: 1,
                          src: '/static/93b5398b0e59e272a809a5b3dd48fb12/b315d/greenbeansref.jpg',
                          srcSet:
                            '/static/93b5398b0e59e272a809a5b3dd48fb12/d0f88/greenbeansref.jpg 25w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/99438/greenbeansref.jpg 50w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/b315d/greenbeansref.jpg 100w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/dcd9a/greenbeansref.jpg 150w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/8295c/greenbeansref.jpg 200w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/29667/greenbeansref.jpg 1080w',
                          srcWebp: '/static/93b5398b0e59e272a809a5b3dd48fb12/ff02b/greenbeansref.webp',
                          srcSetWebp:
                            '/static/93b5398b0e59e272a809a5b3dd48fb12/8d998/greenbeansref.webp 25w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/48562/greenbeansref.webp 50w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/ff02b/greenbeansref.webp 100w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/1c591/greenbeansref.webp 150w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/a4d7d/greenbeansref.webp 200w,\n/static/93b5398b0e59e272a809a5b3dd48fb12/78754/greenbeansref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'White Mushrooms',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'White Mushrooms',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_mushroom291',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: {
                  id: 'db5229e9-3082-5dae-81d6-89ebd5d7ba00',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/1c8ae02169efcb12ada1ad3a7b044851/dee53ee4/white_mushrooms.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGt+baK3okziauA/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIDABESMf/aAAgBAQABBQJF22c7CuEol9UHkwOrL0JqFX//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AYRb/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERAhAxQWH/2gAIAQEABj8C7H8EOkWJnwU1BviI/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWGBsf/aAAgBAQABPyGo0CCOfKrMwuDqL6bQ8yz3rLEFsZrTFIC4AXfqfRE//9oADAMBAAIAAwAAABArAD//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAEDAQE/EFdtZ5//xAAZEQACAwEAAAAAAAAAAAAAAAAAARARQWH/2gAIAQIBAT8QSUcDY//EAB0QAQEBAAIDAQEAAAAAAAAAAAERACExQVFxkbH/2gAIAQEAAT8QCsEll7xZFPFT7s6xOmPpf5pe0CEBeYdLkVlVygEr9VyPZPKn5PGeiART7jhiNKmEgpaqqu//2Q==',
                          aspectRatio: 1,
                          src: '/static/a277958803040758cb5c294a45b8d440/b315d/white_mushrooms.jpg',
                          srcSet:
                            '/static/a277958803040758cb5c294a45b8d440/d0f88/white_mushrooms.jpg 25w,\n/static/a277958803040758cb5c294a45b8d440/99438/white_mushrooms.jpg 50w,\n/static/a277958803040758cb5c294a45b8d440/b315d/white_mushrooms.jpg 100w,\n/static/a277958803040758cb5c294a45b8d440/dcd9a/white_mushrooms.jpg 150w,\n/static/a277958803040758cb5c294a45b8d440/8295c/white_mushrooms.jpg 200w,\n/static/a277958803040758cb5c294a45b8d440/dfb5f/white_mushrooms.jpg 970w',
                          srcWebp: '/static/a277958803040758cb5c294a45b8d440/ff02b/white_mushrooms.webp',
                          srcSetWebp:
                            '/static/a277958803040758cb5c294a45b8d440/8d998/white_mushrooms.webp 25w,\n/static/a277958803040758cb5c294a45b8d440/48562/white_mushrooms.webp 50w,\n/static/a277958803040758cb5c294a45b8d440/ff02b/white_mushrooms.webp 100w,\n/static/a277958803040758cb5c294a45b8d440/1c591/white_mushrooms.webp 150w,\n/static/a277958803040758cb5c294a45b8d440/a4d7d/white_mushrooms.webp 200w,\n/static/a277958803040758cb5c294a45b8d440/299b3/white_mushrooms.webp 970w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Super King Oyster',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Super King Oyster',
                oneLiner: null,
                priceInCents: '1200',
                stripePriceId: 'sku_mushroom231',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Shisito Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Shisito Peppers',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_shisitopeppers109',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Thyme',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Thyme',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_thyme127',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Thyme',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_thyme126',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Purple Daikon Radish',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Purple Daikon Radish',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_radish284',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: {
                  id: '63de027b-8b3e-5bd5-9ffc-695f3dc70d0a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/f30fdd59c8b08c59ea9dca767eab00a0/245fe679/ScreenShot2020-12-08at14.09.46.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFlUlEQVQ4yxWUaVAUhhmGN9PUmTRm0mljtDEUIyglqIiAghyB5VwO2YVlFxaWXQRcWFj2YC9u1N0lgBwLy32IgAaS2EBMxkQp8YhjiIBEo6lamjTYqZl22ulM2h/90afbH9+vb+b5vpn3nUdgKMrkhCyOtJgAEkN3IxT6kFziR3ZVML6HXiBVH4rQGkZ23VtElgQQmvEm1qkqSsczOGoIIM0US6Y2CllFOpWndAhq1FlUSBOQx4cgCvMn+S0f8qwhpKkC2RG8hTxnFEdOeA/YE0jUH2Z/sh/O+ZNozqaTXhuHSi8lRbEfu9NC98AwgnJZEuqsWApFYeTHB3HSWYCyNhrfPc+xN+hFJM27SKnZg7Q6jiKnhNjKCBwLDZgvStE7S5HkpKLQhTD98QzvLVxF0KTLx6hMQZMbSd+oHvtYEVHCV7GJkkkP8cdsLmN2YJa2jiY0zYko20Vk1sXQYM1hpOEkvUNtuPrqGBvz8M7cHAJF4iHyE4LQlcVgcImQqAPpK9FyPsuC/nA2Nxq+4a7jBz73bNDYcgLzSDZZxQF0idXcf/saD3pWmDw9Qo+7nc62VgTV0hTcBgNzOhc5fgcxpWYyk2jGviUaV7iWm7Y1lprvcr3uHjfc91iavk1rUy3WFBEL6g7unv6MJ55vON8xQtcZF4Irlgke96/x7YfPMEXIcKQVMB5loP75ZOyHNHyq+YTL5VdY9nzL+sV/82DyP6zP/JMemZmpBDvL1Z+y0b7BWvsq7wyNILgmmWW9epkL4gnCX/AlbOcOVL5HEW0NxH/rdlzHWrjTuMZKz59YOfMXVj3PeHDpv7xbOcNl+zlWjdd42PKYx2d/ZKn7IwQXorvwHKwl6bk9vPyTnxL++m40ITFof3OIIy//gt07tuMu6eAr2wMedf6DP8zD+vTf6ZLamZQ1c6f2Kt8tbrI5vMmNgd95gUI3TbtKeHPLNgoCIpjJtLGQ3ErdnlQiX/kV8Tt9SXvJn+oDRTjFrYyqB3lX0c4t6yzTEge3xt/j4ZXr3LtwE3fLaW+xo3NQ7hOi3BXK4EEF48EmFosv0R6uI+5n2yjdFshIaAUVe7N5Q/ASptcOc6Wqix8+eMqTqXU8OguD5S0MWLrpc9UiyIkMQxoTTkdsOXPp7XyiPs+Xjbex+8mxvRrBlF8RS4XnWLQtkvTLIBbqB7nVNsuK6RKb40/4bf0YeoWck8fr6LCYEBwL2Uf6wUDqo9VcqpzieuMCS6p5NFsTGHmjgPd9LNzXf8mj3g0KfRMZUTWzaJjhmjeUh93LbE4/ZdzmwKmpoLPG6gUGH0B0IJCKZDFtx+z0Rldh85FT8vMIJn2UTG/Xca/mDn/+4EeMBxTezzNZ1E/zWfkF7jcu8ezDf/H16Fd064x0WKsQZEeHoBBGYcrQUhAbRVboPpLCgqjaKWRop5LBXytZkk3yx/5HNATnYQ0Rc9N4kdWBz/l+/Hv+Ovk3Hnet0GEy4zBrEUjjjqJOEJEb6dVT4OvE7/cnLjQA/V4xU/sbmAu2sFZzlae2ZeqDxMiCvaHIur29nGdjdo3vJr5g4dQwjTVG7Hqvvkx5Suz5JWiyEygQxXJc4rWHWIgxVspsmJPLEg+/n1rlo1I3yqgoFFlJtCeoWDR5uD10keuj8/S7nEz09jA52IvAUnwco0qFvjgXnSoXdY6I/PR4yvIlWNPz6Mw3MGpxoJFnUlUkw6oto8Vu8EJaGe7s5X3PLOf6RxnvH2Ssv/v/wCIMKjmVyhwvUE6pNI2S3AwqC3MoLTyGPD0Vl8aO1rs3FMmxVpTQZNbjaLAyMeTmrHuYQUcXox43wz0dCIzHC9EWiCnLTUOnzqfKO9Yqr6bKi1FLM5Aciaep0oS5TEGlPAOjOo9TNiOn7DU4G2vxnHmbngYXvU4Hfa0t/A+g4qyn2uN+uwAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/cc7ad51cfbac58c3ff76bcbd2842f827/71eb7/ScreenShot2020-12-08at14.09.46.png',
                          srcSet:
                            '/static/cc7ad51cfbac58c3ff76bcbd2842f827/b5811/ScreenShot2020-12-08at14.09.46.png 25w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/8ba1e/ScreenShot2020-12-08at14.09.46.png 50w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/71eb7/ScreenShot2020-12-08at14.09.46.png 100w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/92ab1/ScreenShot2020-12-08at14.09.46.png 150w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/b3a76/ScreenShot2020-12-08at14.09.46.png 200w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/cc306/ScreenShot2020-12-08at14.09.46.png 1010w',
                          srcWebp: '/static/cc7ad51cfbac58c3ff76bcbd2842f827/ff02b/ScreenShot2020-12-08at14.09.46.webp',
                          srcSetWebp:
                            '/static/cc7ad51cfbac58c3ff76bcbd2842f827/8d998/ScreenShot2020-12-08at14.09.46.webp 25w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/48562/ScreenShot2020-12-08at14.09.46.webp 50w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/ff02b/ScreenShot2020-12-08at14.09.46.webp 100w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/1c591/ScreenShot2020-12-08at14.09.46.webp 150w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/a4d7d/ScreenShot2020-12-08at14.09.46.webp 200w,\n/static/cc7ad51cfbac58c3ff76bcbd2842f827/4697b/ScreenShot2020-12-08at14.09.46.webp 1010w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Farm Fresh Chicken Eggs',
          department: ['Eggs'],
          category: ['Chicken Eggs'],
          subcategory: ['Local Chicken Eggs'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['3'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Farm Fresh Chicken Eggs',
                oneLiner: null,
                priceInCents: '349',
                stripePriceId: 'sku_eggs36',
                unitLabel: 'dozen',
                unitQuantity: 1,
                mainImage: {
                  id: 'c23556c1-c72a-5cb3-8500-730d83056073',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/e2965c7df9a6b4ed4a443e1e4374cfa3/2834c301/mi_farm_fresh_eggs.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBP/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/2gAMAwEAAhADEAAAAcTeJN1ImuYaIQB//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEgAREBMi/9oACAEBAAEFApN3qwxQCsnmTssE0E5//8QAGREAAQUAAAAAAAAAAAAAAAAAAQACEBEh/9oACAEDAQE/AQGUsn//xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPwHR3P8A/8QAHxAAAgIABwEAAAAAAAAAAAAAAAECERIgIUFRYaHB/9oACAEBAAY/AlGG/hpLEWKSvuhUm/glxk//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhEDFBgf/aAAgBAQABPyFg7dLV0mpR3hVWQp2vYPDihDVJaV19MOQxWwJ7x//aAAwDAQACAAMAAAAQ2+e8/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAERIUH/2gAIAQMBAT8QuLRl1D//xAAYEQEAAwEAAAAAAAAAAAAAAAABABARIf/aAAgBAgEBPxAcmTq3/8QAHBAAAgIDAQEAAAAAAAAAAAAAAREAITFBcWHB/9oACAEBAAE/ECpMQyGVAjeUohsI5EypsahWuHXa5uP3AzSbcCLYgZPsAh2CyHkwVP/Z',
                          aspectRatio: 1,
                          src: '/static/1d029d6d6f6cae8197622a7337ef35d1/b315d/mi_farm_fresh_eggs.jpg',
                          srcSet:
                            '/static/1d029d6d6f6cae8197622a7337ef35d1/d0f88/mi_farm_fresh_eggs.jpg 25w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/99438/mi_farm_fresh_eggs.jpg 50w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/b315d/mi_farm_fresh_eggs.jpg 100w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/dcd9a/mi_farm_fresh_eggs.jpg 150w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/8295c/mi_farm_fresh_eggs.jpg 200w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/6bbb2/mi_farm_fresh_eggs.jpg 3503w',
                          srcWebp: '/static/1d029d6d6f6cae8197622a7337ef35d1/ff02b/mi_farm_fresh_eggs.webp',
                          srcSetWebp:
                            '/static/1d029d6d6f6cae8197622a7337ef35d1/8d998/mi_farm_fresh_eggs.webp 25w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/48562/mi_farm_fresh_eggs.webp 50w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/ff02b/mi_farm_fresh_eggs.webp 100w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/1c591/mi_farm_fresh_eggs.webp 150w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/a4d7d/mi_farm_fresh_eggs.webp 200w,\n/static/1d029d6d6f6cae8197622a7337ef35d1/7e130/mi_farm_fresh_eggs.webp 3503w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Chives',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Aromatics'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: true,
                name: 'Chives',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_chives25',
                unitLabel: 'oz',
                unitQuantity: 1,
                mainImage: {
                  id: '660b0a33-8e4f-59a8-af5e-c6fcbaaa4c2c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/e9e1cf367453fb9fe46832f2cdd4b893/50214c56/123132341_360013392004528_3978764195559810708_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAHY0ljhqBKmEkwl/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECIQMiMTL/2gAIAQEAAQUC4N2NkdiyTrhk9f/EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwEj/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ASP/xAAaEAACAgMAAAAAAAAAAAAAAAABEAAgMWFx/9oACAEBAAY/Alig3B1f/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBYYGR/9oACAEBAAE/IU35ieoC6tMdSi7I3bHEqb48hl0hU8E//9oADAMBAAIAAwAAABBfz8D/xAAYEQACAwAAAAAAAAAAAAAAAAAAARAhYf/aAAgBAwEBPxBbJOj/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EIlLxr//xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhMUFRcZGB/9oACAEBAAE/EBaSqB+RxQzk31EFEXtYheinD08QMA6rv5ULcstXfkY8HAUY5Y+zW5QBfGCS7btOXpn/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/662a3fcc8926800085473d774587b912/b315d/123132341_360013392004528_3978764195559810708_n.jpg',
                          srcSet:
                            '/static/662a3fcc8926800085473d774587b912/d0f88/123132341_360013392004528_3978764195559810708_n.jpg 25w,\n/static/662a3fcc8926800085473d774587b912/99438/123132341_360013392004528_3978764195559810708_n.jpg 50w,\n/static/662a3fcc8926800085473d774587b912/b315d/123132341_360013392004528_3978764195559810708_n.jpg 100w,\n/static/662a3fcc8926800085473d774587b912/dcd9a/123132341_360013392004528_3978764195559810708_n.jpg 150w,\n/static/662a3fcc8926800085473d774587b912/8295c/123132341_360013392004528_3978764195559810708_n.jpg 200w,\n/static/662a3fcc8926800085473d774587b912/29667/123132341_360013392004528_3978764195559810708_n.jpg 1080w',
                          srcWebp:
                            '/static/662a3fcc8926800085473d774587b912/ff02b/123132341_360013392004528_3978764195559810708_n.webp',
                          srcSetWebp:
                            '/static/662a3fcc8926800085473d774587b912/8d998/123132341_360013392004528_3978764195559810708_n.webp 25w,\n/static/662a3fcc8926800085473d774587b912/48562/123132341_360013392004528_3978764195559810708_n.webp 50w,\n/static/662a3fcc8926800085473d774587b912/ff02b/123132341_360013392004528_3978764195559810708_n.webp 100w,\n/static/662a3fcc8926800085473d774587b912/1c591/123132341_360013392004528_3978764195559810708_n.webp 150w,\n/static/662a3fcc8926800085473d774587b912/a4d7d/123132341_360013392004528_3978764195559810708_n.webp 200w,\n/static/662a3fcc8926800085473d774587b912/78754/123132341_360013392004528_3978764195559810708_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Chives',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_chives26',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Lettuce Mix',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Lettuce Mix',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_lettuce65',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: 'db1ff2cf-0a17-55b7-a550-3442657a36e2',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Retail Case Lettuce Mix, 8 package count',
                oneLiner: null,
                priceInCents: '2800',
                stripePriceId: 'sku_lettuce103',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: '5ae7d076-d0e4-5913-9339-d4a127ab3318',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Winter Sweet Kabocha',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Winter Sweet Kabocha',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash132',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Fall Sweet Corn (End of Season)',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['More Vegetables'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet Corn (Late Season)',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_corn184',
                unitLabel: null,
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Broccoli Microgreens',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Brocolli Microgreens',
                oneLiner: null,
                priceInCents: '450',
                stripePriceId: 'sku_microgreen237',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '710ef26f-80aa-54ea-ba48-39d2ddd143f2',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/0ceff6c25f3c0858b591aa7014a035aa/f62d4f5b/75534711_695057924325069_7208799895522284962_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAeZ9zjDUB1MFIKP/xAAZEAEAAwEBAAAAAAAAAAAAAAABAAISESP/2gAIAQEAAQUCTpjU85c2VLglRg7lHp//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAgEBPwEh/8QAHRAAAgEEAwAAAAAAAAAAAAAAABEBAhAhQTFRUv/aAAgBAQAGPwLy9kdGhRrlCnBmqoZLt//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQVFxsf/aAAgBAQABPyEXTybuOYd9wwa/cUUCmOENMH7FwZu8J1TEiWPibKC3P//aAAwDAQACAAMAAAAQtD89/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxBuGN//xAAXEQADAQAAAAAAAAAAAAAAAAAAASEQ/9oACAECAQE/ECZbp//EAB0QAQADAQEAAwEAAAAAAAAAAAEAESExQVFhcYH/2gAIAQEAAT8QRvR5VeZ+SmZtb05j/YCVwKb05kfWsarPKgIhV/I8qIZa6rv1+5QcCNMey/t2gYYS5WFrrP/Z',
                          aspectRatio: 1,
                          src:
                            '/static/e328056314044a053ecc728f45d4d908/b315d/75534711_695057924325069_7208799895522284962_n.jpg',
                          srcSet:
                            '/static/e328056314044a053ecc728f45d4d908/d0f88/75534711_695057924325069_7208799895522284962_n.jpg 25w,\n/static/e328056314044a053ecc728f45d4d908/99438/75534711_695057924325069_7208799895522284962_n.jpg 50w,\n/static/e328056314044a053ecc728f45d4d908/b315d/75534711_695057924325069_7208799895522284962_n.jpg 100w,\n/static/e328056314044a053ecc728f45d4d908/dcd9a/75534711_695057924325069_7208799895522284962_n.jpg 150w,\n/static/e328056314044a053ecc728f45d4d908/8295c/75534711_695057924325069_7208799895522284962_n.jpg 200w,\n/static/e328056314044a053ecc728f45d4d908/29667/75534711_695057924325069_7208799895522284962_n.jpg 1080w',
                          srcWebp:
                            '/static/e328056314044a053ecc728f45d4d908/ff02b/75534711_695057924325069_7208799895522284962_n.webp',
                          srcSetWebp:
                            '/static/e328056314044a053ecc728f45d4d908/8d998/75534711_695057924325069_7208799895522284962_n.webp 25w,\n/static/e328056314044a053ecc728f45d4d908/48562/75534711_695057924325069_7208799895522284962_n.webp 50w,\n/static/e328056314044a053ecc728f45d4d908/ff02b/75534711_695057924325069_7208799895522284962_n.webp 100w,\n/static/e328056314044a053ecc728f45d4d908/1c591/75534711_695057924325069_7208799895522284962_n.webp 150w,\n/static/e328056314044a053ecc728f45d4d908/a4d7d/75534711_695057924325069_7208799895522284962_n.webp 200w,\n/static/e328056314044a053ecc728f45d4d908/78754/75534711_695057924325069_7208799895522284962_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Acorn Squash, Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Acorn Squash',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_squash,squash76',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '2dfcd21d-ae0f-5e64-a080-b690e34b64fd',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Mi Acorn Squash',
                oneLiner: null,
                priceInCents: '2601',
                stripePriceId: 'sku_squash,squash75',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: {
                  id: '55694e0b-0dbf-5987-80d5-8190ce305766',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweetie Cherry Tomato',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweetie Cherry Tomato',
                oneLiner: null,
                priceInCents: '649',
                stripePriceId: 'sku_tomato120',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweetie Cherry Tomato',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_tomato121',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Hungarian Wax Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Hungarian Wax Peppers',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_hotpeppers59',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: 'cc943216-b67d-53d9-b410-8b5bc27ddd81',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/25976e793c94090326bd0b2eb32cfe02/890cbb69/Hungarian_Wax_reference.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIABP/aAAwDAQACEAMQAAABrPVmVB3A6gb/xAAcEAABAwUAAAAAAAAAAAAAAAABAAISAxARITL/2gAIAQEAAQUCimtJIpnEtSCf1f8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESL/2gAIAQIBAT8B0K5//8QAGxAAAQQDAAAAAAAAAAAAAAAAAAEQETEgIYH/2gAIAQEABj8C6bWCyWvD/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBgf/aAAgBAQABPyFPjS0nNinJ1jccEN9+yqngBOkE9mZhk//aAAwDAQACAAMAAAAQFN8C/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQMBAT8Qg//EABcRAQEBAQAAAAAAAAAAAAAAAAERABD/2gAIAQIBAT8QpJgy3iG//8QAGxABAAMBAAMAAAAAAAAAAAAAAQARMSFRYXH/2gAIAQEAAT8Q5LUQaVVhBr2ZG7RHhEtAhZC4rAIzvCpK/ew5AEK7Bj6lrR6eGVQWAosGif/Z',
                          aspectRatio: 1,
                          src: '/static/ba85e089adafc61906349646d9770a26/b315d/Hungarian_Wax_reference.jpg',
                          srcSet:
                            '/static/ba85e089adafc61906349646d9770a26/d0f88/Hungarian_Wax_reference.jpg 25w,\n/static/ba85e089adafc61906349646d9770a26/99438/Hungarian_Wax_reference.jpg 50w,\n/static/ba85e089adafc61906349646d9770a26/b315d/Hungarian_Wax_reference.jpg 100w,\n/static/ba85e089adafc61906349646d9770a26/dcd9a/Hungarian_Wax_reference.jpg 150w,\n/static/ba85e089adafc61906349646d9770a26/8295c/Hungarian_Wax_reference.jpg 200w,\n/static/ba85e089adafc61906349646d9770a26/639f0/Hungarian_Wax_reference.jpg 455w',
                          srcWebp: '/static/ba85e089adafc61906349646d9770a26/ff02b/Hungarian_Wax_reference.webp',
                          srcSetWebp:
                            '/static/ba85e089adafc61906349646d9770a26/8d998/Hungarian_Wax_reference.webp 25w,\n/static/ba85e089adafc61906349646d9770a26/48562/Hungarian_Wax_reference.webp 50w,\n/static/ba85e089adafc61906349646d9770a26/ff02b/Hungarian_Wax_reference.webp 100w,\n/static/ba85e089adafc61906349646d9770a26/1c591/Hungarian_Wax_reference.webp 150w,\n/static/ba85e089adafc61906349646d9770a26/a4d7d/Hungarian_Wax_reference.webp 200w,\n/static/ba85e089adafc61906349646d9770a26/bd974/Hungarian_Wax_reference.webp 455w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jalapeño Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jalapeño Peppers',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_jalapeño194',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Gala Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Gala Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple249',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: 'e122aa4c-7852-5f08-b4d7-4e3d0e0c672e',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c75b3299c41f2ce6af428bfdc7f081fc/d511137a/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB1uK4koctLF0xDqGb/8QAHBABAQACAgMAAAAAAAAAAAAAAQIAAwQhEBES/9oACAEBAAEFAmvg12vg2FYesmmTZ1fHWg6z/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPwFQiFn/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/AW6zn//EAB0QAAEEAgMAAAAAAAAAAAAAAAABEBESIUExMoH/2gAIAQEABj8ClNmWjSk1qh1t62Vk4P/EABwQAQACAwADAAAAAAAAAAAAAAEAESExUUFxgf/aAAgBAQABPyG8yNAi+tdJ9JcoEKzNwompXaByPEFtY8xitTVwAoAep//aAAwDAQACAAMAAAAQBM9B/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQMBAT8QsTFtL//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxBNmB//xAAdEAEBAAIDAAMAAAAAAAAAAAABEQAhMVFhcaHB/9oACAEBAAE/EFmrGrC1rmiHUNP11giWg8NwrTAKRHXxhnWkggzz9w29sYHoPpgx9g01FxWS5yQydUeAGf/Z',
                          aspectRatio: 1,
                          src:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/b315d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg',
                          srcSet:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/d0f88/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 25w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/99438/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 50w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/b315d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 100w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/dcd9a/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 150w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/8295c/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 200w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/b003e/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 4032w',
                          srcWebp:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/ff02b/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp',
                          srcSetWebp:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/8d998/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 25w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/48562/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 50w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/ff02b/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 100w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/1c591/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 150w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/a4d7d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 200w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/32718/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sorrel',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sorrel',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_sorrel113',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sorrel',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_sorrel112',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Blueberries',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Berries'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Blueberries',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_berry206',
                unitLabel: 'small box',
                unitQuantity: 1,
                mainImage: {
                  id: '135421d5-6333-550a-be33-493dfe341e4b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/0deb332372f57a55c7c93e3d36c20573/e8ac6258/burdasberries.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZmYitLKd5dHSC//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDEiEQE//aAAgBAQABBQJjsMjl6lRyVVtsOE4v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQIVH/2gAIAQMBAT8BjRKj/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgIDAAAAAAAAAAAAAAAAADEBIQIQEf/aAAgBAQAGPwKsR8GWIUEb/8QAHBABAQEBAAIDAAAAAAAAAAAAAREAITFRcYHR/9oACAEBAAE/Ifbvh3gn16f6DQs257KfPLlOtsvcolmtBd//2gAMAwEAAgADAAAAEEgPvf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIRFB/9oACAEDAQE/ELkZeiSwKxD/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxBC6lifJe3/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMVFhQbH/2gAIAQEAAT8QpwEnVglo35lnfuMQuzdD+YBFMRCYbRVMPcVazvHC012pziHKDWuN4IgVM//Z',
                          aspectRatio: 1,
                          src: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg',
                          srcSet:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/d0f88/burdasberries.jpg 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/99438/burdasberries.jpg 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/dcd9a/burdasberries.jpg 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/8295c/burdasberries.jpg 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/7b2a1/burdasberries.jpg 600w',
                          srcWebp: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp',
                          srcSetWebp:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/8d998/burdasberries.webp 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/48562/burdasberries.webp 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/1c591/burdasberries.webp 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/a4d7d/burdasberries.webp 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ab687/burdasberries.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Blueberries',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_berry207',
                unitLabel: 'small box',
                unitQuantity: 1,
                mainImage: {
                  id: '6d5e7598-3ae4-588a-89e7-45ea68127f56',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/0deb332372f57a55c7c93e3d36c20573/e8ac6258/burdasberries.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZmYitLKd5dHSC//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDEiEQE//aAAgBAQABBQJjsMjl6lRyVVtsOE4v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQIVH/2gAIAQMBAT8BjRKj/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgIDAAAAAAAAAAAAAAAAADEBIQIQEf/aAAgBAQAGPwKsR8GWIUEb/8QAHBABAQEBAAIDAAAAAAAAAAAAAREAITFRcYHR/9oACAEBAAE/Ifbvh3gn16f6DQs257KfPLlOtsvcolmtBd//2gAMAwEAAgADAAAAEEgPvf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIRFB/9oACAEDAQE/ELkZeiSwKxD/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxBC6lifJe3/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMVFhQbH/2gAIAQEAAT8QpwEnVglo35lnfuMQuzdD+YBFMRCYbRVMPcVazvHC012pziHKDWuN4IgVM//Z',
                          aspectRatio: 1,
                          src: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg',
                          srcSet:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/d0f88/burdasberries.jpg 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/99438/burdasberries.jpg 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/dcd9a/burdasberries.jpg 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/8295c/burdasberries.jpg 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/7b2a1/burdasberries.jpg 600w',
                          srcWebp: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp',
                          srcSetWebp:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/8d998/burdasberries.webp 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/48562/burdasberries.webp 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/1c591/burdasberries.webp 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/a4d7d/burdasberries.webp 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ab687/burdasberries.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Kabocha Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Kabocha Squash',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash49',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Azul Star Kohlrabi',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Cabbages & Brussel Sprouts'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Kohlrabi',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cabbage288',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '9c1f5df7-f59e-507f-a195-bcc94365a725',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/cf000b987b62777c190fdaaa12eeff00/8cd84830/KOHLRABI.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAgX/xAAXAQEBAQEAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAHX5fUM6FBNs4XQV//EABoQAQEAAwEBAAAAAAAAAAAAAAECACExESL/2gAIAQEAAQUC0TdffmXaW9Fy+pg6/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAS/9oACAEDAQE/ASX/AP/EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPwEjf//EABkQAAEFAAAAAAAAAAAAAAAAAAABEBEgMf/aAAgBAQAGPwIxlm3/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVGR/9oACAEBAAE/IaEPk0VYm90hx0vIroyhi/IR1CNOxjqf/9oADAMBAAIAAwAAABBY8P7/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAwEBPxBqkj5n/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQESH/2gAIAQIBAT8QDL3D3H//xAAbEAEBAQEBAAMAAAAAAAAAAAABEQAhQVFx0f/aAAgBAQABPxC9QfB1c4UjsWW/Wa9W8aubCR12nmA+HP24hJDmXYq/OHhB6YZIvd//2Q==',
                          aspectRatio: 1,
                          src: '/static/d9778a434b83428e0df7bdc20b09c854/b315d/KOHLRABI.jpg',
                          srcSet:
                            '/static/d9778a434b83428e0df7bdc20b09c854/d0f88/KOHLRABI.jpg 25w,\n/static/d9778a434b83428e0df7bdc20b09c854/99438/KOHLRABI.jpg 50w,\n/static/d9778a434b83428e0df7bdc20b09c854/b315d/KOHLRABI.jpg 100w,\n/static/d9778a434b83428e0df7bdc20b09c854/dcd9a/KOHLRABI.jpg 150w,\n/static/d9778a434b83428e0df7bdc20b09c854/8295c/KOHLRABI.jpg 200w,\n/static/d9778a434b83428e0df7bdc20b09c854/f94df/KOHLRABI.jpg 832w',
                          srcWebp: '/static/d9778a434b83428e0df7bdc20b09c854/ff02b/KOHLRABI.webp',
                          srcSetWebp:
                            '/static/d9778a434b83428e0df7bdc20b09c854/8d998/KOHLRABI.webp 25w,\n/static/d9778a434b83428e0df7bdc20b09c854/48562/KOHLRABI.webp 50w,\n/static/d9778a434b83428e0df7bdc20b09c854/ff02b/KOHLRABI.webp 100w,\n/static/d9778a434b83428e0df7bdc20b09c854/1c591/KOHLRABI.webp 150w,\n/static/d9778a434b83428e0df7bdc20b09c854/a4d7d/KOHLRABI.webp 200w,\n/static/d9778a434b83428e0df7bdc20b09c854/ce27a/KOHLRABI.webp 832w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Jumbo Green Bell Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Jumbo Green Bell Peppers',
                oneLiner: null,
                priceInCents: '100',
                stripePriceId: 'sku_bellpepper241',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Bay leaf, fresh',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Dry Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Bay leaf, fresh',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_bayleaf6',
                unitLabel: 'oz',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Bay leaf, fresh',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_bayleaf7',
                unitLabel: 'oz',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweet Shoots: Sunflower, Pea, Lettuce',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Sweet Shoots: Sunflower, Pea, Lettuce',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_shoots280',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '63870ff9-d329-5b1e-b0bc-6bc7fee2aaa0',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/ceae24c450eacaef3541452985593dfc/9b1ba42a/ScreenShot2020-11-30at18.34.46.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFIElEQVQ4y22T+VOTVxSGv7/EH9pxWrXiTkGBQIGAUEBQJKzKkkAAJQiEQOIgsgkkoEBEASWA7LIpIEqRgAouaMFtnGmt1tpx2qmjEDBAtU8/0C5Oe2feOXPPvfPc99x7rvBqxsqSXs/MM/0fLTBj+Wc+Y1n4O1pmF5l7s8gb61JcYHbu9+W88PojoHVZ/wf5tz4GLixHy+wH4KvXc7yefrM8mZ19J+rtB/C8mLcuyzIrQi1/wZcOt77fP7fI7Jt5LHNLlSy+B759CwuLMD09x/OXz/np5VMsM+8XrfMwb4UXv0wzM70owudFN2+xWv/AIgJmRVdL6wsLLOeXjAmDQ6NcvzXJk1fjlF5UYBo+ztK4OnGTE6fPcPvhDYbvN9MyWYvxzhEmHjygYbiNZ7/9ykuxuscvnjF+6zbnzl8QDbxDON1VztmLHZhuqSkZ9sI0lk5K/j7qLlWS35lGUW8SugE/cm/KUXeEIs/xJ7Y6kJisJJSF4WjaA9BWJVLQpOPRj48Qer8rZORJKYe7Imm+V0rFaDLuqpWoGmQcuhiGrj2e3P4wZKneSELXElnsSXi+G3uLpcRVbUXT6YnC6EtCRSxXJ8cQyszR1I4ryOrxQnXGF0N3NvurvdmmWk3ZwF5K+4NRHZdi67AZtz0byWgMw1NtT1rrdnQtUsJTZahPb8clejNygzdC5c0DdDzIxHTdF+/sdQRmu6E1Kfhc9gn9U/n0jBcTqHHEL9Ee+9A1qFqcSK2NYLfBh+Ace/T1+zgxFIZPhhuu8ZsRcobDqJnyo2zIEWfVJrw0LmQ1KfHO2UTFhVhuPq9Gsmc1a9xWsClgJbICW0KSxXKrg1DWfE3JBTn+KVvYnijBJdIBQT8cx/HrwSir7fDK3IpL4kZkhm3ImjzwO+JM25iW4KytOMfasC1oNUVn9xBT7II0ZS2aeimB6fbsMThgE/AZHvvcEAKjvDjWoqJ7Kpe8ViVp9a7ElfkgLbBDkmuHfiBWvDd/pPLVpJ+MoP/xCRR6V3Zrv0R90pW0ihBiSiXsynIgMM0HoaY5msEbJdz5oYdz32rpmkijsjOb5suZaNt3UDIaTX5/KP4J68WXdaegW0mwzglVqSfF5wMIz3LGMWIV8jxH6s5rEGr7ZFQ0x1Hfl0Pf3QSarsQzcqeJez8XUz/mT505juIuX9ZJV+ASvoqA1A3E6Z2ILtyCosiWnanr2BLwKXFFEoyXlQgHjnqQfVJB53gu7WP72F8ppf++ns77IeT1SCjriKKw1Z9gzQZ2xNiQVeNJoPwLMk5LSC3yILX8K/xSNpBuEl2btiIYuiJoNB9m4mkjeZ0BOKfYojjuRMJJR/I6PDF2RKBv8yW3QUJIgg1qvSPKQ3YUnnWnxBTGqb4Y/JNsiBLvW2MUH+X7lxe4+2wAeZyCoNhtJJ/xwOfAeuQFTuSLjX6qL5yytiCKGt1RH3EgQ3SVfNSWQ2IzHzJ6U1S/k1SDG4frdtBu1iF0j5Zz0BjPers1ZBbspnUinhSDOyd6g2geSqLlm2TqehOobJGhN/lRdTaBmsGdnOoW/3ntLjQlzqSJ7ZV7VE6nOROhfURD/WAaurxIusz5tF1TkWuMwtjrz+j9Sgaul9PUr6WyQUnxKdHFYB4j93Rcm6rGKOa0BlcStW7UdeoobQhFaLuYSc+VwxQeU9LYl0m9eS/dV0rpGFNz9WEt5ttNVDdno84K4WidAvNkA+fOHeTSSAVVTelk5PhS1ZZAy2UVB8s9+BPL+Vho+hP43wAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/99dac162cf5c1a9464199ca89e30bd15/71eb7/ScreenShot2020-11-30at18.34.46.png',
                          srcSet:
                            '/static/99dac162cf5c1a9464199ca89e30bd15/b5811/ScreenShot2020-11-30at18.34.46.png 25w,\n/static/99dac162cf5c1a9464199ca89e30bd15/8ba1e/ScreenShot2020-11-30at18.34.46.png 50w,\n/static/99dac162cf5c1a9464199ca89e30bd15/71eb7/ScreenShot2020-11-30at18.34.46.png 100w,\n/static/99dac162cf5c1a9464199ca89e30bd15/92ab1/ScreenShot2020-11-30at18.34.46.png 150w,\n/static/99dac162cf5c1a9464199ca89e30bd15/b3a76/ScreenShot2020-11-30at18.34.46.png 200w,\n/static/99dac162cf5c1a9464199ca89e30bd15/c96d4/ScreenShot2020-11-30at18.34.46.png 1336w',
                          srcWebp: '/static/99dac162cf5c1a9464199ca89e30bd15/ff02b/ScreenShot2020-11-30at18.34.46.webp',
                          srcSetWebp:
                            '/static/99dac162cf5c1a9464199ca89e30bd15/8d998/ScreenShot2020-11-30at18.34.46.webp 25w,\n/static/99dac162cf5c1a9464199ca89e30bd15/48562/ScreenShot2020-11-30at18.34.46.webp 50w,\n/static/99dac162cf5c1a9464199ca89e30bd15/ff02b/ScreenShot2020-11-30at18.34.46.webp 100w,\n/static/99dac162cf5c1a9464199ca89e30bd15/1c591/ScreenShot2020-11-30at18.34.46.webp 150w,\n/static/99dac162cf5c1a9464199ca89e30bd15/a4d7d/ScreenShot2020-11-30at18.34.46.webp 200w,\n/static/99dac162cf5c1a9464199ca89e30bd15/d4739/ScreenShot2020-11-30at18.34.46.webp 1336w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Yellow Zucchini',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yellow Zucchini',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash134',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: {
                  id: 'b1945ca1-38c2-5690-b3d4-141ad58ec375',
                  localFiles: [
                    {
                      url: 'https://dl.airtable.com/.attachments/35661a006326afba769ce53bd26bc2e2/4f3ae585/image.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFYUlEQVQ4yx2Ua2zTZRTG+4mYoCbgLXLZha7turbrer/fS7u1k3XrGFvXrrt1GzoVuShegiCiAiOgiCgK4gbjMtiALdtAGON+3yKCXARhiUGDH/xgNDEx+fnChyfvP+fNec5zzv88r6TSpmKuVU7aV0ijXytQSGtQQ9qtYlnSxvJGL01elYhraHAX0OjVkPHk0+hRkxHxVr+aFnHXFtKR8amQxExy5uhymWuWUicSah1KEjYZVaYcRjudHOmqZa5RRlIUqHUqqXZqqLEpxHcBKZeKTFBLg+8RYRFNQowkoskhqsujwiglZpBSG8gnblbwdtLAmc7nuXwwRrVFIZQpqXMqqHOJonY5TW7lY8WtAaHcpxNxFfVeQbi81U7CLyWizmLDO1Y6N79EWySbsYM2LuzKZeJ8A0tfmUdN1EMq6iA520TCXUjKKiX9iMSu4rVStSgmJekQLd+79DI3j5Xx6RIjt0e8bFpVzOKaJ3hwzszwNxou96gZ2Z+mOuYiGrTRWFNCe2MldbEwcaeez9qncf+km7N746J9HZK96y1MnKvk4bU3ufl9gEyllvkVzzAxomf/F0Y+apnMjSEjo7ujLG62URlx0VZXxfx0GV0dBn7oVXNtqJTBbSlSbkFY48+j/ysr989U8cd4nKUtZqqjZs535QjFJjoWTqdv7XNcHQpzuqeYTFzLsjYdZ7t1/Hs3wfDWMIMbs7jQ46S5xI6kMqBl3TsBrg7O5vdLUY5ud1JTHmZlWxY/HVIyLqr3CsI9H0/ju5VyulflcqVHxsOxcv57+B3ffhLm2JdTuHuymAUpC5LMXDfJqIIT3R7ujHo43y1n63IFpY7p7F71DOM9Cu6dMLDxjafZtGgqF3fnc+e4g38m1vLg+ibWLpBy93slneu8pF9SImlNhPDqXmTfRitXDjq4ecTCqW+zWVozmVUtT3Hqa6F0UEP3yucZWD+Ln4ZC/Hqxir/ufsjWD10c2jCFa8M+EiVSmuNihqlyHyWOmRztdHCx18Xt4wEeXAjTveI5PmmQcGD1C1zZrxIzzWb/iic5uU3D9X6XaFvH6S6h7riNNYvVuPTZtCeMgrDMy4oFDga2WNjdoeXYdjs/jwQZ6zOxpmkS3R+8IP6ijT9/LGfn+3ksqZzE4U0zuHXYyK/nSjneZSNsm0ZIOOzVhB5JfXmAeREtmYoZ7FhtZ2BzlBM7vdw46ufKARMDnyq5OhDg7zv1DG7IpX/NE/zYr+XnE5XcHq1lzUIFhbLpxINqmipEy36jmvq4TwSy+HyZkb4v4wxt83O+18NvYxEmTs1mbJ+av35ZwfW+As5uf5Zrh0u5NdrM6I4gZZ4XMatymRdS8Gq6GIlZkUOZV+xexEhblZKOJWo+e7eIA5ttwsdOMXyx8MMWHoy/ztgeBac6VYz3hzmzN8Ki1AxkM6dSEdLzen2EN6pmI3EoZ2GWZ+HRilXxGJkX1T12y5tNwlbvabkwmBEuKWNPh4wt72WLORexa72d1YuMlIkdbqgI8lZjBe1idPUBAxJrfg4WZS56WRZGQWzRKjFr87EWKfFZtZT6dSJRR8RVKApqmSPezai7iKpoQKiqoj3mIx0wPkbbHC8SkyIbvTwHgywHk3Q6OtkMnEaVIJSjK8hBI5spkIW+YBaWQhkBh4FkPMqCTJJMLEhd0EpKIB2ykxKQGASZWSnFnj8L+yOFedMwidNaKMcvFPrtOvy2IkIuIyU+K82JGAubqqkXz1mdIGgocdAQstFa6iJTbEXiVMlwFipwiNOvyiYoENLmETbkE7FqiPv0VAdNJIXxG6IiaY6b+THP44fglZib1qidtlKHIHTQEnXyP7EcWAXYdyUlAAAAAElFTkSuQmCC',
                          aspectRatio: 1,
                          src: '/static/358c353c5d81d583da522378f04b6ee8/71eb7/image.png',
                          srcSet:
                            '/static/358c353c5d81d583da522378f04b6ee8/b5811/image.png 25w,\n/static/358c353c5d81d583da522378f04b6ee8/8ba1e/image.png 50w,\n/static/358c353c5d81d583da522378f04b6ee8/71eb7/image.png 100w,\n/static/358c353c5d81d583da522378f04b6ee8/92ab1/image.png 150w,\n/static/358c353c5d81d583da522378f04b6ee8/b3a76/image.png 200w,\n/static/358c353c5d81d583da522378f04b6ee8/ce6e4/image.png 774w',
                          srcWebp: '/static/358c353c5d81d583da522378f04b6ee8/ff02b/image.webp',
                          srcSetWebp:
                            '/static/358c353c5d81d583da522378f04b6ee8/8d998/image.webp 25w,\n/static/358c353c5d81d583da522378f04b6ee8/48562/image.webp 50w,\n/static/358c353c5d81d583da522378f04b6ee8/ff02b/image.webp 100w,\n/static/358c353c5d81d583da522378f04b6ee8/1c591/image.webp 150w,\n/static/358c353c5d81d583da522378f04b6ee8/a4d7d/image.webp 200w,\n/static/358c353c5d81d583da522378f04b6ee8/f3931/image.webp 774w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yellow Zucchini Squash',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_squash183',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: '354d0ae6-ebc2-5407-9ec6-2bef36ff4fda',
                  localFiles: [
                    {
                      url: 'https://dl.airtable.com/.attachments/35661a006326afba769ce53bd26bc2e2/4f3ae585/image.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFYUlEQVQ4yx2Ua2zTZRTG+4mYoCbgLXLZha7turbrer/fS7u1k3XrGFvXrrt1GzoVuShegiCiAiOgiCgK4gbjMtiALdtAGON+3yKCXARhiUGDH/xgNDEx+fnChyfvP+fNec5zzv88r6TSpmKuVU7aV0ijXytQSGtQQ9qtYlnSxvJGL01elYhraHAX0OjVkPHk0+hRkxHxVr+aFnHXFtKR8amQxExy5uhymWuWUicSah1KEjYZVaYcRjudHOmqZa5RRlIUqHUqqXZqqLEpxHcBKZeKTFBLg+8RYRFNQowkoskhqsujwiglZpBSG8gnblbwdtLAmc7nuXwwRrVFIZQpqXMqqHOJonY5TW7lY8WtAaHcpxNxFfVeQbi81U7CLyWizmLDO1Y6N79EWySbsYM2LuzKZeJ8A0tfmUdN1EMq6iA520TCXUjKKiX9iMSu4rVStSgmJekQLd+79DI3j5Xx6RIjt0e8bFpVzOKaJ3hwzszwNxou96gZ2Z+mOuYiGrTRWFNCe2MldbEwcaeez9qncf+km7N746J9HZK96y1MnKvk4bU3ufl9gEyllvkVzzAxomf/F0Y+apnMjSEjo7ujLG62URlx0VZXxfx0GV0dBn7oVXNtqJTBbSlSbkFY48+j/ysr989U8cd4nKUtZqqjZs535QjFJjoWTqdv7XNcHQpzuqeYTFzLsjYdZ7t1/Hs3wfDWMIMbs7jQ46S5xI6kMqBl3TsBrg7O5vdLUY5ud1JTHmZlWxY/HVIyLqr3CsI9H0/ju5VyulflcqVHxsOxcv57+B3ffhLm2JdTuHuymAUpC5LMXDfJqIIT3R7ujHo43y1n63IFpY7p7F71DOM9Cu6dMLDxjafZtGgqF3fnc+e4g38m1vLg+ibWLpBy93slneu8pF9SImlNhPDqXmTfRitXDjq4ecTCqW+zWVozmVUtT3Hqa6F0UEP3yucZWD+Ln4ZC/Hqxir/ufsjWD10c2jCFa8M+EiVSmuNihqlyHyWOmRztdHCx18Xt4wEeXAjTveI5PmmQcGD1C1zZrxIzzWb/iic5uU3D9X6XaFvH6S6h7riNNYvVuPTZtCeMgrDMy4oFDga2WNjdoeXYdjs/jwQZ6zOxpmkS3R+8IP6ijT9/LGfn+3ksqZzE4U0zuHXYyK/nSjneZSNsm0ZIOOzVhB5JfXmAeREtmYoZ7FhtZ2BzlBM7vdw46ufKARMDnyq5OhDg7zv1DG7IpX/NE/zYr+XnE5XcHq1lzUIFhbLpxINqmipEy36jmvq4TwSy+HyZkb4v4wxt83O+18NvYxEmTs1mbJ+av35ZwfW+As5uf5Zrh0u5NdrM6I4gZZ4XMatymRdS8Gq6GIlZkUOZV+xexEhblZKOJWo+e7eIA5ttwsdOMXyx8MMWHoy/ztgeBac6VYz3hzmzN8Ki1AxkM6dSEdLzen2EN6pmI3EoZ2GWZ+HRilXxGJkX1T12y5tNwlbvabkwmBEuKWNPh4wt72WLORexa72d1YuMlIkdbqgI8lZjBe1idPUBAxJrfg4WZS56WRZGQWzRKjFr87EWKfFZtZT6dSJRR8RVKApqmSPezai7iKpoQKiqoj3mIx0wPkbbHC8SkyIbvTwHgywHk3Q6OtkMnEaVIJSjK8hBI5spkIW+YBaWQhkBh4FkPMqCTJJMLEhd0EpKIB2ykxKQGASZWSnFnj8L+yOFedMwidNaKMcvFPrtOvy2IkIuIyU+K82JGAubqqkXz1mdIGgocdAQstFa6iJTbEXiVMlwFipwiNOvyiYoENLmETbkE7FqiPv0VAdNJIXxG6IiaY6b+THP44fglZib1qidtlKHIHTQEnXyP7EcWAXYdyUlAAAAAElFTkSuQmCC',
                          aspectRatio: 1,
                          src: '/static/358c353c5d81d583da522378f04b6ee8/71eb7/image.png',
                          srcSet:
                            '/static/358c353c5d81d583da522378f04b6ee8/b5811/image.png 25w,\n/static/358c353c5d81d583da522378f04b6ee8/8ba1e/image.png 50w,\n/static/358c353c5d81d583da522378f04b6ee8/71eb7/image.png 100w,\n/static/358c353c5d81d583da522378f04b6ee8/92ab1/image.png 150w,\n/static/358c353c5d81d583da522378f04b6ee8/b3a76/image.png 200w,\n/static/358c353c5d81d583da522378f04b6ee8/ce6e4/image.png 774w',
                          srcWebp: '/static/358c353c5d81d583da522378f04b6ee8/ff02b/image.webp',
                          srcSetWebp:
                            '/static/358c353c5d81d583da522378f04b6ee8/8d998/image.webp 25w,\n/static/358c353c5d81d583da522378f04b6ee8/48562/image.webp 50w,\n/static/358c353c5d81d583da522378f04b6ee8/ff02b/image.webp 100w,\n/static/358c353c5d81d583da522378f04b6ee8/1c591/image.webp 150w,\n/static/358c353c5d81d583da522378f04b6ee8/a4d7d/image.webp 200w,\n/static/358c353c5d81d583da522378f04b6ee8/f3931/image.webp 774w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Tart Cherries, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Tart Cherries, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit122',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: '695ee294-4a02-5a8e-8134-0338cc435fad',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/1ac8b61bbc09f13a5c2db46ce847df5c/b644c56f/ScreenShot2020-11-11at19_12_25.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwklEQVQ4y1VVyVJbRxSVQUiAkEAMMiAJBMIESLkIxkwiWMYYOzFZJMQrZ+V/IJ+QfEJSTiqVmG1Ilb0L7/WbBBrA9spV3nioJD9ycu59ksCLSzf9uu9wzrlXESvaATvaCaszXO1oFFbHFVhXInDSA/CmCvCmp+FOTnI/BY+rMzio3+XexVtaZyciFv9Y4oiHsuqlWBe8QgH+/ALciQlUrl/HyfKyrsHcPJzxLIMU9d5HTsVhmFXT5LArqhkFc3M4WV1DtbSJ07VVnNy4geqtMs4ePkR9d1cz9elc7reru+zQaq2M6I2P49XjxwgWmOHICP6ORHAsJtl0dzPAGhr738LJZHA5ISssueMSfhcOg/l5eLksatvbOHvwAOfM7MWj72iP4F29itPPluCNjrZLbmPYxq6FA3ExEpnAGzE+Ejy96Sk4uRycYhFWOo3joSFYNCn54wxbjiRSk7kqS6qWy/CvXdO1SszO9/dR39nBafkWGl9/g/reHvdlWJFIWxXiJ8xQ2Orrg5WkJRKwh4bhFKZgWJo7NgY3nycBc/BnZ3X1ZmbgFSklZmxS/TADodmxWOjQ0JmXz9H4sEC9ZbNw6UxWwdOVssdGeZaBMzwMNzOiOHoM5mXHQ6O87N6eJiki4lQSDqMIDnZPjz4ykm1vLwwzP6bgTSqlez3vu/gmCYVCZ8lSv8ji7Isv8eGPp3j/08/4588jvH3yBOdk9/XBAd788CM+HB7iv+fP8O633/Hv0V+0I7z79ZfQnh6ivlVSP6pDAdYkelFdWUFj5w4a27eVEMmkxjMhqbaxjhdf7aG6WUKNVv98EzVaY3cHZ/fuwWfZx+pQGKZYzcAArHgcVleXmp7RYet/iyXLA+11gq9Eyv1YXL/Zib6QFMFQHgpjbi5PcPO6D27eRGWjhArbr8IM/YVPtUMqi0uhLvMT8CcmlUhpQy+bg80AISkiTEaUCGKmp1uJMf39Crgwa9iCJpliJgnNKBwq0WZTNCdUq/VUNiIXUu9SPoYSkciOSGU0lI/oUXrXZTvqKON9V6rhPZfSkiwFpnanaATBKB7jvEtTBuzpxUUEqyvwl5YQbG2hUirBX1+HO1PUuyIzh1X4FLnNqlQ2druPL0pQTCYLsNkFPlmubN+BR2fB/fswHLJ2MgmPKnBGMorzy4PvEXC8SZCIMkf8KstCwoZmYVGwImyfg8Al8MHsJxpApCQlejwXfMWBkHVy9y58Dl91qOOHE0PKNP0plY/dHQ/LZyBnqDl1hJj0oP4stIZBayCbdPMNS/4fNw0OvGZtUncAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/58ee269b84718aedd4f9ab847cada260/71eb7/ScreenShot2020-11-11at19_12_25.png',
                          srcSet:
                            '/static/58ee269b84718aedd4f9ab847cada260/b5811/ScreenShot2020-11-11at19_12_25.png 25w,\n/static/58ee269b84718aedd4f9ab847cada260/8ba1e/ScreenShot2020-11-11at19_12_25.png 50w,\n/static/58ee269b84718aedd4f9ab847cada260/71eb7/ScreenShot2020-11-11at19_12_25.png 100w,\n/static/58ee269b84718aedd4f9ab847cada260/92ab1/ScreenShot2020-11-11at19_12_25.png 150w,\n/static/58ee269b84718aedd4f9ab847cada260/b3a76/ScreenShot2020-11-11at19_12_25.png 200w,\n/static/58ee269b84718aedd4f9ab847cada260/d282b/ScreenShot2020-11-11at19_12_25.png 539w',
                          srcWebp: '/static/58ee269b84718aedd4f9ab847cada260/ff02b/ScreenShot2020-11-11at19_12_25.webp',
                          srcSetWebp:
                            '/static/58ee269b84718aedd4f9ab847cada260/8d998/ScreenShot2020-11-11at19_12_25.webp 25w,\n/static/58ee269b84718aedd4f9ab847cada260/48562/ScreenShot2020-11-11at19_12_25.webp 50w,\n/static/58ee269b84718aedd4f9ab847cada260/ff02b/ScreenShot2020-11-11at19_12_25.webp 100w,\n/static/58ee269b84718aedd4f9ab847cada260/1c591/ScreenShot2020-11-11at19_12_25.webp 150w,\n/static/58ee269b84718aedd4f9ab847cada260/a4d7d/ScreenShot2020-11-11at19_12_25.webp 200w,\n/static/58ee269b84718aedd4f9ab847cada260/14fae/ScreenShot2020-11-11at19_12_25.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Acorn Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Acorn Squash',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_squash,squash76',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '2dfcd21d-ae0f-5e64-a080-b690e34b64fd',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Acorn Squash',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_squash74',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '8d38de65-51a5-54fe-affc-bb09a8bec1c0',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Mi Acorn Squash',
                oneLiner: null,
                priceInCents: '2601',
                stripePriceId: 'sku_squash,squash75',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: {
                  id: '55694e0b-0dbf-5987-80d5-8190ce305766',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Cauliflower',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Broccoli & Cauliflower'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cauliflower colors (white, orange and pink)',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cauliflower188',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '3227463b-3022-5ae7-be99-c6c94a179913',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b7c8f554d523720e4512741b97c34975/a0d2013f/PXL_20201017_142828612_MP.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/aAAwDAQACEAMQAAAB465Xy5UmYQIav//EABkQAQEBAQEBAAAAAAAAAAAAAAIBERIAA//aAAgBAQABBQLL7c8D3BqSF+cAnKMl7SE3P//EABgRAAIDAAAAAAAAAAAAAAAAAAEQERIx/9oACAEDAQE/AbGEdX//xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPwEj/8QAGhABAQADAQEAAAAAAAAAAAAAAQARITEyQf/aAAgBAQAGPwLubdmCE2fbcJGXt6b/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFhkXH/2gAIAQEAAT8h1p4QaMr+RNInYMUujxBizfNS0AcMSFxYSKqH/9oADAMBAAIAAwAAABCI/wA8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQMBAT8QtB3BI//EABcRAQEBAQAAAAAAAAAAAAAAABEBABD/2gAIAQIBAT8QErm8d//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESExQVFhcYH/2gAIAQEAAT8QAEyLRTPtsFA0PA39GBTQ5SxknUWVQTt7g8W8erg92NgFx0AaFdxlieIMclI4cNn/2Q==',
                          aspectRatio: 1,
                          src: '/static/697393d96ea55d8f74150f51f92efbda/b315d/PXL_20201017_142828612_MP.jpg',
                          srcSet:
                            '/static/697393d96ea55d8f74150f51f92efbda/d0f88/PXL_20201017_142828612_MP.jpg 25w,\n/static/697393d96ea55d8f74150f51f92efbda/99438/PXL_20201017_142828612_MP.jpg 50w,\n/static/697393d96ea55d8f74150f51f92efbda/b315d/PXL_20201017_142828612_MP.jpg 100w,\n/static/697393d96ea55d8f74150f51f92efbda/dcd9a/PXL_20201017_142828612_MP.jpg 150w,\n/static/697393d96ea55d8f74150f51f92efbda/8295c/PXL_20201017_142828612_MP.jpg 200w,\n/static/697393d96ea55d8f74150f51f92efbda/08e5b/PXL_20201017_142828612_MP.jpg 910w',
                          srcWebp: '/static/697393d96ea55d8f74150f51f92efbda/ff02b/PXL_20201017_142828612_MP.webp',
                          srcSetWebp:
                            '/static/697393d96ea55d8f74150f51f92efbda/8d998/PXL_20201017_142828612_MP.webp 25w,\n/static/697393d96ea55d8f74150f51f92efbda/48562/PXL_20201017_142828612_MP.webp 50w,\n/static/697393d96ea55d8f74150f51f92efbda/ff02b/PXL_20201017_142828612_MP.webp 100w,\n/static/697393d96ea55d8f74150f51f92efbda/1c591/PXL_20201017_142828612_MP.webp 150w,\n/static/697393d96ea55d8f74150f51f92efbda/a4d7d/PXL_20201017_142828612_MP.webp 200w,\n/static/697393d96ea55d8f74150f51f92efbda/50861/PXL_20201017_142828612_MP.webp 910w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cauliflower',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_cauliflower189',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Delicata Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Delicata Squash',
                oneLiner: null,
                priceInCents: '338',
                stripePriceId: 'sku_squash32',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '3fd5d1e5-5f7d-5faa-b14c-7f2fc7605aa3',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/32c6806e7f29740d9a91ecee3e2f731d/c85504e2/WntrSquashDelicatagardenfort.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AHVqVph5Qb2eYcSqZMetYeDCdujEae7FXsqjN7iICNOvSdKzYKiIL7yNJ8qXKbaON4+Ki42HkZqXoKGjrgByal6ZhmWsjUq+oVTOr2HYuGbrxmirjzSojDKtegSTcBGggRyifxjAjiCzeAaRayiciF6jhk+kilGok2QAkol5k4p4iGxAqYQxvZc+y6NC2a8+xZ0jqYgwbEICimgIgW4Ro4cpmmgSkVsHqncGuIYNwpgkzaEe0KIdAIB1aHZnTnVXHKF6F7CDEc+bIdmkGr6TCbygOI5kGZtvAKCAHrOQM6d6FrWUPcCgRNq3TNm+cLifTr6XGwCOdUSngzS6kyrTqjHiuTb4zDnQpSiIdj2qlDCsgg+xhwDJoxqtmUOKcB7JoTLlx2Dfxl7px1qbi0qnijwAuo8owZUmzaUx2rEw570t9MpAzp8Yq4ccqoMRpHYBtIsAx54JoIAIq40o0rFE4MNj785j6MJE5r9Av51AAKd7D7WKF8mdItSoGtmvJdiuOOGoBZ9xAFQ1AIBYAJ1vAI5hAKmACti1QOPBUeDBU86wSeC4NsmYC9iuLQCsfgeqewe7ig7FkQfBhwSqcwKTYwCYcgGzjxPDoCi8mS+rizPAmyTVrC3OqzqciDLVrza6jBDSpyj74l4AlGEDq3kKw5Yf0qkx1ag3to82kGoZrIAAxqUX1bo35clI8thh69Fb17Q4poQZy6MztYsZo3QK+d5c8dZRAJ5uEsacKdi1RufFWOHEVdq8Q+XCU591E6+IAdi1IeC/NeDCQ+7SV/HXWdKvKIpcAIFPAJx2FfPUTd+9OAC9nCC5kRbKqDjjw1bQskVWTBKvm0uheyKHXQC5kwTVshDVsQvPrA7ctxqZgReDbjq2kzq+lRLivj7lwTkAe2sXq4QPyKEi1bA658FFu5wvza1HkXEfXEUJZEoGeVQAmHIIyKk66tJh8tx5/Od6/+Z8uaFYloND06whAGdWHZ5zD7aMELmRF8qjMNGuQsWaMqp5HbGSPJV+LpJ3Pt7Hgf/ynf7vj//rgP3kef/cY9u4UolwL5RnAgBxTQyDVgKugQTBkg6vgQ6ygAmgZAWibxeujzzr0H7/95/97o375X79647944T82GX812D1yU7kvFCohzcAWTgDbUAAjVYAlV4AhVEAdEcIlWMc1KtV89iJ/+iS++KE/eiW/uqb+dp2+9dj/9938sxo6ro92bJJw6VVAIxvDpJ2HYFeGX9QBpxyK8qtaP3eif/iiP3edvrYeP7dg+3KbvDIV/jUZ/3fgvLNcu27P8+mPnxeH7iskgC/pEnGsF/cxnPeyHHq1Xzt2Hvr1XXt2HPz33nnz2+xjzzLokXzz2732oXtyWzhs0bSpkNtWC+BgoO1t78Aw7SAy7Rl4chx7NiH5dOC4c962Mhv2Mlx48xt69JpjYBFu5xR4rlU268/1KlBvppTppiHuri7v77AuLi7ANvc5d/Zx9bBgde+Z9vEbuXPduzVfuXMdOPIZ+DGYL2YNKt5FbaUR9fFm9zVxM3L0NbX4M/P1b+9vdnX2gDU1NrW3OrV1uDg29DizJnMrVnEqk7WvF2+oEakgSSLZiGliV/MxcDo8P3i5/LS1t+1tbnN0NTe4ObGvbw+O5loS2YErAAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/0f91fbc601adb756c25701d20b9a5e30/71eb7/WntrSquashDelicatagardenfort.png',
                          srcSet:
                            '/static/0f91fbc601adb756c25701d20b9a5e30/b5811/WntrSquashDelicatagardenfort.png 25w,\n/static/0f91fbc601adb756c25701d20b9a5e30/8ba1e/WntrSquashDelicatagardenfort.png 50w,\n/static/0f91fbc601adb756c25701d20b9a5e30/71eb7/WntrSquashDelicatagardenfort.png 100w,\n/static/0f91fbc601adb756c25701d20b9a5e30/92ab1/WntrSquashDelicatagardenfort.png 150w,\n/static/0f91fbc601adb756c25701d20b9a5e30/b3a76/WntrSquashDelicatagardenfort.png 200w,\n/static/0f91fbc601adb756c25701d20b9a5e30/b5e6b/WntrSquashDelicatagardenfort.png 450w',
                          srcWebp: '/static/0f91fbc601adb756c25701d20b9a5e30/ff02b/WntrSquashDelicatagardenfort.webp',
                          srcSetWebp:
                            '/static/0f91fbc601adb756c25701d20b9a5e30/8d998/WntrSquashDelicatagardenfort.webp 25w,\n/static/0f91fbc601adb756c25701d20b9a5e30/48562/WntrSquashDelicatagardenfort.webp 50w,\n/static/0f91fbc601adb756c25701d20b9a5e30/ff02b/WntrSquashDelicatagardenfort.webp 100w,\n/static/0f91fbc601adb756c25701d20b9a5e30/1c591/WntrSquashDelicatagardenfort.webp 150w,\n/static/0f91fbc601adb756c25701d20b9a5e30/a4d7d/WntrSquashDelicatagardenfort.webp 200w,\n/static/0f91fbc601adb756c25701d20b9a5e30/27933/WntrSquashDelicatagardenfort.webp 450w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Delicata Squash',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_squash33',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '26c72e6f-8db9-593f-949c-4ffc0753f9fc',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/32c6806e7f29740d9a91ecee3e2f731d/c85504e2/WntrSquashDelicatagardenfort.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AHVqVph5Qb2eYcSqZMetYeDCdujEae7FXsqjN7iICNOvSdKzYKiIL7yNJ8qXKbaON4+Ki42HkZqXoKGjrgByal6ZhmWsjUq+oVTOr2HYuGbrxmirjzSojDKtegSTcBGggRyifxjAjiCzeAaRayiciF6jhk+kilGok2QAkol5k4p4iGxAqYQxvZc+y6NC2a8+xZ0jqYgwbEICimgIgW4Ro4cpmmgSkVsHqncGuIYNwpgkzaEe0KIdAIB1aHZnTnVXHKF6F7CDEc+bIdmkGr6TCbygOI5kGZtvAKCAHrOQM6d6FrWUPcCgRNq3TNm+cLifTr6XGwCOdUSngzS6kyrTqjHiuTb4zDnQpSiIdj2qlDCsgg+xhwDJoxqtmUOKcB7JoTLlx2Dfxl7px1qbi0qnijwAuo8owZUmzaUx2rEw570t9MpAzp8Yq4ccqoMRpHYBtIsAx54JoIAIq40o0rFE4MNj785j6MJE5r9Av51AAKd7D7WKF8mdItSoGtmvJdiuOOGoBZ9xAFQ1AIBYAJ1vAI5hAKmACti1QOPBUeDBU86wSeC4NsmYC9iuLQCsfgeqewe7ig7FkQfBhwSqcwKTYwCYcgGzjxPDoCi8mS+rizPAmyTVrC3OqzqciDLVrza6jBDSpyj74l4AlGEDq3kKw5Yf0qkx1ag3to82kGoZrIAAxqUX1bo35clI8thh69Fb17Q4poQZy6MztYsZo3QK+d5c8dZRAJ5uEsacKdi1RufFWOHEVdq8Q+XCU591E6+IAdi1IeC/NeDCQ+7SV/HXWdKvKIpcAIFPAJx2FfPUTd+9OAC9nCC5kRbKqDjjw1bQskVWTBKvm0uheyKHXQC5kwTVshDVsQvPrA7ctxqZgReDbjq2kzq+lRLivj7lwTkAe2sXq4QPyKEi1bA658FFu5wvza1HkXEfXEUJZEoGeVQAmHIIyKk66tJh8tx5/Od6/+Z8uaFYloND06whAGdWHZ5zD7aMELmRF8qjMNGuQsWaMqp5HbGSPJV+LpJ3Pt7Hgf/ynf7vj//rgP3kef/cY9u4UolwL5RnAgBxTQyDVgKugQTBkg6vgQ6ygAmgZAWibxeujzzr0H7/95/97o375X79647944T82GX812D1yU7kvFCohzcAWTgDbUAAjVYAlV4AhVEAdEcIlWMc1KtV89iJ/+iS++KE/eiW/uqb+dp2+9dj/9938sxo6ro92bJJw6VVAIxvDpJ2HYFeGX9QBpxyK8qtaP3eif/iiP3edvrYeP7dg+3KbvDIV/jUZ/3fgvLNcu27P8+mPnxeH7iskgC/pEnGsF/cxnPeyHHq1Xzt2Hvr1XXt2HPz33nnz2+xjzzLokXzz2732oXtyWzhs0bSpkNtWC+BgoO1t78Aw7SAy7Rl4chx7NiH5dOC4c962Mhv2Mlx48xt69JpjYBFu5xR4rlU268/1KlBvppTppiHuri7v77AuLi7ANvc5d/Zx9bBgde+Z9vEbuXPduzVfuXMdOPIZ+DGYL2YNKt5FbaUR9fFm9zVxM3L0NbX4M/P1b+9vdnX2gDU1NrW3OrV1uDg29DizJnMrVnEqk7WvF2+oEakgSSLZiGliV/MxcDo8P3i5/LS1t+1tbnN0NTe4ObGvbw+O5loS2YErAAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/0f91fbc601adb756c25701d20b9a5e30/71eb7/WntrSquashDelicatagardenfort.png',
                          srcSet:
                            '/static/0f91fbc601adb756c25701d20b9a5e30/b5811/WntrSquashDelicatagardenfort.png 25w,\n/static/0f91fbc601adb756c25701d20b9a5e30/8ba1e/WntrSquashDelicatagardenfort.png 50w,\n/static/0f91fbc601adb756c25701d20b9a5e30/71eb7/WntrSquashDelicatagardenfort.png 100w,\n/static/0f91fbc601adb756c25701d20b9a5e30/92ab1/WntrSquashDelicatagardenfort.png 150w,\n/static/0f91fbc601adb756c25701d20b9a5e30/b3a76/WntrSquashDelicatagardenfort.png 200w,\n/static/0f91fbc601adb756c25701d20b9a5e30/b5e6b/WntrSquashDelicatagardenfort.png 450w',
                          srcWebp: '/static/0f91fbc601adb756c25701d20b9a5e30/ff02b/WntrSquashDelicatagardenfort.webp',
                          srcSetWebp:
                            '/static/0f91fbc601adb756c25701d20b9a5e30/8d998/WntrSquashDelicatagardenfort.webp 25w,\n/static/0f91fbc601adb756c25701d20b9a5e30/48562/WntrSquashDelicatagardenfort.webp 50w,\n/static/0f91fbc601adb756c25701d20b9a5e30/ff02b/WntrSquashDelicatagardenfort.webp 100w,\n/static/0f91fbc601adb756c25701d20b9a5e30/1c591/WntrSquashDelicatagardenfort.webp 150w,\n/static/0f91fbc601adb756c25701d20b9a5e30/a4d7d/WntrSquashDelicatagardenfort.webp 200w,\n/static/0f91fbc601adb756c25701d20b9a5e30/27933/WntrSquashDelicatagardenfort.webp 450w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Blue Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Blue Potatoes',
                oneLiner: null,
                priceInCents: '3900',
                stripePriceId: 'sku_potato13',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Diced Carrot Mix, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Diced Carrot Mix, Frozen',
                oneLiner: null,
                priceInCents: '2900',
                stripePriceId: 'sku_frozenveg34',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Norland Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Norland Potatoes',
                oneLiner: null,
                priceInCents: '260',
                stripePriceId: 'sku_potato99',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Norland Potatoes',
                oneLiner: null,
                priceInCents: '3900',
                stripePriceId: 'sku_potato98',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Oregano',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Oregano',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_oregano81',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Oregano',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_oregano82',
                unitLabel: 'oz',
                unitQuantity: 1,
                mainImage: {
                  id: '6de91da4-54f0-5176-b1b7-6ae92f0d4ef6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/802fa32e915302f61a5686713cbfdaef/5b26db12/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMBBAL/xAAYAQACAwAAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAABnLZ5qOxwkb4JugD/xAAZEAEAAwEBAAAAAAAAAAAAAAABAAIREiH/2gAIAQEAAQUCNipetsPSI9K1bKOpbnZ//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQEv/aAAgBAwEBPwFlFf/EABcRAAMBAAAAAAAAAAAAAAAAAAABEBP/2gAIAQIBAT8BRmKf/8QAGxAAAwACAwAAAAAAAAAAAAAAAAEREEEiYYH/2gAIAQEABj8C0NXHERI/BdlNn//EABsQAAIDAQEBAAAAAAAAAAAAAAERACExYYGh/9oACAEBAAE/IXoUHXCoS1Y+wCSX0CEDsdtw2pDI5PRUUp3buOWbOGIAL8Gf/9oADAMBAAIAAwAAABAA333/xAAYEQADAQEAAAAAAAAAAAAAAAAAASERMf/aAAgBAwEBPxBdKEhrP//EABgRAQEBAQEAAAAAAAAAAAAAAAEAESGB/9oACAECAQE/EAdtPYGeQt//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRcfD/2gAIAQEAAT8Qs2kLGx86iJWAIJTBxCO2MoiloxR95Lj5bOHHL3HD7u6FfUFneQ9YvUSLJXo1BpJTNoT/2Q==',
                          aspectRatio: 1,
                          src:
                            '/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/b315d/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg',
                          srcSet:
                            '/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/d0f88/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg 25w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/99438/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg 50w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/b315d/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg 100w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/dcd9a/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg 150w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/8295c/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg 200w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/6e63d/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...jpg 400w',
                          srcWebp:
                            '/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/ff02b/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp',
                          srcSetWebp:
                            '/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/8d998/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp 25w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/48562/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp 50w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/ff02b/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp 100w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/1c591/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp 150w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/a4d7d/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp 200w,\n/static/5bda9f9fd1ae0b2e0f6e267fe7bd659a/6a64a/Italian_Oregano_Plants_For_Sale__Origanum_x_Majoricum__The_...webp 400w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Thelma Sanders Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Thelma Sanders Squash',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash125',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Honey Crisp Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Honey Crisp Apples',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_apple57',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '843b2cb0-1c32-57d0-98de-39c6d0e1b328',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/8419e758ac55986e5eb2cbb4ddfff8a3/f5e55741/honeycrispapplesref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABcBAQEBAQAAAAAAAAAAAAAAAAEEAAL/2gAMAwEAAhADEAAAAY+iiWyZok/Udkcv/8QAGxABAQEAAgMAAAAAAAAAAAAAAQISAAMRITL/2gAIAQEAAQUC8NTXzWOQSVeUvM12HqwyAc//xAAXEQEAAwAAAAAAAAAAAAAAAAAAEFGB/9oACAEDAQE/AWrj/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/AVgsm//EABwQAAICAgMAAAAAAAAAAAAAAAABETECISIyYf/aAAgBAQAGPwJK5ZlMwKc2Yut2doao5vY36UVJ/8QAGxABAQEBAQADAAAAAAAAAAAAAREAIUExUWH/2gAIAQEAAT8hBMDee4HAhwLh7Kem7KtDt5hEj7ycU+VMH5DqLHdQJ693/9oADAMBAAIAAwAAABB4Dz3/xAAaEQEAAQUAAAAAAAAAAAAAAAABABARMXHw/9oACAEDAQE/EBzLEIc3T//EABsRAAICAwEAAAAAAAAAAAAAAAABESExUfCB/9oACAECAQE/ELCRLPeE3zQzk//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESFRMYFBYXGx/9oACAEBAAE/EHs0Qb76xNQbZTo9wqBE2Jf5ABnFR3jviMUdlkNil2SwJ8CxPHz5AAuwBbR1GVhpaHuJ41yus//Z',
                          aspectRatio: 1,
                          src: '/static/da0250314d8c50d0985b95fc02f73b55/b315d/honeycrispapplesref.jpg',
                          srcSet:
                            '/static/da0250314d8c50d0985b95fc02f73b55/d0f88/honeycrispapplesref.jpg 25w,\n/static/da0250314d8c50d0985b95fc02f73b55/99438/honeycrispapplesref.jpg 50w,\n/static/da0250314d8c50d0985b95fc02f73b55/b315d/honeycrispapplesref.jpg 100w,\n/static/da0250314d8c50d0985b95fc02f73b55/dcd9a/honeycrispapplesref.jpg 150w,\n/static/da0250314d8c50d0985b95fc02f73b55/8295c/honeycrispapplesref.jpg 200w,\n/static/da0250314d8c50d0985b95fc02f73b55/29667/honeycrispapplesref.jpg 1080w',
                          srcWebp: '/static/da0250314d8c50d0985b95fc02f73b55/ff02b/honeycrispapplesref.webp',
                          srcSetWebp:
                            '/static/da0250314d8c50d0985b95fc02f73b55/8d998/honeycrispapplesref.webp 25w,\n/static/da0250314d8c50d0985b95fc02f73b55/48562/honeycrispapplesref.webp 50w,\n/static/da0250314d8c50d0985b95fc02f73b55/ff02b/honeycrispapplesref.webp 100w,\n/static/da0250314d8c50d0985b95fc02f73b55/1c591/honeycrispapplesref.webp 150w,\n/static/da0250314d8c50d0985b95fc02f73b55/a4d7d/honeycrispapplesref.webp 200w,\n/static/da0250314d8c50d0985b95fc02f73b55/78754/honeycrispapplesref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Honey Crisp Apples',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_apple58',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: {
                  id: 'ddd4a0e3-28c1-56c0-97d8-05f014058941',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/8419e758ac55986e5eb2cbb4ddfff8a3/f5e55741/honeycrispapplesref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABcBAQEBAQAAAAAAAAAAAAAAAAEEAAL/2gAMAwEAAhADEAAAAY+iiWyZok/Udkcv/8QAGxABAQEAAgMAAAAAAAAAAAAAAQISAAMRITL/2gAIAQEAAQUC8NTXzWOQSVeUvM12HqwyAc//xAAXEQEAAwAAAAAAAAAAAAAAAAAAEFGB/9oACAEDAQE/AWrj/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/AVgsm//EABwQAAICAgMAAAAAAAAAAAAAAAABETECISIyYf/aAAgBAQAGPwJK5ZlMwKc2Yut2doao5vY36UVJ/8QAGxABAQEBAQADAAAAAAAAAAAAAREAIUExUWH/2gAIAQEAAT8hBMDee4HAhwLh7Kem7KtDt5hEj7ycU+VMH5DqLHdQJ693/9oADAMBAAIAAwAAABB4Dz3/xAAaEQEAAQUAAAAAAAAAAAAAAAABABARMXHw/9oACAEDAQE/EBzLEIc3T//EABsRAAICAwEAAAAAAAAAAAAAAAABESExUfCB/9oACAECAQE/ELCRLPeE3zQzk//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESFRMYFBYXGx/9oACAEBAAE/EHs0Qb76xNQbZTo9wqBE2Jf5ABnFR3jviMUdlkNil2SwJ8CxPHz5AAuwBbR1GVhpaHuJ41yus//Z',
                          aspectRatio: 1,
                          src: '/static/da0250314d8c50d0985b95fc02f73b55/b315d/honeycrispapplesref.jpg',
                          srcSet:
                            '/static/da0250314d8c50d0985b95fc02f73b55/d0f88/honeycrispapplesref.jpg 25w,\n/static/da0250314d8c50d0985b95fc02f73b55/99438/honeycrispapplesref.jpg 50w,\n/static/da0250314d8c50d0985b95fc02f73b55/b315d/honeycrispapplesref.jpg 100w,\n/static/da0250314d8c50d0985b95fc02f73b55/dcd9a/honeycrispapplesref.jpg 150w,\n/static/da0250314d8c50d0985b95fc02f73b55/8295c/honeycrispapplesref.jpg 200w,\n/static/da0250314d8c50d0985b95fc02f73b55/29667/honeycrispapplesref.jpg 1080w',
                          srcWebp: '/static/da0250314d8c50d0985b95fc02f73b55/ff02b/honeycrispapplesref.webp',
                          srcSetWebp:
                            '/static/da0250314d8c50d0985b95fc02f73b55/8d998/honeycrispapplesref.webp 25w,\n/static/da0250314d8c50d0985b95fc02f73b55/48562/honeycrispapplesref.webp 50w,\n/static/da0250314d8c50d0985b95fc02f73b55/ff02b/honeycrispapplesref.webp 100w,\n/static/da0250314d8c50d0985b95fc02f73b55/1c591/honeycrispapplesref.webp 150w,\n/static/da0250314d8c50d0985b95fc02f73b55/a4d7d/honeycrispapplesref.webp 200w,\n/static/da0250314d8c50d0985b95fc02f73b55/78754/honeycrispapplesref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Organic Zucchini Mix, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Organic Zucchini Mix, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenveg86',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Peach Slices, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Peach Slices, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit88',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: '4fff2476-d01e-54a8-a036-584b04b97b6c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/42c0e75e34429ce42b6fb40f342bfba9/ef0b358e/ScreenShot2020-11-11at19_11_41.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVQ4y1VUWW9NURQ+P4RocdVcrbaGTgglxtZMDOFB8MKLJ8NtS1ttb1tKq5MqEkMkXkm8iSDh0Rtn733uvZWIRvgFn2+tfc5t78PKntf61vq+tQOTXgyxsHWRjqaV8/QihDdKYTvL4frraQ2wfXVwAw1wHG1XBc8X6r3kvoxiQZFD2ZTDtiV8WI9ocBtspg7RvR2IHuxFdJ/jXe71bIAdaOT9JXS2sMhpkHguOGtNEVEjH25FNNKC7NhBZEdbEA3vRnbiCPLPLyI3dUoDOt6R+8UI40mYjIzoetbj5+srcPeaYG+vRXh1HsJrC5gmH7Yv1QD5Zxd4Vo25gCTLQOuV1CJx2Lue6W6F7d2A3OQx5J+cwTSRTb+6TLsE112F7PBOBq6eTbnVly6QNMOCM18/I5E7K7x115CQeliWwfRuhBnYhJD7P7qIvKtSU56bZRAmtUsLa6U6z442I/vwCNydzTpmp06ydueRe3QcEde5Z+eQe3qWZ0cRXi9RlAnrHiFRhbdWeru5gsgqFZWi61kHl6lVAtydLfG4mRJq1JKYW6tgOlZ7ox91aOjE9dd5zYnWMpQF6+N612k9ZRRybE+NH8W6q/We66stmGlf5ln2Qi7xpikspqjXaCCtUbwOZc5Hiurmcp9m8k4sHbPsi5pSyCKRLPX37/sHzHx+ipn3Y/jz9SV+vevHzMdJ/P32Br8/cf/LC7Jcox1l2lIFcoKwCGEp9TafrVWJiGzmJg4hP3VCLTd+iIH2Ik9i1LhnBeX1Bf6dWEKKaS8jEWvUrEiFKYVtS5FoVFJLEOhaWo5r21GufW31Xbm2YkzKcmXMkoDEnPTu+EFE0nY0N7idCJsRDe1SBSjzmY3+LvVp2V2mrWxODUXQibG9pPhWpEBiLEVsblfFZKxQdEJcmE4VNcUsKdSffEtCvWVUI/KQ6NSgFS0Kep1X+bl8YZSYzdR6E3lxT4DMkqJqL1XYKhnWzQ6xX0f2wQ3vgps4DDd+AHZsP7+uTUpGImgRuTjzpMQfq6YQp+LR1ullKw4nj8OMHYB7fBqmr0FTl26xLEPE/em3naz5Hg0SiJClbhE3nDyiaf14WSI7+WDZcpEEkZZjKRQRg4kDN9iE6NEJOH6+hhkG/vtJedlICkI/ZaQpiTREFvKrkBgtBc8L5Yk/5MIb7v8H5W8XXKWIa2wAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/99a162d8a862ee87375ed8019c82ae1d/71eb7/ScreenShot2020-11-11at19_11_41.png',
                          srcSet:
                            '/static/99a162d8a862ee87375ed8019c82ae1d/b5811/ScreenShot2020-11-11at19_11_41.png 25w,\n/static/99a162d8a862ee87375ed8019c82ae1d/8ba1e/ScreenShot2020-11-11at19_11_41.png 50w,\n/static/99a162d8a862ee87375ed8019c82ae1d/71eb7/ScreenShot2020-11-11at19_11_41.png 100w,\n/static/99a162d8a862ee87375ed8019c82ae1d/92ab1/ScreenShot2020-11-11at19_11_41.png 150w,\n/static/99a162d8a862ee87375ed8019c82ae1d/b3a76/ScreenShot2020-11-11at19_11_41.png 200w,\n/static/99a162d8a862ee87375ed8019c82ae1d/d282b/ScreenShot2020-11-11at19_11_41.png 539w',
                          srcWebp: '/static/99a162d8a862ee87375ed8019c82ae1d/ff02b/ScreenShot2020-11-11at19_11_41.webp',
                          srcSetWebp:
                            '/static/99a162d8a862ee87375ed8019c82ae1d/8d998/ScreenShot2020-11-11at19_11_41.webp 25w,\n/static/99a162d8a862ee87375ed8019c82ae1d/48562/ScreenShot2020-11-11at19_11_41.webp 50w,\n/static/99a162d8a862ee87375ed8019c82ae1d/ff02b/ScreenShot2020-11-11at19_11_41.webp 100w,\n/static/99a162d8a862ee87375ed8019c82ae1d/1c591/ScreenShot2020-11-11at19_11_41.webp 150w,\n/static/99a162d8a862ee87375ed8019c82ae1d/a4d7d/ScreenShot2020-11-11at19_11_41.webp 200w,\n/static/99a162d8a862ee87375ed8019c82ae1d/14fae/ScreenShot2020-11-11at19_11_41.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Radish Microgreens',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Radish Microgreens',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_microgreen283',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '011a6a1a-d2cb-5acd-9526-efed74488698',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/361e9c0383bb6ee78594988384046964/c8b59bb4/Microgreens_Radish.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABgBAAMBAQAAAAAAAAAAAAAAAAEDBAAC/9oADAMBAAIQAxAAAAFM3KmnE62UDKAJ/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAERID/9oACAEBAAEFArZQdQ0IxNXpGJtehC7Ig6NP/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARQf/aAAgBAwEBPwGENX//xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQIBAT8BTI//xAAbEAACAgMBAAAAAAAAAAAAAAAAEQExAhIhMv/aAAgBAQAGPwIaZ3IcS0cdHlmpZZ//xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhQTFhcVGR/9oACAEBAAE/IanFprqBUF41G1Lfk5wNglBGU1xO2/sagKeYCQpeGBMP9n//2gAMAwEAAgADAAAAECv/AD3/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EKWiEVER/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERMSFR/9oACAECAQE/EK9FxokqyPD/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhQVGBMWH/2gAIAQEAAT8Qqg7cL6e8FTQKqIejrIU53Fv91g93eMTk5PcalmK9i9TnC3YAiFTXzBdXTRqSzErBMORmsfAS9s//2Q==',
                          aspectRatio: 1,
                          src: '/static/d1c578ae7dc44d9bfab7059a5adf0638/b315d/Microgreens_Radish.jpg',
                          srcSet:
                            '/static/d1c578ae7dc44d9bfab7059a5adf0638/d0f88/Microgreens_Radish.jpg 25w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/99438/Microgreens_Radish.jpg 50w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/b315d/Microgreens_Radish.jpg 100w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/dcd9a/Microgreens_Radish.jpg 150w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/8295c/Microgreens_Radish.jpg 200w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/d1f84/Microgreens_Radish.jpg 800w',
                          srcWebp: '/static/d1c578ae7dc44d9bfab7059a5adf0638/ff02b/Microgreens_Radish.webp',
                          srcSetWebp:
                            '/static/d1c578ae7dc44d9bfab7059a5adf0638/8d998/Microgreens_Radish.webp 25w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/48562/Microgreens_Radish.webp 50w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/ff02b/Microgreens_Radish.webp 100w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/1c591/Microgreens_Radish.webp 150w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/a4d7d/Microgreens_Radish.webp 200w,\n/static/d1c578ae7dc44d9bfab7059a5adf0638/88bdf/Microgreens_Radish.webp 800w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Radish Microgreens',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_microgreen265',
                unitLabel: null,
                unitQuantity: null,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Pac Choi, Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Cabbages & Brussel Sprouts'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Pac Choi, Organic',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_cabbage264',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Thai Basil',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Thai Basil',
                oneLiner: null,
                priceInCents: '499',
                stripePriceId: 'sku_basil123',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Thai Basil',
                oneLiner: null,
                priceInCents: '850',
                stripePriceId: 'sku_basil124',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Basil',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Basil',
                oneLiner: null,
                priceInCents: '2300',
                stripePriceId: 'sku_basil5',
                unitLabel: 'bunch',
                unitQuantity: 12,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Basil',
                oneLiner: null,
                priceInCents: '499',
                stripePriceId: 'sku_basil246',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweet Cherries, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet Cherries, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit119',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: 'ee1cd542-f76b-58a9-a4e4-988d7d84e8a3',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/f03d03027fb209b4ed6e5e8deb4a06e3/ed1854ab/ScreenShot2020-11-11at19_11_54.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgklEQVQ4y2VUWU9TYRDlHxgfNO4LCgpFCmIVEJBVoDul3JaWlrZQQAraIogCLjFI1GhMjMQFojHGBWMw8QGjb/6y45xpe73Cw9y5mXtnvjNnznwl3iPVoHkOn/nP01wHbWqeQ1Uad4t3M3bABmuep/guVrK9YPGdiaGKBqTqL2OkoRuJ811IiU9e6ELY1ijfq3aA0II7guJ9x2qQlELjrR4p1InJzj5c6zWQ6ejTWKyuHSONPfKfXdErkAJSE6FZ9Gi1/szErDuMWf8Qcu5BXO0ZwHz/MB6M57A4mFak45fc8B21/4/QWlCDcmKsrg3PZpYw0eZFpLoZ3XvL0buvQjnsKz2LGTlgOZ1FxN6M7YC0ZSt/TIpLwYlWL4bPteOmkcTd+BWsCLLHU/N4lLmBaE0LrnYHEattFQAW7q0cWvkjKqOyASEhP1pzSdvjQOJyQEroMCrr9RvNKy17t0/ZlETB2NJ8MIF0sxM3xZOzB2NZLIRGNL48eg33hjP67jpQaeaZLRNVoOxc3k7W6ckJQTV4pknRxmWqo029GL2YNyqgiDh46jwGTl+AIcY6WjBY5jD1NlLQGnXHaZutUouOTvXpJqfw26EcJ0VWlBZzCMZsmdAVvgi6Z0+58GHHxuoafn76hq2PG/i9sYnNtff4+mINr26voHtPWX5rCpvDXLNlJVXILWoqXHVRTryMh5k5PMkt4Nn1JTwVv7q4jPupacx4I4jaWxAsd+QHycEUhmNBaFPfsbsUL++s4PPz19h88w6/vm7iy+o6/vzYwi9B+e3VW2x9+ILv7z7icWYW7buO5fMP2v4h7CutRaggk345NecZxK1QCtf9UUW0GEljKTKmsfmBpMbuxCaQdRo6FO62UVH/byj9Ml0SHzvbpp4tU9jTIl76yXafEn+lzacD4XcCiEjbcYcMR4zL4BdgJoes7hdTCcm0+mXyTKIkKG4aURAR/yFvejlYNsxsmW3mpdKpchiSlUo46POFqEOuGXeXHVBSHFqigI6dMZ97bg6FlwKJ9R+vVS554lRXADlXWFufC8Qx6xvSCVPczv0Vitg4Xa96DUgxRWjdw+I7t4Qnst2sK4RbhgzIF8Xt6LgKm22TS24R4+vLT/R6c+6vRAkf5CQrF+isN4o5uf8CJ+r0Z57M4mMtbl23sWYXhoUWxrlqTrnSJmRQC+FRTMrl65Jb/C9/WNyfGfeu6gAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/d84d78631a7163dcb019f626cb2bcf10/71eb7/ScreenShot2020-11-11at19_11_54.png',
                          srcSet:
                            '/static/d84d78631a7163dcb019f626cb2bcf10/b5811/ScreenShot2020-11-11at19_11_54.png 25w,\n/static/d84d78631a7163dcb019f626cb2bcf10/8ba1e/ScreenShot2020-11-11at19_11_54.png 50w,\n/static/d84d78631a7163dcb019f626cb2bcf10/71eb7/ScreenShot2020-11-11at19_11_54.png 100w,\n/static/d84d78631a7163dcb019f626cb2bcf10/92ab1/ScreenShot2020-11-11at19_11_54.png 150w,\n/static/d84d78631a7163dcb019f626cb2bcf10/b3a76/ScreenShot2020-11-11at19_11_54.png 200w,\n/static/d84d78631a7163dcb019f626cb2bcf10/d282b/ScreenShot2020-11-11at19_11_54.png 539w',
                          srcWebp: '/static/d84d78631a7163dcb019f626cb2bcf10/ff02b/ScreenShot2020-11-11at19_11_54.webp',
                          srcSetWebp:
                            '/static/d84d78631a7163dcb019f626cb2bcf10/8d998/ScreenShot2020-11-11at19_11_54.webp 25w,\n/static/d84d78631a7163dcb019f626cb2bcf10/48562/ScreenShot2020-11-11at19_11_54.webp 50w,\n/static/d84d78631a7163dcb019f626cb2bcf10/ff02b/ScreenShot2020-11-11at19_11_54.webp 100w,\n/static/d84d78631a7163dcb019f626cb2bcf10/1c591/ScreenShot2020-11-11at19_11_54.webp 150w,\n/static/d84d78631a7163dcb019f626cb2bcf10/a4d7d/ScreenShot2020-11-11at19_11_54.webp 200w,\n/static/d84d78631a7163dcb019f626cb2bcf10/14fae/ScreenShot2020-11-11at19_11_54.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Curly Parsley',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Curly Parsley',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_parsley31',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '8ddabe16-21cd-58ca-b120-2cd112e1a308',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/2886200343a4c13b4960fd6b0b249753/6bc93d6e/ScreenShot2020-11-25at11_48_12.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFgElEQVQ4yx2UaUybhxnH3x7q2hWarmuCQxNIOIwx+ABsjG3wDcbgGIyNOUwMxjHYJhCwc9gECIWEtEBJcywJyYD0CO1SLS3J0jZHl7VUq9p1XbelnTStO9Rph6Z9nfbtt1f7/vz1PP/rEVL3giR+kktgQUfwTCu+c3p6rtppWdZjPlqCe74a35kG3CeaCF5OMvXJIc7/7SQDN1yM3U5hHfP8Hzf7u3qS91sQzJPFpD4LMHjfj+n4DpwLTnquiUNvVTD2cRfjn6UxHZTRONPCwjfLTP6yE2N6F3XpOoZvncY0ZmPvspfApRrCb7YjOGb0BH7YgvukFecLGlpXSmlYymO397v4z3oZ+SDM6E+DTH81jet0DbWTShwnZETe7sKzGKC0VY5EmUuBVUL9lBYh/pGfnIbHsR3TEXvXg6JvFw1zGhFUTt1EId4LPprP1aIIS1BHy/FfaMD8fBEV8TzaRKr+pW4qIhbk/mLcc1YE3REFtjkTZbESqkYKSf6ii+X/rLL23wt0rzURvzXM0N0osoCSsmgl0p4Sasfk6BJS2lcCTP76RZxzDiyH9BhTdoTYXS+h9QCyzl1UxssxTWswH1PTflmB+5SLxM+i2KeNRG4NMvRhlNBGggO3G+i8YsEhylRzUEv0nTCpmxlmPp9C8F5w86z2GazTDvxveKk8XIHEuY2qVCnxzedxvtxLSVhO5/VW0TANVftVSJqzyPNks9WYTUFrLop9RVgm9PT/WHS5dz1M9EYnBz4aELf6cC1VkNoc46V/zDHxdRexe0fJPFhBFinlO1KBpzQPo0gUkF32CMajCnxrFjEuffSu91AcfA4hcrOXve94SGzWi/RcRN730XimkZoJJaqhHaIMJThfDCBx7OSJEoGKWAWmjJEt6scxpFVoE1r63nbQdtaA7bAeoXPFx9D77Qx/GMA0q8Z5Tk7x3p0UBPPJMjyGxJKDJqPDs+Kl42qY0M0IvuUOqkWK4ZtDTHyeIvSKn7LufHpXOxGSn0SY/VOC6B0vhiMqPMtNmE+KV0ybiW6kaV/rYeDjXhb/OcnU11Ms/GuWub9msL1sxnq8lv4ftWOe0lM5qsYyWYNQkSrg8G8SeM7XYZjOx/SCku/ZHiJ0LcTcX8aY/WOGiW/GSX4xStNcI9YZI52v7cFxysrIp1HSD5Ic+WIM56ID36suBM2hMmT9uZTvz8e4lE/9KR31Z4z41720vW5j/PczTH57mPE/j2JfqiHbLCALSSgfLCbHlYPzeA1NL+koaMlD2p0ravhmENWoFsWwFH1aTccVJ2qxBVVify2LOvSZahovmel4y01xOI+yPqkYk0Jar7pE8yxik1w0X6oUsUrqxegJzWebsC3YSP4qRPCalT3iFUXdObRda8B50cbTjiy2up5FM64ieL0H/2ob8oic4EYzi/+OYz6uJNeVLeqoI3I3jOC5aKZv3cOJb/tJfumg/71GZIO7abnkYvjTkEjbhWFRS8+dJmKbXegPleNe8KM4UIZtXoHnsh3loBTlgJQmkYkw8uU+Bu634VupRT24g91dT/K0/VF8q+KSvydJfxXHcFImXmanLqMRwUX4xZh4V/xMPBhg/89dOERpgusdhK93ixq+2k6+bTtPaR/isdxH2F69BUOmmPrzYgteqSTynh5pyzayCh/GOe9i4PYIQ5sJGk834r9ip8C9FfdFPQ3zRnKd2xGeUT2B1Psc1ekyCjxbaT6tJf3bNrpfNxG/48GckZOl/j5FgZ3kt20hsGohej1C/F4I+7yK0r3bmPxDlNitAOqYCkGZKKdadLh3Yw/7bnvpu9HC0H0PhmO7USaKUEbl1ExVsucHdvo3AjQv1GJNGcTfKBU/t5LymPgz11QYDxayvUrC/wDnx0acKZMziAAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/b7bd9be9df96990c624105bf5591aedb/71eb7/ScreenShot2020-11-25at11_48_12.png',
                          srcSet:
                            '/static/b7bd9be9df96990c624105bf5591aedb/b5811/ScreenShot2020-11-25at11_48_12.png 25w,\n/static/b7bd9be9df96990c624105bf5591aedb/8ba1e/ScreenShot2020-11-25at11_48_12.png 50w,\n/static/b7bd9be9df96990c624105bf5591aedb/71eb7/ScreenShot2020-11-25at11_48_12.png 100w,\n/static/b7bd9be9df96990c624105bf5591aedb/92ab1/ScreenShot2020-11-25at11_48_12.png 150w,\n/static/b7bd9be9df96990c624105bf5591aedb/b3a76/ScreenShot2020-11-25at11_48_12.png 200w,\n/static/b7bd9be9df96990c624105bf5591aedb/f492c/ScreenShot2020-11-25at11_48_12.png 654w',
                          srcWebp: '/static/b7bd9be9df96990c624105bf5591aedb/ff02b/ScreenShot2020-11-25at11_48_12.webp',
                          srcSetWebp:
                            '/static/b7bd9be9df96990c624105bf5591aedb/8d998/ScreenShot2020-11-25at11_48_12.webp 25w,\n/static/b7bd9be9df96990c624105bf5591aedb/48562/ScreenShot2020-11-25at11_48_12.webp 50w,\n/static/b7bd9be9df96990c624105bf5591aedb/ff02b/ScreenShot2020-11-25at11_48_12.webp 100w,\n/static/b7bd9be9df96990c624105bf5591aedb/1c591/ScreenShot2020-11-25at11_48_12.webp 150w,\n/static/b7bd9be9df96990c624105bf5591aedb/a4d7d/ScreenShot2020-11-25at11_48_12.webp 200w,\n/static/b7bd9be9df96990c624105bf5591aedb/d95ae/ScreenShot2020-11-25at11_48_12.webp 654w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Curly Parsley',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_parsley30',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Lemon Thyme',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Lemon Thyme',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_thyme63',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '3c98484a-e0ea-5d1c-b3f3-2ea3ad4c04e2',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/65463897eff3b50d2d7ae7a7f7bc54f5/95a6e935/ScreenShot2020-11-25at11_48_06.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFQUlEQVQ4yxWUaU+b6RWGX2n6paqqqiGBTErSbBAcsxuDN7zjDdsYsI13sA3Gdgy2wWCKCTY7SViyTCYpE9HMmkXNzGjUT9OoqdQf0J909en385zn3Pe5zi0pEiqs5VESD/fw1VbQxQL0BIzoFn1MPI3jbRS54+1FGzczmJSjySsxZMdo1V/j9sifsVTnMO5PMLldYyCkRhpOjxM6aRD4a5TZN3Wyz77klqqPwGYdez2Ap5Gny21AnbGjyqgw3QviWk9zwy2jK2BBGTHSPtnLYNhHf8CFNF6qcO/F9/hPC4zUHfg3VrFlsxirE8jdCrQRAzJbN1d1zVwbuowm62X6fQHHRgFVagRN0YRiyk5/SE9fYgjJt7FMcv8ERy5MfH+f8G4Va8bHdet15K4OVJ47yG2i8bSBkXwc51qeyt/fEd1voJnT0xNXo8rpUIR6sZf0SKt/e8/ej5+Y2dvFNO/HvR7HNpdEPeVg+qRC/sETSmdfs/yxTuRsjomtOLV/HtA3pUU7O0psdwNtzsFdTxdD00akwPMFMq+f4KnmcVXnSb1q4FzNook6WP91h9S7RayVBJO7abLPc7gbPgo/3cNTyaBetJF5v0X8ZZWRpTT2chopdl5j/vwZ0dNlJk8yTJxOM//wEaOFFN7jsGgUY+wgxcyLNZZeHePfT7P4uoFvxYsqYcFzFGXmuxW8ayvc0nYgRZ7UST3fZebpilhIjvjjKomdLez3fBjH+0mvL1H7dIznqRX/XoTlXwtMP5rmrkFIDDgEKnZSx/tY5oICrwEkRWCYLr+CmYOn1F5/i1MwGb5fZjjvpMcxwKBXhff+Aq6/RBmrh1l8W6b4dQN9wUpfRIvMo+WWpo9LA818PtiKpM+NoEz3o4nYMKcsTK7F2PrxA8HDAuZCEFXQSquqFW9phsijPBtvikytuKi+PaLy7lgspYI+OSbQUnNTfQPJWPFgLk4JiRZss5NsfnxL+NxP/vsHyMzdXFG24K4ECeyXSJzFSb70sXySZ/fDIduftjj6dIqvmqXN0oMuMoLUG9RhzsRIHm9iTNoJPV4lfp4m8dUSuoQbczpK4rzM+FEQ62qE7FGY9a+WyZ7lCdaH2ft3nfnHdYbSvVhLXiRTLoSl6Ce0XiJa26R6fkDuiw1MwsPI1jrGmQk0BRv6nFpMYkM9fxtLzsizf5wxvR2hdL5J6EEex54L/3YRybBqQVuxMF4rEd+ukjxcxjrv4qblT+izw+gWtPiEl+7CpIBdS+FsSnxkpf5Dg+f/WiL3TYTEg0ViD+8zLtCRtOUeDFUzJuGTLqNjKK5El9VhL/pwi82almzo4kY6R6/SH+yg+MrL5ndjvP/PKgc/uyi/cZE8jRHfW0ezNIbkqMUY36ygTpnoEAmiEbA6tx3YxOSmWT3t7i66gt30ZrsIzA1Qe2Emdajhl/9WOHhrZ+djjbmT+yIgBC3LgkNHeQFnoYA2PEGP18Bg0CsYtOF/OM9EI0Wn9w62RQ+qtJW76jayO07mTl28/LDIjkAo9bhM6ZsjWnSfi5seFmBHnMi9QwwGRN4l7AzE1AynYnS7LchcPahmlfTFjLR0XuE3zZ8hG5UTPQwzJu779OfXzOxEkE0OcNst55ruNlKr8jLNvRdEoYLu/z/O9dDuVHFB3kRzx++F3C76MwNcVlzmdy2f0SS/IKZVo807WP1iDW/ZQJPhEjeN12n3diO16Ju5pL5KZ8iMsqBAvWCnOzTM0EQbMucN2kRRu7uXC7I/cLHtt1wUjf/Yf5G7AQXy2BDN9is0KS/S1HlJhKyT/wFvETI5ox9eygAAAABJRU5ErkJggg==',
                          aspectRatio: 1,
                          src: '/static/997736aed6cb3dee5a850935eed6db1e/71eb7/ScreenShot2020-11-25at11_48_06.png',
                          srcSet:
                            '/static/997736aed6cb3dee5a850935eed6db1e/b5811/ScreenShot2020-11-25at11_48_06.png 25w,\n/static/997736aed6cb3dee5a850935eed6db1e/8ba1e/ScreenShot2020-11-25at11_48_06.png 50w,\n/static/997736aed6cb3dee5a850935eed6db1e/71eb7/ScreenShot2020-11-25at11_48_06.png 100w,\n/static/997736aed6cb3dee5a850935eed6db1e/92ab1/ScreenShot2020-11-25at11_48_06.png 150w,\n/static/997736aed6cb3dee5a850935eed6db1e/b3a76/ScreenShot2020-11-25at11_48_06.png 200w,\n/static/997736aed6cb3dee5a850935eed6db1e/201d7/ScreenShot2020-11-25at11_48_06.png 620w',
                          srcWebp: '/static/997736aed6cb3dee5a850935eed6db1e/ff02b/ScreenShot2020-11-25at11_48_06.webp',
                          srcSetWebp:
                            '/static/997736aed6cb3dee5a850935eed6db1e/8d998/ScreenShot2020-11-25at11_48_06.webp 25w,\n/static/997736aed6cb3dee5a850935eed6db1e/48562/ScreenShot2020-11-25at11_48_06.webp 50w,\n/static/997736aed6cb3dee5a850935eed6db1e/ff02b/ScreenShot2020-11-25at11_48_06.webp 100w,\n/static/997736aed6cb3dee5a850935eed6db1e/1c591/ScreenShot2020-11-25at11_48_06.webp 150w,\n/static/997736aed6cb3dee5a850935eed6db1e/a4d7d/ScreenShot2020-11-25at11_48_06.webp 200w,\n/static/997736aed6cb3dee5a850935eed6db1e/741fb/ScreenShot2020-11-25at11_48_06.webp 620w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Lemon Thyme',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_thyme64',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Bartlett Pear',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Bartlett Pear',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_pear145',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Bartlett Pear',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_pear146',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Free-Range Large, Grade A Eggs',
          department: ['Eggs'],
          category: ['Chicken Eggs'],
          subcategory: ['Local Chicken Eggs'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['3'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Free-Range Large, Grade A Eggs',
                oneLiner: null,
                priceInCents: '6000',
                stripePriceId: 'sku_eggs44',
                unitLabel: 'dozen',
                unitQuantity: 15,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Blueberries, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Blueberries, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit14',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Saskatoon Berries, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Saskatoon Berries, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit108',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: {
                  id: '0c80805e-ece5-5bb6-b64d-95ba6f2bf6ad',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c844a3614a48892f5c578bc1fd4b1fbb/c7e51c92/ScreenShot2020-11-11at19_12_03.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVQ4y3VUyVJTURDlP7ScmRQHkCHzPEHIS/ISMgKRIYSEgMY5apUstMoPcMNOoMoSSl0oukD8tmOfzoDEctHV793bt4dzzr19jgEXHANO2Pud4HfH06xX7Wq2aw5dp7dddehaJ6YTz7WYNY4+JutNpIflYGg0AtOdRsozh6Qr1fXhu9O631s8ZpOE9v6zleidQ25JlEI+VEDCmcT8zAKW4sviF5GTNUMOpr1zGseuezp0/dN+2pvRgyvmKiqZdfFllIwlVPM1vKi/xFbpgXaaC+XhHHT/PyGNFbnx5tlbFCLzmJ6IYvzCJKYuWXXPfd2L1dQanteamJmMnh3ZqiM7z2DBQxwpHy7CsCdQL27i4coj7Wy7sY3XjdeITsVQii1h1mL8S0ovGcSFXYXGIgiLRS0xJN0kJK0FiF1wNCzERJSczsgkSUnpskpJtG01VUatsIGMP4uNQl0xa9ZeYHNhS3DcwPNqE4/LTzTGcsWu56cu2047ZFe+m36xALwjfq1M0GcmZ3WsuCOJXDCPbCCnfs6X0U65HrgdQvBOSM/yXxPyhxozJYnpSotUTBhSLS4jGraEVo5KchYgHK1CMV0nDCzOWGq2O7JFWnYNe7ra8tzw6T+NMcHRFqacgNbZZzOMn7xokQJGK6FryIOxc+No1l/h6PMRPn04wOHeIU5+/sb+zj52d/ZwIGtc//LxKw52D/Dt8DuOj47x68cJyqlV3D0/IV0mT3U4cWFKW3689lTBbiw9xEaxrmKmL4omi9PzKvT1XFWJq2SraCw/0s6Y0LC1SXEPe5UI30hAk1MKHeYd/S1IGMNJOhOdmhv+W0ElRztUUgQTgktgSQjZWk62rh07KcvNoNBXZK0Uu6f3PCExJIPxtFkRe1J8V9h/V/Vc9ynowTthBX1GmCW7gdtBlVfv6+QYdCmpSgo3/HLIbFdjd9RewmGqZ+WWdAyVS1xlYrbjkxpH7OJt+Zy5KbyPlALlwf/F2VJ3zGquJhBUUE6vibCzcjOsOgGNrxMn68pGX+yB0xHYAasRaCasz29iba6izJtyp0kCryVfG66/f/deixOWPssVmzK1nFjRzUqmCu8NvwazMoHOBvJ6gzL+nEKiD4RcN3ZZiBSxtXhfSCvoK/QHSlrhImh4rFgAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/5eb31044e3565e6a66ebdb618d1f6698/71eb7/ScreenShot2020-11-11at19_12_03.png',
                          srcSet:
                            '/static/5eb31044e3565e6a66ebdb618d1f6698/b5811/ScreenShot2020-11-11at19_12_03.png 25w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/8ba1e/ScreenShot2020-11-11at19_12_03.png 50w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/71eb7/ScreenShot2020-11-11at19_12_03.png 100w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/92ab1/ScreenShot2020-11-11at19_12_03.png 150w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/b3a76/ScreenShot2020-11-11at19_12_03.png 200w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/d282b/ScreenShot2020-11-11at19_12_03.png 539w',
                          srcWebp: '/static/5eb31044e3565e6a66ebdb618d1f6698/ff02b/ScreenShot2020-11-11at19_12_03.webp',
                          srcSetWebp:
                            '/static/5eb31044e3565e6a66ebdb618d1f6698/8d998/ScreenShot2020-11-11at19_12_03.webp 25w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/48562/ScreenShot2020-11-11at19_12_03.webp 50w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/ff02b/ScreenShot2020-11-11at19_12_03.webp 100w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/1c591/ScreenShot2020-11-11at19_12_03.webp 150w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/a4d7d/ScreenShot2020-11-11at19_12_03.webp 200w,\n/static/5eb31044e3565e6a66ebdb618d1f6698/14fae/ScreenShot2020-11-11at19_12_03.webp 539w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Zucchini Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Zucchini Squash',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_squash182',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: '1cc905b3-2d4b-58b3-ac60-d2a079cd6115',
                  localFiles: [
                    {
                      url: 'https://dl.airtable.com/.attachments/0b5bcb2d1fbe81a46deecd3a9e4fab49/4813afe6/image.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcElEQVQ4yx2U+0/b5xnFv1KmrgkXQ0KxwdjYsY1vxMZcjMGXGBsMdgwYO4Fg7r4sIYRrYTQjDoREKWmBsJBLg0SbCwGVAuu6bunWbNmyaJdoWxdtaitN+1s++2o/Pc8rvTo673nPOYJJU4rLqqcnXM+DtUHeH+9gfKKdcLCS9jozVvU7xP02vvpojuXJOJ/ePcd3rzM8etBF5sJJdm6meLya5P7GIO1RHUIo1EqovpKxsQBD79bhrlRyfqSdzlgLMX8NtUY5997r5WDlIo+vptnbSLD3pJ/9nQH2H8eZSdWyuz7KH17MMXe1GeHp5n3ey0SYuOxj7novFrOK7oEgznobFnUJCslb9Aaq+M29aTYvDfDlkwlWV5ro7Crjs/0hXvx2lCdrcX7+8QRbO0MIM+djTF2OUOmWc+vBBU53ezCUl2C3aQi6jDgcchqajSymg2wsxPlR0sPnWz0cfJHg5lqU9U86+MmMk+sjYeZnGxEifUZCnZV4AgbOj8dIT7SQHKuj2lxKR2cF7elKHAETpzvNTC42YXUq6W2t4J8v32f382E2t7v5xa/f5cOVDja2hhG6h2pwN+uw1RTTNVRFpMvFysNeKipkaDRSlGWF+KImFBoJgbNVeENGKtQFbPw0wfOX03yyleBP/1ji6Rf9fPl8DqGp0UhzzESlXUZ00ECo1c7t7VHs3iLkRRKkxTlEhqqRK4+iNhcREu+eqtGTTDr5/V8yHPxqisWlIE8PRvn61SUEvUrC1LybpvBxYkNWWsI2bjw6iytUTIEkG2nJYVp7a7A51cRHqol0G3GVK6mtVfF4P82b72+xI870SD3bBymE9hYT12/5iPToGZqso7JWQXzcRntKQ3eyGkt9IRp9MSYRYP3JWU4njJhshXg8WnZEgD/+9TJ//9cKS6sh+lMGhGtrYWLxE7i8ei7OtKI+no3WmEe1R8r0jXY8ITNZRw5h9ej48OPTDM9UoymTYNLks3cwwus3C3zz7S2evZhl/poPITHpYupKA26/Bq/XilKRg0x2mNysQ3T1Oek656NI+kO8bTbmN4KMztei00swq49xf72HK0shfvl8lm++v83WZ6IP20RN+s45iPWf5LimELk0C4U8+/8zGjExfCmMsvQwERF8+WGM0Uwdak0WbquCM5ETRAcsbO328e1/H/K7VzcRqh1HMZuljC9EqW/QoC7JRa/Kw6Q6SqOvlOFME0ptNslpN6uPovSO6dCKT3ZXqLFbCvlxpoOXr2b4898W+fd/dhFc/lJkBYcIdli5sNAg6pdLQf5bGFT5BE6WMrrQSll5Aa0pLb2zFkJxBQp1Fir5MRzlMs4lvDx7Ns36nTZevhZ9GL+ow2SWoCg+IuoTJpo6QVHx21h07xB0K+kXS0Mt7uF+PYMLRmz1BUgkPyAv+22a7MdJR8qJhtU0e4tZyAQQYgNK3AEp5nIJvpCOiaVGLI486qzFnKwqweXX0pOy4GxRMHm7AmezjDqPigHRUmZ1Pq1OHTX6fDpPlbH3szSCRZuDRrSKTpeDzpBNLGnkjJhfp1slWkNk1qZl/k41Vd4CZu+JHZlUi9FsYfvrs7i9cjEIBk6d0nHjgwBvvruCUK7JRavOocGrQCfuFTUiA68Ks/EYCtkR+s/YuXrPQV1zARPLNqZX7Wzs9zC+aCcYVvHRZheXMl78ATlfiVUmaORZJBIWri55MRrEnw1rsNmlaJW5+D2lTFxsYH3bT9MZGQOzBu4eRMTzGK4WOZE2A2sPgsR6TPgapawshxD6UlbaOvUYjBL0ujw6ek5grSpEr86jUWRdZc3jzqc+OsUoDk4Z2X2eoW/Ei6OhkGt3m9nci7B8u435RT/pRDn/AwyHE0zdBPnFAAAAAElFTkSuQmCC',
                          aspectRatio: 1,
                          src: '/static/c2864eb3494e6a4e1f39804754cba64d/71eb7/image.png',
                          srcSet:
                            '/static/c2864eb3494e6a4e1f39804754cba64d/b5811/image.png 25w,\n/static/c2864eb3494e6a4e1f39804754cba64d/8ba1e/image.png 50w,\n/static/c2864eb3494e6a4e1f39804754cba64d/71eb7/image.png 100w,\n/static/c2864eb3494e6a4e1f39804754cba64d/92ab1/image.png 150w,\n/static/c2864eb3494e6a4e1f39804754cba64d/b3a76/image.png 200w,\n/static/c2864eb3494e6a4e1f39804754cba64d/64754/image.png 727w',
                          srcWebp: '/static/c2864eb3494e6a4e1f39804754cba64d/ff02b/image.webp',
                          srcSetWebp:
                            '/static/c2864eb3494e6a4e1f39804754cba64d/8d998/image.webp 25w,\n/static/c2864eb3494e6a4e1f39804754cba64d/48562/image.webp 50w,\n/static/c2864eb3494e6a4e1f39804754cba64d/ff02b/image.webp 100w,\n/static/c2864eb3494e6a4e1f39804754cba64d/1c591/image.webp 150w,\n/static/c2864eb3494e6a4e1f39804754cba64d/a4d7d/image.webp 200w,\n/static/c2864eb3494e6a4e1f39804754cba64d/830c6/image.webp 727w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Yukon Gold Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yukon Gold Potatoes',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_potato142',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yukon Gold Potatoes',
                oneLiner: null,
                priceInCents: '3900',
                stripePriceId: 'sku_potato141',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Tomatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Tomato',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_tomato177',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Musquee de Provence Pumpkin, Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Musquee de Provence Pumpkin, Organic',
                oneLiner: null,
                priceInCents: '1500',
                stripePriceId: 'sku_pumpkin261',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Spaghetti Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Spaghetti Squash',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_squash114',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: 'a3265c0a-e672-58e0-a2f1-804ac1368645',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b9928b9c543f8985592567e385a79bc2/4c88a847/spaghetti_squash.jpeg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB33hpy2KFkmwHSgEf/8QAGhAAAwADAQAAAAAAAAAAAAAAAAECAxESE//aAAgBAQABBQKYSOFR4jbMbNo4kcraiT//xAAXEQADAQAAAAAAAAAAAAAAAAAAAhEQ/9oACAEDAQE/ASsXP//EABoRAAEFAQAAAAAAAAAAAAAAAAEAAhAREiH/2gAIAQIBAT8BIOuKmz//xAAaEAEAAgMBAAAAAAAAAAAAAAAAITEBEFEy/9oACAEBAAY/AuuZekJjVKU//8QAHRAAAwEAAQUAAAAAAAAAAAAAAAERITFBUXGB4f/aAAgBAQABPyHQbCTq9Bv4Ka1LR8XQdO40XOHmwsh//9oADAMBAAIAAwAAABBXLwH/xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhUUH/2gAIAQMBAT8Q5bHoNtJZ/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIUH/2gAIAQIBAT8Q0EwXREREf//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExQVGBkf/aAAgBAQABPxCjuXJZghxAtIw/J0xmuQvHUXIv0u4hNBe2SqlQs3DAAW/IsKNPWf/Z',
                          aspectRatio: 1,
                          src: '/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/b315d/spaghetti_squash.jpg',
                          srcSet:
                            '/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/d0f88/spaghetti_squash.jpg 25w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/99438/spaghetti_squash.jpg 50w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/b315d/spaghetti_squash.jpg 100w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/dcd9a/spaghetti_squash.jpg 150w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/8295c/spaghetti_squash.jpg 200w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/67d8f/spaghetti_squash.jpg 764w',
                          srcWebp: '/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/ff02b/spaghetti_squash.webp',
                          srcSetWebp:
                            '/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/8d998/spaghetti_squash.webp 25w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/48562/spaghetti_squash.webp 50w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/ff02b/spaghetti_squash.webp 100w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/1c591/spaghetti_squash.webp 150w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/a4d7d/spaghetti_squash.webp 200w,\n/static/f131f73ed9f5d7a38c17f5ff2ae7a4e1/b8209/spaghetti_squash.webp 764w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Cherry Tomatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cherry Tomatoes',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_tomato24',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '49ab5e48-d092-52a2-aeec-38743cea4579',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/7a2818846c1dc94946c9cb0a6b62c715/23bbc23a/IMG_20200912_140720.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwEC/9oADAMBAAIQAxAAAAHtNcoWpjqfqwbIP//EABwQAAEFAAMAAAAAAAAAAAAAAAEAAgMQERIhIv/aAAgBAQABBQIv4pr9W9yDxHtGsC//xAAWEQEBAQAAAAAAAAAAAAAAAAARASD/2gAIAQMBAT8BgY//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQIBAT8BNT//xAAZEAACAwEAAAAAAAAAAAAAAAAAMRARIKH/2gAIAQEABj8CEKK6PH//xAAcEAEAAgMAAwAAAAAAAAAAAAABACERMUEQcZH/2gAIAQEAAT8hxspHyFV2IFV9kPiuzIUo1GB39eJqKNhP/9oADAMBAAIAAwAAABAf8D3/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQIf/aAAgBAwEBPxBKM5kP/8QAFhEAAwAAAAAAAAAAAAAAAAAAASAh/9oACAECAQE/EChP/8QAHRABAAMAAwADAAAAAAAAAAAAAQARITFBUWGhwf/aAAgBAQABPxBlu3hjzAtI5dX1DB2XaH5DtChEbwQIdbPgb+4XUBukaJE4dTWvY4VPqT//2Q==',
                          aspectRatio: 1,
                          src: '/static/0e8c63bbf578ac1f10cfa59ae87bb538/b315d/IMG_20200912_140720.jpg',
                          srcSet:
                            '/static/0e8c63bbf578ac1f10cfa59ae87bb538/d0f88/IMG_20200912_140720.jpg 25w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/99438/IMG_20200912_140720.jpg 50w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/b315d/IMG_20200912_140720.jpg 100w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/dcd9a/IMG_20200912_140720.jpg 150w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/8295c/IMG_20200912_140720.jpg 200w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/a6e07/IMG_20200912_140720.jpg 1280w',
                          srcWebp: '/static/0e8c63bbf578ac1f10cfa59ae87bb538/ff02b/IMG_20200912_140720.webp',
                          srcSetWebp:
                            '/static/0e8c63bbf578ac1f10cfa59ae87bb538/8d998/IMG_20200912_140720.webp 25w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/48562/IMG_20200912_140720.webp 50w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/ff02b/IMG_20200912_140720.webp 100w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/1c591/IMG_20200912_140720.webp 150w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/a4d7d/IMG_20200912_140720.webp 200w,\n/static/0e8c63bbf578ac1f10cfa59ae87bb538/d09b4/IMG_20200912_140720.webp 1280w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Rosemary',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Rosemary',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_rosemary106',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '3466cd3c-fa93-5191-822b-69037a39b33b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/9e612936c7af06196882bcb0b91f178a/46dfbebf/Rosemary_Health_benefits_precautions_and_drug_interactions',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAGzi0c6RJFlbNJZ8YD/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDEhET/9oACAEBAAEFArG86aPQsr0ShKJro0Mwu//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhAR/9oACAECAQE/AZK8P//EABoQAAIDAQEAAAAAAAAAAAAAAAEQABExQVH/2gAIAQEABj8CIIrx31ZNKM//xAAdEAACAwACAwAAAAAAAAAAAAAAAREhQTFRcYHB/9oACAEBAAE/IbSOuxKQkq7JJKknovhrxA1t1hHH0U/QXG58j4TT/9oADAMBAAIAAwAAABC7z8H/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPxBI/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQUf/aAAgBAgEBPxBMYHL/xAAfEAEAAgICAgMAAAAAAAAAAAABACERMUFRcZGxwfH/2gAIAQEAAT8QMmXk24L5gxJeBV/m/cNDTODt7iriSykjXmpX5Vp2pePmbGusrGfI8y2gQtpB0H6jG9FT/9k=',
                          aspectRatio: 1,
                          src:
                            '/static/cc4f82a5e5727d81b8211c54cf356c8e/b315d/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg',
                          srcSet:
                            '/static/cc4f82a5e5727d81b8211c54cf356c8e/d0f88/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg 25w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/99438/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg 50w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/b315d/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg 100w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/dcd9a/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg 150w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/8295c/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg 200w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/ebdd7/Rosemary_Health_benefits_precautions_and_drug_interactions.jpg 1200w',
                          srcWebp:
                            '/static/cc4f82a5e5727d81b8211c54cf356c8e/ff02b/Rosemary_Health_benefits_precautions_and_drug_interactions.webp',
                          srcSetWebp:
                            '/static/cc4f82a5e5727d81b8211c54cf356c8e/8d998/Rosemary_Health_benefits_precautions_and_drug_interactions.webp 25w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/48562/Rosemary_Health_benefits_precautions_and_drug_interactions.webp 50w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/ff02b/Rosemary_Health_benefits_precautions_and_drug_interactions.webp 100w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/1c591/Rosemary_Health_benefits_precautions_and_drug_interactions.webp 150w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/a4d7d/Rosemary_Health_benefits_precautions_and_drug_interactions.webp 200w,\n/static/cc4f82a5e5727d81b8211c54cf356c8e/b395e/Rosemary_Health_benefits_precautions_and_drug_interactions.webp 1200w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Rosemary',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_rosemary105',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Organic Tart Cherries, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Organic Tart Cherries, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit85',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Spearmint',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Mint (Spearmint/Peppermint)',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_mint115',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Spearmint',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_mint116',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Cherry Belle Radish',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cherry Belle Radish',
                oneLiner: null,
                priceInCents: '2200',
                stripePriceId: 'sku_radish23',
                unitLabel: 'bunch',
                unitQuantity: 6,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Leeks',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['More Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Leeks',
                oneLiner: null,
                priceInCents: '3900',
                stripePriceId: 'sku_leeks60',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Feta',
          department: ['Dairy'],
          category: ['Cheese'],
          subcategory: ['Goat Milk Cheeses'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Feta',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_feta39',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: 'e99d1463-4845-5240-84ed-26234d38abd6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/5bcb8058af1aebc72fab32140efce4fc/ecdc1f64/13525293_520394831501708_1716710737_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAeWxlmwHeQVhX//EABsQAAICAwEAAAAAAAAAAAAAAAACAREDEiEy/9oACAEBAAEFAo84lsfjRrszwxog8ULwqz//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAbEAADAAIDAAAAAAAAAAAAAAAAASERMRIiQf/aAAgBAQAGPwLdO8MJ5ExXlj1GyEKf/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARIVFBMYH/2gAIAQEAAT8hpu7xyX3Q8GMemIajU2axpcPyWb77B1hgoiQfpKaAs//aAAwDAQACAAMAAAAQpCiC/8QAFxEAAwEAAAAAAAAAAAAAAAAAASAhMf/aAAgBAwEBPxDDU//EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8Q6aQn/8QAHRABAQEBAAIDAQAAAAAAAAAAAREhADFBUXGRsf/aAAgBAQABPxAGnwAh9l4F4Uw78897HVPziuCaPOxBD2nmdda4Jm+1N8LOi0NOmu8wWSlGZzRX0HH7HkZAJYH87//Z',
                          aspectRatio: 1,
                          src:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/b315d/13525293_520394831501708_1716710737_n.jpg',
                          srcSet:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/d0f88/13525293_520394831501708_1716710737_n.jpg 25w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/99438/13525293_520394831501708_1716710737_n.jpg 50w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/b315d/13525293_520394831501708_1716710737_n.jpg 100w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/dcd9a/13525293_520394831501708_1716710737_n.jpg 150w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/8295c/13525293_520394831501708_1716710737_n.jpg 200w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/29667/13525293_520394831501708_1716710737_n.jpg 1080w',
                          srcWebp:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/ff02b/13525293_520394831501708_1716710737_n.webp',
                          srcSetWebp:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/8d998/13525293_520394831501708_1716710737_n.webp 25w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/48562/13525293_520394831501708_1716710737_n.webp 50w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/ff02b/13525293_520394831501708_1716710737_n.webp 100w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/1c591/13525293_520394831501708_1716710737_n.webp 150w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/a4d7d/13525293_520394831501708_1716710737_n.webp 200w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/78754/13525293_520394831501708_1716710737_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Feta',
                oneLiner: null,
                priceInCents: '4550',
                stripePriceId: 'sku_feta40',
                unitLabel: 'lb',
                unitQuantity: 5,
                mainImage: {
                  id: 'd46b326c-df05-5129-85fb-f1982a6b614d',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/5bcb8058af1aebc72fab32140efce4fc/ecdc1f64/13525293_520394831501708_1716710737_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAeWxlmwHeQVhX//EABsQAAICAwEAAAAAAAAAAAAAAAACAREDEiEy/9oACAEBAAEFAo84lsfjRrszwxog8ULwqz//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAbEAADAAIDAAAAAAAAAAAAAAAAASERMRIiQf/aAAgBAQAGPwLdO8MJ5ExXlj1GyEKf/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARIVFBMYH/2gAIAQEAAT8hpu7xyX3Q8GMemIajU2axpcPyWb77B1hgoiQfpKaAs//aAAwDAQACAAMAAAAQpCiC/8QAFxEAAwEAAAAAAAAAAAAAAAAAASAhMf/aAAgBAwEBPxDDU//EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8Q6aQn/8QAHRABAQEBAAIDAQAAAAAAAAAAAREhADFBUXGRsf/aAAgBAQABPxAGnwAh9l4F4Uw78897HVPziuCaPOxBD2nmdda4Jm+1N8LOi0NOmu8wWSlGZzRX0HH7HkZAJYH87//Z',
                          aspectRatio: 1,
                          src:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/b315d/13525293_520394831501708_1716710737_n.jpg',
                          srcSet:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/d0f88/13525293_520394831501708_1716710737_n.jpg 25w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/99438/13525293_520394831501708_1716710737_n.jpg 50w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/b315d/13525293_520394831501708_1716710737_n.jpg 100w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/dcd9a/13525293_520394831501708_1716710737_n.jpg 150w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/8295c/13525293_520394831501708_1716710737_n.jpg 200w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/29667/13525293_520394831501708_1716710737_n.jpg 1080w',
                          srcWebp:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/ff02b/13525293_520394831501708_1716710737_n.webp',
                          srcSetWebp:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/8d998/13525293_520394831501708_1716710737_n.webp 25w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/48562/13525293_520394831501708_1716710737_n.webp 50w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/ff02b/13525293_520394831501708_1716710737_n.webp 100w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/1c591/13525293_520394831501708_1716710737_n.webp 150w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/a4d7d/13525293_520394831501708_1716710737_n.webp 200w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/78754/13525293_520394831501708_1716710737_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Feta',
                oneLiner: null,
                priceInCents: '9123',
                stripePriceId: 'sku_feta41',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: {
                  id: '605ba067-8f02-5184-8363-92337678293e',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/5bcb8058af1aebc72fab32140efce4fc/ecdc1f64/13525293_520394831501708_1716710737_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAeWxlmwHeQVhX//EABsQAAICAwEAAAAAAAAAAAAAAAACAREDEiEy/9oACAEBAAEFAo84lsfjRrszwxog8ULwqz//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAbEAADAAIDAAAAAAAAAAAAAAAAASERMRIiQf/aAAgBAQAGPwLdO8MJ5ExXlj1GyEKf/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARIVFBMYH/2gAIAQEAAT8hpu7xyX3Q8GMemIajU2axpcPyWb77B1hgoiQfpKaAs//aAAwDAQACAAMAAAAQpCiC/8QAFxEAAwEAAAAAAAAAAAAAAAAAASAhMf/aAAgBAwEBPxDDU//EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8Q6aQn/8QAHRABAQEBAAIDAQAAAAAAAAAAAREhADFBUXGRsf/aAAgBAQABPxAGnwAh9l4F4Uw78897HVPziuCaPOxBD2nmdda4Jm+1N8LOi0NOmu8wWSlGZzRX0HH7HkZAJYH87//Z',
                          aspectRatio: 1,
                          src:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/b315d/13525293_520394831501708_1716710737_n.jpg',
                          srcSet:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/d0f88/13525293_520394831501708_1716710737_n.jpg 25w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/99438/13525293_520394831501708_1716710737_n.jpg 50w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/b315d/13525293_520394831501708_1716710737_n.jpg 100w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/dcd9a/13525293_520394831501708_1716710737_n.jpg 150w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/8295c/13525293_520394831501708_1716710737_n.jpg 200w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/29667/13525293_520394831501708_1716710737_n.jpg 1080w',
                          srcWebp:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/ff02b/13525293_520394831501708_1716710737_n.webp',
                          srcSetWebp:
                            '/static/216e0b72d7fe453b46195ebe2a70cf5d/8d998/13525293_520394831501708_1716710737_n.webp 25w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/48562/13525293_520394831501708_1716710737_n.webp 50w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/ff02b/13525293_520394831501708_1716710737_n.webp 100w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/1c591/13525293_520394831501708_1716710737_n.webp 150w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/a4d7d/13525293_520394831501708_1716710737_n.webp 200w,\n/static/216e0b72d7fe453b46195ebe2a70cf5d/78754/13525293_520394831501708_1716710737_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Easter Egg Radish',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Easter Egg Radish',
                oneLiner: null,
                priceInCents: '2200',
                stripePriceId: 'sku_radish35',
                unitLabel: 'bunch',
                unitQuantity: 6,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Tatsoi',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Tatsoi',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_saladgreens287',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '65430b11-84a5-5314-b374-e2b746902bd6',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/b7acc766dc67308884ca2537c986295a/efafd400/TATSOI_GP.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBA//EABcBAAMBAAAAAAAAAAAAAAAAAAABAwL/2gAMAwEAAhADEAAAAZ5L4pu90YrRgLQP/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAEQMhBBIx/9oACAEBAAEFAs+ormJ5yV0FuBTVQDqJ/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQIf/aAAgBAwEBPwFdhf8A/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8BI//EABsQAAIDAAMAAAAAAAAAAAAAAAABEBEhAiJR/9oACAEBAAY/Are+Go0XJI622KKUf//EABwQAQADAQEAAwAAAAAAAAAAAAEAETEhUUFxsf/aAAgBAQABPyFX0YIk9HaqDK6MVSNcSfL468gCdDrPs9Kh45+yp//aAAwDAQACAAMAAAAQ6N9B/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREAEP/aAAgBAwEBPxBjFS6FvP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEh/9oACAECAQE/EMZE7Br/xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhQVExYYGRof/aAAgBAQABPxCtDGJ8XtZi2gART6laoMEuByS8wt3+S+Kgpt8KiZCATb2VL7jOpVjLnvsu2J5P/9k=',
                          aspectRatio: 1,
                          src: '/static/6da1534119540929b62f377104d7abe7/b315d/TATSOI_GP.jpg',
                          srcSet:
                            '/static/6da1534119540929b62f377104d7abe7/d0f88/TATSOI_GP.jpg 25w,\n/static/6da1534119540929b62f377104d7abe7/99438/TATSOI_GP.jpg 50w,\n/static/6da1534119540929b62f377104d7abe7/b315d/TATSOI_GP.jpg 100w,\n/static/6da1534119540929b62f377104d7abe7/dcd9a/TATSOI_GP.jpg 150w,\n/static/6da1534119540929b62f377104d7abe7/8295c/TATSOI_GP.jpg 200w,\n/static/6da1534119540929b62f377104d7abe7/69cfd/TATSOI_GP.jpg 795w',
                          srcWebp: '/static/6da1534119540929b62f377104d7abe7/ff02b/TATSOI_GP.webp',
                          srcSetWebp:
                            '/static/6da1534119540929b62f377104d7abe7/8d998/TATSOI_GP.webp 25w,\n/static/6da1534119540929b62f377104d7abe7/48562/TATSOI_GP.webp 50w,\n/static/6da1534119540929b62f377104d7abe7/ff02b/TATSOI_GP.webp 100w,\n/static/6da1534119540929b62f377104d7abe7/1c591/TATSOI_GP.webp 150w,\n/static/6da1534119540929b62f377104d7abe7/a4d7d/TATSOI_GP.webp 200w,\n/static/6da1534119540929b62f377104d7abe7/5e082/TATSOI_GP.webp 795w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Greening Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Greening Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple173',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Greening Apples',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_apple175',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Vanilla Yogurt',
          department: ['Dairy'],
          category: ['Yogurt'],
          subcategory: ['All Yogurt'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yogurt, vanilla',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_yogurt140',
                unitLabel: 'oz',
                unitQuantity: 30,
                mainImage: {
                  id: '71570948-6e53-5ac4-a37b-b4b7e94fa037',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97459c24dddeebd4936751432026aba3/308349a9/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECAwUE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAMEAf/aAAwDAQACEAMQAAAB7OMeSZ3XVUJmppoA/8QAGxAAAwADAQEAAAAAAAAAAAAAAAECAxEhEjH/2gAIAQEAAQUCu9CyC6s6EuwtS5R5R8P/xAAWEQEBAQAAAAAAAAAAAAAAAAABAiD/2gAIAQMBAT8BmRMf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIRIP/aAAgBAgEBPwG7Rzj/xAAXEAADAQAAAAAAAAAAAAAAAAAAETAy/9oACAEBAAY/Akah/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERIUFhEP/aAAgBAQABPyG3U9I7D8G0G28HtcICGHe/JJJEf//aAAwDAQACAAMAAAAQH/cA/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8QSWPan//EABoRAAICAwAAAAAAAAAAAAAAAAERABAh4fD/2gAIAQIBAT8QLebgazf/xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUFRcZH/2gAIAQEAAT8QrgEm3JYt04b+QwOki0bUZr3kKBrd16yz+Esez0MHEpB3WL/IYCgn/9k=',
                          aspectRatio: 1,
                          src: '/static/01b62b101fbcb479758a1405ed676072/b315d/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg',
                          srcSet:
                            '/static/01b62b101fbcb479758a1405ed676072/d0f88/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 25w,\n/static/01b62b101fbcb479758a1405ed676072/99438/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 50w,\n/static/01b62b101fbcb479758a1405ed676072/b315d/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 100w,\n/static/01b62b101fbcb479758a1405ed676072/dcd9a/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 150w,\n/static/01b62b101fbcb479758a1405ed676072/8295c/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 200w,\n/static/01b62b101fbcb479758a1405ed676072/25e3f/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 300w',
                          srcWebp:
                            '/static/01b62b101fbcb479758a1405ed676072/ff02b/FBF-Yogurt_Pure-Vanilla2x-300x300.webp',
                          srcSetWebp:
                            '/static/01b62b101fbcb479758a1405ed676072/8d998/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 25w,\n/static/01b62b101fbcb479758a1405ed676072/48562/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 50w,\n/static/01b62b101fbcb479758a1405ed676072/ff02b/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 100w,\n/static/01b62b101fbcb479758a1405ed676072/1c591/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 150w,\n/static/01b62b101fbcb479758a1405ed676072/a4d7d/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 200w,\n/static/01b62b101fbcb479758a1405ed676072/50ead/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 300w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yogurt, vanilla',
                oneLiner: null,
                priceInCents: '2126',
                stripePriceId: 'sku_yogurt139',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: {
                  id: '70631586-05d7-5200-a815-b68619e4cc24',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97459c24dddeebd4936751432026aba3/308349a9/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECAwUE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAMEAf/aAAwDAQACEAMQAAAB7OMeSZ3XVUJmppoA/8QAGxAAAwADAQEAAAAAAAAAAAAAAAECAxEhEjH/2gAIAQEAAQUCu9CyC6s6EuwtS5R5R8P/xAAWEQEBAQAAAAAAAAAAAAAAAAABAiD/2gAIAQMBAT8BmRMf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIRIP/aAAgBAgEBPwG7Rzj/xAAXEAADAQAAAAAAAAAAAAAAAAAAETAy/9oACAEBAAY/Akah/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERIUFhEP/aAAgBAQABPyG3U9I7D8G0G28HtcICGHe/JJJEf//aAAwDAQACAAMAAAAQH/cA/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8QSWPan//EABoRAAICAwAAAAAAAAAAAAAAAAERABAh4fD/2gAIAQIBAT8QLebgazf/xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUFRcZH/2gAIAQEAAT8QrgEm3JYt04b+QwOki0bUZr3kKBrd16yz+Esez0MHEpB3WL/IYCgn/9k=',
                          aspectRatio: 1,
                          src: '/static/01b62b101fbcb479758a1405ed676072/b315d/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg',
                          srcSet:
                            '/static/01b62b101fbcb479758a1405ed676072/d0f88/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 25w,\n/static/01b62b101fbcb479758a1405ed676072/99438/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 50w,\n/static/01b62b101fbcb479758a1405ed676072/b315d/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 100w,\n/static/01b62b101fbcb479758a1405ed676072/dcd9a/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 150w,\n/static/01b62b101fbcb479758a1405ed676072/8295c/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 200w,\n/static/01b62b101fbcb479758a1405ed676072/25e3f/FBF-Yogurt_Pure-Vanilla2x-300x300.jpg 300w',
                          srcWebp:
                            '/static/01b62b101fbcb479758a1405ed676072/ff02b/FBF-Yogurt_Pure-Vanilla2x-300x300.webp',
                          srcSetWebp:
                            '/static/01b62b101fbcb479758a1405ed676072/8d998/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 25w,\n/static/01b62b101fbcb479758a1405ed676072/48562/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 50w,\n/static/01b62b101fbcb479758a1405ed676072/ff02b/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 100w,\n/static/01b62b101fbcb479758a1405ed676072/1c591/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 150w,\n/static/01b62b101fbcb479758a1405ed676072/a4d7d/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 200w,\n/static/01b62b101fbcb479758a1405ed676072/50ead/FBF-Yogurt_Pure-Vanilla2x-300x300.webp 300w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'West MI Smoothie Blend, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Fruit'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'West MI Smoothie Blend, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenfruit130',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Raspberries',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Berries'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Raspberries',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_berry208',
                unitLabel: 'small box',
                unitQuantity: 1,
                mainImage: {
                  id: '76ed5b4c-9ee0-52b9-961f-bfa6e46a1125',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/14d819637cd8a8bcd6dcd1362cf45e8b/cf67287a/burdasberries.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZmYitLKd5dHSC//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDEiEQE//aAAgBAQABBQJjsMjl6lRyVVtsOE4v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQIVH/2gAIAQMBAT8BjRKj/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgIDAAAAAAAAAAAAAAAAADEBIQIQEf/aAAgBAQAGPwKsR8GWIUEb/8QAHBABAQEBAAIDAAAAAAAAAAAAAREAITFRcYHR/9oACAEBAAE/Ifbvh3gn16f6DQs257KfPLlOtsvcolmtBd//2gAMAwEAAgADAAAAEEgPvf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIRFB/9oACAEDAQE/ELkZeiSwKxD/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxBC6lifJe3/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMVFhQbH/2gAIAQEAAT8QpwEnVglo35lnfuMQuzdD+YBFMRCYbRVMPcVazvHC012pziHKDWuN4IgVM//Z',
                          aspectRatio: 1,
                          src: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg',
                          srcSet:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/d0f88/burdasberries.jpg 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/99438/burdasberries.jpg 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/dcd9a/burdasberries.jpg 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/8295c/burdasberries.jpg 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/7b2a1/burdasberries.jpg 600w',
                          srcWebp: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp',
                          srcSetWebp:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/8d998/burdasberries.webp 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/48562/burdasberries.webp 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/1c591/burdasberries.webp 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/a4d7d/burdasberries.webp 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ab687/burdasberries.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Raspberries',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_berry209',
                unitLabel: 'small box',
                unitQuantity: 1,
                mainImage: {
                  id: '4aa0af3f-ee5b-5f19-b0b9-afd1e3f5d92a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/14d819637cd8a8bcd6dcd1362cf45e8b/cf67287a/burdasberries.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZmYitLKd5dHSC//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDEiEQE//aAAgBAQABBQJjsMjl6lRyVVtsOE4v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQIVH/2gAIAQMBAT8BjRKj/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/ASN//8QAGhAAAgIDAAAAAAAAAAAAAAAAADEBIQIQEf/aAAgBAQAGPwKsR8GWIUEb/8QAHBABAQEBAAIDAAAAAAAAAAAAAREAITFRcYHR/9oACAEBAAE/Ifbvh3gn16f6DQs257KfPLlOtsvcolmtBd//2gAMAwEAAgADAAAAEEgPvf/EABgRAAMBAQAAAAAAAAAAAAAAAAABIRFB/9oACAEDAQE/ELkZeiSwKxD/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxBC6lifJe3/xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAhMVFhQbH/2gAIAQEAAT8QpwEnVglo35lnfuMQuzdD+YBFMRCYbRVMPcVazvHC012pziHKDWuN4IgVM//Z',
                          aspectRatio: 1,
                          src: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg',
                          srcSet:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/d0f88/burdasberries.jpg 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/99438/burdasberries.jpg 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/b315d/burdasberries.jpg 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/dcd9a/burdasberries.jpg 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/8295c/burdasberries.jpg 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/7b2a1/burdasberries.jpg 600w',
                          srcWebp: '/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp',
                          srcSetWebp:
                            '/static/e65e1ade4ae5f00ac843639c7a7e67a9/8d998/burdasberries.webp 25w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/48562/burdasberries.webp 50w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ff02b/burdasberries.webp 100w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/1c591/burdasberries.webp 150w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/a4d7d/burdasberries.webp 200w,\n/static/e65e1ade4ae5f00ac843639c7a7e67a9/ab687/burdasberries.webp 600w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Brussel Sprouts, Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Cabbages & Brussel Sprouts'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Brussel Sprouts, Organic',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_brusselsprouts258',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Brussel Sprouts',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_brusselsprouts275',
                unitLabel: 'stalk',
                unitQuantity: 1,
                mainImage: {
                  id: '0db1a0ac-1577-5c9b-94aa-683a4af5caf9',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/a8073a1a87dcb3fe3b10c156bfcf8624/1bb98197/brussels-sprouts-stalk-1.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAGbbKmec7oaXYX0RJ//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADEiIRIUH/2gAIAQEAAQUCAKrxkgDCbLBiyno0uY2tnn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAABBAAHAAAAAAAAAAAAAAAAAQIRQRASISIxYfH/2gAIAQEABj8CzNqiV4WjY9sdkkp4XhLdBD//xAAdEAACAgIDAQAAAAAAAAAAAAABEQAhQXExUWGB/9oACAEBAAE/IQ74EIKwcDGpRbCjAw1bY6PkIoVZC5R0EidOcFsdGBnDUVjNhz//2gAMAwEAAgADAAAAEOz/AD7/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARBB/9oACAEDAQE/EK1L/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCoiHpWf//EAB4QAQACAQUBAQAAAAAAAAAAAAERIQAxQVFhkXGx/9oACAEBAAE/EEoKQlMCauCk/DVL8PJgKEWhC6RMZpTlkQOvgi6y7ImSTuTz96xKOthnqGGsBYLrYPGXowmkWLF+ZpwQqHdvP//Z',
                          aspectRatio: 1,
                          src: '/static/0ac83e9d396104c1c1d646725a75862a/b315d/brussels-sprouts-stalk-1.jpg',
                          srcSet:
                            '/static/0ac83e9d396104c1c1d646725a75862a/d0f88/brussels-sprouts-stalk-1.jpg 25w,\n/static/0ac83e9d396104c1c1d646725a75862a/99438/brussels-sprouts-stalk-1.jpg 50w,\n/static/0ac83e9d396104c1c1d646725a75862a/b315d/brussels-sprouts-stalk-1.jpg 100w,\n/static/0ac83e9d396104c1c1d646725a75862a/dcd9a/brussels-sprouts-stalk-1.jpg 150w,\n/static/0ac83e9d396104c1c1d646725a75862a/8295c/brussels-sprouts-stalk-1.jpg 200w,\n/static/0ac83e9d396104c1c1d646725a75862a/5cd60/brussels-sprouts-stalk-1.jpg 849w',
                          srcWebp: '/static/0ac83e9d396104c1c1d646725a75862a/ff02b/brussels-sprouts-stalk-1.webp',
                          srcSetWebp:
                            '/static/0ac83e9d396104c1c1d646725a75862a/8d998/brussels-sprouts-stalk-1.webp 25w,\n/static/0ac83e9d396104c1c1d646725a75862a/48562/brussels-sprouts-stalk-1.webp 50w,\n/static/0ac83e9d396104c1c1d646725a75862a/ff02b/brussels-sprouts-stalk-1.webp 100w,\n/static/0ac83e9d396104c1c1d646725a75862a/1c591/brussels-sprouts-stalk-1.webp 150w,\n/static/0ac83e9d396104c1c1d646725a75862a/a4d7d/brussels-sprouts-stalk-1.webp 200w,\n/static/0ac83e9d396104c1c1d646725a75862a/5b0bb/brussels-sprouts-stalk-1.webp 849w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Oneida Gold Potatoes',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Potatoes, yams and beets'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: true,
                name: 'Oneida Gold Potatoes, Organic',
                oneLiner: null,
                priceInCents: '299',
                stripePriceId: 'sku_potato256',
                unitLabel: 'lb',
                unitQuantity: 3,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Red Bell Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Bell Pepper',
                oneLiner: null,
                priceInCents: '100',
                stripePriceId: 'sku_bellpepper190',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Red Bell Pepper',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_bellpepper192',
                unitLabel: null,
                unitQuantity: 5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Yellow Onions',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Onions, Shallots & Leeks'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yellow Onions',
                oneLiner: null,
                priceInCents: '3900',
                stripePriceId: 'sku_onion133',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet Yellow Onions',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_onion202',
                unitLabel: null,
                unitQuantity: 3,
                mainImage: {
                  id: '4cc6009b-4cf3-545f-8057-11194cee1cf3',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/22d861f9adcc7e6ce27ae4e76835d66f/7d9764ae/ScreenShot2020-11-11at19_54_15.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFoklEQVQ4yxWUeVDU5x3Gf8ZGKsoVsKQc6rIuLIcCymVcTgVhQc4VA8jNoiAuLocGMKArCpFLiKtBYMMEhOqCETC6SQQPlFZsq9U0pbE2ZhwSgibGnJPMOJ/++sc78/7zfef5Pu/zeYRFVmYILy0gd6MHV3Sp3Gkr4dOeOh4btNw5tovZ8UFefPUpn5yuRyF3INzNgdNlcbyvS6e/JAqjeB/Zs5EPNevpSHRFSAjz5OBOJTMXT/D0H5eZPdfCaE4g1/bF82VfHXOXenn64B7f/32U6e4KjLU5GNQxtMa50pvmT1+KF0OJUgYTJHQlyRH2F0QyeaaSLz+7zteP/s2P98aZ0Wv4oCSG6dYyrjdp+LCtEtPhfIa00ehCV6KWWZDuYk5jhBP9yTKG45w4EmBN/mtuCGnxQfTqVJj6D3O5r51bPTouvJFKyZpl9CV4MqBWcuZgAR815nJJl8vpim1UBDqx2UIgwtGKmrh17Pex4UyBks8HmhA8pLZ0aiLQi+dkaQLGojCGCsNoTI+gWymjQbGS7nIVw+07mbnawzcPJ/jiRh9vbPYhUi7B1FrBTX0d3z24y683BhHUcT60JnvSsXUN1RtdOZUVwvORZpj7J7/+eZBBbTK5Uet5K8ePCeNenj29zy+/fcXDW/0c2R5JlzaTmWYt82eP82ToKMKLe+d5MvkndEofHF4S6CpVce9tDQ/HDMyaDFypTqb0NWf06jBO7YvlUtderg13cPtcAyeyFRxKDWbG2MHPj0QBD6YQvr11gR/+MsL9pnxyFV4YRC/ezQpneG8GpqosTkbLULna0KBaR0t6EPq8UHqLo+nM8EMltaYwQMrVd+r4eW6WF8/nEa5WbWP8zSwu5SnYFbSKNE8HGoMlNIW70yH+aJWvNcFOFlQFv0pTghvHUgPo3ibaFOrINpkdzRmbuXiwiL82lfKo5wDCiUgZvfHeNAU6Il9qhtzanKhlCylY+XsKxXjkeNmiU/lT4v8HisXHd3jbUuZrS32IhOfXjUy1VNKXGshwZgiTezYjNPhYUebyMiqHxYwVb2F29D1GG2vIcbEiwG4J+xQSjOp1tCe7k+9piY/FAnaudeTuMQ1z4wO0b1XQKebx460y7mZLEP773mEMxYmU+q/g85pYHg8089PUBaaKNqF2tUS/xUXETMmIiOXB0OUkOSxioDiOmx1ajDXZVG6QoPWxpchZINdJQPhJNPPpeDe3q8QhpQvnXw/ApN7E5bR1VKxextEkN8YaMjAUhpDo/Ds2WC/glMqXtqIkKlIjOZSTSK6/hMIN7phO6hBuj5zmlr6ci6URaCRL0K9fwWCcN21r7ZAvEgh2XEzBGkvyvKyIFsshyU/KgVBntAopu/1fZUegiKLCnf+MHIfZOwiqIDe6RFUt0e4kyeyplluitl9I2FKBcAcbvG3MSfVeznTnAZ6M9/D4g6NM6HfQIarc62uHark5+2PWMNlRzo1330IIlViR5WHD8ahVPJs8y7dX+mmOciPFwYp9YoS2O1sxponlgaGW87UacagdfrjG/EQD53aGc7M+k4/fTKMlN4ru6jwEe5vFSJcs5FSKr4jPYeYGj/CJVuTa74+k2ZsTYS4wUhjOaGk8vflKJvbnMX/xGL9MHOHZWRHFc4cw1aRRE72a6lhfhAUWi7EVBJFjOedFJSaxGKbr8pjW7aJJuZZM7xX0xMhojxXDHO/PR+VbuH+ikn81ZzK1J5QrtfG8UxDCgXA5teGrEJb6ufOKnxwvF0sKI/0wlqTwt5P1zN+8zGdiH17YnUK+kxll/s6UhUjpzNnESJmKse3e9Km8qE/woE0MfmuygjwPOwQz1xVYrF/9/93xdnXi7ewYDJlRDJVnM6pNZyAxiLbYAHYHuLJjg5Q6cbXuLZ5ita2iTkxDqosFGc5m7Pa1Z6O9Gf8DOLOOQOAqKW0AAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/26c61fc3477ab6f94ae29259f76d8bbc/71eb7/ScreenShot2020-11-11at19_54_15.png',
                          srcSet:
                            '/static/26c61fc3477ab6f94ae29259f76d8bbc/b5811/ScreenShot2020-11-11at19_54_15.png 25w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/8ba1e/ScreenShot2020-11-11at19_54_15.png 50w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/71eb7/ScreenShot2020-11-11at19_54_15.png 100w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/92ab1/ScreenShot2020-11-11at19_54_15.png 150w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/b3a76/ScreenShot2020-11-11at19_54_15.png 200w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/b6ca9/ScreenShot2020-11-11at19_54_15.png 563w',
                          srcWebp: '/static/26c61fc3477ab6f94ae29259f76d8bbc/ff02b/ScreenShot2020-11-11at19_54_15.webp',
                          srcSetWebp:
                            '/static/26c61fc3477ab6f94ae29259f76d8bbc/8d998/ScreenShot2020-11-11at19_54_15.webp 25w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/48562/ScreenShot2020-11-11at19_54_15.webp 50w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/ff02b/ScreenShot2020-11-11at19_54_15.webp 100w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/1c591/ScreenShot2020-11-11at19_54_15.webp 150w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/a4d7d/ScreenShot2020-11-11at19_54_15.webp 200w,\n/static/26c61fc3477ab6f94ae29259f76d8bbc/75e60/ScreenShot2020-11-11at19_54_15.webp 563w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweet Banana Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet Banana Peppers',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_bananapepper196',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Cortland Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cortland Apples',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_apple29',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '2a2e7df6-d919-53b7-966c-448703ad2bbd',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/0adcd7e64857632a56f2b30d3dc46cf1/c7471ee2/IMG_20200912_134858.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwH/2gAMAwEAAhADEAAAAblaTMhXUVx1AEob/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAzEREhMhIv/aAAgBAQABBQJsNftgvGjHyW5WRFAGBSkHU//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAIBBQAAAAAAAAAAAAAAAAAxEAECESEi/9oACAEBAAY/Ai0eTR1RSo//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMUFRgcH/2gAIAQEAAT8hVB1nMOWldk+QRF9oAUJ4NTiNW4TSmy7e5hRwT//aAAwDAQACAAMAAAAQjBjA/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxCERM//xAAZEQEAAgMAAAAAAAAAAAAAAAABABEQMXH/2gAIAQIBAT8QpeQKNy0x/8QAGxABAQEBAQEBAQAAAAAAAAAAAREAITFBYZH/2gAIAQEAAT8QWB0nPcVxbESH7pdC+vnXOB6XLrX0Fv8AXPfFGlhmgeiZoeJ4qxEOJAPhv//Z',
                          aspectRatio: 1,
                          src: '/static/febca2c9852947233c1b03596d3e5fc0/b315d/IMG_20200912_134858.jpg',
                          srcSet:
                            '/static/febca2c9852947233c1b03596d3e5fc0/d0f88/IMG_20200912_134858.jpg 25w,\n/static/febca2c9852947233c1b03596d3e5fc0/99438/IMG_20200912_134858.jpg 50w,\n/static/febca2c9852947233c1b03596d3e5fc0/b315d/IMG_20200912_134858.jpg 100w,\n/static/febca2c9852947233c1b03596d3e5fc0/dcd9a/IMG_20200912_134858.jpg 150w,\n/static/febca2c9852947233c1b03596d3e5fc0/8295c/IMG_20200912_134858.jpg 200w,\n/static/febca2c9852947233c1b03596d3e5fc0/b003e/IMG_20200912_134858.jpg 4032w',
                          srcWebp: '/static/febca2c9852947233c1b03596d3e5fc0/ff02b/IMG_20200912_134858.webp',
                          srcSetWebp:
                            '/static/febca2c9852947233c1b03596d3e5fc0/8d998/IMG_20200912_134858.webp 25w,\n/static/febca2c9852947233c1b03596d3e5fc0/48562/IMG_20200912_134858.webp 50w,\n/static/febca2c9852947233c1b03596d3e5fc0/ff02b/IMG_20200912_134858.webp 100w,\n/static/febca2c9852947233c1b03596d3e5fc0/1c591/IMG_20200912_134858.webp 150w,\n/static/febca2c9852947233c1b03596d3e5fc0/a4d7d/IMG_20200912_134858.webp 200w,\n/static/febca2c9852947233c1b03596d3e5fc0/32718/IMG_20200912_134858.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Cortland Apples',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_apple28',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: {
                  id: '9b7f06aa-f026-584c-a36b-fd8d002ba81c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/0adcd7e64857632a56f2b30d3dc46cf1/c7471ee2/IMG_20200912_134858.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwH/2gAMAwEAAhADEAAAAblaTMhXUVx1AEob/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAzEREhMhIv/aAAgBAQABBQJsNftgvGjHyW5WRFAGBSkHU//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAIBBQAAAAAAAAAAAAAAAAAxEAECESEi/9oACAEBAAY/Ai0eTR1RSo//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMUFRgcH/2gAIAQEAAT8hVB1nMOWldk+QRF9oAUJ4NTiNW4TSmy7e5hRwT//aAAwDAQACAAMAAAAQjBjA/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxCERM//xAAZEQEAAgMAAAAAAAAAAAAAAAABABEQMXH/2gAIAQIBAT8QpeQKNy0x/8QAGxABAQEBAQEBAQAAAAAAAAAAAREAITFBYZH/2gAIAQEAAT8QWB0nPcVxbESH7pdC+vnXOB6XLrX0Fv8AXPfFGlhmgeiZoeJ4qxEOJAPhv//Z',
                          aspectRatio: 1,
                          src: '/static/febca2c9852947233c1b03596d3e5fc0/b315d/IMG_20200912_134858.jpg',
                          srcSet:
                            '/static/febca2c9852947233c1b03596d3e5fc0/d0f88/IMG_20200912_134858.jpg 25w,\n/static/febca2c9852947233c1b03596d3e5fc0/99438/IMG_20200912_134858.jpg 50w,\n/static/febca2c9852947233c1b03596d3e5fc0/b315d/IMG_20200912_134858.jpg 100w,\n/static/febca2c9852947233c1b03596d3e5fc0/dcd9a/IMG_20200912_134858.jpg 150w,\n/static/febca2c9852947233c1b03596d3e5fc0/8295c/IMG_20200912_134858.jpg 200w,\n/static/febca2c9852947233c1b03596d3e5fc0/b003e/IMG_20200912_134858.jpg 4032w',
                          srcWebp: '/static/febca2c9852947233c1b03596d3e5fc0/ff02b/IMG_20200912_134858.webp',
                          srcSetWebp:
                            '/static/febca2c9852947233c1b03596d3e5fc0/8d998/IMG_20200912_134858.webp 25w,\n/static/febca2c9852947233c1b03596d3e5fc0/48562/IMG_20200912_134858.webp 50w,\n/static/febca2c9852947233c1b03596d3e5fc0/ff02b/IMG_20200912_134858.webp 100w,\n/static/febca2c9852947233c1b03596d3e5fc0/1c591/IMG_20200912_134858.webp 150w,\n/static/febca2c9852947233c1b03596d3e5fc0/a4d7d/IMG_20200912_134858.webp 200w,\n/static/febca2c9852947233c1b03596d3e5fc0/32718/IMG_20200912_134858.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Swiss Chard',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['More Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Swiss Chard',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_swisschard269',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '76b62813-57db-5a7c-b6b8-e459cc0c7a63',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/f0acd75ac693a4689362a617f79a870f/1754ca03/ScreenShot2020-11-25at11_48_18.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFh0lEQVQ4yw2UaUzbhxnG/1srlkJComCCzWHAFz44fGHAYDAGAzbmig2EK9jmiEMIAUpMOMoRukLIUkJCKaw5mqwtpEkrRhJFLUvVrosqRWt2fNiqbZ06TdMmTZ20TZG2D9Nv/w/vl/fD+/7e93n0CFcetjH3nocLH1Wz+JGTpiklNSc0aPQHGXu5g/n5MMqkfTQ3F3L5rSFORQt5c3eK23uLHJ9Io24wg/pxFb4RCYMrBQjnN6sIzWVzZsPI3J1yXP3JHI0YUKnjcFi0XHljkpqKPEZHW3jjxiDhU2Jve4bdp+sMr5iojCiYX/fRejKZ9rMKhLe3xlheDbF+u4XZW6WYmg8QOGHBmCNFEvsioaCTto4SLq8Ns3n7LO1hJefXenjr0Rgzt2x0z9noejkPf4eMgbMqhI2NMa6sDvP2tTMsXwyQVZ6I1hmHq0JDQuw+7KZMxidrmZjyMnveS3e3jsmFED/6eIKpDTOl3iSqA0n0j8ppOilFWNs4wZ27C6xfO8n2uwOEe6uQaL9DuUeBMjWBgmwZM9FGykzplFmTiDRZmRzr5MbuGNOvWzAXHiZwXE3LQBqNp+UITm8qY+P1PPh0lu0Pp9n98RJ2t4aSilRy9FJ0KQmMd9Zg1UpJlbxAie4wxxxawm1Weic0ONwpNITU+HqVePrSEJKN+4hNFhiOlrNz/zXufHCJiXMtqNUSKp25WNJTmGqvxV2YgyNTis+sEEtObW4q1rIDpJu/R+uggco2OYGwSFjXqaTMIyXb+l36RDFKHDlUOjKRJcWSmpyIO0/BSm8jjaUmAnoFEZcZm/IwRZpDVFRJySo6QMNAJi0RFa194sBSjxynU0KePh6lIQaLRYpaPDMt4SX2x8aQmSjh+yJhj9tKUK2gRVxglMfhtCXgbT+Cwx9PpyhIz5iKxr4jCCubbqYvFOL3Z5GpiCUr9wWMBhnajASSE0TKpBhOeWxEXSUMG3Xkq+IxSGPweWXU9UuIRNM5NZslEuooPypBuLcbEMXwcvdBEzPLBeQ5YjAXJJAv/kiRHIsm40U8+UnMO21MWgxkSWOxpuzH71PhPSqlK5xKV1DD0IiZYx1qhAd7x9l50Mr2vTbu/8zHwrIeS3YMw6FqPDaRWhaHXiEhmqdjTq2jptiARXoId7GUOl86NaJvqxwJ7O69wui0A+HmnWbRg24ePg6xs1fPhzuVLL5SQLDRQKAmh5DXSqs9h74UGZ/Z7cyecNHk1mHKTsSojWP4pJlV8W3vbJ/m4pIfwe0/QkNXOhev29l7GuSL3y7w+PMAmxddWAriGSnXEFGlcDM+kb8GvCxO+YkOuQhY0gge0/HqgpP3r0e5dXmIZr8GYXNrmp3PfsD8WhlXN+v56bM57u00s7VaT6M7jyGbllm1kieZKv54upneHrfYM9HuUOF2ZXJmuIjTPbV0txVQWpKC8Jc/fcU333zJ+UtdXLt5hvs/mWP5kovry5Vc7axgqbOaq3otvy+x8Ga1GAb5OQwUGdBmyegP2wl1F9DeZSDYm099tRbhwkovq2JAfPL5Ln//7yN+87c51n4YZDCs52GkhnOVeXxsyuEPRWYWC3Pp0WqpcGaI5pcT7ClmMFpDKOKgyWfheKsTYWl9lCc/v88/v/0V//r31zz/zy85Ox6m2H6ITa+N6w3VPKl28bsKJxvlDrzFuZiNco62aQhG7Xi8Jo41lNPqr2J+vB9hNOrgxrsRnj//mn98+wv+x1fcvBuiyJmK32vHnypjWafnC7uNGdHceSaVmELJ1HVocXuNuEr1WI0KGuuLmZsdQbix1cvthwG2HvXx5bNX+fWfX2dkSY+p5CXOvdaMU5VBaP9BVoM2wmVKQk1qFi+7xQFG0uUS5KqDZOfKqKpV8vTZY/4PkCIpQZAsOWcAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/d8d8386b1afdd55d71cdad97a0e784e3/71eb7/ScreenShot2020-11-25at11_48_18.png',
                          srcSet:
                            '/static/d8d8386b1afdd55d71cdad97a0e784e3/b5811/ScreenShot2020-11-25at11_48_18.png 25w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/8ba1e/ScreenShot2020-11-25at11_48_18.png 50w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/71eb7/ScreenShot2020-11-25at11_48_18.png 100w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/92ab1/ScreenShot2020-11-25at11_48_18.png 150w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/b3a76/ScreenShot2020-11-25at11_48_18.png 200w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/07e29/ScreenShot2020-11-25at11_48_18.png 592w',
                          srcWebp: '/static/d8d8386b1afdd55d71cdad97a0e784e3/ff02b/ScreenShot2020-11-25at11_48_18.webp',
                          srcSetWebp:
                            '/static/d8d8386b1afdd55d71cdad97a0e784e3/8d998/ScreenShot2020-11-25at11_48_18.webp 25w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/48562/ScreenShot2020-11-25at11_48_18.webp 50w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/ff02b/ScreenShot2020-11-25at11_48_18.webp 100w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/1c591/ScreenShot2020-11-25at11_48_18.webp 150w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/a4d7d/ScreenShot2020-11-25at11_48_18.webp 200w,\n/static/d8d8386b1afdd55d71cdad97a0e784e3/1380c/ScreenShot2020-11-25at11_48_18.webp 592w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Pea Shoots',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Pea Shoots',
                oneLiner: null,
                priceInCents: '600',
                stripePriceId: 'sku_microgreen87',
                unitLabel: 'oz',
                unitQuantity: 3,
                mainImage: null,
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Pea Shoots',
                oneLiner: 'crisp, slightly sweet and delicate',
                priceInCents: '500',
                stripePriceId: 'sku_microgreen235',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: 'dd40742e-1ff2-56d3-8393-0b041e859670',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/f8f96ea035073bd9496c3607b04694bc/479328cf/peashoots__placeholder.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgT/2gAMAwEAAhADEAAAAb8MWeaUhnMJRcEv/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECEhMQESP/2gAIAQEAAQUCzXE0Om0r7NuLp+KZrk//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAZEQABBQAAAAAAAAAAAAAAAAAAARARITH/2gAIAQIBAT8BtdIf/8QAGRAAAgMBAAAAAAAAAAAAAAAAABARITEB/9oACAEBAAY/ArJWGEUdf//EABoQAQEBAQEBAQAAAAAAAAAAAAERACFBMWH/2gAIAQEAAT8hQGLiHVyA9991ocXQ9jsO5opzKH9vMigvCb8nf//aAAwDAQACAAMAAAAQWx9B/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxClYs//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QqWxdf//EAB0QAQADAQACAwAAAAAAAAAAAAEAESExUWGhsdH/2gAIAQEAAT8QQUxVEvCAvK7MKanqWzmAvF8XOiBpURfXyRQyruv1HtQro4eou1wF80/ZRwL3Gf/Z',
                          aspectRatio: 1,
                          src: '/static/b84b27807b57998eeac1d1983bb9d4a8/b315d/peashoots__placeholder.jpg',
                          srcSet:
                            '/static/b84b27807b57998eeac1d1983bb9d4a8/d0f88/peashoots__placeholder.jpg 25w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/99438/peashoots__placeholder.jpg 50w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/b315d/peashoots__placeholder.jpg 100w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/dcd9a/peashoots__placeholder.jpg 150w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/8295c/peashoots__placeholder.jpg 200w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/1fe9a/peashoots__placeholder.jpg 540w',
                          srcWebp: '/static/b84b27807b57998eeac1d1983bb9d4a8/ff02b/peashoots__placeholder.webp',
                          srcSetWebp:
                            '/static/b84b27807b57998eeac1d1983bb9d4a8/8d998/peashoots__placeholder.webp 25w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/48562/peashoots__placeholder.webp 50w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/ff02b/peashoots__placeholder.webp 100w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/1c591/peashoots__placeholder.webp 150w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/a4d7d/peashoots__placeholder.webp 200w,\n/static/b84b27807b57998eeac1d1983bb9d4a8/ec6ad/peashoots__placeholder.webp 540w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: true,
                name: 'Micro Basil',
                oneLiner: null,
                priceInCents: '450',
                stripePriceId: 'sku_microgreen236',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: {
                  id: '6d88f073-79cb-52ef-b07c-2cc4410aa08a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/508d63a6eccb245088c98605ed8697a9/80d2bc0b/121575700_710105362931798_8912674550122844665_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDAf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/aAAwDAQACEAMQAAAB0nPmcbSVc4InYJX/xAAZEAEAAwEBAAAAAAAAAAAAAAABAAISEQP/2gAIAQEAAQUCXUFj75Vg9ma3lvMqhydzP//EABYRAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwEj/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AWqj/8QAHBAAAgEFAQAAAAAAAAAAAAAAAAERAhAhMVFx/9oACAEBAAY/AlEmyHSaxaajDdu+n//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExUWH/2gAIAQEAAT8h1MKli7ZDVOfZydehls6IypwfkyMpzYNUXsxCvVx//9oADAMBAAIAAwAAABAjPz7/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAwEBPxB1dhR2SPL/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEx/9oACAECAQE/EFV2ClxAy//EAB4QAQACAgMBAQEAAAAAAAAAAAERIQAxQVFhgXGh/9oACAEBAAE/ELgETpLezIjYWKl9YTwrg2d4Daijb+Rz5hiFha8QRLrzycAC40/WXB4ECiNawlg9n+1kgRIlIs/Iz//Z',
                          aspectRatio: 1,
                          src:
                            '/static/17849e8dc7f4154c17872c506db283bd/b315d/121575700_710105362931798_8912674550122844665_n.jpg',
                          srcSet:
                            '/static/17849e8dc7f4154c17872c506db283bd/d0f88/121575700_710105362931798_8912674550122844665_n.jpg 25w,\n/static/17849e8dc7f4154c17872c506db283bd/99438/121575700_710105362931798_8912674550122844665_n.jpg 50w,\n/static/17849e8dc7f4154c17872c506db283bd/b315d/121575700_710105362931798_8912674550122844665_n.jpg 100w,\n/static/17849e8dc7f4154c17872c506db283bd/dcd9a/121575700_710105362931798_8912674550122844665_n.jpg 150w,\n/static/17849e8dc7f4154c17872c506db283bd/8295c/121575700_710105362931798_8912674550122844665_n.jpg 200w,\n/static/17849e8dc7f4154c17872c506db283bd/29667/121575700_710105362931798_8912674550122844665_n.jpg 1080w',
                          srcWebp:
                            '/static/17849e8dc7f4154c17872c506db283bd/ff02b/121575700_710105362931798_8912674550122844665_n.webp',
                          srcSetWebp:
                            '/static/17849e8dc7f4154c17872c506db283bd/8d998/121575700_710105362931798_8912674550122844665_n.webp 25w,\n/static/17849e8dc7f4154c17872c506db283bd/48562/121575700_710105362931798_8912674550122844665_n.webp 50w,\n/static/17849e8dc7f4154c17872c506db283bd/ff02b/121575700_710105362931798_8912674550122844665_n.webp 100w,\n/static/17849e8dc7f4154c17872c506db283bd/1c591/121575700_710105362931798_8912674550122844665_n.webp 150w,\n/static/17849e8dc7f4154c17872c506db283bd/a4d7d/121575700_710105362931798_8912674550122844665_n.webp 200w,\n/static/17849e8dc7f4154c17872c506db283bd/78754/121575700_710105362931798_8912674550122844665_n.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Root Crop Mix, Frozen',
          department: ['Produce'],
          category: ['Frozen Produce'],
          subcategory: ['Frozen Veggies'],
          sortOrderCategories: [4],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Root Crop Mix, Frozen',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_frozenveg104',
                unitLabel: 'lb',
                unitQuantity: 2,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Parsnips',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Radishes, Turnips & Roots'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Parsnips',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_parsnips254',
                unitLabel: 'lb',
                unitQuantity: 1.5,
                mainImage: {
                  id: 'a403e0e5-b0ea-5a1b-b68d-fcdcf2139afd',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/8ab9147ca4527ebf5af8f820fb6a512f/3fdad34c/124073064_728468937767037_5142238402924930656_n.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/9oADAMBAAIQAxAAAAHfizGGutE5kCQM/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMRABMiEv/aAAgBAQABBQIxjXq7jgtfIsVi84zMVs00jE//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/ATFf/8QAIBAAAQMCBwAAAAAAAAAAAAAAAAECERIxITJCUVJhcf/aAAgBAQAGPwJUapNV2wS6BeNJmtYVOxuOgZ4Tuf/EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExobFBUXGB/9oACAEBAAE/IUflH7G5dtSpnyyvcNFaiwCjsveZt02SXi8o7huvI4JcCKB4n//aAAwDAQACAAMAAAAQLN9B/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxDCJf8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAQ/9oACAECAQE/EEwZv//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQXFRoWGRwf/aAAgBAQABPxDHdpDoJnp9wwIXOLRh+MQNQWK2FqJmWReL2PoJiMm21Sn3YkGogxdC3+zCgQBrZbXRCVIoPVt9wS4JjlE//9k=',
                          aspectRatio: 1,
                          src:
                            '/static/add59ab52da338aea07ee3883e5ccc2f/b315d/124073064_728468937767037_5142238402924930656_n.jpg',
                          srcSet:
                            '/static/add59ab52da338aea07ee3883e5ccc2f/d0f88/124073064_728468937767037_5142238402924930656_n.jpg 25w,\n/static/add59ab52da338aea07ee3883e5ccc2f/99438/124073064_728468937767037_5142238402924930656_n.jpg 50w,\n/static/add59ab52da338aea07ee3883e5ccc2f/b315d/124073064_728468937767037_5142238402924930656_n.jpg 100w,\n/static/add59ab52da338aea07ee3883e5ccc2f/dcd9a/124073064_728468937767037_5142238402924930656_n.jpg 150w,\n/static/add59ab52da338aea07ee3883e5ccc2f/8295c/124073064_728468937767037_5142238402924930656_n.jpg 200w,\n/static/add59ab52da338aea07ee3883e5ccc2f/d1f84/124073064_728468937767037_5142238402924930656_n.jpg 800w',
                          srcWebp:
                            '/static/add59ab52da338aea07ee3883e5ccc2f/ff02b/124073064_728468937767037_5142238402924930656_n.webp',
                          srcSetWebp:
                            '/static/add59ab52da338aea07ee3883e5ccc2f/8d998/124073064_728468937767037_5142238402924930656_n.webp 25w,\n/static/add59ab52da338aea07ee3883e5ccc2f/48562/124073064_728468937767037_5142238402924930656_n.webp 50w,\n/static/add59ab52da338aea07ee3883e5ccc2f/ff02b/124073064_728468937767037_5142238402924930656_n.webp 100w,\n/static/add59ab52da338aea07ee3883e5ccc2f/1c591/124073064_728468937767037_5142238402924930656_n.webp 150w,\n/static/add59ab52da338aea07ee3883e5ccc2f/a4d7d/124073064_728468937767037_5142238402924930656_n.webp 200w,\n/static/add59ab52da338aea07ee3883e5ccc2f/88bdf/124073064_728468937767037_5142238402924930656_n.webp 800w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Orange Squash',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Small Orange Squash',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_squash281',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: 'a152837d-d02c-5897-91e0-115711f305c0',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/753ee45124edf2c2efd230fe725550e7/21e81e28/acornsquashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/aAAwDAQACEAMQAAAB4dcTDL0ob9DAo4RoX//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwAREhMi/9oACAEBAAEFAtLIufG0xOaZDSdXOthP0Ejfqnv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASMf/aAAgBAwEBPwHCyz//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQEjJR/9oACAECAQE/AdFX9Fj/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREiExcf/aAAgBAQAGPwLGCNu2dLUu9sxsqzY4vZL0/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRYXH/2gAIAQEAAT8hxcA19YrPqnyBNrKdhWFUs1v9gFc5tQmcelwFaIGzC3Edn//aAAwDAQACAAMAAAAQFNfD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARYf/aAAgBAwEBPxAV7lwiy//EABkRAAMAAwAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxBxYnDiMNFP/8QAHhABAQACAwADAQAAAAAAAAAAAREAITFBUXGhscH/2gAIAQEAAT8QfQcm1T58uDXK6NBH8xIDCwZx1h2MUAfXOQ5TynTps3pwiN9jjy9ZOOqiNyp+YUFRQWHG8GZc15Ie5//Z',
                          aspectRatio: 1,
                          src: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg',
                          srcSet:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/d0f88/acornsquashref.jpg 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/99438/acornsquashref.jpg 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/b315d/acornsquashref.jpg 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/dcd9a/acornsquashref.jpg 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/8295c/acornsquashref.jpg 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/29667/acornsquashref.jpg 1080w',
                          srcWebp: '/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp',
                          srcSetWebp:
                            '/static/0a0b2b9a8e334ced37f7f971853ad2ce/8d998/acornsquashref.webp 25w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/48562/acornsquashref.webp 50w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/ff02b/acornsquashref.webp 100w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/1c591/acornsquashref.webp 150w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/a4d7d/acornsquashref.webp 200w,\n/static/0a0b2b9a8e334ced37f7f971853ad2ce/78754/acornsquashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Zester Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Zester Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple143',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: {
                  id: '51d581f2-3870-5755-b5e1-c7ebcad33d1a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c75b3299c41f2ce6af428bfdc7f081fc/d511137a/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB1uK4koctLF0xDqGb/8QAHBABAQACAgMAAAAAAAAAAAAAAQIAAwQhEBES/9oACAEBAAEFAmvg12vg2FYesmmTZ1fHWg6z/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPwFQiFn/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/AW6zn//EAB0QAAEEAgMAAAAAAAAAAAAAAAABEBESIUExMoH/2gAIAQEABj8ClNmWjSk1qh1t62Vk4P/EABwQAQACAwADAAAAAAAAAAAAAAEAESExUUFxgf/aAAgBAQABPyG8yNAi+tdJ9JcoEKzNwompXaByPEFtY8xitTVwAoAep//aAAwDAQACAAMAAAAQBM9B/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQMBAT8QsTFtL//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxBNmB//xAAdEAEBAAIDAAMAAAAAAAAAAAABEQAhMVFhcaHB/9oACAEBAAE/EFmrGrC1rmiHUNP11giWg8NwrTAKRHXxhnWkggzz9w29sYHoPpgx9g01FxWS5yQydUeAGf/Z',
                          aspectRatio: 1,
                          src:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/b315d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg',
                          srcSet:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/d0f88/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 25w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/99438/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 50w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/b315d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 100w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/dcd9a/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 150w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/8295c/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 200w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/b003e/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 4032w',
                          srcWebp:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/ff02b/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp',
                          srcSetWebp:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/8d998/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 25w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/48562/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 50w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/ff02b/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 100w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/1c591/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 150w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/a4d7d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 200w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/32718/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Zester Apples',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_apple144',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: {
                  id: '79c54c63-06bf-5f0b-b562-89afdd18aded',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c75b3299c41f2ce6af428bfdc7f081fc/d511137a/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB1uK4koctLF0xDqGb/8QAHBABAQACAgMAAAAAAAAAAAAAAQIAAwQhEBES/9oACAEBAAEFAmvg12vg2FYesmmTZ1fHWg6z/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPwFQiFn/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/AW6zn//EAB0QAAEEAgMAAAAAAAAAAAAAAAABEBESIUExMoH/2gAIAQEABj8ClNmWjSk1qh1t62Vk4P/EABwQAQACAwADAAAAAAAAAAAAAAEAESExUUFxgf/aAAgBAQABPyG8yNAi+tdJ9JcoEKzNwompXaByPEFtY8xitTVwAoAep//aAAwDAQACAAMAAAAQBM9B/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQMBAT8QsTFtL//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxBNmB//xAAdEAEBAAIDAAMAAAAAAAAAAAABEQAhMVFhcaHB/9oACAEBAAE/EFmrGrC1rmiHUNP11giWg8NwrTAKRHXxhnWkggzz9w29sYHoPpgx9g01FxWS5yQydUeAGf/Z',
                          aspectRatio: 1,
                          src:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/b315d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg',
                          srcSet:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/d0f88/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 25w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/99438/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 50w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/b315d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 100w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/dcd9a/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 150w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/8295c/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 200w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/b003e/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.jpg 4032w',
                          srcWebp:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/ff02b/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp',
                          srcSetWebp:
                            '/static/86fe63e10440c2fdff2d77cd7c2954d5/8d998/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 25w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/48562/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 50w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/ff02b/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 100w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/1c591/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 150w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/a4d7d/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 200w,\n/static/86fe63e10440c2fdff2d77cd7c2954d5/32718/00100lrPORTRAIT_00100_BURST20200912134441402_COVER.webp 4032w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Zucchini',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Zucchini',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash52',
                unitLabel: 'lb',
                unitQuantity: 10,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Snow Caps',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Snow Caps Mushrooms',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_mushroom233',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Green Bell Pepper',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Bell Pepper',
                oneLiner: null,
                priceInCents: '100',
                stripePriceId: 'sku_bellpepper193',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Green Bell Pepper',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_bellpepper195',
                unitLabel: null,
                unitQuantity: 5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Chinese Cabbage',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Cabbages & Brussel Sprouts'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Chinese Cabbage',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_cabbage216',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: {
                  id: '59871164-17ea-5521-a9d6-eb4c029f450b',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/3da7a804630fbb0d8ead730cdc7177ef/c39fc519/chineesecabbage.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAGAEAAgMAAAAAAAAAAAAAAAAAAQIAAwT/2gAMAwEAAhADEAAAAZ9slnOFUsfVpCvkiP8A/8QAHBAAAgICAwAAAAAAAAAAAAAAAAIBAxESISIz/9oACAEBAAEFAsGnVheVgu9K5wzzqp//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BRc//xAAWEQEBAQAAAAAAAAAAAAAAAAABABD/2gAIAQIBAT8BgjP/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREQIP/aAAgBAQAGPwJCvMHM/8QAGxABAAIDAQEAAAAAAAAAAAAAAQAxESFBURD/2gAIAQEAAT8h8KxCgwswz5jXwU3yXBw3FAUx1A1UtV2s/9oADAMBAAIAAwAAABCk70H/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAwEBPxCMZw6z/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQIRH/2gAIAQIBAT8QXihMNgK//8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYXGx/9oACAEBAAE/EFGm1VfVhgaxDZul5uOJ1aHimMuAzZ8zRdNC5Y3wH1y/uSwW4cuob0XHcVFV7c//2Q==',
                          aspectRatio: 1,
                          src: '/static/5874c496821c50ffbff266d5112c9139/b315d/chineesecabbage.jpg',
                          srcSet:
                            '/static/5874c496821c50ffbff266d5112c9139/d0f88/chineesecabbage.jpg 25w,\n/static/5874c496821c50ffbff266d5112c9139/99438/chineesecabbage.jpg 50w,\n/static/5874c496821c50ffbff266d5112c9139/b315d/chineesecabbage.jpg 100w,\n/static/5874c496821c50ffbff266d5112c9139/dcd9a/chineesecabbage.jpg 150w,\n/static/5874c496821c50ffbff266d5112c9139/8295c/chineesecabbage.jpg 200w,\n/static/5874c496821c50ffbff266d5112c9139/29667/chineesecabbage.jpg 1080w',
                          srcWebp: '/static/5874c496821c50ffbff266d5112c9139/ff02b/chineesecabbage.webp',
                          srcSetWebp:
                            '/static/5874c496821c50ffbff266d5112c9139/8d998/chineesecabbage.webp 25w,\n/static/5874c496821c50ffbff266d5112c9139/48562/chineesecabbage.webp 50w,\n/static/5874c496821c50ffbff266d5112c9139/ff02b/chineesecabbage.webp 100w,\n/static/5874c496821c50ffbff266d5112c9139/1c591/chineesecabbage.webp 150w,\n/static/5874c496821c50ffbff266d5112c9139/a4d7d/chineesecabbage.webp 200w,\n/static/5874c496821c50ffbff266d5112c9139/78754/chineesecabbage.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Butternut Squash, Organic',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Melons, Cucumbers & Squashes'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_squash,squash,squash18',
                unitLabel: null,
                unitQuantity: 2,
                mainImage: {
                  id: '987a15e0-8872-5544-bcf8-7ba831b2be5f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Butternut Squash',
                oneLiner: null,
                priceInCents: '2600',
                stripePriceId: 'sku_squash,squash,squash17',
                unitLabel: 'lb',
                unitQuantity: 20,
                mainImage: {
                  id: 'be033d02-fb9e-559d-9580-8e62ddc6dbeb',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/171e0f21324d6947c2a3f325f70c6c29/e6d7b9cd/butternut_squashref.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDBQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGdtayrnvaFyZLVBH//xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIDBBMUICL/2gAIAQEAAQUCNPdnH8uK4uWFxru9P//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAeEAABBAIDAQAAAAAAAAAAAAAAAQIRMSJRICFBcf/aAAgBAQAGPwLQ2FiLUow8StmV/Tt7OH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8hCvIFQCgYl2AKrMLZGi0tqLGWfYg9lEJ//9oADAMBAAIAAwAAABDrOH7/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFR/9oACAEDAQE/EBGv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCisWf/xAAfEAEAAwABBAMAAAAAAAAAAAABABEhUTFBYZGhscH/2gAIAQEAAT8QF3BLC1+iKsmXXziQkGvHNJ2CUhZ7yv2V0ACoKb5vpFtt5BfiKNBhY4ZMAGT/2Q==',
                          aspectRatio: 1,
                          src: '/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg',
                          srcSet:
                            '/static/6b6b55b19b44480a9d04d90573814e33/d0f88/butternut_squashref.jpg 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/99438/butternut_squashref.jpg 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/b315d/butternut_squashref.jpg 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/dcd9a/butternut_squashref.jpg 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/8295c/butternut_squashref.jpg 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/29667/butternut_squashref.jpg 1080w',
                          srcWebp: '/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp',
                          srcSetWebp:
                            '/static/6b6b55b19b44480a9d04d90573814e33/8d998/butternut_squashref.webp 25w,\n/static/6b6b55b19b44480a9d04d90573814e33/48562/butternut_squashref.webp 50w,\n/static/6b6b55b19b44480a9d04d90573814e33/ff02b/butternut_squashref.webp 100w,\n/static/6b6b55b19b44480a9d04d90573814e33/1c591/butternut_squashref.webp 150w,\n/static/6b6b55b19b44480a9d04d90573814e33/a4d7d/butternut_squashref.webp 200w,\n/static/6b6b55b19b44480a9d04d90573814e33/78754/butternut_squashref.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Butternut Squash, Organic',
                oneLiner: null,
                priceInCents: '350',
                stripePriceId: 'sku_squash259',
                unitLabel: null,
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Plain Yogurt',
          department: ['Dairy'],
          category: ['Yogurt'],
          subcategory: ['All Yogurt'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['4'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yogurt, Plain',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_yogurt137',
                unitLabel: 'oz',
                unitQuantity: 30,
                mainImage: {
                  id: '8a5a80bc-3d4d-5bc1-aba6-37a360f0a6f1',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/fed1c5e632ea313f46f7de095e9f4d0a/8c516270/FBF-Yogurt_Plain2x-300x300.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAIEAwUG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB7XPGA9GgVIcgP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAgMSBBAREyL/2gAIAQEAAQUClloe6qB5GU02HpRtqwtCoNf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAADAAAHAAAAAAAAAAAAAAAAARECEhMgIUFh/9oACAEBAAY/AkrGy6ixeQpm6IuRLZ//xAAcEAEAAwACAwAAAAAAAAAAAAABABFBITFRYXH/2gAIAQEAAT8hKhaHJ3IA+CEQ6YQnFMCgbOT1ORDewHor5xAAon//2gAMAwEAAgADAAAAEAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQZFR/9oACAEBAAE/EDTaM1B9zneoUKQ5UmcPvM1JCyHIrw9PV+xKuIERxFMyWPZ9DBkEuNC3kNBQT//Z',
                          aspectRatio: 1,
                          src: '/static/08d1d55ec5ec67728f2cdc0d5bedf898/b315d/FBF-Yogurt_Plain2x-300x300.jpg',
                          srcSet:
                            '/static/08d1d55ec5ec67728f2cdc0d5bedf898/d0f88/FBF-Yogurt_Plain2x-300x300.jpg 25w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/99438/FBF-Yogurt_Plain2x-300x300.jpg 50w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/b315d/FBF-Yogurt_Plain2x-300x300.jpg 100w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/dcd9a/FBF-Yogurt_Plain2x-300x300.jpg 150w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/8295c/FBF-Yogurt_Plain2x-300x300.jpg 200w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/25e3f/FBF-Yogurt_Plain2x-300x300.jpg 300w',
                          srcWebp: '/static/08d1d55ec5ec67728f2cdc0d5bedf898/ff02b/FBF-Yogurt_Plain2x-300x300.webp',
                          srcSetWebp:
                            '/static/08d1d55ec5ec67728f2cdc0d5bedf898/8d998/FBF-Yogurt_Plain2x-300x300.webp 25w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/48562/FBF-Yogurt_Plain2x-300x300.webp 50w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/ff02b/FBF-Yogurt_Plain2x-300x300.webp 100w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/1c591/FBF-Yogurt_Plain2x-300x300.webp 150w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/a4d7d/FBF-Yogurt_Plain2x-300x300.webp 200w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/50ead/FBF-Yogurt_Plain2x-300x300.webp 300w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Yogurt, Plain',
                oneLiner: null,
                priceInCents: '2126',
                stripePriceId: 'sku_yogurt138',
                unitLabel: 'gal',
                unitQuantity: 1,
                mainImage: {
                  id: 'b3a26bfa-4033-5fd3-b4b4-216adada0c3f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/fed1c5e632ea313f46f7de095e9f4d0a/8c516270/FBF-Yogurt_Plain2x-300x300.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAIEAwUG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB7XPGA9GgVIcgP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAgMSBBAREyL/2gAIAQEAAQUClloe6qB5GU02HpRtqwtCoNf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAADAAAHAAAAAAAAAAAAAAAAARECEhMgIUFh/9oACAEBAAY/AkrGy6ixeQpm6IuRLZ//xAAcEAEAAwACAwAAAAAAAAAAAAABABFBITFRYXH/2gAIAQEAAT8hKhaHJ3IA+CEQ6YQnFMCgbOT1ORDewHor5xAAon//2gAMAwEAAgADAAAAEAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQZFR/9oACAEBAAE/EDTaM1B9zneoUKQ5UmcPvM1JCyHIrw9PV+xKuIERxFMyWPZ9DBkEuNC3kNBQT//Z',
                          aspectRatio: 1,
                          src: '/static/08d1d55ec5ec67728f2cdc0d5bedf898/b315d/FBF-Yogurt_Plain2x-300x300.jpg',
                          srcSet:
                            '/static/08d1d55ec5ec67728f2cdc0d5bedf898/d0f88/FBF-Yogurt_Plain2x-300x300.jpg 25w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/99438/FBF-Yogurt_Plain2x-300x300.jpg 50w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/b315d/FBF-Yogurt_Plain2x-300x300.jpg 100w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/dcd9a/FBF-Yogurt_Plain2x-300x300.jpg 150w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/8295c/FBF-Yogurt_Plain2x-300x300.jpg 200w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/25e3f/FBF-Yogurt_Plain2x-300x300.jpg 300w',
                          srcWebp: '/static/08d1d55ec5ec67728f2cdc0d5bedf898/ff02b/FBF-Yogurt_Plain2x-300x300.webp',
                          srcSetWebp:
                            '/static/08d1d55ec5ec67728f2cdc0d5bedf898/8d998/FBF-Yogurt_Plain2x-300x300.webp 25w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/48562/FBF-Yogurt_Plain2x-300x300.webp 50w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/ff02b/FBF-Yogurt_Plain2x-300x300.webp 100w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/1c591/FBF-Yogurt_Plain2x-300x300.webp 150w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/a4d7d/FBF-Yogurt_Plain2x-300x300.webp 200w,\n/static/08d1d55ec5ec67728f2cdc0d5bedf898/50ead/FBF-Yogurt_Plain2x-300x300.webp 300w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Golden Delicious Apples',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Golden Delicious Apples',
                oneLiner: null,
                priceInCents: '400',
                stripePriceId: 'sku_apple157',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Golden Delicious Apples',
                oneLiner: null,
                priceInCents: '700',
                stripePriceId: 'sku_apple159',
                unitLabel: 'peck',
                unitQuantity: 0.5,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Greens Mix, Mizuna, Arugula and Purple mustard',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Greens Mix, Mizuna, Arugula and Purple mustard',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_saladgreens54',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: '29ca8e75-0141-5f8f-8798-717d68396f99',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Greens Mix, Mizuna, Arugula and Purple mustard',
                oneLiner: null,
                priceInCents: '2800',
                stripePriceId: 'sku_saladgreens53',
                unitLabel: 'lb',
                unitQuantity: 3,
                mainImage: {
                  id: 'f1be75cd-14d9-5a0a-b85e-e5c70c9d0b7c',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Retail Case Greens Mix, 8 package count',
                oneLiner: null,
                priceInCents: '2800',
                stripePriceId: 'sku_saladgreens102',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: '00fc2f4c-c6ff-5b62-9691-4a2c30c28320',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Portobello',
          department: ['Produce'],
          category: ['Mushrooms'],
          subcategory: ['Fresh Mushrooms'],
          sortOrderCategories: [6],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Portobello Mushrooms',
                oneLiner: null,
                priceInCents: '600',
                stripePriceId: 'sku_mushroom234',
                unitLabel: 'lb',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Sweet Peppers',
          department: ['Produce'],
          category: ['Vegetables'],
          subcategory: ['Tomatoes, Peppers & Eggplants'],
          sortOrderCategories: [2],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Sweet Peppers',
                oneLiner: null,
                priceInCents: '200',
                stripePriceId: 'sku_sweetpepper198',
                unitLabel: 'box',
                unitQuantity: 1,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Assorted Sweet Peppers',
                oneLiner: null,
                priceInCents: '300',
                stripePriceId: 'sku_sweetpepper214',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Peppermint',
          department: ['Produce'],
          category: ['Herbs & Spices'],
          subcategory: ['Fresh Herbs'],
          sortOrderCategories: [5],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Peppermint',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_mint90',
                unitLabel: 'oz',
                unitQuantity: 2,
                mainImage: null,
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Peppermint',
                oneLiner: null,
                priceInCents: '800',
                stripePriceId: 'sku_mint89',
                unitLabel: 'oz',
                unitQuantity: 4,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Granny Smith',
          department: ['Produce'],
          category: ['Fruits'],
          subcategory: ['Apples & Pears'],
          sortOrderCategories: [1],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: null,
                isOrganic: null,
                name: 'Granny Smith Apples',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_apple273',
                unitLabel: 'quart',
                unitQuantity: 1,
                mainImage: {
                  id: '6a1c7ce9-f14d-56fc-a8ec-118a5a45f287',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/a647d0f391292c59074fe0edf4476dc2/541a1a2f/Apple_Still_Life',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAwb/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQB/9oADAMBAAIQAxAAAAGiqPJmLWdhUebvGI1hjf/EAB0QAAEEAgMAAAAAAAAAAAAAAAIAAQMRBBITIjL/2gAIAQEAAQUCORhLZqP1yR6sRFMbWVrFfuv/xAAZEQACAwEAAAAAAAAAAAAAAAAAARAREjH/2gAIAQMBAT8B0yxdj//EABcRAQEBAQAAAAAAAAAAAAAAAAIBABD/2gAIAQIBAT8BNS1Pf//EABwQAAEDBQAAAAAAAAAAAAAAAAEAAhARMTJBUf/aAAgBAQAGPwIDqvGIQa07ik//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhUTFB/9oACAEBAAE/IUm1NLwnEN34K7HXhVB0No6g3taieElVw9P/2gAMAwEAAgADAAAAEJfgfP/EABcRAQEBAQAAAAAAAAAAAAAAAAERABD/2gAIAQMBAT8QaFwJiVz/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EIEeaMrMkGf/xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRYXH/2gAIAQEAAT8QN/Pr1W9+43nRs9c32GNY5V1p7UKhgieBgNhLr4KsaspBqBUq9n//2Q==',
                          aspectRatio: 1,
                          src: '/static/fe423ac16d455211ec4d011864c8d872/b315d/Apple_Still_Life.jpg',
                          srcSet:
                            '/static/fe423ac16d455211ec4d011864c8d872/d0f88/Apple_Still_Life.jpg 25w,\n/static/fe423ac16d455211ec4d011864c8d872/99438/Apple_Still_Life.jpg 50w,\n/static/fe423ac16d455211ec4d011864c8d872/b315d/Apple_Still_Life.jpg 100w,\n/static/fe423ac16d455211ec4d011864c8d872/dcd9a/Apple_Still_Life.jpg 150w,\n/static/fe423ac16d455211ec4d011864c8d872/8295c/Apple_Still_Life.jpg 200w,\n/static/fe423ac16d455211ec4d011864c8d872/ea99b/Apple_Still_Life.jpg 640w',
                          srcWebp: '/static/fe423ac16d455211ec4d011864c8d872/ff02b/Apple_Still_Life.webp',
                          srcSetWebp:
                            '/static/fe423ac16d455211ec4d011864c8d872/8d998/Apple_Still_Life.webp 25w,\n/static/fe423ac16d455211ec4d011864c8d872/48562/Apple_Still_Life.webp 50w,\n/static/fe423ac16d455211ec4d011864c8d872/ff02b/Apple_Still_Life.webp 100w,\n/static/fe423ac16d455211ec4d011864c8d872/1c591/Apple_Still_Life.webp 150w,\n/static/fe423ac16d455211ec4d011864c8d872/a4d7d/Apple_Still_Life.webp 200w,\n/static/fe423ac16d455211ec4d011864c8d872/a34f0/Apple_Still_Life.webp 640w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Arugula',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Arugla',
                oneLiner: null,
                priceInCents: '449',
                stripePriceId: 'sku_arugla2',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: '5f29a15c-79f0-5953-8953-33c33162bc7a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Arugula',
                oneLiner: null,
                priceInCents: '3000',
                stripePriceId: 'sku_arugla3',
                unitLabel: 'lb',
                unitQuantity: 3,
                mainImage: {
                  id: '59f86ea8-70b6-5407-9d60-1dcfbb4dd35a',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: null,
                isLocal: true,
                isOrganic: null,
                name: 'Retail Case Arugula, 8 package count',
                oneLiner: null,
                priceInCents: '2800',
                stripePriceId: 'sku_arugla101',
                unitLabel: 'oz',
                unitQuantity: 5,
                mainImage: {
                  id: '6e3d7734-0dd2-5a16-bd90-a886ba2506c5',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/97d9d1e30c9771c9199257c76c25be11/d64f28b7/gardenfortassemble.jpg',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAc8YvJytmZqSUC//xAAcEAACAgIDAAAAAAAAAAAAAAABAhESAxMAIjL/2gAIAQEAAQUCy+7FVMgsWOZpo8ln6Psau1+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiFRMVJhcZH/2gAIAQEABj8CSgmOjAvCNpelkrJVyan/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFB4f/aAAgBAQABPyG6PxaEsJroVfKmLM7S6gQpjsNxSxNo31PY2zFPmf/aAAwDAQACAAMAAAAQNw/8/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ECv/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAgEBPxBvS8Kys//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQWGBUf/aAAgBAQABPxAmfbgC63v8uaEFYEW7j6mALDuz7hRLIjWDrw4npmmcd73IjgNFxqkbVWx1cqyF2J6xg4gHHj5n/9k=',
                          aspectRatio: 1,
                          src: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg',
                          srcSet:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/d0f88/gardenfortassemble.jpg 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/99438/gardenfortassemble.jpg 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/b315d/gardenfortassemble.jpg 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/dcd9a/gardenfortassemble.jpg 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/8295c/gardenfortassemble.jpg 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/29667/gardenfortassemble.jpg 1080w',
                          srcWebp: '/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp',
                          srcSetWebp:
                            '/static/5a11f24209eeeb6c6475d9c4aa91dee7/8d998/gardenfortassemble.webp 25w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/48562/gardenfortassemble.webp 50w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/ff02b/gardenfortassemble.webp 100w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/1c591/gardenfortassemble.webp 150w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/a4d7d/gardenfortassemble.webp 200w,\n/static/5a11f24209eeeb6c6475d9c4aa91dee7/78754/gardenfortassemble.webp 1080w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              data: {
                available: null,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: true,
                name: 'Arugula, Organic',
                oneLiner: null,
                priceInCents: '299',
                stripePriceId: 'sku_arugla251',
                unitLabel: 'oz',
                unitQuantity: 8,
                mainImage: null,
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Black Kale',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Salad Greens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: true,
                isOrganic: null,
                name: 'Black Kale',
                oneLiner: null,
                priceInCents: '250',
                stripePriceId: 'sku_kale270',
                unitLabel: 'bunch',
                unitQuantity: 1,
                mainImage: {
                  id: '957d55b1-9921-51b5-9915-8609f16e855f',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/785c50b0d2a912427f913c318b37029b/43cf2c64/ScreenShot2020-11-25at11.48.25.png',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFVElEQVQ4yxWUy0/b6RWGvRmpm3YaRUmDkkBCCcEEAwbDAAYbX/AFg284NraxAWN8wcbGFy6GH8TEMYQAkyYh3JIMpGmiqJtW1Yw00cy0o7ZSu5jVaDSrav6FdtXt06+Lb3P0nUfnfc9FFt8wE5UC3M1FWN0o8FlhkPd6BT8Ee/huvJ0f8gmOpBKprBtTNMj4cpRQOcXZ6g7n+RyfV0p8G4nxISWRWSsi04YG0Uy6cGSmSVXvU91f5un0KL87SvDut3H+cSbx4osNUocJ7IsZXMVZMpU11g6P0E1ZiZdzLB4+oHS+y/M/vkKmm7ZgTo4zt7POlFRg/mEZ6fQJGy9PKb/eoPTCR/DeCLq4h+jONpnHBwK6hC7iZ2DMyoSUZPV8i+rrHXbfP0FmjNkwJX2EpCLB0gKpyjohIWXpN8/wLqwQLgQJrXnoDjhZODxj9uEx2lAEzbSDyP4GC48rSEc7SCePePvhD8h6A0NoIi58S1kCi3kiwi93Kkbx8R7+/Cq+Yppub5/44yX/4h32jERdbweG3Bi5010BO2LxSZWV40/5/l8/CaBviC63AVN8Av9SEW8uiyebYTQ+iyORRqHVcuH2NYbzYWJ7uzSqtTQYenGUMkifnVDcf8TcrkTpdJ/P//5PZM1DXXQ7h+h2mRhJzOCYm8OWTGKajdLjcFDf2c4lRT09ATujhXkuy5uYfrRL4fA55ZMjZsoSU9sVKm/f8d2P3yNT2Pq4remg3aShx2XFGo2gDQYwRiYF0M51RQtXFI3UD6q4bdKidtuRXp1SPTsRHV7Hko4T3t7ixYe/8NN//o1MbuykxdLHDWWzgGrRjY+JJCeDIT/qu27qVR3UCGBtX6uAdhHZyFI+3qP0dB/z7Az6eIjE3n12Xv+e82++RdZh7kBh7OWmqpkOi55uiwGlTVhgN2N0j3BD1coNtZLLbQ1o/Q4q58ekNteZltZxZdIMp8YZijoIZbO8+koAw2t2bvW1cLOzma5hvajSwKjNxst0nrzNTk2nnGZjD79ovYHab2Vpt4J/cYlodRtnIYMu6iL+cItnX37NwZ//hix0z4x2spc7pk7kA0qa+zvIjzr57/pzSsNOflZ7iZ5P2jBYB/Av+LBOBXGk54hUJPQxJ4F788QeFJkuxbFOOoRkVyvJJRf2QD9XWm7i6VORHbUQt5gxKJV83HiV9oFm0tEwb6pVfBNunJkwnoKf2H6Gg7++ocei4aOPfs6t7mZkdyxygosmbrVep7azlqbBVm6qW1CGLdQOtHGx4SoNdhVtQSPxUo5Y3svMziz5kxLl9/vkDjdRDdtoVHUxFA4hs2XVRPfs+CMjIiFMu7+fX2t70EfcWDJ+AbwmuttJV8iIaznD6ssKmWcFls43yD9dEaM1iiUeo804JMBmIdnRxGR+WFyXTbaflml396PxeTBMjjOxN8elpjqufSLHtBgUc7dCsrrCwsEyvuUwusA4Gv//nw+VbQS1142sVtWAxqriYHMVo3FQ7GkjYSHNnpgjebbA0KyJa90KrOmAiBe5uxCjrrWBK7frUFiNGKNTyNX9hDfvYxNbJmvor8eXM7NZnkNj0XLHqGRiOY47lyR8b5yxpTEaxcDro168y4voA34+vnwRi96AV1TW6bRS19zExPomxplJZDPVWRbf7Aq5W9j9eoyTRnQuA+7kCP6cD1d0FJvwcyTlofBkizuD3dTIG0WnU1QLEg3trVyo+RUNqjZ0QQ+y9Js/sXD0BZvnH9h4tkdC8hBKuyisTXG4t8KPxwe8fSCu+Po8Gns/1zvk4holRPWr+EvzAqTkYs1Vfnn5ApohLf8DO4pImxxG1scAAAAASUVORK5CYII=',
                          aspectRatio: 1,
                          src: '/static/903af24d038dd466e3277bdcce752fc4/71eb7/ScreenShot2020-11-25at11.48.25.png',
                          srcSet:
                            '/static/903af24d038dd466e3277bdcce752fc4/b5811/ScreenShot2020-11-25at11.48.25.png 25w,\n/static/903af24d038dd466e3277bdcce752fc4/8ba1e/ScreenShot2020-11-25at11.48.25.png 50w,\n/static/903af24d038dd466e3277bdcce752fc4/71eb7/ScreenShot2020-11-25at11.48.25.png 100w,\n/static/903af24d038dd466e3277bdcce752fc4/92ab1/ScreenShot2020-11-25at11.48.25.png 150w,\n/static/903af24d038dd466e3277bdcce752fc4/b3a76/ScreenShot2020-11-25at11.48.25.png 200w,\n/static/903af24d038dd466e3277bdcce752fc4/e8af0/ScreenShot2020-11-25at11.48.25.png 796w',
                          srcWebp: '/static/903af24d038dd466e3277bdcce752fc4/ff02b/ScreenShot2020-11-25at11.48.25.webp',
                          srcSetWebp:
                            '/static/903af24d038dd466e3277bdcce752fc4/8d998/ScreenShot2020-11-25at11.48.25.webp 25w,\n/static/903af24d038dd466e3277bdcce752fc4/48562/ScreenShot2020-11-25at11.48.25.webp 50w,\n/static/903af24d038dd466e3277bdcce752fc4/ff02b/ScreenShot2020-11-25at11.48.25.webp 100w,\n/static/903af24d038dd466e3277bdcce752fc4/1c591/ScreenShot2020-11-25at11.48.25.webp 150w,\n/static/903af24d038dd466e3277bdcce752fc4/a4d7d/ScreenShot2020-11-25at11.48.25.webp 200w,\n/static/903af24d038dd466e3277bdcce752fc4/a04d5/ScreenShot2020-11-25at11.48.25.webp 796w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        data: {
          name: 'Wasabi Microgreens',
          department: ['Produce'],
          category: ['Greens'],
          subcategory: ['Microgreens'],
          sortOrderCategories: [3],
          sortOrderDepartments: ['1'],
          productv2: [
            {
              data: {
                available: true,
                description: null,
                isInSeason: true,
                isLocal: null,
                isOrganic: null,
                name: 'Wasabi Microgreens',
                oneLiner: null,
                priceInCents: '500',
                stripePriceId: 'sku_microgreen272',
                unitLabel: 'oz',
                unitQuantity: 1,
                mainImage: {
                  id: '5b5681b1-79e4-575c-a23c-a26baf75cef3',
                  localFiles: [
                    {
                      url:
                        'https://dl.airtable.com/.attachments/c6e6fcb9707d35d26215e5fb8a1b8089/cafbc624/Micro_Wasabi_-_White_Lotus_Farms',
                      childImageSharp: {
                        fluid: {
                          base64:
                            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgEE/9oADAMBAAIQAxAAAAHm65Z449XE9kpDX//EABoQAQADAAMAAAAAAAAAAAAAAAEAAhESEyL/2gAIAQEAAQUCs5c8zvyc8vZVriN2MLM//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPwEqyH//xAAfEAACAQMFAQAAAAAAAAAAAAAAARECIWEiMUFxkaH/2gAIAQEABj8C3I+lpJfOBXk1PwqwylwpH2f/xAAdEAEBAQACAgMAAAAAAAAAAAABEQAhMUFhUXHx/9oACAEBAAE/IYZ2sC4D4d/a7wpHsyJANfrKIPXoMCsX4xxc8HGico5s1WP/2gAMAwEAAgADAAAAEIgAgf/EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAEDAQE/ECH/xAAZEQACAwEAAAAAAAAAAAAAAAAAARARMVH/2gAIAQIBAT8Q2oXo04f/xAAfEAEBAAICAQUAAAAAAAAAAAABEQAhMVGRYXGBsfD/2gAIAQEAAT8QmpJ8GXmvfPnJQaoA7FnTgk0hkByVQBRgzjbLhQjaDaaPTzmgj6ggfN+8TQ+A6H6YLDRS24k9piRoAgAz/9k=',
                          aspectRatio: 1,
                          src: '/static/30a03ccd4ca58e38fa7e5b0d588ef582/b315d/Micro_Wasabi_-_White_Lotus_Farms.jpg',
                          srcSet:
                            '/static/30a03ccd4ca58e38fa7e5b0d588ef582/d0f88/Micro_Wasabi_-_White_Lotus_Farms.jpg 25w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/99438/Micro_Wasabi_-_White_Lotus_Farms.jpg 50w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/b315d/Micro_Wasabi_-_White_Lotus_Farms.jpg 100w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/dcd9a/Micro_Wasabi_-_White_Lotus_Farms.jpg 150w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/8ea56/Micro_Wasabi_-_White_Lotus_Farms.jpg 163w',
                          srcWebp:
                            '/static/30a03ccd4ca58e38fa7e5b0d588ef582/ff02b/Micro_Wasabi_-_White_Lotus_Farms.webp',
                          srcSetWebp:
                            '/static/30a03ccd4ca58e38fa7e5b0d588ef582/8d998/Micro_Wasabi_-_White_Lotus_Farms.webp 25w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/48562/Micro_Wasabi_-_White_Lotus_Farms.webp 50w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/ff02b/Micro_Wasabi_-_White_Lotus_Farms.webp 100w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/1c591/Micro_Wasabi_-_White_Lotus_Farms.webp 150w,\n/static/30a03ccd4ca58e38fa7e5b0d588ef582/f8d6c/Micro_Wasabi_-_White_Lotus_Farms.webp 163w',
                          sizes: '(max-width: 100px) 100vw, 100px',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    ],
  },
}
