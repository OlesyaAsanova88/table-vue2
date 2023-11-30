const TableComponent = {
    props: ['countries', 'pagination', 'currentPage'],
    methods: {
      loadPage(direction) {
        this.$emit('changePage', direction);
      }
    },
    template: `
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ISO A2</th>
            <th>ISO A3</th>
            <th>ISO Numeric</th>
            <th>Printable Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="country in countries" :key="country.iso_3166_1_a2">
            <td>{{ country.iso_3166_1_a2 }}</td>
            <td>{{ country.iso_3166_1_a3 }}</td>
            <td>{{ country.iso_3166_1_numeric }}</td>
            <td>{{ country.printable_name }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="loadPage('prev')" :disabled="!pagination.has_previous">Previous</button>
        <span>Page {{ currentPage }}</span>
        <button @click="loadPage('next')" :disabled="!pagination.has_next">Next</button>
      </div>
    </div>
  `

};