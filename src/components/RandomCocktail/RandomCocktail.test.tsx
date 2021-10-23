import userEvent from "@testing-library/user-event";
import { Server } from "miragejs";
import makeServer from "../../utils/tests/makeServer";
import { render } from "../../utils/tests/render";
import RandomCocktail from "./RandomCocktail";

let server: Server

describe("RandomCocktail component", () => {
  beforeAll(() => {
    server = makeServer([
      {
        pathname: 'random.php',
        resolver: () => ({ drinks: [{ strDrink: "Dirty coca cola" }] })
      }
    ])
  })

  afterAll(() => {
    server.shutdown()
  })

  it('renders without crashing', () => {
    render(<RandomCocktail />)
  })

  it('renders loading state initially', () => {
    const { getByText } = render(<RandomCocktail />)

    const loader = getByText(/loading/i)

    expect(loader).toBeInTheDocument()
  })

  it('renders random cocktail from API', async () => {
    const { findByText } = render(<RandomCocktail />)

    const cocktail = await findByText("Dirty coca cola")

    expect(cocktail).toBeInTheDocument()
  })

  it('random cocktail is added to favorites when add to favorites clicked', async () => {
    const { findByText, getByText } = render(<RandomCocktail />)
    const addToFavoritesButton = await findByText("add to favorites")

    userEvent.click(addToFavoritesButton)

    const removeFromFavoritesButton = getByText(/remove from favorites/)
    expect(removeFromFavoritesButton).toBeInTheDocument()
  })
})
