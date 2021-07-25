import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";



export class GetMoviesService {
  private readonly movieApi: string;
  constructor(private http: HttpClient) {
    this.movieApi = `${environment.apiUrl}api/v1/movies`;
  }
  createMovie(params) {
    return this.http.post<any>(`${this.movieApi}/create`, params);
  }

  getAllMovies() {
    return this.http.get<any>(`${this.movieApi}/index`);
  }


}
