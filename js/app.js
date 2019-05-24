var app = new Vue({
    el: '#app',
    data: {
        name: 'cruiser',
        brand: 'iron horse',
        description: ' True to its name, the Iron Horse creuiser  is an <i>expirience and expressin of freedom</i>.',
        cart: 0,
        features: ['1200cc air-cooled evolution engine', 'closed loop exhaust system', 'chrome details'],
        specs: {
            engine: '1200cc',
            torque: '99m',
            weight: '255 kg',
            other: ['two tone colour', 'fog lamps', 'alloy wheels']
        },
        variations: [{
                color: 'red',
                quantity: 10,
                image: './img/motorcycle-red.jpg'
            },
            {
                color: 'blue',
                quantity: 3,
                image: './img/motorcycle-blue.jpg'
            }

        ],
        selectedVariation: 0,
        redButton:{backgroundColor:'red'},
        tabs:['Features', 'Specs'],
        selectedTab:'Featured'

    },
    computed: {
        title: function () {
            return this.brand + '-' + this.name
        },
        image: function () {
            return this.variations[this.selectedVariation].image
        }
    },
    methods: {
        updateProduct: function (index) {
            this.selectedVariation = index

        }
    }

})