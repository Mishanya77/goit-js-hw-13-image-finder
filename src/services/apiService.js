const baseUrl = 'https://pixabay.com/api/';
const key = '&key=15364832-46e4bda7ae3c94390e1b1153f';

export default {
    page: 1,
    query: '',

    fetchImage() {
        const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12`
        return fetch(baseUrl + requestParams + key)
            .then(response => response.json())
            .then(parsedResponse => {
                this.incrementPage()
                return parsedResponse.hits
            });
    },
    get searchQuery() {
        return this.query;
    },
    set searchQuery(string) {
        this.query = string;
    },
    incrementPage() {
        this.page += 1;
    },
    resetPage() {
        this.page = 1;
    }
};
