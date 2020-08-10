export const seedData = [
  {
    id: 1,
    title: 'Cooking',
    color: 'green',
    current: false,
    tasks: [
      {
        title: 'Cooking Task 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
        dueDate: new Date(2020, 11, 31),
        important: true,
        finished: false
      },
      {
        title: 'Cooking Task 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
        dueDate: new Date(2020, 11, 8),
        important: false,
        finished: false
      },
      {
        title: 'Cooking Task 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
        dueDate: new Date(2020, 11, 20),
        important: false,
        finished: true
      }
    ]
  },
  {
    id: 2,
    title: 'Cleaning',
    color: 'red',
    current: true,
    tasks: [
      {
        title: 'Cleaning Task 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
        dueDate: new Date(2020, 10, 1),
        important: false,
        finished: false
      },
      {
        title: 'Cleaning Task 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
        dueDate: new Date(2020, 10, 11),
        important: true,
        finished: false
      },
      {
        title: 'Cleaning Task 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
        dueDate: new Date(2020, 10, 25),
        important: true,
        finished: true
      }
    ]
  }
]
