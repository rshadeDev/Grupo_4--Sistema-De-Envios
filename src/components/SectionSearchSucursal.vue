<template>
    <section class="search-section">
        <h2>Busque su sucursal más cercana</h2>
        <h3>Ingresa la dirección o ciudad en la que busques una sucursal</h3>

        <div class="search-bar">
            <input
                type="text"
                placeholder="Ingresa la ciudad"
                v-model="city"
                @input="onInput"
                @focus="showDropdown = true"
                @blur="hideDropdown"
            >
            <button @click="buscarSucursales">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 20" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                </svg>
            </button>
            <ul v-if="showDropdown && filteredCities.length" class="dropdown">
                <li v-for="city in filteredCities" :key="city" @mousedown.prevent="selectCity(city)">
                    {{ city }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import jsonData from '../components/Json/lista-sucursales.json';

export default {
    data() {
        return {
            city: '',
            showDropdown: false,
            cities: [],
            filteredCities: []
        };
    },
    created() {
        this.loadCities();
    },
    methods: {
        loadCities() {
            const uniqueCities = new Set();
            jsonData.forEach(sucursal => uniqueCities.add(sucursal.ciudad.toLowerCase()));
            this.cities = Array.from(uniqueCities);
        },
        buscarSucursales() {
            this.$router.push({ path: '/lista-sucursal', query: { city: this.city } });
        },
        onInput() {
            if (this.city) {
                const searchTerm = this.city.toLowerCase();
                this.filteredCities = this.cities.filter(city =>
                    city.toLowerCase().includes(searchTerm)
                );
            } else {
                this.filteredCities = [];
            }
        },
        selectCity(city) {
            this.city = city;
            this.showDropdown = false;
        },
        hideDropdown() {
            setTimeout(() => {
                this.showDropdown = false;
            }, 100);
        }
    }
};
</script>

<style scoped>
.search-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6em;
    width: 100%;
    height: 25em;
    background-color: #FFEAD4;
}

h2 {
    font-size: 2rem;
    color: #FF6D24;
}

h3 {
    font-size: 1.4rem;
    margin-bottom: 30px;
}

.search-bar {
    position: relative;
    width: 40em;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: white;
    color: black;
}

button {
    background-color: #FF6D24;
    width: 40px;
    height: 37px;
    position: absolute;
    top: 50%;
    right: -100px;
    transform: translateY(-50%);
    border: none;
    color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
}

.dropdown {
    position: absolute;
    top: 63%;
    background: white;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 150px;
    width: 38.7em;
    overflow-y: auto;
    z-index: 1000;
    border-radius: 7px;
}

.dropdown li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-bottom: 1px solid #ccc;
    list-style: none;
    margin-left: -40px;
}

.dropdown li:hover {
    background-color: #f0f0f0;
}
</style>