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
        resolvedValue: { drinks: [{ strDrink: "Dirty coca cola" }] }
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
})