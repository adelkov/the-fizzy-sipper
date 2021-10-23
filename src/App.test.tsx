import userEvent from '@testing-library/user-event';
import App from './App';
import { render } from './utils/tests/render'

test('renders without crashing', () => {
  render(<App />);
});

test('renders cocktails page by default', () => {
  const { getByText } = render(<App />);

  getByText(/cocktails page/i)
});

test('renders favorites page after clicking the favorites link', () => {
  const { getByText } = render(<App />);

  const favoritesLink = getByText(/my favorites/i)
  userEvent.click(favoritesLink)

  getByText(/Favorites page/i)
});

test('renders cocktails page after clicking the fizzy sipper logo on favorites page', () => {
  const { getByText } = render(<App />);
  const favoritesLink = getByText(/my favorites/i)
  userEvent.click(favoritesLink)

  const titleLink = getByText('The fizzy sipper')
  userEvent.click(titleLink)

  getByText(/cocktails page/i)
});
