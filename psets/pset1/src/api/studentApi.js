import httpRequest from "./httpRequest";

const PREFIX = "students";

const studentApi = {
  getStudents: () => {
    const url = `${PREFIX}`;
    return httpRequest.get(url);
  },
  createStudent: (data) => {
    const url = `${PREFIX}`;
    return httpRequest.post(url, data);
  },
  deleteStudentById: (id) => {
    const url = `${PREFIX}/${id}`;
    return httpRequest.delete(url);
  },
};

export default studentApi;
