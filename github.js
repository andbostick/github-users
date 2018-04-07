class Github {
    constructor() {
        this.client_id = '405fc9b7b65d28d9b721';
        this.client_secret = '2c43ea8e962db43953df722e7ab3d3027c802964';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}