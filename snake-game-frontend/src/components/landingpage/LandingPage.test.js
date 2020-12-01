import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders Landing page with header, input button and play button', () => {
  render(<LandingPage />);
  const headerElement = screen.getByText(/SNAKO/i);
  expect(headerElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(/Enter your name here/i);
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Let's Begin/i);
  expect(buttonElement).toBeInTheDocument();

  //TODO Copyright
});

test('Navigates to game pag after   ', () => {
  render(<LandingPage />);
  const headerElement = screen.getByText(/SNAKO/i);
  expect(headerElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(/Enter your name here/i);
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Let's Begin/i);
  expect(buttonElement).toBeInTheDocument();
});
