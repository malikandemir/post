import http from "./../http-common";

class TutorialDataService {
    getAll(): Promise<any> {
        return http.get("/posts");
    }

    get(id: any): Promise<any> {
        return http.get(`/post/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/post", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/post/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/post/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/post`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/post?title=${title}`);
    }
}

export default new TutorialDataService();