import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')

describe('Test in <GifGrid /> component', () => {

    const category = "Dragon Ball";

    test('should show the initial loading ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should display items when images are loaded useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'dragon',
                url: 'https://dragonball.com/ball.png'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://Goku.com/goku.png'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)

        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2);

    })

})