const { render, screen } = require("@testing-library/react");
const { GifExpertApp } = require("../GifExpertApp");

describe('Test in GifExpertApp component', () => {

    test('check snapshot', () => {
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

})

