import axios from "axios";

const api=axios.create({
    baseURL:"https://61b987dd38f69a0017ce608d.mockapi.io/api"
}
)

export default api;