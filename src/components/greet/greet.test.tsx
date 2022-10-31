// 1.Greet는 'hello'를 렌더링한다.
// 2.name이라는 props가 전달되면, name 뒤에 'hello'가 온다

import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name="dangelo" />);
  const textElemnet = screen.getByText('Hello dangelo');

  expect(textElemnet).toBeInTheDocument();
});
