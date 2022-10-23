import http from "../http-common";

class TutorialDataService {
  getAll() {
    console.log("getAll");
    return http.get("/api/tutorials");
  }

  get(id) {
    console.log("tutorials get id");
    return http.get(`/api/tutorials/${id}`);
  }

  create(data) {
    console.log("create tutorials");
    return http.post("/api/tutorials", data);
  }

  update(id, data) {
    console.log("update tutorial");
    return http.put(`/api/tutorials/${id}`, data);
  }

  delete(id) {
    console.log("delete tutorials");
    return http.delete(`/api/tutorials/${id}`);
  }

  deleteAll() {
    console.log("delete all tutorials");
    return http.delete(`/api/tutorials`);
  }

  findByTitle(title) {
    console.log("find tutorial with title");
    return http.get(`/api/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();