<template>
  <div>
    <!--<div v-for="(value, index) in item" :key="index">
      <div>
        <nuxt-link :to="`/search/${value.id}`">{{value.username}}</nuxt-link>
      </div>
    </div>-->

    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" id="name"> {{ $t('label.th.Name') }}  </th>
            <th class="text-left" id="name"> {{ $t('label.th.Phone') }}</th>
            <th class="text-left" id="email"> {{ $t('label.th.Email') }}</th>
            <th class="text-left" id="role"> {{ $t('label.th.Role') }}</th>
            <th class="text-left" id="joindate"> {{ $t('label.th.Joined') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in item" :key="index" @click="viewuser(item)">
            <td>{{ item.first_name }}&nbsp;{{ item.last_name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.role }}</td>
            <td>{{ item.date_joined }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <label style="color:red;">{{ error }}</label>
  </div>
</template>
<script>
export default {
  props: { item: Array, error: String },
  methods: {
    viewuser(item) {
      this.$router.push(`/search/${item.id}`);
    },
  },
};
</script>
