import { render } from "@testing-library/react";
import { GifsItem } from "../../components/";

describe('Tests in <GifsItem />', () => {

    const title = "Saitama";
    const url = "https://one-puch.com/saitama.jpg";

    test('must have match with snapshot', () => {
        const { container } = render(<GifsItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

})