import * as React from 'react';
import { Lesson1 } from './1/Lesson1';
import { Lesson1Solution } from './1/Lesson1.solution';

type Section = {
  title: string;
  lessons: Lesson[];
};

type Lesson = {
  title: string;
  path: string;
  filepath: string;
  implementation: React.ComponentType;
  solution: React.ComponentType;
};

type Manifest = {
  sections: Section[];
};

export const manifest: Manifest = {
  sections: [
    {
      title: 'JavaScript, TypeScript, JSX, and TSX',
      lessons: [
        {
          title: 'JavaScript functions',
          path: '/part/1',
          filepath: '/parts/1/Part1.tsx',
          implementation: Lesson1,
          solution: Lesson1Solution,
        },
      ],
    },
  ],
};
