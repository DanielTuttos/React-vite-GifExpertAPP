import { getGifs } from "../../helpers/getGifs";

describe('Tests in getGifs', () => {

    test('Must return an gifs array', async () => {

        const gifs = await getGifs('dragon ball');

        expect(gifs.length).toBeGreaterThan(0) // evaluates to be greater than 0

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    });

});