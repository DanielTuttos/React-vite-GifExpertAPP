import { render, screen } from "@testing-library/react";
import { GifsItem } from "../../components/";

describe('Tests in <GifsItem />', () => {

    const title = "Saitama";
    const url = "https://one-puch.com/saitama.jpg";

    test('must have match with snapshot', () => {
        const { container } = render(<GifsItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('It must show the url with the indicated alt', () => {
        render(<GifsItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('must show the title in the component', () => {
        render(<GifsItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

})