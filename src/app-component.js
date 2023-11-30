const AppComponent = {
    data() {
      return {
        countries: [],
        pagination: {},
        currentPage: 1
      };
    },
    methods: {
      async loadData(page = 1) {
        try {
          const response = await fetch('https://devops100.site/test/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              filters: { iso_3166_1_a2: "RU" },
              paginate: { page: page, pp_items: 10 }
            })
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          this.countries = data.page_data.data;
          this.pagination = data.page_data.rpag;
          this.currentPage = page;
        } catch (error) {
          console.error('Error loading data:', error);
        }
      }
    },
    components: {
      'table-component': TableComponent
    },
   
    mounted() {
      this.loadData(this.currentPage);
    },
    template: `
    <table-component
    :countries="countries"
    :pagination="pagination"
    :currentPage="currentPage"
    @changePage="loadData"
  > 
  </table-component>
    `
}
  
  

  
  
