import userEvent from '@testing-library/user-event';
import App from './App';
import { render } from './utils/tests/render'

test('renders without crashing', () => {
  render(<App />);
});

test('renders cocktails page by default', () => {
  const { getByText } = render(<App />);

  const cocktailsPage = getByText(/My recommendation to/i)

  expect(cocktailsPage).toBeInTheDocument()
});

test('renders favorites page after clicking the favorites link', () => {
  const { getByText } = render(<App />);

  const favoritesLink = getByText(/my favorites/i)
  userEvent.click(favoritesLink)
  const favoritesPage = getByText(/Favorites page/i)

  expect(favoritesPage).toBeInTheDocument()
});

test('renders cocktails page after clicking the fizzy sipper logo on favorites page', () => {
  const { getByText } = render(<App />);
  const favoritesLink = getByText(/my favorites/i)
  userEvent.click(favoritesLink)

  const titleLink = getByText('Cocktails')
  userEvent.click(titleLink)
  const cocktailsPage = getByText(/My recommendation to/i)

  expect(cocktailsPage).toBeInTheDocument()
});
