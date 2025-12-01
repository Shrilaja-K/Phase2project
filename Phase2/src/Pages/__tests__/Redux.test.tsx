import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { nowPlayingfn, Popularfn, topRatedfn } from "../../redux/homeAction";
import { fetchnowplaying, fetchpopular, fetchtoprated } from "../../redux/homeAction";
 
describe("Home Actions", () => {
  let mock: MockAdapter;
  let dispatch: jest.Mock;
 
  beforeEach(() => {
    mock = new MockAdapter(axios);
    dispatch = jest.fn();
  });
 
  afterEach(() => {
    mock.reset();
  });

  test("nowPlayingfn", async () => {
    const mockData = { results: [{ id: 1, title: "Test Movie" }] };
 
    mock.onGet("https://api.themoviedb.org/3/movie/now_playing?page=1")
        .reply(200, mockData);
 
    await nowPlayingfn(1)(dispatch);
 
    expect(dispatch).toHaveBeenCalledWith(
      fetchnowplaying(mockData.results, 1)
    );
  });

  test("Popularfn", async () => {
    const mockData = { results: [{ id: 2, title: "Popular Movie" }] };
 
    mock.onGet("https://api.themoviedb.org/3/movie/popular?page=1")
        .reply(200, mockData);
 
    await Popularfn(1)(dispatch);
 
    expect(dispatch).toHaveBeenCalledWith(
      fetchpopular(mockData.results, 1)
    );
  });

  test("topRatedfn", async () => {
    const mockData = { results: [{ id: 3, title: "Top Rated" }] };
 
    mock.onGet("https://api.themoviedb.org/3/movie/top_rated?page=1")
        .reply(200, mockData);
 
    await topRatedfn(1)(dispatch);
 
    expect(dispatch).toHaveBeenCalledWith(
      fetchtoprated(mockData.results, 1)
    );
  });
});