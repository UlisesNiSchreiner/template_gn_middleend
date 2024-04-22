import { SessionClient, SessionData } from 'graph-navigation-js'
import axios from "axios";

export default class SessionClientImpl extends SessionClient {
  override async createSesion() {
    const url = "http://127.0.0.1:8080/create";
    const response = await axios.post(url, {});

    const sesionResponse = new SessionData();
    sesionResponse.id = response.data.id;
    sesionResponse.data = response.data.data;
    return sesionResponse;
  }

  override async updateSesion(id: string, data: any) {
    const url = `http://127.0.0.1:8080/update?id=${id}`;
    const response = await axios.put(url, JSON.stringify(data));

    const sesionResponse = new SessionData();
    sesionResponse.id = response.data.id;
    sesionResponse.data = response.data.data;
    return sesionResponse;
  }

  override async getSesion(id: string) {
    const url = `http://127.0.0.1:8080/get?id=${id}`;
    const response = await axios.get(url);

    const sesionResponse = new SessionData();
    sesionResponse.id = response.data.id;
    sesionResponse.data = response.data.data;
    return sesionResponse;
  }
}
