import userEvent from "@testing-library/user-event"
import { render } from "../../utils/tests/render"
import SearchCocktails from "./SearchCocktails"
import { Server } from "miragejs";
import makeServer from "../../utils/tests/makeServer";

let server: Server

describe.only('SearchCocktails component', () => {
  beforeEach(() => {
    server = makeServer([{
      pathname: 'search.php',
      resolver: (_attributes, request) => {
        if (request.queryParams.s === 'c') {
          return { drinks: [{ strDrink: 'sparkly orange 1', idDrink: 'b' }, { strDrink: 'sparkly orange 2', idDrink: 'id-2' }] }
        }
        if (request.queryParams.s === 'f') {
          return { drinks: [{ strDrink: 'sparkly orange 2', idDrink: 'id-2' }] }
        }

        return { drinks: null }
      }
    }])
  })

  afterEach(() => {
    server.shutdown()
  })


  it('renders without crashing', () => {
    render(<SearchCocktails />)
  })

  it('does not show loader initially', () => {
    const { queryByText } = render(<SearchCocktails />)

    const loader = queryByText(/loading/i)

    expect(loader).not.toBeInTheDocument()
  })

  it('shows at least one skeleton loader when user types search query', () => {
    const { getByPlaceholderText, getAllByText } = render(<SearchCocktails />)
    const searchInput = getByPlaceholderText('Search for a cocktail')

    userEvent.type(searchInput, 'n')

    const loaders = getAllByText(/loading/i)
    expect(loaders[0]).toBeInTheDocument()
  })

  it('shows found cocktails upon successful search', async () => {
    const { getByPlaceholderText, findByText } = render(<SearchCocktails />)
    const searchInput = getByPlaceholderText('Search for a cocktail')

    userEvent.type(searchInput, 'c')
    const foundCocktail1 = await findByText('sparkly orange 1')
    const foundCocktail2 = await findByText('sparkly orange 2')

    expect(foundCocktail1).toBeInTheDocument()
    expect(foundCocktail2).toBeInTheDocument()
  })

  it('shows no option found text when search has no result', async () => {
    const { getByPlaceholderText, findByText } = render(<SearchCocktails />)
    const searchInput = getByPlaceholderText('Search for a cocktail')

    userEvent.type(searchInput, 'n')
    const noResults = await findByText(/Nothing found/)

    expect(noResults).toBeInTheDocument()
  })


  it('searched cocktail is added to favorites when add to favorites clicked', async () => {
    const { findByText, getByText, getByPlaceholderText } = render(<SearchCocktails />)
    const searchInput = getByPlaceholderText('Search for a cocktail')
    userEvent.type(searchInput, 'f')
    const addToFavoritesButton = await findByText("add to favorites")

    userEvent.click(addToFavoritesButton)

    const removeFromFavoritesButton = getByText(/remove from favorites/)
    expect(removeFromFavoritesButton).toBeInTheDocument()
  })
})